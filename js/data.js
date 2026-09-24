window.MERITARC_DATA = {
  "Windows": {
    "icon": "▣",
    "desc": "Windows Server, Active Directory, DNS, DHCP and PowerShell.",
    "questions": [
      [
        "Which command displays detailed IP configuration?",
        "ipconfig /all",
        "netstat /all",
        "route /show",
        "arp /config",
        0,
        "ipconfig /all displays detailed TCP/IP configuration."
      ],
      [
        "Which Windows tool is used to inspect event logs?",
        "Event Viewer",
        "Task Scheduler",
        "Resource Monitor",
        "Services",
        0,
        "Event Viewer provides access to Windows event logs."
      ],
      [
        "Which port is commonly used by RDP?",
        "3389",
        "443",
        "53",
        "5985",
        0,
        "Remote Desktop Protocol commonly uses TCP 3389."
      ],
      [
        "Which PowerShell cmdlet lists services?",
        "Get-Service",
        "Get-Process",
        "Get-EventLog",
        "Get-ComputerInfo",
        0,
        "Get-Service retrieves Windows service objects."
      ],
      [
        "Which record maps a hostname to an IPv4 address?",
        "A",
        "MX",
        "PTR",
        "CNAME",
        0,
        "An A record maps a hostname to an IPv4 address."
      ],
      [
        "Which command releases a DHCP lease?",
        "ipconfig /release",
        "ipconfig /drop",
        "dhcp /release",
        "netsh /free",
        0,
        "ipconfig /release releases the current DHCP lease."
      ],
      [
        "Which command checks protected system files?",
        "sfc /scannow",
        "chkdsk /system",
        "dism /scan-only",
        "repair /files",
        0,
        "SFC scans protected Windows system files."
      ],
      [
        "Which protocol is used for Windows file sharing?",
        "SMB",
        "FTP",
        "SMTP",
        "NTP",
        0,
        "SMB is the standard Windows file-sharing protocol."
      ],
      [
        "Which command tests a TCP connection in PowerShell?",
        "Test-NetConnection",
        "Test-TCP",
        "Check-Port",
        "Port-Test",
        0,
        "Test-NetConnection can test TCP connectivity."
      ],
      [
        "Which console manages local users and groups?",
        "lusrmgr.msc",
        "gpedit.msc",
        "diskmgmt.msc",
        "perfmon.msc",
        0,
        "lusrmgr.msc opens Local Users and Groups on supported editions."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "Linux": {
    "icon": "◉",
    "desc": "Linux administration, permissions, processes, systemd and storage.",
    "questions": [
      [
        "Which command shows the current directory?",
        "pwd",
        "cwd",
        "where",
        "dir",
        0,
        "pwd prints the current working directory."
      ],
      [
        "Which command changes file permissions?",
        "chmod",
        "chperm",
        "setperm",
        "permctl",
        0,
        "chmod changes Linux file mode permissions."
      ],
      [
        "Which command shows filesystem space?",
        "df -h",
        "du -p",
        "disk -show",
        "fslist",
        0,
        "df -h shows filesystem usage in human-readable form."
      ],
      [
        "Which command manages systemd services?",
        "systemctl",
        "systemdctl-only",
        "serviceconfig",
        "svcadmin",
        0,
        "systemctl manages systemd services."
      ],
      [
        "Which file stores local user account information?",
        "/etc/passwd",
        "/etc/users",
        "/var/accounts",
        "/home/passwd",
        0,
        "/etc/passwd contains local user account entries."
      ],
      [
        "Which command searches text?",
        "grep",
        "findtext",
        "locatex",
        "sedsearch",
        0,
        "grep searches input for matching patterns."
      ],
      [
        "Which command changes file ownership?",
        "chown",
        "chmod",
        "chgrp",
        "ownctl",
        0,
        "chown changes file ownership."
      ],
      [
        "Which command shows listening sockets?",
        "ss -lntup",
        "netshow",
        "sockstat",
        "ports -show",
        0,
        "ss can display listening TCP and UDP sockets."
      ],
      [
        "Which package manager is standard on current RHEL-family systems?",
        "dnf",
        "apt",
        "pacman",
        "zypper",
        0,
        "DNF is standard on modern RHEL-family systems."
      ],
      [
        "Which command displays kernel information?",
        "uname -a",
        "kernel -all",
        "sysinfo -k",
        "archinfo",
        0,
        "uname -a displays kernel and system information."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "VMware": {
    "icon": "◌",
    "desc": "vSphere, ESXi, vCenter, datastores, snapshots and networking.",
    "questions": [
      [
        "What is ESXi?",
        "A bare-metal hypervisor",
        "A backup product",
        "A DNS server",
        "A guest OS",
        0,
        "ESXi is VMware's type-1 hypervisor."
      ],
      [
        "What does vCenter provide?",
        "Centralized vSphere management",
        "Only DNS",
        "Only backups",
        "Only physical switching",
        0,
        "vCenter centrally manages vSphere hosts and resources."
      ],
      [
        "What is vMotion used for?",
        "Moving a running VM between hosts",
        "Creating snapshots",
        "Patching Windows",
        "Changing DNS",
        0,
        "vMotion migrates running VMs between compatible hosts."
      ],
      [
        "What is Storage vMotion used for?",
        "Moving VM storage while running",
        "Moving users",
        "Changing IPs",
        "Creating hosts",
        0,
        "Storage vMotion moves VM disks between datastores."
      ],
      [
        "What does a snapshot represent?",
        "A point-in-time VM state",
        "A full independent backup",
        "A physical disk clone",
        "A network route",
        0,
        "A snapshot preserves a point-in-time state and changed disk data."
      ],
      [
        "What groups ESXi hosts for HA/DRS?",
        "Cluster",
        "Datastore",
        "Port group",
        "Template",
        0,
        "Clusters group hosts for HA and DRS."
      ],
      [
        "What does VMware HA primarily provide?",
        "VM restart after host failure",
        "CPU overclocking",
        "DNS failover",
        "Disk compression",
        0,
        "HA restarts affected VMs on surviving hosts."
      ],
      [
        "What does DRS help with?",
        "Automated workload placement",
        "Password management",
        "Backup encryption",
        "DNS records",
        0,
        "DRS helps balance VM placement based on cluster resources."
      ],
      [
        "What is a datastore used for?",
        "Storing VM files",
        "Managing AD users",
        "Routing packets",
        "Monitoring DNS",
        0,
        "Datastores store VM configuration and disk files."
      ],
      [
        "What is a VMkernel adapter used for?",
        "Host networking services",
        "Guest storage only",
        "BIOS configuration",
        "CPU scheduling",
        0,
        "VMkernel adapters provide host services such as management and vMotion."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "Hyper-V": {
    "icon": "▣",
    "desc": "Hyper-V, virtual switches, VHDX, PowerShell and migration.",
    "questions": [
      [
        "Which Windows role enables Hyper-V?",
        "Hyper-V",
        "IIS",
        "WSUS",
        "AD CS",
        0,
        "The Hyper-V role enables Microsoft's hypervisor."
      ],
      [
        "Which switch connects VMs to the physical network?",
        "External",
        "Internal",
        "Private",
        "Loopback",
        0,
        "An External switch binds to a physical network adapter."
      ],
      [
        "Which switch permits host-to-VM communication?",
        "Internal",
        "External",
        "Private",
        "WAN",
        0,
        "An Internal switch connects VMs with the host."
      ],
      [
        "Which switch allows only VM-to-VM traffic on one host?",
        "Private",
        "External",
        "Internal",
        "Public",
        0,
        "A Private switch provides VM-to-VM connectivity only."
      ],
      [
        "Which PowerShell cmdlet lists VMs?",
        "Get-VM",
        "Get-Virtuals",
        "Show-VM",
        "List-HyperV",
        0,
        "Get-VM returns Hyper-V VM objects."
      ],
      [
        "Which cmdlet starts a VM?",
        "Start-VM",
        "Boot-VM",
        "Run-VM",
        "Enable-VM",
        0,
        "Start-VM starts a Hyper-V virtual machine."
      ],
      [
        "What is the modern Hyper-V disk format?",
        "VHDX",
        "VMDK",
        "QCOW",
        "IMGX",
        0,
        "VHDX is the modern Hyper-V virtual disk format."
      ],
      [
        "What does live migration do?",
        "Moves a running VM between hosts",
        "Converts disks",
        "Creates a switch",
        "Backs up a host",
        0,
        "Live migration moves a running VM with minimal interruption."
      ],
      [
        "What captures a point-in-time VM state?",
        "Checkpoint",
        "Replica",
        "Switch Manager",
        "Host Guardian",
        0,
        "Checkpoints capture a point-in-time state."
      ],
      [
        "Which cmdlet creates a VM?",
        "New-VM",
        "Add-VM",
        "Create-HyperVM",
        "Build-VM",
        0,
        "New-VM creates a Hyper-V virtual machine."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "Azure": {
    "icon": "☁",
    "desc": "Azure compute, identity, networking, storage and governance.",
    "questions": [
      [
        "Which service provides Azure virtual machines?",
        "Azure Virtual Machines",
        "Azure DNS",
        "Azure Queue",
        "Azure DevOps",
        0,
        "Azure Virtual Machines provides cloud compute."
      ],
      [
        "What is a resource group?",
        "A logical container for related resources",
        "A datacenter",
        "A DNS zone",
        "A VM disk",
        0,
        "Resource groups organize related Azure resources."
      ],
      [
        "Which service provides Azure identity?",
        "Microsoft Entra ID",
        "Azure Files",
        "Azure Monitor",
        "Storage Explorer",
        0,
        "Microsoft Entra ID manages cloud identities."
      ],
      [
        "What is an NSG used for?",
        "Filtering network traffic",
        "Creating storage",
        "Managing users",
        "Monitoring CPU",
        0,
        "NSGs allow or deny network traffic using rules."
      ],
      [
        "Which service stores blobs?",
        "Azure Blob Storage",
        "Azure DNS",
        "Azure SQL",
        "Azure Monitor",
        0,
        "Blob Storage is Azure object storage."
      ],
      [
        "Which service monitors Azure resources?",
        "Azure Monitor",
        "Azure Policy",
        "Azure Bastion",
        "Azure Migrate",
        0,
        "Azure Monitor collects metrics, logs and telemetry."
      ],
      [
        "What is Azure RBAC used for?",
        "Controlling resource access",
        "Encrypting disks only",
        "Creating DNS zones",
        "Scaling VMs",
        0,
        "RBAC assigns permissions to Azure resources."
      ],
      [
        "Which service stores secrets and keys?",
        "Azure Key Vault",
        "Azure Files",
        "Azure Front Door",
        "Azure Queue",
        0,
        "Key Vault securely stores secrets, keys and certificates."
      ],
      [
        "What is Azure Bastion used for?",
        "Secure browser-based RDP/SSH",
        "Object storage",
        "DNS hosting",
        "Database backup",
        0,
        "Bastion provides secure RDP/SSH through the Azure portal."
      ],
      [
        "Which service autoscale groups of VMs?",
        "Virtual Machine Scale Sets",
        "Azure DNS",
        "Key Vault",
        "Log Analytics",
        0,
        "VM Scale Sets manage and autoscale VM groups."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "AWS": {
    "icon": "◆",
    "desc": "EC2, S3, IAM, VPC and core AWS infrastructure.",
    "questions": [
      [
        "Which AWS service provides virtual servers?",
        "Amazon EC2",
        "Amazon S3",
        "IAM",
        "Route 53",
        0,
        "EC2 provides scalable virtual compute."
      ],
      [
        "Which service provides object storage?",
        "Amazon S3",
        "EBS",
        "EC2",
        "VPC",
        0,
        "S3 is AWS object storage."
      ],
      [
        "Which service manages identities and permissions?",
        "IAM",
        "CloudFront",
        "CloudWatch",
        "ECS",
        0,
        "IAM manages identities and authorization."
      ],
      [
        "What is an AWS VPC?",
        "A logically isolated virtual network",
        "A storage bucket",
        "A database",
        "A monitoring agent",
        0,
        "A VPC provides an isolated network environment."
      ],
      [
        "Which service provides DNS?",
        "Route 53",
        "EBS",
        "IAM",
        "Lambda",
        0,
        "Route 53 is AWS managed DNS."
      ],
      [
        "Which service provides metrics and monitoring?",
        "CloudWatch",
        "CloudTrail",
        "Config",
        "Inspector",
        0,
        "CloudWatch monitors AWS resources and applications."
      ],
      [
        "What is an IAM policy?",
        "A document defining permissions",
        "A subnet",
        "A VM image",
        "A DNS record",
        0,
        "IAM policies define allowed or denied actions."
      ],
      [
        "What is an AMI?",
        "An image used to launch EC2 instances",
        "A DNS zone",
        "A security group",
        "A bucket",
        0,
        "An AMI is a template for launching EC2 instances."
      ],
      [
        "What is a security group?",
        "A stateful virtual firewall",
        "A physical firewall",
        "A DNS server",
        "A backup vault",
        0,
        "Security groups control resource network traffic."
      ],
      [
        "What is an EBS volume?",
        "Block storage for EC2",
        "Object storage",
        "DNS storage",
        "IAM storage",
        0,
        "EBS provides persistent block storage."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "Security": {
    "icon": "◆",
    "desc": "Security fundamentals, hardening, authentication and incident response.",
    "questions": [
      [
        "What does MFA add?",
        "An additional verification factor",
        "A faster network",
        "More storage",
        "A backup",
        0,
        "MFA requires more than one authentication factor."
      ],
      [
        "What is least privilege?",
        "Only required access",
        "Admin access for all",
        "No logging",
        "All ports open",
        0,
        "Least privilege minimizes unnecessary permissions."
      ],
      [
        "What does patching primarily reduce?",
        "Known vulnerabilities",
        "Disk fragmentation",
        "CPU temperature",
        "DNS latency",
        0,
        "Security updates commonly address known vulnerabilities."
      ],
      [
        "What is a SIEM used for?",
        "Collecting and analyzing security events",
        "Creating VMs",
        "Managing DNS",
        "Backing up disks",
        0,
        "SIEM platforms centralize and analyze security telemetry."
      ],
      [
        "What is phishing?",
        "A social-engineering attack",
        "A routing protocol",
        "A backup method",
        "A disk format",
        0,
        "Phishing tricks users into unsafe actions."
      ],
      [
        "What is EDR?",
        "Endpoint Detection and Response",
        "Encrypted DNS Routing",
        "Enterprise Disk Recovery",
        "External Data Replication",
        0,
        "EDR detects and responds to endpoint threats."
      ],
      [
        "What does encryption at rest protect?",
        "Stored data",
        "Routing only",
        "CPU instructions",
        "DNS lookups",
        0,
        "Encryption at rest protects stored data."
      ],
      [
        "What is a vulnerability?",
        "A weakness that can be exploited",
        "A policy",
        "A backup file",
        "A user role",
        0,
        "A vulnerability is a weakness that may be exploited."
      ],
      [
        "What does a firewall primarily control?",
        "Network traffic",
        "File compression",
        "CPU allocation",
        "Passwords",
        0,
        "Firewalls enforce network traffic rules."
      ],
      [
        "What is a CVE?",
        "A publicly identified vulnerability record",
        "A backup standard",
        "A firewall vendor",
        "A password policy",
        0,
        "CVE identifiers reference publicly disclosed vulnerabilities."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "Networking": {
    "icon": "◎",
    "desc": "TCP/IP, DNS, DHCP, routing, ports and troubleshooting.",
    "questions": [
      [
        "Which protocol resolves domain names?",
        "DNS",
        "DHCP",
        "ARP",
        "NTP",
        0,
        "DNS resolves hostnames to IP addresses."
      ],
      [
        "Which service assigns IP configuration dynamically?",
        "DHCP",
        "DNS",
        "SSH",
        "SNMP",
        0,
        "DHCP provides IP configuration automatically."
      ],
      [
        "Which protocol is connection-oriented?",
        "TCP",
        "UDP",
        "ICMP",
        "ARP",
        0,
        "TCP establishes a connection and provides reliable delivery."
      ],
      [
        "What is the common HTTPS port?",
        "443",
        "22",
        "53",
        "25",
        0,
        "HTTPS commonly uses TCP 443."
      ],
      [
        "Which command tests basic reachability?",
        "ping",
        "mkdir",
        "chmod",
        "whoami",
        0,
        "ping uses ICMP echo requests."
      ],
      [
        "Which protocol maps IPv4 addresses to MAC addresses?",
        "ARP",
        "DNS",
        "DHCP",
        "BGP",
        0,
        "ARP resolves IPv4 addresses to MAC addresses."
      ],
      [
        "What does a default gateway provide?",
        "A route to other networks",
        "DNS records",
        "Usernames",
        "Disk access",
        0,
        "The default gateway routes traffic outside the local subnet."
      ],
      [
        "What is /24 equivalent to?",
        "255.255.255.0",
        "255.255.0.0",
        "255.0.0.0",
        "255.255.255.128",
        0,
        "A /24 mask is 255.255.255.0."
      ],
      [
        "Which protocol is commonly used for secure remote administration?",
        "SSH",
        "Telnet",
        "FTP",
        "TFTP",
        0,
        "SSH provides encrypted remote administration."
      ],
      [
        "Which device forwards traffic between IP networks?",
        "Router",
        "Switch",
        "Hub",
        "Access point",
        0,
        "Routers forward packets between IP networks."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
  "Quantitative Aptitude": {
    "icon": "∑",
    "desc": "Percentages, ratios, averages, profit and loss, time, work and arithmetic.",
    "group": "Aptitude & Competitive Exams",
    "questions": [
      [
        "What is 25% of 240?",
        "60",
        "50",
        "55",
        "65",
        0,
        "25% of 240 is 60."
      ],
      [
        "If the ratio of boys to girls is 3:5 and there are 24 boys, how many girls are there?",
        "40",
        "32",
        "36",
        "30",
        0,
        "24 corresponds to 3 parts, so one part is 8 and 5 parts are 40."
      ],
      [
        "A shopkeeper buys an item for ₹800 and sells it for ₹920. What is the profit percentage?",
        "15%",
        "12%",
        "10%",
        "20%",
        0,
        "Profit is ₹120, and 120/800 × 100 = 15%."
      ],
      [
        "The average of 12, 18, 20 and 30 is:",
        "20",
        "19",
        "21",
        "22",
        0,
        "The sum is 80, and 80 ÷ 4 = 20."
      ],
      [
        "A train travels 180 km in 3 hours. What is its average speed?",
        "60 km/h",
        "50 km/h",
        "70 km/h",
        "90 km/h",
        0,
        "Average speed is distance divided by time: 180 ÷ 3 = 60 km/h."
      ],
      [
        "If x + 15 = 42, what is x?",
        "27",
        "25",
        "26",
        "28",
        0,
        "Subtract 15 from both sides: x = 27."
      ],
      [
        "A can complete a job in 10 days. At the same rate, what fraction of the job does A complete in one day?",
        "1/10",
        "1/5",
        "1/20",
        "10",
        0,
        "One day represents 1/10 of the total work."
      ],
      [
        "What is the simple interest on ₹5,000 at 8% per annum for 2 years?",
        "₹800",
        "₹400",
        "₹600",
        "₹1,000",
        0,
        "SI = P × R × T / 100 = 5000 × 8 × 2 / 100 = ₹800."
      ],
      [
        "A number is increased from 200 to 250. What is the percentage increase?",
        "25%",
        "20%",
        "30%",
        "50%",
        0,
        "The increase is 50, and 50/200 × 100 = 25%."
      ],
      [
        "If 6 workers finish a task in 12 days, assuming equal productivity, how many worker-days are required?",
        "72",
        "18",
        "60",
        "84",
        0,
        "Worker-days = 6 × 12 = 72."
      ]
    ]
  },
  "Mathematics": {
    "icon": "π",
    "desc": "Core mathematics covering algebra, geometry, number systems and basic statistics.",
    "group": "Aptitude & Competitive Exams",
    "questions": [
      [
        "What is the HCF of 18 and 24?",
        "6",
        "3",
        "12",
        "9",
        0,
        "The greatest common factor of 18 and 24 is 6."
      ],
      [
        "What is the LCM of 8 and 12?",
        "24",
        "16",
        "48",
        "36",
        0,
        "The least common multiple of 8 and 12 is 24."
      ],
      [
        "What is the value of 7² − 5²?",
        "24",
        "14",
        "12",
        "49",
        0,
        "49 − 25 = 24."
      ],
      [
        "The sum of the angles of a triangle is:",
        "180°",
        "90°",
        "270°",
        "360°",
        0,
        "The interior angles of every triangle sum to 180°."
      ],
      [
        "What is the square root of 144?",
        "12",
        "14",
        "10",
        "16",
        0,
        "12 × 12 = 144."
      ],
      [
        "If 2x = 18, what is x?",
        "9",
        "8",
        "10",
        "6",
        0,
        "Divide both sides by 2: x = 9."
      ],
      [
        "What is the perimeter of a square with side 7 cm?",
        "28 cm",
        "14 cm",
        "49 cm",
        "21 cm",
        0,
        "Perimeter of a square is 4 × side = 28 cm."
      ],
      [
        "What is 3/4 expressed as a decimal?",
        "0.75",
        "0.34",
        "0.25",
        "0.8",
        0,
        "3 divided by 4 equals 0.75."
      ],
      [
        "What is the median of 3, 7, 9, 12 and 15?",
        "9",
        "7",
        "12",
        "10",
        0,
        "The middle value in the ordered list is 9."
      ],
      [
        "What is the area of a rectangle 8 cm long and 5 cm wide?",
        "40 cm²",
        "26 cm²",
        "13 cm²",
        "80 cm²",
        0,
        "Area = length × width = 8 × 5 = 40 cm²."
      ]
    ]
  },
  "Logical Reasoning": {
    "icon": "◈",
    "desc": "Analogy, series, coding-decoding, directions, syllogisms and logical patterns.",
    "group": "Aptitude & Competitive Exams",
    "questions": [
      [
        "Find the next number: 2, 4, 8, 16, ?",
        "32",
        "24",
        "30",
        "34",
        0,
        "Each term is multiplied by 2."
      ],
      [
        "Book is to Reading as Fork is to:",
        "Eating",
        "Writing",
        "Cutting",
        "Cooking",
        0,
        "A book is used for reading; a fork is used for eating."
      ],
      [
        "If CAT is coded as DBU by shifting each letter one position forward, DOG is coded as:",
        "EPH",
        "EOG",
        "FPH",
        "DPI",
        0,
        "D→E, O→P and G→H gives EPH."
      ],
      [
        "A person walks 5 km north and then 5 km east. In which direction is the person from the starting point?",
        "North-east",
        "North-west",
        "South-east",
        "South-west",
        0,
        "Moving north and east places the person to the north-east."
      ],
      [
        "Find the odd one out:",
        "Apple",
        "Mango",
        "Carrot",
        "Banana",
        2,
        "Carrot is a vegetable; the others are fruits."
      ],
      [
        "If all roses are flowers and some flowers fade quickly, which statement must be true?",
        "All roses are flowers",
        "All flowers are roses",
        "Some roses fade quickly",
        "No roses fade quickly",
        0,
        "The first statement directly follows from the premise."
      ],
      [
        "Find the missing letter: A, C, F, J, ?",
        "O",
        "N",
        "P",
        "M",
        0,
        "The gaps are +2, +3, +4, so the next gap is +5: O."
      ],
      [
        "If Monday is coded as 1 and Tuesday as 2, what number represents Friday?",
        "5",
        "4",
        "6",
        "7",
        0,
        "Friday is the fifth day in the sequence."
      ],
      [
        "Which number does not belong: 9, 16, 25, 36, 45?",
        "45",
        "36",
        "25",
        "16",
        0,
        "9, 16, 25 and 36 are perfect squares; 45 is not."
      ],
      [
        "A is taller than B, and B is taller than C. Who is shortest?",
        "C",
        "A",
        "B",
        "Cannot be determined",
        0,
        "The ordering is A > B > C, so C is shortest."
      ]
    ]
  },
  "English": {
    "icon": "Aa",
    "desc": "Grammar, vocabulary, sentence usage, comprehension and verbal ability.",
    "group": "Aptitude & Competitive Exams",
    "questions": [
      [
        "Choose the correct sentence:",
        "She goes to school every day.",
        "She go to school every day.",
        "She going to school every day.",
        "She gone to school every day.",
        0,
        "The singular subject 'she' takes 'goes' in the simple present."
      ],
      [
        "Choose the synonym of 'rapid':",
        "Quick",
        "Slow",
        "Weak",
        "Late",
        0,
        "Rapid means quick or fast."
      ],
      [
        "Choose the antonym of 'ancient':",
        "Modern",
        "Old",
        "Historic",
        "Former",
        0,
        "Modern is the opposite of ancient."
      ],
      [
        "Fill in the blank: He is good ___ mathematics.",
        "at",
        "in",
        "on",
        "for",
        0,
        "The standard expression is 'good at mathematics'."
      ],
      [
        "Choose the correctly spelled word:",
        "Accommodation",
        "Accomodation",
        "Acommodation",
        "Accommadation",
        0,
        "Accommodation is the correct spelling."
      ],
      [
        "Identify the noun in: 'The manager approved the request.'",
        "manager",
        "approved",
        "the",
        "request",
        3,
        "Request is a noun in this sentence; manager is also a noun, making this item ambiguous. For the intended answer, 'request' is the object noun."
      ],
      [
        "What is the plural of 'analysis'?",
        "Analyses",
        "Analysises",
        "Analysis",
        "Analysies",
        0,
        "The plural of analysis is analyses."
      ],
      [
        "Choose the correct passive form: 'The team completed the project.'",
        "The project was completed by the team.",
        "The project completed the team.",
        "The team was completed by the project.",
        "The project is completing by the team.",
        0,
        "The object becomes the subject: The project was completed by the team."
      ],
      [
        "Choose the word closest in meaning to 'assist':",
        "Help",
        "Avoid",
        "Delay",
        "Refuse",
        0,
        "Assist means help."
      ],
      [
        "Fill in the blank: If I ___ time, I will call you.",
        "have",
        "had",
        "having",
        "has",
        0,
        "For a real future condition, the if-clause uses the present simple: 'If I have time'."
      ]
    ]
  },
  "General Studies": {
    "icon": "GS",
    "desc": "Static general knowledge across history, geography, polity, science and economics.",
    "group": "Aptitude & Competitive Exams",
    "questions": [
      [
        "Which is the largest planet in the Solar System?",
        "Jupiter",
        "Saturn",
        "Earth",
        "Neptune",
        0,
        "Jupiter is the largest planet in the Solar System."
      ],
      [
        "Which organ pumps blood through the human body?",
        "Heart",
        "Liver",
        "Lung",
        "Kidney",
        0,
        "The heart pumps blood through the circulatory system."
      ],
      [
        "The Constitution of India came into effect on:",
        "26 January 1950",
        "15 August 1947",
        "26 November 1949",
        "2 October 1950",
        0,
        "The Constitution came into force on 26 January 1950."
      ],
      [
        "Which is the longest river in India by length within India?",
        "Ganga",
        "Yamuna",
        "Godavari",
        "Narmada",
        0,
        "The Ganga is commonly identified as India's longest river within the country."
      ],
      [
        "Who is known as the Father of the Indian Constitution?",
        "B. R. Ambedkar",
        "Mahatma Gandhi",
        "Jawaharlal Nehru",
        "Sardar Patel",
        0,
        "B. R. Ambedkar chaired the Drafting Committee and played a central role in drafting the Constitution."
      ],
      [
        "What is the chemical symbol for gold?",
        "Au",
        "Ag",
        "Gd",
        "Go",
        0,
        "Au is the chemical symbol for gold, from the Latin aurum."
      ],
      [
        "Which gas is most abundant in Earth's atmosphere?",
        "Nitrogen",
        "Oxygen",
        "Carbon dioxide",
        "Hydrogen",
        0,
        "Nitrogen makes up about 78% of Earth's atmosphere."
      ],
      [
        "The Reserve Bank of India is primarily responsible for:",
        "Monetary policy and currency management",
        "Building national highways",
        "Conducting school examinations",
        "Managing railways",
        0,
        "The RBI is India's central bank and handles monetary policy and currency management."
      ],
      [
        "Which continent is the Sahara Desert located in?",
        "Africa",
        "Asia",
        "Australia",
        "South America",
        0,
        "The Sahara is located in northern Africa."
      ],
      [
        "Photosynthesis in green plants primarily uses which gas from the atmosphere?",
        "Carbon dioxide",
        "Oxygen",
        "Nitrogen",
        "Helium",
        0,
        "Plants use carbon dioxide during photosynthesis to make food."
      ]
    ]
  },
  "Computer Science Fundamentals": {
    "icon": "CS",
    "desc": "Core computing concepts, algorithms, operating systems, networks and software fundamentals.",
    "group": "Computer Science & Programming",
    "questions": [
      [
        "What does CPU stand for?",
        "Central Processing Unit",
        "Computer Primary Unit",
        "Central Program Utility",
        "Core Processing User",
        0,
        "CPU stands for Central Processing Unit."
      ],
      [
        "Which data structure follows FIFO order?",
        "Queue",
        "Stack",
        "Tree",
        "Graph",
        0,
        "A queue follows First In, First Out."
      ],
      [
        "Which language is primarily used to structure the content of a web page?",
        "HTML",
        "CSS",
        "SQL",
        "Bash",
        0,
        "HTML defines the structure and content of web pages."
      ],
      [
        "Which component temporarily stores data for quick CPU access?",
        "RAM",
        "Hard disk",
        "Power supply",
        "Monitor",
        0,
        "RAM provides fast temporary storage for active data and programs."
      ],
      [
        "What is an operating system's primary role?",
        "Manage hardware and provide services for applications",
        "Only browse the internet",
        "Only store files",
        "Only compile programs",
        0,
        "An operating system manages hardware resources and provides common services to applications."
      ],
      [
        "Which number system uses only 0 and 1?",
        "Binary",
        "Decimal",
        "Hexadecimal",
        "Octal",
        0,
        "Binary uses the digits 0 and 1."
      ],
      [
        "Which protocol is commonly used to retrieve web pages securely?",
        "HTTPS",
        "FTP",
        "SMTP",
        "SNMP",
        0,
        "HTTPS is HTTP secured using TLS."
      ],
      [
        "What is an algorithm?",
        "A finite sequence of steps to solve a problem",
        "A type of hardware",
        "A database table",
        "A network cable",
        0,
        "An algorithm is a defined sequence of steps for solving a problem."
      ],
      [
        "Which SQL command is used to retrieve data?",
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",
        0,
        "SELECT retrieves rows from a database."
      ],
      [
        "What is the main purpose of a compiler?",
        "Translate source code into another form such as machine code",
        "Store passwords",
        "Route network traffic",
        "Compress images",
        0,
        "A compiler translates source code into a lower-level representation that can be executed."
      ]
    ]
  },
  "Data Structures & Algorithms": {
    "icon": "DS",
    "desc": "Arrays, linked lists, stacks, queues, trees, graphs, sorting and algorithmic complexity.",
    "group": "Computer Science & Programming",
    "questions": [
      [
        "Which data structure allows insertion and deletion at one end and follows LIFO?",
        "Stack",
        "Queue",
        "Heap",
        "Graph",
        0,
        "A stack follows Last In, First Out."
      ],
      [
        "What is the average time complexity of binary search on a sorted array?",
        "O(log n)",
        "O(n)",
        "O(n log n)",
        "O(1)",
        0,
        "Binary search halves the search space at each step, giving O(log n) average time."
      ],
      [
        "Which traversal visits a binary search tree's keys in sorted order?",
        "In-order",
        "Pre-order",
        "Post-order",
        "Level-order",
        0,
        "In-order traversal of a BST visits keys in ascending order."
      ],
      [
        "Which structure is best suited for representing parent-child relationships?",
        "Tree",
        "Queue",
        "Stack",
        "Array",
        0,
        "Trees naturally represent hierarchical parent-child relationships."
      ],
      [
        "What is the worst-case time complexity of linear search in an array?",
        "O(n)",
        "O(log n)",
        "O(1)",
        "O(n log n)",
        0,
        "Linear search may inspect every element, giving O(n) worst-case time."
      ],
      [
        "Which sorting algorithm repeatedly swaps adjacent out-of-order elements?",
        "Bubble sort",
        "Merge sort",
        "Heap sort",
        "Quick sort",
        0,
        "Bubble sort compares adjacent elements and swaps them when they are out of order."
      ],
      [
        "A queue typically uses which operations at its ends?",
        "Enqueue at rear and dequeue at front",
        "Push at top and pop at top",
        "Insert at front and delete at rear only",
        "Search and sort",
        0,
        "A standard queue enqueues at the rear and dequeues from the front."
      ],
      [
        "Which graph representation stores a list of neighbors for each vertex?",
        "Adjacency list",
        "Binary tree",
        "Hash stack",
        "Sorted array only",
        0,
        "An adjacency list stores the neighboring vertices for each graph vertex."
      ],
      [
        "What does Big-O notation describe?",
        "Asymptotic growth of resource usage",
        "Exact execution time in seconds",
        "Programming language syntax",
        "Database size only",
        0,
        "Big-O describes how time or space requirements grow with input size."
      ],
      [
        "Which data structure provides average O(1) key lookup?",
        "Hash table",
        "Linked list",
        "Binary tree without balancing",
        "Stack",
        0,
        "A well-designed hash table provides average O(1) lookup by key."
      ]
    ]
  },
  "Programming Fundamentals": {
    "icon": "</>",
    "desc": "Programming basics, variables, functions, control flow, OOP and problem solving.",
    "group": "Computer Science & Programming",
    "questions": [
      [
        "Which construct is commonly used to repeat a block while a condition remains true?",
        "while loop",
        "class",
        "import",
        "comment",
        0,
        "A while loop repeats while its condition evaluates to true."
      ],
      [
        "What is a variable used for?",
        "Store a value that can be referenced by a name",
        "Connect a computer to Wi-Fi",
        "Compile an operating system",
        "Create a network cable",
        0,
        "A variable associates a name with a value or storage location."
      ],
      [
        "Which symbol commonly represents equality comparison in many programming languages?",
        "==",
        "=",
        "=>",
        "++",
        0,
        "In many languages, == compares values while = performs assignment."
      ],
      [
        "What is a function?",
        "A reusable block of code that performs a task",
        "A database server",
        "A hardware port",
        "A file extension",
        0,
        "Functions package reusable logic that can accept inputs and return results."
      ],
      [
        "Which OOP concept hides internal implementation details behind an interface?",
        "Encapsulation",
        "Inheritance",
        "Compilation",
        "Iteration",
        0,
        "Encapsulation bundles data and behavior and controls access to internal details."
      ],
      [
        "What is recursion?",
        "A function calling itself directly or indirectly",
        "A variable changing type",
        "A database backup",
        "A network request",
        0,
        "Recursion occurs when a function calls itself, directly or indirectly."
      ],
      [
        "Which value represents a Boolean false in many languages?",
        "false",
        "0.5",
        "nullified",
        "negative",
        0,
        "Boolean values commonly include true and false; false represents the negative Boolean state."
      ],
      [
        "What is debugging?",
        "Finding and fixing defects in software",
        "Encrypting a hard disk",
        "Installing RAM",
        "Designing a logo",
        0,
        "Debugging is the process of locating and fixing software defects."
      ],
      [
        "Which control structure chooses between alternatives based on a condition?",
        "if/else",
        "for only",
        "import",
        "return type",
        0,
        "if/else selects a branch based on a condition."
      ],
      [
        "What is an API?",
        "A defined interface through which software components communicate",
        "A type of CPU",
        "A file compression format",
        "A monitor setting",
        0,
        "An API defines how software components can interact and exchange data."
      ]
    ]
  },
  "DBMS": {
    "icon": "DB",
    "desc": "Relational databases, SQL, keys, normalization, transactions and database concepts.",
    "group": "Computer Science & Programming",
    "questions": [
      [
        "What does DBMS stand for?",
        "Database Management System",
        "Data Backup Management Service",
        "Database Machine Security",
        "Digital Base Management Software",
        0,
        "DBMS stands for Database Management System."
      ],
      [
        "Which key uniquely identifies a row in a relational table?",
        "Primary key",
        "Foreign key",
        "Candidate value",
        "Index page",
        0,
        "A primary key uniquely identifies each row in a table."
      ],
      [
        "Which SQL command adds new rows to a table?",
        "INSERT",
        "SELECT",
        "ALTER",
        "GRANT",
        0,
        "INSERT adds new rows to a table."
      ],
      [
        "Which SQL command changes existing rows?",
        "UPDATE",
        "CREATE",
        "DROP",
        "SELECT",
        0,
        "UPDATE modifies existing rows."
      ],
      [
        "What is normalization primarily used for?",
        "Reduce redundancy and improve data integrity",
        "Increase duplicate data",
        "Encrypt all tables",
        "Replace SQL",
        0,
        "Normalization organizes data to reduce unnecessary redundancy and update anomalies."
      ],
      [
        "What does a foreign key typically reference?",
        "A key in another table",
        "A file on disk",
        "A programming function",
        "A network address",
        0,
        "A foreign key commonly references a primary or unique key in another table."
      ],
      [
        "Which ACID property ensures committed transactions survive a system failure?",
        "Durability",
        "Atomicity",
        "Consistency",
        "Isolation",
        0,
        "Durability ensures committed changes persist after failures."
      ],
      [
        "Which clause filters rows in a SELECT query?",
        "WHERE",
        "ORDER BY",
        "GROUP BY",
        "JOIN",
        0,
        "WHERE filters rows according to a condition."
      ],
      [
        "Which SQL operation combines rows from related tables?",
        "JOIN",
        "SORT",
        "FORMAT",
        "RENAME",
        0,
        "JOIN combines related rows from two or more tables."
      ],
      [
        "What is an index mainly used for?",
        "Speed up data retrieval",
        "Store application passwords in plain text",
        "Replace a primary key in all cases",
        "Prevent all updates",
        0,
        "Indexes can improve query performance by making data retrieval more efficient."
      ]
    ]
  }
};
