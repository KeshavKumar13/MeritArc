
(() => {
  const DATA = window.MERITARC_DATA;
  const state = {
    subject: null,
    questions: [],
    index: 0,
    answers: [],
    checked: {}
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

  function startAssessment(subject) {
    const bank = DATA[subject].questions;

    // Randomize both the question order and the answer-option order.
    // The correct-answer index is recalculated after the option shuffle.
    state.subject = subject;
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
          question[6]
        ];
      });

    state.index = 0;
    state.answers = Array(state.questions.length).fill(null);
    state.checked = {};

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

  function showFeedback(correct) {
    const q = state.questions[state.index];
    const feedback = $("feedback");

    feedback.className = `feedback ${correct ? "correct" : "incorrect"}`;
    feedback.innerHTML =
      `<strong>${correct ? "✓ Correct" : "✗ Incorrect"}</strong><br>${escapeHtml(q[6])}`;
  }

  function checkAnswer() {
    const answer = state.answers[state.index];
    if (answer === null) return;

    const correct = answer === state.questions[state.index][5];
    state.checked[state.index] = correct;
    showFeedback(correct);
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

  function submitAssessment() {
    if (!state.subject || !state.questions.length) return;

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
        <p class="muted">
          Retake the assessment to receive another randomized question set.
        </p>
      </div>

      <div class="stats-grid">
        <div class="statbox"><b>${score}</b>Correct</div>
        <div class="statbox"><b>${total - score}</b>Incorrect / skipped</div>
        <div class="statbox"><b>${total}</b>Total</div>
        <div class="statbox"><b>${percentage}%</b>Score</div>
      </div>

      <div class="card" style="overflow:auto">
        <h3>Question Review</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Your answer</th>
              <th>Correct answer</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            ${rows.map((row, i) => `
              <tr>
                <td>${i + 1}</td>
                <td>${escapeHtml(row.q[0])}</td>
                <td>${row.answer === null ? "Not answered" : escapeHtml(row.q[row.answer + 1])}</td>
                <td>${escapeHtml(row.q[row.q[5] + 1])}</td>
                <td>${row.correct ? "✓" : "✗"}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <div class="toolbar">
        <button class="primary" id="retakeButton">
          Retake with Fresh Questions
        </button>
        <button class="secondary" id="anotherSubjectButton">
          Choose Another Subject
        </button>
      </div>
    `;

    $("retakeButton").addEventListener("click", () => startAssessment(state.subject));
    $("anotherSubjectButton").addEventListener("click", showHome);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showHome() {
    hideViews();
    $("homeView").classList.remove("hidden");
    renderSubjects();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function showResults() {
    hideViews();
    $("resultsView").classList.remove("hidden");

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

  window.MeritArc = {
    showHome,
    showResults,
    startAssessment,
    checkAnswer,
    nextQuestion,
    previousQuestion,
    submitAssessment
  };

  renderSubjects();
})();
