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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
};
