
(() => {
  const DATA = window.MERITARC_DATA;
  const state = {
    subject: null,
    questions: [],
    index: 0,
    answers: [],
    checked: {},
    attemptId: null,
    serverMode: false,
    serverUser: null
  };

  const $ = id => document.getElementById(id);

  function hideViews() {
    ["homeView", "quizView", "reportView", "resultsView"]
      .forEach(id => $(id).classList.add("hidden"));
  }

  function shuffle(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function renderSubjects() {
    const raw = ($("subjectSearch").value || "").trim();
    const filter = raw.toLowerCase();

    const entries = Object.entries(DATA).filter(([name, item]) => {
      return `${name} ${item.desc}`.toLowerCase().includes(filter);
    });

    if (!entries.length) {
      $("subjectGrid").innerHTML = `
        <div class="card search-empty">
          <h3>No assessments found</h3>
          <p>We couldn't find a subject matching "${escapeHtml(raw)}". Try another subject name.</p>
        </div>
      `;
    } else {
      $("subjectGrid").innerHTML = entries.map(([name, item]) => `
        <div class="card subject" data-subject="${escapeHtml(name)}">
          <div class="subject-icon">${escapeHtml(item.icon)}</div>
          <h3>${escapeHtml(name)}</h3>
          <div class="muted">${escapeHtml(item.desc)}</div>
          <span class="tag">10 questions per attempt</span>
        </div>
      `).join("");

      document.querySelectorAll(".subject").forEach(card => {
        card.addEventListener("click", () => startAssessment(card.dataset.subject));
      });
    }

    const total = Object.values(DATA).reduce((sum, item) => sum + item.questions.length, 0);
    $("questionBankStat").textContent = `${total}+`;
  }

  async function startAssessment(subject) {
    const user = await getCurrentUser();

    state.subject = subject;
    state.index = 0;
    state.answers = [];
    state.checked = {};
    state.attemptId = null;
    state.serverMode = false;
    state.serverUser = user;

    if (user) {
      try {
        const response = await fetch("/api/attempts", {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({ subject, count: 10 })
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          throw new Error(data.error || "Unable to start assessment.");
        }

        const data = await response.json();
        state.attemptId = data.attemptId;
        state.serverMode = true;
        state.questions = data.questions.map(q => [
          q.question,
          ...q.options,
          null,
          q.explanation,
          q.id
        ]);
      } catch (error) {
        console.error("Assessment API error:", error);
        alert(error.message || "Unable to start the assessment.");
        return;
      }
    } else {
      const bank = DATA[subject].questions;

      state.questions = shuffle(bank)
        .slice(0, Math.min(10, bank.length))
        .map(question => {
          const questionText = question[0];
          const options = question.slice(1, 5);
          const correctOption = options[question[5]];
          const shuffledOptions = shuffle(options);

          return [
            questionText,
            ...shuffledOptions,
            shuffledOptions.indexOf(correctOption),
            question[6],
            null
          ];
        });
    }

    state.answers = Array(state.questions.length).fill(null);

    hideViews();
    $("quizView").classList.remove("hidden");
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    const selected = state.answers[state.index];

    $("quizTitle").textContent = state.subject;
    $("questionCount").textContent =
      `Question ${state.index + 1} of ${state.questions.length}`;
    $("answeredCount").textContent =
      `${state.answers.filter(value => value !== null).length} answered`;
    $("progressBar").style.width =
      `${((state.index + 1) / state.questions.length) * 100}%`;

    $("questionText").textContent = q[0];

    $("options").innerHTML = q.slice(1, 5).map((option, i) => `
      <label class="option ${selected === i ? "selected" : ""}">
        <input type="radio" name="answer" value="${i}"
          ${selected === i ? "checked" : ""}>
        ${escapeHtml(option)}
      </label>
    `).join("");

    document.querySelectorAll('input[name="answer"]').forEach(input => {
      input.addEventListener("change", e => {
        state.answers[state.index] = Number(e.target.value);
        renderQuestion();
      });
    });

    $("feedback").className = "hidden";
    $("feedback").innerHTML = "";

    if (state.checked[state.index] !== undefined) {
      showFeedback(state.checked[state.index]);
    }

    $("checkButton").disabled = selected === null;
  }

  function showFeedback(correct, explanation) {
    const q = state.questions[state.index];
    const feedback = $("feedback");

    feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
    feedback.innerHTML =
      `<strong>${correct ? "✓ Correct" : "✗ Incorrect"}</strong><br>${escapeHtml(explanation ?? q[6] ?? "")}`;
  }

  async function checkAnswer() {
    const answer = state.answers[state.index];
    if (answer === null) return;

    if (state.serverMode) {
      const questionId = state.questions[state.index][7];

      try {
        const response = await fetch(`/api/attempts/${state.attemptId}/answers`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify({
            questionId,
            selectedOption: answer
          })
        });

        const data = await response.json();

        if (!response.ok) {
          alert(data.error || "Unable to check the answer.");
          return;
        }

        state.checked[state.index] = data.correct;
        showFeedback(data.correct, data.explanation);
      } catch {
        alert("Unable to connect to MeritArc.");
      }

      return;
    }

    const correct = answer === state.questions[state.index][5];
    state.checked[state.index] = correct;
    showFeedback(correct, state.questions[state.index][6]);
  }

  function nextQuestion() {
    if (state.index < state.questions.length - 1) {
      state.index++;
      renderQuestion();
    } else {
      submitAssessment();
    }
  }

  function previousQuestion() {
    if (state.index > 0) {
      state.index--;
      renderQuestion();
    }
  }

  async function submitAssessment() {
    if (!state.subject || !state.questions.length) return;

    if (state.serverMode) {
      const unanswered = state.answers.filter(value => value === null).length;
      if (unanswered > 0 && !confirm(`${unanswered} question(s) are unanswered. Submit anyway?`)) {
        return;
      }

      try {
        const response = await fetch(`/api/attempts/${state.attemptId}/complete`, {
          method: "POST"
        });
        const result = await response.json();

        if (!response.ok) {
          alert(result.error || "Unable to submit the assessment.");
          return;
        }

        hideViews();
        $("reportView").classList.remove("hidden");
        renderServerReport(result);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        alert("Unable to connect to MeritArc.");
      }

      return;
    }

    const rows = state.questions.map((q, index) => ({
      q,
      answer: state.answers[index],
      correct: state.answers[index] === q[5]
    }));

    const score = rows.filter(row => row.correct).length;
    const total = rows.length;
    const percentage = Math.round((score / total) * 100);

    const history = JSON.parse(
      localStorage.getItem("meritArcHistory") || "[]"
    );

    history.unshift({
      subject: state.subject,
      score,
      total,
      percentage,
      date: new Date().toLocaleString()
    });

    localStorage.setItem(
      "meritArcHistory",
      JSON.stringify(history.slice(0, 50))
    );

    hideViews();
    $("reportView").classList.remove("hidden");

    $("reportContent").innerHTML = `
      <div class="card" style="text-align:center">
        <div class="score">${percentage}%</div>
        <h2>${score} / ${total} correct</h2>
        <p class="muted">Retake the assessment to receive another randomized question set.</p>
      </div>
      <div class="stats-grid">
        <div class="statbox"><b>${score}</b>Correct</div>
        <div class="statbox"><b>${total - score}</b>Incorrect / skipped</div>
        <div class="statbox"><b>${total}</b>Total</div>
        <div class="statbox"><b>${percentage}%</b>Score</div>
      </div>
      <div class="card" style="overflow:auto">
        <h3>Question Review</h3>
        <table><thead><tr><th>#</th><th>Question</th><th>Your answer</th><th>Correct answer</th><th>Result</th></tr></thead>
        <tbody>
          ${rows.map((row, i) => `
            <tr>
              <td>${i + 1}</td>
              <td>${escapeHtml(row.q[0])}</td>
              <td>${row.answer === null ? "Not answered" : escapeHtml(row.q[row.answer + 1])}</td>
              <td>${escapeHtml(row.q[row.q[5] + 1])}</td>
              <td>${row.correct ? "✓ Correct" : "✗ Incorrect"}</td>
            </tr>
          `).join("")}
        </tbody></table>
      </div>
    `;
  }

  function renderServerReport(result) {
    $("reportContent").innerHTML = `
      <div class="card" style="text-align:center">
        <div class="score">${result.percentage}%</div>
        <h2>${result.score} / ${result.total} correct</h2>
        <p class="muted">Your result has been saved to your MeritArc account.</p>
      </div>
      <div class="stats-grid">
        <div class="statbox"><b>${result.score}</b>Correct</div>
        <div class="statbox"><b>${result.total - result.score}</b>Incorrect / skipped</div>
        <div class="statbox"><b>${result.total}</b>Total</div>
        <div class="statbox"><b>${result.percentage}%</b>Score</div>
      </div>
      <div class="card" style="overflow:auto">
        <h3>Question Review</h3>
        <table>
          <thead><tr><th>#</th><th>Question</th><th>Your answer</th><th>Correct answer</th><th>Result</th></tr></thead>
          <tbody>
            ${result.rows.map((row, i) => `
              <tr>
                <td>${i + 1}</td>
                <td>${escapeHtml(row.question)}</td>
                <td>${row.answer === null ? "Not answered" : escapeHtml(row.options[row.answer])}</td>
                <td>${escapeHtml(row.options[row.correctAnswer])}</td>
                <td>${row.correct ? "✓ Correct" : "✗ Incorrect"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  function showHome() {
    hideViews();
    $("homeView").classList.remove("hidden");
    renderSubjects();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function showResults() {
    hideViews();
    $("resultsView").classList.remove("hidden");

    const user = await getCurrentUser();

    if (user) {
      try {
        const response = await fetch("/api/attempts");
        const attempts = await response.json();

        if (!response.ok) {
          throw new Error(attempts.error || "Unable to load your results.");
        }

        $("historyContent").innerHTML = attempts.length
          ? `
            <div style="overflow:auto">
              <table>
                <thead>
                  <tr><th>Subject</th><th>Score</th><th>Percentage</th><th>Status</th><th>Date</th></tr>
                </thead>
                <tbody>
                  ${attempts.map(item => `
                    <tr>
                      <td>${escapeHtml(item.subject)}</td>
                      <td>${item.score === null ? "—" : `${item.score}/${item.total}`}</td>
                      <td>${item.percentage === null ? "—" : `${item.percentage}%`}</td>
                      <td>${escapeHtml(item.status)}</td>
                      <td>${escapeHtml(new Date(item.started_at).toLocaleString())}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          `
          : `
            <div style="padding:30px;text-align:center">
              <h3>No results yet</h3>
              <div class="muted">Complete an assessment to see your history.</div>
            </div>
          `;
      } catch (error) {
        console.error("Results API error:", error);
        $("historyContent").innerHTML = `
          <div style="padding:30px;text-align:center">
            <h3>Unable to load results</h3>
            <div class="muted">${escapeHtml(error.message || "Please try again.")}</div>
          </div>
        `;
      }
    } else {
      const history = JSON.parse(
        localStorage.getItem("meritArcHistory") || "[]"
      );

      $("historyContent").innerHTML = history.length
        ? `
          <div style="overflow:auto">
            <table>
              <thead>
                <tr><th>Subject</th><th>Score</th><th>Percentage</th><th>Date</th></tr>
              </thead>
              <tbody>
                ${history.map(item => `
                  <tr>
                    <td>${escapeHtml(item.subject)}</td>
                    <td>${item.score}/${item.total}</td>
                    <td>${item.percentage}%</td>
                    <td>${escapeHtml(item.date)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        `
        : `
          <div style="padding:30px;text-align:center">
            <h3>No results yet</h3>
            <div class="muted">Complete an assessment to see your history.</div>
          </div>
        `;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function renderSuggestions() {
    const input = $("subjectSearch");
    const box = $("searchSuggestions");
    const query = input.value.trim().toLowerCase();

    if (!query) {
      box.classList.add("hidden");
      box.innerHTML = "";
      return;
    }

    const matches = Object.entries(DATA)
      .filter(([name, item]) => `${name} ${item.desc}`.toLowerCase().includes(query))
      .slice(0, 6);

    if (!matches.length) {
      box.innerHTML = `
        <div class="search-suggestion" style="color:#6c7a90">
          No matching subject
        </div>`;
      box.classList.remove("hidden");
      return;
    }

    box.innerHTML = matches.map(([name, item]) => `
      <button class="search-suggestion" type="button" data-suggestion="${escapeHtml(name)}">
        <span class="search-suggestion-icon">${escapeHtml(item.icon)}</span>
        <span>
          <strong>${escapeHtml(name)}</strong><br>
          <small style="color:#6c7a90">${escapeHtml(item.desc)}</small>
        </span>
      </button>
    `).join("");

    box.classList.remove("hidden");

    box.querySelectorAll("[data-suggestion]").forEach(button => {
      button.addEventListener("click", () => {
        input.value = button.dataset.suggestion;
        box.classList.add("hidden");
        renderSubjects();
        document.getElementById("assessmentResults").scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      });
    });
  }

  function runSearch() {
    $("searchSuggestions").classList.add("hidden");
    renderSubjects();

    document.getElementById("assessmentResults").scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  $("subjectSearch").addEventListener("input", () => {
    renderSubjects();
    renderSuggestions();
  });

  $("subjectSearch").addEventListener("focus", () => {
    if ($("subjectSearch").value.trim()) renderSuggestions();
  });

  $("subjectSearch").addEventListener("keydown", event => {
    if (event.key === "Enter") runSearch();
    if (event.key === "Escape") $("searchSuggestions").classList.add("hidden");
  });

  $("searchButton").addEventListener("click", runSearch);

  document.addEventListener("click", event => {
    if (!event.target.closest(".search-wrap")) {
      $("searchSuggestions").classList.add("hidden");
    }
  });


  async function getCurrentUser() {
    try {
      const response = await fetch("/api/auth/me");
      if (!response.ok) return null;
      const data = await response.json();
      return data.authenticated ? data.user : null;
    } catch {
      return null;
    }
  }

  function setAuthMessage(id, message) {
    const element = $(id);
    element.textContent = message || "";
    element.classList.toggle("hidden", !message);
  }

  function showLogin() {
    $("loginFormWrap").classList.remove("hidden");
    $("registerFormWrap").classList.add("hidden");
    $("loginTab").classList.add("active");
    $("registerTab").classList.remove("active");
    $("authForms").classList.remove("hidden");
    $("accountView").classList.add("hidden");
    setAuthMessage("loginMessage", "");
    setAuthMessage("registerMessage", "");
  }

  function showRegister() {
    $("loginFormWrap").classList.add("hidden");
    $("registerFormWrap").classList.remove("hidden");
    $("loginTab").classList.remove("active");
    $("registerTab").classList.add("active");
    $("authForms").classList.remove("hidden");
    $("accountView").classList.add("hidden");
    setAuthMessage("loginMessage", "");
    setAuthMessage("registerMessage", "");
  }

  function openAuth() {
    $("authModal").classList.remove("hidden");
    $("authModal").setAttribute("aria-hidden", "false");
    refreshAuthView();
  }

  function closeAuth() {
    $("authModal").classList.add("hidden");
    $("authModal").setAttribute("aria-hidden", "true");
  }

  async function refreshAuthView() {
    const user = await getCurrentUser();
    if (user) {
      $("authForms").classList.add("hidden");
      $("accountView").classList.remove("hidden");
      $("accountName").textContent = `Hi, ${user.name}`;
      $("accountEmail").textContent = user.email;
      $("authButton").textContent = "Account";
    } else {
      $("authForms").classList.remove("hidden");
      $("accountView").classList.add("hidden");
      $("authButton").textContent = "Sign In";
    }
  }

  async function login(event) {
    event.preventDefault();
    setAuthMessage("loginMessage", "");
    const button = event.target.querySelector("button[type='submit']");
    button.disabled = true;

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          email: $("loginEmail").value,
          password: $("loginPassword").value
        })
      });
      const data = await response.json();

      if (!response.ok) {
        setAuthMessage("loginMessage", data.error || "Unable to sign in.");
        return;
      }

      $("loginForm").reset();
      await refreshAuthView();
    } catch {
      setAuthMessage("loginMessage", "Unable to connect to MeritArc.");
    } finally {
      button.disabled = false;
    }
  }

  async function register(event) {
    event.preventDefault();
    setAuthMessage("registerMessage", "");
    const button = event.target.querySelector("button[type='submit']");
    button.disabled = true;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: $("registerName").value,
          email: $("registerEmail").value,
          password: $("registerPassword").value
        })
      });
      const data = await response.json();

      if (!response.ok) {
        setAuthMessage("registerMessage", data.error || "Unable to create the account.");
        return;
      }

      $("registerForm").reset();
      await refreshAuthView();
    } catch {
      setAuthMessage("registerMessage", "Unable to connect to MeritArc.");
    } finally {
      button.disabled = false;
    }
  }

  async function logout() {
    try {
      await fetch("/api/auth/logout", {method: "POST"});
    } finally {
      await refreshAuthView();
      closeAuth();
    }
  }

  function initAuth() {
    $("loginForm").addEventListener("submit", login);
    $("registerForm").addEventListener("submit", register);
    refreshAuthView();
  }

  initAuth();

  window.MeritArc = {
    showHome,
    showResults,
    startAssessment,
    checkAnswer,
    nextQuestion,
    previousQuestion,
    submitAssessment,
    openAuth,
    closeAuth,
    showLogin,
    showRegister,
    logout
  };

  renderSubjects();
})();
