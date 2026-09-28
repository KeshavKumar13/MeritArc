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
      ],
      [
        "Which Windows service manages the print spooler?",
        "Windows Update",
        "Print Spooler",
        "Task Scheduler",
        "Windows Event Log",
        1,
        "The Print Spooler service queues and manages print jobs."
      ],
      [
        "Which Windows service manages the print spooler? (Choose the best answer.)",
        "Print Spooler",
        "Windows Update",
        "Windows Event Log",
        "Task Scheduler",
        0,
        "The Print Spooler service queues and manages print jobs."
      ],
      [
        "Which directory service protocol is commonly used by Active Directory clients?",
        "LDAP",
        "NTP",
        "SMTP",
        "FTP",
        0,
        "Active Directory exposes directory information through LDAP."
      ],
      [
        "Which directory service protocol is commonly used by Active Directory clients? (Choose the best answer.)",
        "SMTP",
        "LDAP",
        "NTP",
        "FTP",
        1,
        "Active Directory exposes directory information through LDAP."
      ],
      [
        "Which Windows tool is commonly used to create and manage Group Policy objects?",
        "Group Policy Management Console (GPMC)",
        "Disk Management",
        "IIS Manager",
        "Hyper-V Manager",
        0,
        "GPMC is the standard graphical tool for managing Group Policy objects."
      ],
      [
        "Which Windows tool is commonly used to create and manage Group Policy objects? (Choose the best answer.)",
        "Disk Management",
        "IIS Manager",
        "Hyper-V Manager",
        "Group Policy Management Console (GPMC)",
        3,
        "GPMC is the standard graphical tool for managing Group Policy objects."
      ],
      [
        "Which DNS record maps a hostname to an IPv4 address?",
        "MX",
        "A",
        "PTR",
        "SRV",
        1,
        "An A record maps a hostname to an IPv4 address."
      ],
      [
        "Which DNS record maps a hostname to an IPv4 address? (Choose the best answer.)",
        "SRV",
        "MX",
        "A",
        "PTR",
        2,
        "An A record maps a hostname to an IPv4 address."
      ],
      [
        "Which DNS record is used for reverse IPv4 lookup?",
        "PTR",
        "A",
        "TXT",
        "CNAME",
        0,
        "PTR records map IP addresses back to hostnames."
      ],
      [
        "Which DNS record is used for reverse IPv4 lookup? (Choose the best answer.)",
        "CNAME",
        "A",
        "TXT",
        "PTR",
        3,
        "PTR records map IP addresses back to hostnames."
      ],
      [
        "Which DHCP message does a client send to locate available DHCP servers?",
        "DHCPOFFER",
        "DHCPREQUEST",
        "DHCPACK",
        "DHCPDISCOVER",
        3,
        "The client begins the DHCP exchange with DHCPDISCOVER."
      ],
      [
        "Which DHCP message does a client send to locate available DHCP servers? (Choose the best answer.)",
        "DHCPREQUEST",
        "DHCPOFFER",
        "DHCPACK",
        "DHCPDISCOVER",
        3,
        "The client begins the DHCP exchange with DHCPDISCOVER."
      ],
      [
        "Which PowerShell cmdlet lists running processes?",
        "Get-Service",
        "Get-Process",
        "Get-EventLog",
        "Get-ItemProperty",
        1,
        "Get-Process retrieves the processes currently running on a computer."
      ],
      [
        "Which PowerShell cmdlet lists running processes? (Choose the best answer.)",
        "Get-EventLog",
        "Get-ItemProperty",
        "Get-Process",
        "Get-Service",
        2,
        "Get-Process retrieves the processes currently running on a computer."
      ],
      [
        "Which PowerShell cmdlet restarts a Windows service?",
        "Restart-ComputerService",
        "Start-Service",
        "Restart-Service",
        "Reset-Service",
        2,
        "Restart-Service stops and starts the specified service."
      ],
      [
        "Which PowerShell cmdlet restarts a Windows service? (Choose the best answer.)",
        "Restart-Service",
        "Reset-Service",
        "Restart-ComputerService",
        "Start-Service",
        0,
        "Restart-Service stops and starts the specified service."
      ],
      [
        "Which Windows log normally records system-driver and service events?",
        "Security",
        "Application",
        "System",
        "Setup",
        2,
        "The System log records events from Windows system components, drivers and services."
      ],
      [
        "Which Windows log normally records system-driver and service events? (Choose the best answer.)",
        "Security",
        "System",
        "Setup",
        "Application",
        1,
        "The System log records events from Windows system components, drivers and services."
      ],
      [
        "Which Windows service is primarily associated with Windows Update?",
        "wuauserv",
        "BITS",
        "Spooler",
        "WinRM",
        0,
        "wuauserv is the Windows Update service."
      ],
      [
        "Which Windows service is primarily associated with Windows Update? (Choose the best answer.)",
        "wuauserv",
        "WinRM",
        "BITS",
        "Spooler",
        0,
        "wuauserv is the Windows Update service."
      ],
      [
        "Which protocol is used by WinRM for remote management?",
        "SMB",
        "SNMP",
        "WS-Management",
        "LDAP",
        2,
        "WinRM implements the WS-Management protocol for remote administration."
      ],
      [
        "Which protocol is used by WinRM for remote management? (Choose the best answer.)",
        "SMB",
        "LDAP",
        "SNMP",
        "WS-Management",
        3,
        "WinRM implements the WS-Management protocol for remote administration."
      ],
      [
        "Which Windows file system supports permissions and journaling for normal Windows server volumes?",
        "FAT12",
        "ISO 9660",
        "FAT16",
        "NTFS",
        3,
        "NTFS is the standard Windows file system for modern server volumes."
      ],
      [
        "Which Windows file system supports permissions and journaling for normal Windows server volumes? (Choose the best answer.)",
        "FAT16",
        "FAT12",
        "ISO 9660",
        "NTFS",
        3,
        "NTFS is the standard Windows file system for modern server volumes."
      ],
      [
        "Which Windows tool can extend a basic NTFS volume when contiguous or suitable free space is available?",
        "Task Manager",
        "Event Viewer",
        "Services",
        "Disk Management",
        3,
        "Disk Management provides volume extension and other disk administration functions."
      ],
      [
        "Which Windows tool can extend a basic NTFS volume when contiguous or suitable free space is available? (Choose the best answer.)",
        "Task Manager",
        "Services",
        "Event Viewer",
        "Disk Management",
        3,
        "Disk Management provides volume extension and other disk administration functions."
      ],
      [
        "What is the purpose of Windows Defender Firewall?",
        "To manage DNS zones",
        "To create user passwords",
        "To defragment disks",
        "To control network traffic based on rules",
        3,
        "Windows Defender Firewall filters inbound and outbound network traffic according to rules."
      ],
      [
        "What is the purpose of Windows Defender Firewall? (Choose the best answer.)",
        "To control network traffic based on rules",
        "To manage DNS zones",
        "To create user passwords",
        "To defragment disks",
        0,
        "Windows Defender Firewall filters inbound and outbound network traffic according to rules."
      ],
      [
        "What does UAC primarily help prevent?",
        "DHCP exhaustion",
        "Unauthorized elevation of privileges",
        "DNS cache poisoning",
        "Disk fragmentation",
        1,
        "User Account Control prompts before actions that require elevated privileges."
      ],
      [
        "What does UAC primarily help prevent? (Choose the best answer.)",
        "DNS cache poisoning",
        "Unauthorized elevation of privileges",
        "DHCP exhaustion",
        "Disk fragmentation",
        1,
        "User Account Control prompts before actions that require elevated privileges."
      ],
      [
        "Which protocol is commonly used for Windows file and printer sharing?",
        "SSH",
        "SFTP",
        "SMB",
        "RDP",
        2,
        "SMB is the standard protocol for Windows file and printer sharing."
      ],
      [
        "Which protocol is commonly used for Windows file and printer sharing? (Choose the best answer.)",
        "SFTP",
        "SSH",
        "RDP",
        "SMB",
        3,
        "SMB is the standard protocol for Windows file and printer sharing."
      ],
      [
        "Which default TCP port is commonly used by Remote Desktop Protocol?",
        "5985",
        "445",
        "22",
        "3389",
        3,
        "RDP commonly uses TCP 3389."
      ],
      [
        "Which default TCP port is commonly used by Remote Desktop Protocol? (Choose the best answer.)",
        "22",
        "445",
        "3389",
        "5985",
        2,
        "RDP commonly uses TCP 3389."
      ],
      [
        "Which default port is commonly associated with WinRM over HTTP?",
        "445",
        "443",
        "5985",
        "3389",
        2,
        "WinRM commonly uses TCP 5985 for HTTP and 5986 for HTTPS."
      ],
      [
        "Which default port is commonly associated with WinRM over HTTP? (Choose the best answer.)",
        "443",
        "3389",
        "445",
        "5985",
        3,
        "WinRM commonly uses TCP 5985 for HTTP and 5986 for HTTPS."
      ],
      [
        "Which command displays the current IP configuration in Windows?",
        "nslookup",
        "netstat",
        "ipconfig",
        "routeprint",
        2,
        "ipconfig displays local IP configuration details."
      ],
      [
        "Which command displays the current IP configuration in Windows? (Choose the best answer.)",
        "nslookup",
        "routeprint",
        "netstat",
        "ipconfig",
        3,
        "ipconfig displays local IP configuration details."
      ],
      [
        "Which command can resolve a DNS name from a Windows command prompt?",
        "chkdsk",
        "sfc",
        "tasklist",
        "nslookup",
        3,
        "nslookup queries DNS and displays name-resolution information."
      ],
      [
        "Which command can resolve a DNS name from a Windows command prompt? (Choose the best answer.)",
        "tasklist",
        "sfc",
        "nslookup",
        "chkdsk",
        2,
        "nslookup queries DNS and displays name-resolution information."
      ],
      [
        "Which Windows command displays the routing table?",
        "ipconfig /all",
        "nslookup",
        "route print",
        "tasklist",
        2,
        "route print displays the IPv4/IPv6 routing table."
      ],
      [
        "Which command checks Windows system file integrity?",
        "verifywin",
        "sfc /scannow",
        "chkdsk /dns",
        "systemcheck",
        1,
        "SFC scans protected system files and can repair them."
      ],
      [
        "Which Windows command checks disk file-system errors?",
        "fsckwin",
        "diskcheck",
        "chkdsk",
        "diskverify",
        2,
        "chkdsk checks a Windows volume for file-system and related disk errors."
      ],
      [
        "Which Windows utility manages scheduled tasks?",
        "Services Console",
        "Disk Cleanup",
        "Task Scheduler",
        "Device Manager",
        2,
        "Task Scheduler creates and manages scheduled tasks."
      ],
      [
        "Which Windows utility manages local users and groups?",
        "Print Management",
        "Performance Monitor",
        "Computer Management",
        "Resource Monitor",
        2,
        "Computer Management includes local users and groups on supported systems."
      ],
      [
        "Which protocol does SMB commonly use for file sharing?",
        "DNS",
        "RDP",
        "NTP",
        "SMB",
        3,
        "SMB is the standard Windows file-sharing protocol."
      ],
      [
        "Which Windows command displays active TCP connections?",
        "hostname",
        "systeminfo",
        "netstat",
        "whoami",
        2,
        "netstat displays network connections and listening ports."
      ],
      [
        "Which command shows the Windows hostname?",
        "hostname",
        "whoami",
        "ver",
        "set",
        0,
        "hostname prints the computer name."
      ],
      [
        "Which Windows tool shows installed services and their status?",
        "Event Viewer",
        "Services console",
        "Task Scheduler",
        "Disk Management",
        1,
        "The Services console displays and manages Windows services."
      ],
      [
        "Which Windows feature can centrally apply security settings to domain computers?",
        "Task Scheduler",
        "Disk Management",
        "Print Spooler",
        "Group Policy",
        3,
        "Group Policy can centrally apply configuration and security settings in a domain."
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
      ],
      [
        "Which command lists files in the current directory?",
        "ls",
        "cat",
        "cd",
        "pwd",
        0,
        "ls lists directory contents."
      ],
      [
        "Which command lists files in the current directory? (Choose the best answer.)",
        "cd",
        "pwd",
        "cat",
        "ls",
        3,
        "ls lists directory contents."
      ],
      [
        "Which command prints the current working directory?",
        "pwd",
        "df",
        "whoami",
        "ls",
        0,
        "pwd prints the current working directory."
      ],
      [
        "Which command prints the current working directory? (Choose the best answer.)",
        "pwd",
        "df",
        "whoami",
        "ls",
        0,
        "pwd prints the current working directory."
      ],
      [
        "Which command changes the current directory?",
        "cd",
        "cp",
        "touch",
        "mv",
        0,
        "cd changes the shell working directory."
      ],
      [
        "Which command changes the current directory? (Choose the best answer.)",
        "touch",
        "mv",
        "cd",
        "cp",
        2,
        "cd changes the shell working directory."
      ],
      [
        "Which command creates an empty file if it does not exist?",
        "less",
        "touch",
        "file",
        "mkdir",
        1,
        "touch can create an empty file and update timestamps."
      ],
      [
        "Which command creates an empty file if it does not exist? (Choose the best answer.)",
        "less",
        "touch",
        "mkdir",
        "file",
        1,
        "touch can create an empty file and update timestamps."
      ],
      [
        "Which command creates a directory?",
        "rmdir",
        "mkfile",
        "dircreate",
        "mkdir",
        3,
        "mkdir creates directories."
      ],
      [
        "Which command creates a directory? (Choose the best answer.)",
        "mkdir",
        "rmdir",
        "mkfile",
        "dircreate",
        0,
        "mkdir creates directories."
      ],
      [
        "What numeric permission represents rw-r--r--?",
        "644",
        "600",
        "755",
        "777",
        0,
        "6 is rw-, and each 4 is r--, giving 644."
      ],
      [
        "What numeric permission represents rw-r--r--? (Choose the best answer.)",
        "644",
        "600",
        "755",
        "777",
        0,
        "6 is rw-, and each 4 is r--, giving 644."
      ],
      [
        "What numeric permission represents rwxr-xr-x?",
        "700",
        "664",
        "644",
        "755",
        3,
        "7 is rwx and each 5 is r-x, giving 755."
      ],
      [
        "What numeric permission represents rwxr-xr-x? (Choose the best answer.)",
        "664",
        "755",
        "644",
        "700",
        1,
        "7 is rwx and each 5 is r-x, giving 755."
      ],
      [
        "Which command changes file permissions? (Choose the best answer.)",
        "chmod",
        "passwd",
        "umask",
        "chown",
        0,
        "chmod changes permission bits."
      ],
      [
        "Which command changes file ownership? (Choose the best answer.)",
        "chmod",
        "chown",
        "usermod",
        "own",
        1,
        "chown changes the owner and optionally group of a file."
      ],
      [
        "Which command displays running processes in a snapshot?",
        "du",
        "ps",
        "free",
        "top",
        1,
        "ps displays process information at the time it is run."
      ],
      [
        "Which command displays running processes in a snapshot? (Choose the best answer.)",
        "ps",
        "free",
        "du",
        "top",
        0,
        "ps displays process information at the time it is run."
      ],
      [
        "Which command provides an interactive view of running processes?",
        "top",
        "mount",
        "ps",
        "lsblk",
        0,
        "top continuously displays process and resource information."
      ],
      [
        "Which command provides an interactive view of running processes? (Choose the best answer.)",
        "ps",
        "mount",
        "top",
        "lsblk",
        2,
        "top continuously displays process and resource information."
      ],
      [
        "Which signal is normally used to terminate a process gracefully?",
        "SIGSTOP",
        "SIGTERM",
        "SIGKILL",
        "SIGCONT",
        1,
        "SIGTERM requests orderly termination and can be handled by the process."
      ],
      [
        "Which signal is normally used to terminate a process gracefully? (Choose the best answer.)",
        "SIGTERM",
        "SIGSTOP",
        "SIGCONT",
        "SIGKILL",
        0,
        "SIGTERM requests orderly termination and can be handled by the process."
      ],
      [
        "Which command reports memory usage in a human-readable form?",
        "df -h",
        "du -h",
        "ls -lh",
        "free -h",
        3,
        "free reports RAM and swap usage; -h makes the values human-readable."
      ],
      [
        "Which command reports memory usage in a human-readable form? (Choose the best answer.)",
        "free -h",
        "du -h",
        "ls -lh",
        "df -h",
        0,
        "free reports RAM and swap usage; -h makes the values human-readable."
      ],
      [
        "Which command reports filesystem free space?",
        "df -h",
        "lsblk -f",
        "du -sh",
        "free -h",
        0,
        "df reports filesystem space usage."
      ],
      [
        "Which command reports filesystem free space? (Choose the best answer.)",
        "free -h",
        "lsblk -f",
        "df -h",
        "du -sh",
        2,
        "df reports filesystem space usage."
      ],
      [
        "Which command reports disk usage of files and directories?",
        "lsblk",
        "fdisk",
        "du",
        "df",
        2,
        "du summarizes filesystem object usage."
      ],
      [
        "Which command reports disk usage of files and directories? (Choose the best answer.)",
        "df",
        "du",
        "lsblk",
        "fdisk",
        1,
        "du summarizes filesystem object usage."
      ],
      [
        "Which command displays IP addresses on modern Linux systems?",
        "dig",
        "ss -l",
        "route -n",
        "ip addr",
        3,
        "ip addr displays network interface addresses."
      ],
      [
        "Which command displays IP addresses on modern Linux systems? (Choose the best answer.)",
        "dig",
        "ss -l",
        "ip addr",
        "route -n",
        2,
        "ip addr displays network interface addresses."
      ],
      [
        "Which command displays listening sockets?",
        "traceroute",
        "ss -l",
        "ping",
        "ip addr",
        1,
        "ss can display listening sockets with the -l option."
      ],
      [
        "Which command displays listening sockets? (Choose the best answer.)",
        "ss -l",
        "traceroute",
        "ip addr",
        "ping",
        0,
        "ss can display listening sockets with the -l option."
      ],
      [
        "Which package manager is standard on modern Red Hat Enterprise Linux?",
        "dnf",
        "pacman",
        "apt",
        "zypper",
        0,
        "Modern RHEL uses DNF as its package manager."
      ],
      [
        "Which package manager is standard on modern Red Hat Enterprise Linux? (Choose the best answer.)",
        "zypper",
        "apt",
        "dnf",
        "pacman",
        2,
        "Modern RHEL uses DNF as its package manager."
      ],
      [
        "Which systemd command starts a service immediately?",
        "systemctl load",
        "systemctl start",
        "systemctl enable",
        "service install",
        1,
        "systemctl start starts a service in the current boot session."
      ],
      [
        "Which systemd command starts a service immediately? (Choose the best answer.)",
        "systemctl enable",
        "service install",
        "systemctl load",
        "systemctl start",
        3,
        "systemctl start starts a service in the current boot session."
      ],
      [
        "Where are most traditional systemd journal messages queried from?",
        "dmesgctl",
        "journalctl",
        "syslogctl",
        "logshow",
        1,
        "journalctl queries the systemd journal."
      ],
      [
        "Where are most traditional systemd journal messages queried from? (Choose the best answer.)",
        "journalctl",
        "syslogctl",
        "logshow",
        "dmesgctl",
        0,
        "journalctl queries the systemd journal."
      ],
      [
        "Which command searches text using regular expressions?",
        "awkfind",
        "grep",
        "sedsearch",
        "findtext",
        1,
        "grep searches input for matching patterns."
      ],
      [
        "Which command displays the first lines of a file?",
        "begin",
        "head",
        "top",
        "first",
        1,
        "head displays the beginning of files."
      ],
      [
        "Which command displays the last lines of a file?",
        "bottom",
        "end",
        "tail",
        "last",
        2,
        "tail displays the end of files."
      ],
      [
        "Which command follows new lines appended to a log?",
        "watchcat",
        "head -f",
        "followlog",
        "tail -f",
        3,
        "tail -f follows a file as new data is appended."
      ],
      [
        "Which command finds files by criteria?",
        "search",
        "locateall",
        "whereisall",
        "find",
        3,
        "find searches directory trees using criteria."
      ],
      [
        "Which command extracts fields and processes text columns?",
        "cutfile",
        "fieldgrep",
        "columncat",
        "awk",
        3,
        "awk is a text-processing language useful for field-based processing."
      ],
      [
        "Which command substitutes text in streams?",
        "replace",
        "trfile",
        "sed",
        "subst",
        2,
        "sed is a stream editor commonly used for substitutions and transformations."
      ],
      [
        "Which command displays block devices?",
        "lsblk",
        "devlist",
        "dfblk",
        "blkshow",
        0,
        "lsblk lists block devices and their relationships."
      ],
      [
        "Which command changes the current user identity?",
        "switchuser",
        "userchange",
        "sudoer",
        "su",
        3,
        "su starts a shell or command under another user identity."
      ],
      [
        "Which command executes a command with elevated privileges when configured?",
        "sudo",
        "adminrun",
        "elevate",
        "rootcmd",
        0,
        "sudo executes permitted commands with another user privilege, commonly root."
      ],
      [
        "Which command displays the current kernel version?",
        "version -k",
        "show-kernel",
        "kernelver",
        "uname -r",
        3,
        "uname -r prints the running kernel release."
      ],
      [
        "Which command displays the running kernel version and system architecture?",
        "kernel-info",
        "uname -a",
        "sysinfo-k",
        "lsb_release -a",
        1,
        "uname -a displays kernel and system information, including the kernel release and architecture."
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
      ],
      [
        "Which component provides centralized management of multiple ESXi hosts?",
        "vCenter Server",
        "vSphere Client only",
        "VMware Tools",
        "ESXi Shell",
        0,
        "vCenter Server centrally manages vSphere inventory and hosts."
      ],
      [
        "Which component provides centralized management of multiple ESXi hosts? (Choose the best answer.)",
        "vCenter Server",
        "VMware Tools",
        "ESXi Shell",
        "vSphere Client only",
        0,
        "vCenter Server centrally manages vSphere inventory and hosts."
      ],
      [
        "What is the VMware bare-metal hypervisor called?",
        "vCenter",
        "Fusion",
        "ESXi",
        "Workstation",
        2,
        "ESXi is VMware's bare-metal hypervisor."
      ],
      [
        "What is the VMware bare-metal hypervisor called? (Choose the best answer.)",
        "Workstation",
        "ESXi",
        "vCenter",
        "Fusion",
        1,
        "ESXi is VMware's bare-metal hypervisor."
      ],
      [
        "What does vMotion primarily provide?",
        "DNS failover",
        "Guest OS installation",
        "Disk formatting",
        "Live migration of a running VM between compatible hosts",
        3,
        "vMotion moves a running VM between hosts with minimal interruption."
      ],
      [
        "What does vMotion primarily provide? (Choose the best answer.)",
        "Live migration of a running VM between compatible hosts",
        "Guest OS installation",
        "Disk formatting",
        "DNS failover",
        0,
        "vMotion moves a running VM between hosts with minimal interruption."
      ],
      [
        "What does Storage vMotion move?",
        "vCenter databases",
        "Physical CPUs",
        "Only ESXi boot partitions",
        "Virtual machine storage while the VM remains running",
        3,
        "Storage vMotion migrates VM disks between datastores while the VM runs."
      ],
      [
        "What does Storage vMotion move? (Choose the best answer.)",
        "Physical CPUs",
        "vCenter databases",
        "Virtual machine storage while the VM remains running",
        "Only ESXi boot partitions",
        2,
        "Storage vMotion migrates VM disks between datastores while the VM runs."
      ],
      [
        "Which datastore type is commonly used with shared Fibre Channel storage?",
        "NTFS",
        "VMFS",
        "FAT32",
        "UFS",
        1,
        "VMFS is VMware's clustered file system commonly used on shared block storage."
      ],
      [
        "Which datastore type is commonly used with shared Fibre Channel storage? (Choose the best answer.)",
        "VMFS",
        "UFS",
        "FAT32",
        "NTFS",
        0,
        "VMFS is VMware's clustered file system commonly used on shared block storage."
      ],
      [
        "What does a vSphere standard switch provide?",
        "Disk snapshots",
        "Guest patching",
        "CPU scheduling",
        "Virtual networking for VMs and VMkernel interfaces",
        3,
        "A vSphere standard switch handles virtual network connectivity."
      ],
      [
        "What does a vSphere standard switch provide? (Choose the best answer.)",
        "CPU scheduling",
        "Guest patching",
        "Virtual networking for VMs and VMkernel interfaces",
        "Disk snapshots",
        2,
        "A vSphere standard switch handles virtual network connectivity."
      ],
      [
        "What is a distributed switch managed centrally by?",
        "An individual guest OS",
        "DNS server",
        "The VM BIOS",
        "vCenter Server",
        3,
        "A vSphere Distributed Switch is configured centrally through vCenter."
      ],
      [
        "What is a distributed switch managed centrally by? (Choose the best answer.)",
        "The VM BIOS",
        "An individual guest OS",
        "DNS server",
        "vCenter Server",
        3,
        "A vSphere Distributed Switch is configured centrally through vCenter."
      ],
      [
        "What is a VMware snapshot primarily used for?",
        "Capturing a point-in-time state for short-term use",
        "Increasing CPU cores",
        "Replacing backups permanently",
        "Creating a physical disk copy",
        0,
        "Snapshots are useful for short-term rollback/testing but are not a replacement for backups."
      ],
      [
        "What is a VMware snapshot primarily used for? (Choose the best answer.)",
        "Replacing backups permanently",
        "Capturing a point-in-time state for short-term use",
        "Creating a physical disk copy",
        "Increasing CPU cores",
        1,
        "Snapshots are useful for short-term rollback/testing but are not a replacement for backups."
      ],
      [
        "What is vSphere HA designed to provide?",
        "Storage deduplication",
        "VM restart on another host after certain host failures",
        "Network encryption",
        "Guest antivirus",
        1,
        "vSphere HA restarts affected VMs on surviving hosts after host failure."
      ],
      [
        "What is vSphere HA designed to provide? (Choose the best answer.)",
        "VM restart on another host after certain host failures",
        "Guest antivirus",
        "Network encryption",
        "Storage deduplication",
        0,
        "vSphere HA restarts affected VMs on surviving hosts after host failure."
      ],
      [
        "What does vSphere DRS help automate?",
        "Guest OS patching",
        "Backup encryption",
        "DNS replication",
        "VM placement and load balancing across hosts",
        3,
        "DRS makes placement recommendations or decisions based on cluster resources."
      ],
      [
        "What does vSphere DRS help automate? (Choose the best answer.)",
        "DNS replication",
        "VM placement and load balancing across hosts",
        "Backup encryption",
        "Guest OS patching",
        1,
        "DRS makes placement recommendations or decisions based on cluster resources."
      ],
      [
        "What is VMware Tools used for?",
        "Managing physical switches",
        "Replacing vCenter",
        "Improving guest integration and management",
        "Creating RAID arrays",
        2,
        "VMware Tools provides drivers and guest integration features."
      ],
      [
        "What is VMware Tools used for? (Choose the best answer.)",
        "Creating RAID arrays",
        "Managing physical switches",
        "Replacing vCenter",
        "Improving guest integration and management",
        3,
        "VMware Tools provides drivers and guest integration features."
      ],
      [
        "What is a VM template commonly used for?",
        "Monitoring CPU temperature",
        "Changing DNS TTL",
        "Deploying consistent new VMs",
        "Repairing RAID",
        2,
        "Templates provide a reusable VM image for standardized deployments."
      ],
      [
        "What is a VM template commonly used for? (Choose the best answer.)",
        "Changing DNS TTL",
        "Monitoring CPU temperature",
        "Repairing RAID",
        "Deploying consistent new VMs",
        3,
        "Templates provide a reusable VM image for standardized deployments."
      ],
      [
        "What does a CPU reservation guarantee?",
        "A minimum amount of CPU resource for a VM",
        "Extra storage",
        "Unlimited CPU",
        "A static IP",
        0,
        "A reservation guarantees a specified minimum resource level when contention exists."
      ],
      [
        "What does a CPU reservation guarantee? (Choose the best answer.)",
        "Unlimited CPU",
        "A minimum amount of CPU resource for a VM",
        "Extra storage",
        "A static IP",
        1,
        "A reservation guarantees a specified minimum resource level when contention exists."
      ],
      [
        "What does a VM CPU limit control?",
        "Network MTU",
        "Datastore capacity",
        "Minimum RAM",
        "The maximum CPU resource the VM can consume",
        3,
        "A CPU limit caps the VM's consumption of CPU resources."
      ],
      [
        "What does a VM CPU limit control? (Choose the best answer.)",
        "Network MTU",
        "The maximum CPU resource the VM can consume",
        "Minimum RAM",
        "Datastore capacity",
        1,
        "A CPU limit caps the VM's consumption of CPU resources."
      ],
      [
        "Which command can display ESXi host version information from the shell?",
        "vmware -v",
        "vcenter -v",
        "esxi-version",
        "hostinfo",
        0,
        "vmware -v reports the ESXi build/version."
      ],
      [
        "Which command can display ESXi host version information from the shell? (Choose the best answer.)",
        "vcenter -v",
        "hostinfo",
        "esxi-version",
        "vmware -v",
        3,
        "vmware -v reports the ESXi build/version."
      ],
      [
        "Which tool provides a command-line interface for ESXi management?",
        "Guest CMD",
        "vSphere Web Console only",
        "VMware BIOS",
        "ESXi Shell",
        3,
        "ESXi Shell provides local command-line administration."
      ],
      [
        "Which tool provides a command-line interface for ESXi management? (Choose the best answer.)",
        "Guest CMD",
        "vSphere Web Console only",
        "ESXi Shell",
        "VMware BIOS",
        2,
        "ESXi Shell provides local command-line administration."
      ],
      [
        "Why should long-lived VM snapshots generally be avoided?",
        "They improve backup performance",
        "They increase DNS speed",
        "They disable vMotion automatically",
        "They can grow and consume datastore space",
        3,
        "Snapshot delta files can grow significantly and consume datastore capacity."
      ],
      [
        "Why should long-lived VM snapshots generally be avoided? (Choose the best answer.)",
        "They improve backup performance",
        "They disable vMotion automatically",
        "They increase DNS speed",
        "They can grow and consume datastore space",
        3,
        "Snapshot delta files can grow significantly and consume datastore capacity."
      ],
      [
        "What does putting an ESXi host into maintenance mode generally prepare it for?",
        "Installing guest applications",
        "Maintenance while VMs are evacuated or powered off as required",
        "Adding a DNS record",
        "Changing a user password",
        1,
        "Maintenance mode prevents normal VM placement and prepares the host for maintenance."
      ],
      [
        "What does putting an ESXi host into maintenance mode generally prepare it for? (Choose the best answer.)",
        "Maintenance while VMs are evacuated or powered off as required",
        "Adding a DNS record",
        "Changing a user password",
        "Installing guest applications",
        0,
        "Maintenance mode prevents normal VM placement and prepares the host for maintenance."
      ],
      [
        "What is the purpose of Lockdown Mode on ESXi?",
        "Increasing VM memory",
        "Enabling snapshots",
        "Creating datastores",
        "Restricting direct host management access",
        3,
        "Lockdown Mode limits direct host access to improve security."
      ],
      [
        "What is the purpose of Lockdown Mode on ESXi? (Choose the best answer.)",
        "Enabling snapshots",
        "Creating datastores",
        "Restricting direct host management access",
        "Increasing VM memory",
        2,
        "Lockdown Mode limits direct host access to improve security."
      ],
      [
        "What is a vSphere cluster?",
        "A backup file",
        "A group of guest partitions",
        "A set of DNS records",
        "A group of ESXi hosts managed as a resource pool",
        3,
        "A cluster groups hosts for features such as HA and DRS."
      ],
      [
        "What is a vSphere cluster? (Choose the best answer.)",
        "A set of DNS records",
        "A backup file",
        "A group of ESXi hosts managed as a resource pool",
        "A group of guest partitions",
        2,
        "A cluster groups hosts for features such as HA and DRS."
      ],
      [
        "Which VMware feature restarts VMs after host failure?",
        "Storage vMotion",
        "DRS only",
        "vSphere HA",
        "vMotion",
        2,
        "vSphere HA restarts affected VMs on surviving hosts."
      ],
      [
        "Which VMware feature balances workloads across hosts?",
        "DRS",
        "HA only",
        "vSAN",
        "FT only",
        0,
        "DRS helps balance workloads through VM placement recommendations or automation."
      ],
      [
        "Which VMware technology provides hypervisor-level continuous availability for supported VMs?",
        "Templates",
        "DRS",
        "vSphere Fault Tolerance",
        "Snapshots",
        2,
        "Fault Tolerance maintains a secondary VM for supported workloads."
      ],
      [
        "Which VMware product provides software-defined storage integrated with vSphere?",
        "Workstation",
        "NSX",
        "HCX",
        "vSAN",
        3,
        "vSAN aggregates local storage devices into a distributed datastore."
      ],
      [
        "Which VMware product provides network and security virtualization?",
        "vSAN",
        "Fusion",
        "NSX",
        "vCenter",
        2,
        "NSX provides software-defined networking and security."
      ],
      [
        "Which component manages vSphere certificates and authentication services?",
        "VMware Platform Services Controller in older architectures",
        "vSAN",
        "VMware Tools",
        "ESXi Shell",
        0,
        "Older vSphere versions used PSC for identity/certificate-related services; newer versions embed these services in vCenter."
      ],
      [
        "Which file stores VM configuration in a VMware datastore?",
        ".nvram only",
        ".vmdk",
        ".vswp only",
        ".vmx",
        3,
        "The VMX file contains virtual machine configuration settings."
      ],
      [
        "Which file represents a VMware virtual disk?",
        ".log",
        ".vmx",
        ".nvram",
        ".vmdk",
        3,
        "VMDK is the virtual disk file format."
      ],
      [
        "Which file stores a VM BIOS/UEFI state?",
        ".vmdk",
        ".vswp",
        ".vmx",
        ".nvram",
        3,
        "NVRAM stores virtual firmware state/settings."
      ],
      [
        "Which file is commonly used for a VM swap file?",
        ".nvram",
        ".vmdk",
        ".vmx",
        ".vswp",
        3,
        "The VSWP file is associated with VM memory swap when required."
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
      ],
      [
        "Which Windows component is the Hyper-V hypervisor?",
        "Windows Kernel Debugger",
        "IIS",
        "Hyper-V hypervisor",
        "SMB server",
        2,
        "Hyper-V provides the virtualization hypervisor layer in Windows."
      ],
      [
        "Which Windows component is the Hyper-V hypervisor? (Choose the best answer.)",
        "Hyper-V hypervisor",
        "IIS",
        "Windows Kernel Debugger",
        "SMB server",
        0,
        "Hyper-V provides the virtualization hypervisor layer in Windows."
      ],
      [
        "Which Hyper-V switch type provides VM-to-physical-network connectivity?",
        "Internal",
        "Private",
        "Loopback",
        "External",
        3,
        "An External virtual switch can connect VMs to the physical network."
      ],
      [
        "Which Hyper-V switch type provides VM-to-physical-network connectivity? (Choose the best answer.)",
        "Private",
        "Loopback",
        "External",
        "Internal",
        2,
        "An External virtual switch can connect VMs to the physical network."
      ],
      [
        "Which Hyper-V switch type allows communication only between VMs on the host?",
        "Bridged",
        "Private",
        "Internal",
        "External",
        1,
        "A Private switch is isolated to VMs on the same host."
      ],
      [
        "Which Hyper-V switch type allows communication only between VMs on the host? (Choose the best answer.)",
        "Private",
        "Internal",
        "Bridged",
        "External",
        0,
        "A Private switch is isolated to VMs on the same host."
      ],
      [
        "Which Hyper-V switch type allows host and VM communication but not direct external connectivity?",
        "Private",
        "External",
        "Internal",
        "NAT-only",
        2,
        "An Internal switch connects VMs with the host but not directly to the physical network."
      ],
      [
        "Which Hyper-V switch type allows host and VM communication but not direct external connectivity? (Choose the best answer.)",
        "External",
        "Internal",
        "Private",
        "NAT-only",
        1,
        "An Internal switch connects VMs with the host but not directly to the physical network."
      ],
      [
        "Which virtual disk format is preferred for modern Hyper-V deployments?",
        "VHD1",
        "VMDK",
        "QCOW1",
        "VHDX",
        3,
        "VHDX supports larger capacities and resilience features compared with legacy VHD."
      ],
      [
        "Which virtual disk format is preferred for modern Hyper-V deployments? (Choose the best answer.)",
        "VHD1",
        "VHDX",
        "VMDK",
        "QCOW1",
        1,
        "VHDX supports larger capacities and resilience features compared with legacy VHD."
      ],
      [
        "Which Hyper-V VM generation supports UEFI firmware?",
        "Legacy Gen",
        "Generation 2",
        "Generation 1 only",
        "Generation 0",
        1,
        "Generation 2 VMs use UEFI and provide modern virtual hardware."
      ],
      [
        "Which Hyper-V VM generation supports UEFI firmware? (Choose the best answer.)",
        "Generation 0",
        "Legacy Gen",
        "Generation 1 only",
        "Generation 2",
        3,
        "Generation 2 VMs use UEFI and provide modern virtual hardware."
      ],
      [
        "What does Hyper-V Live Migration do?",
        "Moves a running VM between hosts with minimal downtime",
        "Formats a VHDX",
        "Changes a guest password",
        "Copies a VM to tape",
        0,
        "Live Migration transfers a running VM between compatible Hyper-V hosts."
      ],
      [
        "What does Hyper-V Live Migration do? (Choose the best answer.)",
        "Copies a VM to tape",
        "Formats a VHDX",
        "Changes a guest password",
        "Moves a running VM between hosts with minimal downtime",
        3,
        "Live Migration transfers a running VM between compatible Hyper-V hosts."
      ],
      [
        "What is a Hyper-V checkpoint used for?",
        "CPU overclocking",
        "Capturing a point-in-time VM state",
        "DNS replication",
        "Permanent backup replacement",
        1,
        "Checkpoints provide a point-in-time state for rollback/testing."
      ],
      [
        "What is a Hyper-V checkpoint used for? (Choose the best answer.)",
        "CPU overclocking",
        "Capturing a point-in-time VM state",
        "Permanent backup replacement",
        "DNS replication",
        1,
        "Checkpoints provide a point-in-time state for rollback/testing."
      ],
      [
        "Which PowerShell cmdlet lists Hyper-V VMs?",
        "Show-VM",
        "Get-VHDInfo",
        "Get-HyperVHost",
        "Get-VM",
        3,
        "Get-VM retrieves virtual machine information."
      ],
      [
        "Which PowerShell cmdlet lists Hyper-V VMs? (Choose the best answer.)",
        "Show-VM",
        "Get-VHDInfo",
        "Get-HyperVHost",
        "Get-VM",
        3,
        "Get-VM retrieves virtual machine information."
      ],
      [
        "Which cmdlet creates a new Hyper-V VM?",
        "Build-VM",
        "New-VM",
        "Add-VM",
        "Create-HyperV",
        1,
        "New-VM creates a new virtual machine."
      ],
      [
        "Which cmdlet creates a new Hyper-V VM? (Choose the best answer.)",
        "Build-VM",
        "Add-VM",
        "Create-HyperV",
        "New-VM",
        3,
        "New-VM creates a new virtual machine."
      ],
      [
        "Which Hyper-V feature can dynamically expand a supported VHDX?",
        "Expand-VMCPU",
        "Edit-VHD",
        "Resize-VMNIC",
        "Grow-HyperV",
        1,
        "Edit-VHD can modify virtual disk properties including size."
      ],
      [
        "Which Hyper-V feature can dynamically expand a supported VHDX? (Choose the best answer.)",
        "Resize-VMNIC",
        "Expand-VMCPU",
        "Edit-VHD",
        "Grow-HyperV",
        2,
        "Edit-VHD can modify virtual disk properties including size."
      ],
      [
        "What is Hyper-V Replica primarily used for?",
        "CPU scheduling",
        "Guest patching",
        "Asynchronous VM replication for disaster recovery",
        "DNS caching",
        2,
        "Hyper-V Replica replicates VMs asynchronously to another host/site."
      ],
      [
        "What is Hyper-V Replica primarily used for? (Choose the best answer.)",
        "DNS caching",
        "CPU scheduling",
        "Guest patching",
        "Asynchronous VM replication for disaster recovery",
        3,
        "Hyper-V Replica replicates VMs asynchronously to another host/site."
      ],
      [
        "What do Hyper-V integration services primarily provide?",
        "Physical RAID management",
        "Guest-host integration features and drivers",
        "Internet DNS",
        "BIOS updates",
        1,
        "Integration components improve guest integration with the Hyper-V host."
      ],
      [
        "What do Hyper-V integration services primarily provide? (Choose the best answer.)",
        "Physical RAID management",
        "Internet DNS",
        "Guest-host integration features and drivers",
        "BIOS updates",
        2,
        "Integration components improve guest integration with the Hyper-V host."
      ],
      [
        "Which Windows technology can provide NAT for an internal Hyper-V network?",
        "DFS",
        "BITS",
        "WinNAT",
        "NTFS",
        2,
        "WinNAT provides network address translation for virtual networks."
      ],
      [
        "Which Windows technology can provide NAT for an internal Hyper-V network? (Choose the best answer.)",
        "BITS",
        "DFS",
        "NTFS",
        "WinNAT",
        3,
        "WinNAT provides network address translation for virtual networks."
      ],
      [
        "What does Hyper-V Dynamic Memory allow?",
        "Adjusting VM memory allocation based on demand",
        "Changing CPU architecture",
        "Replacing a virtual switch",
        "Changing disk format automatically",
        0,
        "Dynamic Memory adjusts memory assigned to supported running VMs based on demand."
      ],
      [
        "What does Hyper-V Dynamic Memory allow? (Choose the best answer.)",
        "Changing CPU architecture",
        "Changing disk format automatically",
        "Adjusting VM memory allocation based on demand",
        "Replacing a virtual switch",
        2,
        "Dynamic Memory adjusts memory assigned to supported running VMs based on demand."
      ],
      [
        "What is a Shielded VM designed to protect?",
        "Only DNS records",
        "Printer queues",
        "Windows Update logs",
        "Sensitive VM workloads against unauthorized access",
        3,
        "Shielded VMs add protections for sensitive virtualized workloads."
      ],
      [
        "What is a Shielded VM designed to protect? (Choose the best answer.)",
        "Only DNS records",
        "Sensitive VM workloads against unauthorized access",
        "Printer queues",
        "Windows Update logs",
        1,
        "Shielded VMs add protections for sensitive virtualized workloads."
      ],
      [
        "What is a Hyper-V failover cluster designed to provide?",
        "User password rotation",
        "More guest disk space",
        "High availability for clustered workloads",
        "Faster DNS",
        2,
        "Failover clustering can restart or move workloads after node failures."
      ],
      [
        "What is a Hyper-V failover cluster designed to provide? (Choose the best answer.)",
        "User password rotation",
        "High availability for clustered workloads",
        "More guest disk space",
        "Faster DNS",
        1,
        "Failover clustering can restart or move workloads after node failures."
      ],
      [
        "What is the maximum logical size supported by VHDX?",
        "2 TB",
        "16 TB",
        "64 TB",
        "8 TB",
        2,
        "VHDX supports virtual disks up to 64 TB."
      ],
      [
        "What is the maximum logical size supported by VHDX? (Choose the best answer.)",
        "2 TB",
        "64 TB",
        "8 TB",
        "16 TB",
        1,
        "VHDX supports virtual disks up to 64 TB."
      ],
      [
        "Which Windows role enables Hyper-V virtualization on a Server installation?",
        "Hyper-V",
        "Print and Document Services",
        "Web Server (IIS)",
        "DNS Server",
        0,
        "The Hyper-V role installs the virtualization platform."
      ],
      [
        "Which Windows role enables Hyper-V virtualization on a Server installation? (Choose the best answer.)",
        "DNS Server",
        "Print and Document Services",
        "Hyper-V",
        "Web Server (IIS)",
        2,
        "The Hyper-V role installs the virtualization platform."
      ],
      [
        "What is storage migration used for?",
        "Replacing a CPU",
        "Changing DNS suffix",
        "Changing a VM password",
        "Moving VM virtual disks to another storage location",
        3,
        "Storage migration relocates virtual disk files while preserving the VM configuration."
      ],
      [
        "What is storage migration used for? (Choose the best answer.)",
        "Changing DNS suffix",
        "Changing a VM password",
        "Moving VM virtual disks to another storage location",
        "Replacing a CPU",
        2,
        "Storage migration relocates virtual disk files while preserving the VM configuration."
      ],
      [
        "Which PowerShell cmdlet retrieves virtual hard disk information?",
        "Get-VHD",
        "Show-VHD",
        "Get-DiskVM",
        "Get-VM",
        0,
        "Get-VHD retrieves VHD/VHDX information."
      ],
      [
        "Which PowerShell cmdlet starts a Hyper-V VM?",
        "Run-VM",
        "Boot-VM",
        "Enable-VM",
        "Start-VM",
        3,
        "Start-VM starts a virtual machine."
      ],
      [
        "Which PowerShell cmdlet stops a Hyper-V VM?",
        "End-VM",
        "Shutdown-VMNow",
        "Stop-VM",
        "PowerOff-VM",
        2,
        "Stop-VM stops a virtual machine."
      ],
      [
        "Which Hyper-V feature enables nested virtualization?",
        "Replica",
        "Dynamic Memory",
        "Nested Virtualization",
        "Shielded VM only",
        2,
        "Nested virtualization allows a VM to run virtualization workloads."
      ],
      [
        "Which VHDX type allocates space as data is written?",
        "Dynamically expanding",
        "Static sector",
        "Fixed",
        "Thin BIOS",
        0,
        "A dynamically expanding disk grows as data is written."
      ],
      [
        "Which VHDX type reserves its configured size up front?",
        "Dynamic",
        "Sparse only",
        "Replica disk",
        "Fixed size",
        3,
        "A fixed VHDX allocates the configured storage space up front."
      ],
      [
        "Which Hyper-V feature replicates a VM asynchronously to another host?",
        "Checkpoint",
        "Hyper-V Replica",
        "Live Migration",
        "Dynamic Memory",
        1,
        "Hyper-V Replica provides asynchronous replication."
      ],
      [
        "Which cmdlet creates a Hyper-V checkpoint?",
        "New-CheckpointDisk",
        "Save-VMState",
        "Create-VMPoint",
        "Checkpoint-VM",
        3,
        "Checkpoint-VM creates a checkpoint for a VM."
      ],
      [
        "Which cmdlet connects to a VM console?",
        "vmconnect.exe",
        "vmconsole.exe",
        "vmshell.exe",
        "hyperconnect.exe",
        0,
        "VMConnect provides a console connection to a Hyper-V VM."
      ],
      [
        "Which Hyper-V switch allows the host and VMs to communicate privately?",
        "External",
        "Internal",
        "Physical",
        "Private",
        1,
        "An Internal switch connects the host and VMs without direct physical-network access."
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
      ],
      [
        "What is an Azure VM?",
        "A storage container only",
        "A physical switch",
        "A virtual machine running in Azure",
        "A DNS record",
        2,
        "Azure VMs provide compute instances running Windows or Linux."
      ],
      [
        "What is an Azure VM? (Choose the best answer.)",
        "A physical switch",
        "A DNS record",
        "A storage container only",
        "A virtual machine running in Azure",
        3,
        "Azure VMs provide compute instances running Windows or Linux."
      ],
      [
        "What is an Azure VNet used for?",
        "Providing private network connectivity for Azure resources",
        "Storing blobs",
        "Managing users only",
        "Creating SQL tables",
        0,
        "A VNet provides isolated virtual networking in Azure."
      ],
      [
        "What is an Azure VNet used for? (Choose the best answer.)",
        "Storing blobs",
        "Managing users only",
        "Providing private network connectivity for Azure resources",
        "Creating SQL tables",
        2,
        "A VNet provides isolated virtual networking in Azure."
      ],
      [
        "Which Azure service stores object/blob data?",
        "Azure DNS",
        "Azure Monitor",
        "Azure Blob Storage",
        "Azure Bastion",
        2,
        "Blob Storage is Azure object storage."
      ],
      [
        "Which Azure service stores object/blob data? (Choose the best answer.)",
        "Azure Bastion",
        "Azure Monitor",
        "Azure Blob Storage",
        "Azure DNS",
        2,
        "Blob Storage is Azure object storage."
      ],
      [
        "Which Azure service provides identity and access management?",
        "Azure Files",
        "Microsoft Entra ID",
        "Azure Load Testing",
        "Azure Monitor",
        1,
        "Microsoft Entra ID provides cloud identity and access management."
      ],
      [
        "Which Azure service provides identity and access management? (Choose the best answer.)",
        "Azure Load Testing",
        "Azure Monitor",
        "Microsoft Entra ID",
        "Azure Files",
        2,
        "Microsoft Entra ID provides cloud identity and access management."
      ],
      [
        "What does Azure RBAC control?",
        "DNS TTL only",
        "VM CPU speed",
        "Who can perform which actions on Azure resources",
        "Blob compression",
        2,
        "Role-Based Access Control assigns permissions to identities at resource scopes."
      ],
      [
        "What does Azure RBAC control? (Choose the best answer.)",
        "VM CPU speed",
        "Blob compression",
        "Who can perform which actions on Azure resources",
        "DNS TTL only",
        2,
        "Role-Based Access Control assigns permissions to identities at resource scopes."
      ],
      [
        "What does an Azure Network Security Group filter?",
        "Blob versions",
        "Disk IOPS",
        "User passwords",
        "Inbound and outbound network traffic",
        3,
        "NSGs contain rules controlling network traffic to supported resources."
      ],
      [
        "What does an Azure Network Security Group filter? (Choose the best answer.)",
        "User passwords",
        "Blob versions",
        "Disk IOPS",
        "Inbound and outbound network traffic",
        3,
        "NSGs contain rules controlling network traffic to supported resources."
      ],
      [
        "Which Azure service provides Layer 4 load balancing?",
        "Azure Load Balancer",
        "Azure DNS Private Resolver",
        "Azure Storage",
        "Azure DevTest Labs",
        0,
        "Azure Load Balancer distributes TCP/UDP traffic at Layer 4."
      ],
      [
        "Which Azure service provides Layer 4 load balancing? (Choose the best answer.)",
        "Azure Storage",
        "Azure Load Balancer",
        "Azure DNS Private Resolver",
        "Azure DevTest Labs",
        1,
        "Azure Load Balancer distributes TCP/UDP traffic at Layer 4."
      ],
      [
        "Which Azure service provides Layer 7 HTTP(S) load balancing?",
        "Azure Files",
        "Azure Load Balancer only",
        "Azure Queue Storage",
        "Application Gateway",
        3,
        "Application Gateway provides application-layer HTTP(S) load balancing and related features."
      ],
      [
        "Which Azure service provides Layer 7 HTTP(S) load balancing? (Choose the best answer.)",
        "Application Gateway",
        "Azure Queue Storage",
        "Azure Files",
        "Azure Load Balancer only",
        0,
        "Application Gateway provides application-layer HTTP(S) load balancing and related features."
      ],
      [
        "Which Azure service provides metrics and platform monitoring?",
        "Azure Monitor",
        "Azure Key Vault",
        "Azure DNS",
        "Azure Policy",
        0,
        "Azure Monitor collects and analyzes metrics, logs and telemetry."
      ],
      [
        "Which Azure service provides metrics and platform monitoring? (Choose the best answer.)",
        "Azure DNS",
        "Azure Policy",
        "Azure Key Vault",
        "Azure Monitor",
        3,
        "Azure Monitor collects and analyzes metrics, logs and telemetry."
      ],
      [
        "Which Azure service is designed to store secrets and keys?",
        "Blob Storage",
        "Key Vault",
        "Azure Queue",
        "Azure Front Door",
        1,
        "Azure Key Vault securely stores secrets, keys and certificates."
      ],
      [
        "Which Azure service is designed to store secrets and keys? (Choose the best answer.)",
        "Blob Storage",
        "Key Vault",
        "Azure Queue",
        "Azure Front Door",
        1,
        "Azure Key Vault securely stores secrets, keys and certificates."
      ],
      [
        "Which Azure service enforces organizational rules on resources?",
        "Azure Policy",
        "Azure Bastion",
        "Azure Monitor",
        "Azure Storage",
        0,
        "Azure Policy evaluates resources against organizational requirements."
      ],
      [
        "Which Azure service enforces organizational rules on resources? (Choose the best answer.)",
        "Azure Policy",
        "Azure Storage",
        "Azure Bastion",
        "Azure Monitor",
        0,
        "Azure Policy evaluates resources against organizational requirements."
      ],
      [
        "What does a resource group contain?",
        "Only VNets",
        "Related Azure resources",
        "Only users",
        "Only subscriptions",
        1,
        "Resource groups are logical containers for related Azure resources."
      ],
      [
        "What does a resource group contain? (Choose the best answer.)",
        "Only users",
        "Related Azure resources",
        "Only subscriptions",
        "Only VNets",
        1,
        "Resource groups are logical containers for related Azure resources."
      ],
      [
        "What is an Azure subscription commonly used for?",
        "A DNS query",
        "A Linux process",
        "Billing and resource management boundary",
        "A single VM disk",
        2,
        "Subscriptions provide a management and billing boundary for Azure resources."
      ],
      [
        "What is an Azure subscription commonly used for? (Choose the best answer.)",
        "A DNS query",
        "A single VM disk",
        "A Linux process",
        "Billing and resource management boundary",
        3,
        "Subscriptions provide a management and billing boundary for Azure resources."
      ],
      [
        "Which Azure storage service provides managed SMB file shares?",
        "Blob Storage",
        "Queue Storage",
        "Azure Files",
        "Table Storage",
        2,
        "Azure Files provides managed file shares accessible using SMB and other protocols."
      ],
      [
        "Which Azure storage service provides managed SMB file shares? (Choose the best answer.)",
        "Queue Storage",
        "Blob Storage",
        "Azure Files",
        "Table Storage",
        2,
        "Azure Files provides managed file shares accessible using SMB and other protocols."
      ],
      [
        "Which Azure service provides backup for supported Azure resources?",
        "Azure Policy",
        "Azure Backup",
        "Azure Firewall Manager",
        "Azure DNS",
        1,
        "Azure Backup provides managed backup and recovery capabilities."
      ],
      [
        "Which Azure service provides backup for supported Azure resources? (Choose the best answer.)",
        "Azure Backup",
        "Azure DNS",
        "Azure Firewall Manager",
        "Azure Policy",
        0,
        "Azure Backup provides managed backup and recovery capabilities."
      ],
      [
        "Which Azure service provides site-to-site VM disaster recovery replication?",
        "Azure Site Recovery",
        "Azure Files",
        "Azure Monitor",
        "Azure Advisor",
        0,
        "Azure Site Recovery orchestrates replication and recovery for supported workloads."
      ],
      [
        "Which Azure service provides site-to-site VM disaster recovery replication? (Choose the best answer.)",
        "Azure Advisor",
        "Azure Monitor",
        "Azure Files",
        "Azure Site Recovery",
        3,
        "Azure Site Recovery orchestrates replication and recovery for supported workloads."
      ],
      [
        "What is Azure App Service primarily used to host?",
        "DNS zones only",
        "Web applications and APIs",
        "Storage disks only",
        "Physical servers",
        1,
        "App Service is a managed platform for web apps and APIs."
      ],
      [
        "What is Azure App Service primarily used to host? (Choose the best answer.)",
        "Storage disks only",
        "Web applications and APIs",
        "DNS zones only",
        "Physical servers",
        1,
        "App Service is a managed platform for web apps and APIs."
      ],
      [
        "Which Azure service is a managed Kubernetes service?",
        "Azure Files",
        "Azure Functions",
        "Azure DNS",
        "Azure Kubernetes Service (AKS)",
        3,
        "AKS is Azure's managed Kubernetes service."
      ],
      [
        "Which Azure service is a managed Kubernetes service? (Choose the best answer.)",
        "Azure Functions",
        "Azure Kubernetes Service (AKS)",
        "Azure DNS",
        "Azure Files",
        1,
        "AKS is Azure's managed Kubernetes service."
      ],
      [
        "Which Azure service runs event-driven code without managing servers?",
        "Azure Functions",
        "Azure Files",
        "Azure Virtual WAN",
        "Azure VM Scale Sets",
        0,
        "Azure Functions provides serverless event-driven compute."
      ],
      [
        "Which Azure service runs event-driven code without managing servers? (Choose the best answer.)",
        "Azure Functions",
        "Azure Virtual WAN",
        "Azure Files",
        "Azure VM Scale Sets",
        0,
        "Azure Functions provides serverless event-driven compute."
      ],
      [
        "What is an Azure availability zone?",
        "A storage tier",
        "A DNS record",
        "A physically separate location within an Azure region",
        "A subscription type",
        2,
        "Availability zones are physically separate datacenter locations within supported regions."
      ],
      [
        "What is an Azure availability zone? (Choose the best answer.)",
        "A DNS record",
        "A storage tier",
        "A subscription type",
        "A physically separate location within an Azure region",
        3,
        "Availability zones are physically separate datacenter locations within supported regions."
      ],
      [
        "Which Azure service provides a managed firewall for network traffic?",
        "Azure Monitor",
        "Azure DNS",
        "Azure Firewall",
        "Azure Files",
        2,
        "Azure Firewall is a managed network security service."
      ],
      [
        "Which Azure service provides private access to selected Azure services?",
        "Public IP",
        "Private Endpoint",
        "NAT Gateway",
        "Azure DNS only",
        1,
        "Private Endpoint uses a private IP in a VNet to access supported services privately."
      ],
      [
        "Which Azure service provides managed NAT for outbound connectivity?",
        "Route Table",
        "Azure Load Balancer Basic only",
        "Key Vault",
        "NAT Gateway",
        3,
        "NAT Gateway provides scalable outbound internet connectivity for subnets."
      ],
      [
        "Which Azure service provides a globally distributed content delivery and application entry point?",
        "Azure Policy",
        "Azure Files",
        "Azure Disk Storage",
        "Azure Front Door",
        3,
        "Front Door provides global HTTP(S) application delivery and routing."
      ],
      [
        "Which Azure service provides secrets management?",
        "Azure Key Vault",
        "Azure VNet",
        "Azure Files",
        "Azure Monitor",
        0,
        "Key Vault stores secrets, keys and certificates."
      ],
      [
        "Which Azure service can run code on a schedule or event without server management?",
        "Azure VM",
        "Azure SQL Managed Instance",
        "Azure Functions",
        "Azure Files",
        2,
        "Functions is serverless event-driven compute."
      ],
      [
        "Which Azure service provides managed SQL Server-compatible databases?",
        "Azure DNS",
        "Azure Bastion",
        "Azure Blob Storage",
        "Azure SQL Database",
        3,
        "Azure SQL Database is a managed relational database service."
      ],
      [
        "Which Azure service provides jump-host access to VMs without public IPs?",
        "Azure Bastion",
        "Azure Front Door",
        "Azure Queue",
        "Azure CDN",
        0,
        "Azure Bastion provides managed RDP/SSH access through the Azure portal."
      ],
      [
        "Which Azure service provides recommendations for cost, security and reliability?",
        "Azure Advisor",
        "Azure Monitor only",
        "Azure Storage Explorer",
        "Azure DNS",
        0,
        "Azure Advisor provides recommendations across several optimization areas."
      ],
      [
        "Which Azure feature controls VM scaling based on demand?",
        "Azure Policy",
        "Azure Key Vault",
        "Azure Files",
        "Virtual Machine Scale Sets",
        3,
        "VM Scale Sets manage groups of load-balanced, autoscaling VMs."
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
      ],
      [
        "Which AWS service provides resizable virtual servers?",
        "Amazon Route 53",
        "Amazon S3",
        "Amazon RDS only",
        "Amazon EC2",
        3,
        "EC2 provides virtual compute instances."
      ],
      [
        "Which AWS service provides resizable virtual servers? (Choose the best answer.)",
        "Amazon S3",
        "Amazon RDS only",
        "Amazon EC2",
        "Amazon Route 53",
        2,
        "EC2 provides virtual compute instances."
      ],
      [
        "Which AWS service provides object storage?",
        "Amazon EC2",
        "Amazon S3",
        "Amazon VPC",
        "Amazon EBS",
        1,
        "S3 is AWS object storage."
      ],
      [
        "Which AWS service provides object storage? (Choose the best answer.)",
        "Amazon EBS",
        "Amazon S3",
        "Amazon EC2",
        "Amazon VPC",
        1,
        "S3 is AWS object storage."
      ],
      [
        "Which AWS service provides an isolated virtual network?",
        "Amazon VPC",
        "Amazon CloudWatch",
        "Amazon S3",
        "Amazon IAM",
        0,
        "A VPC provides logically isolated networking in AWS."
      ],
      [
        "Which AWS service provides an isolated virtual network? (Choose the best answer.)",
        "Amazon VPC",
        "Amazon CloudWatch",
        "Amazon IAM",
        "Amazon S3",
        0,
        "A VPC provides logically isolated networking in AWS."
      ],
      [
        "Which AWS service manages identities and permissions?",
        "IAM",
        "EBS",
        "Route 53",
        "CloudFront",
        0,
        "IAM controls AWS identities and permissions."
      ],
      [
        "Which AWS service manages identities and permissions? (Choose the best answer.)",
        "Route 53",
        "IAM",
        "EBS",
        "CloudFront",
        1,
        "IAM controls AWS identities and permissions."
      ],
      [
        "Which AWS service provides managed relational databases?",
        "VPC",
        "SQS",
        "Amazon RDS",
        "S3",
        2,
        "RDS provides managed relational database engines."
      ],
      [
        "Which AWS service provides managed relational databases? (Choose the best answer.)",
        "Amazon RDS",
        "SQS",
        "S3",
        "VPC",
        0,
        "RDS provides managed relational database engines."
      ],
      [
        "Which AWS service collects metrics and logs?",
        "S3",
        "IAM",
        "Amazon CloudWatch",
        "Route 53",
        2,
        "CloudWatch provides monitoring and observability services."
      ],
      [
        "Which AWS service collects metrics and logs? (Choose the best answer.)",
        "S3",
        "Route 53",
        "Amazon CloudWatch",
        "IAM",
        2,
        "CloudWatch provides monitoring and observability services."
      ],
      [
        "Which AWS service provides managed DNS?",
        "Amazon Route 53",
        "Amazon EBS",
        "AWS WAF",
        "Amazon VPC",
        0,
        "Route 53 is AWS DNS and traffic management service."
      ],
      [
        "Which AWS service provides managed DNS? (Choose the best answer.)",
        "AWS WAF",
        "Amazon Route 53",
        "Amazon VPC",
        "Amazon EBS",
        1,
        "Route 53 is AWS DNS and traffic management service."
      ],
      [
        "Which AWS service distributes application traffic across targets?",
        "Elastic Load Balancing",
        "EBS",
        "IAM",
        "S3 Transfer Acceleration",
        0,
        "Elastic Load Balancing distributes traffic across healthy targets."
      ],
      [
        "Which AWS service distributes application traffic across targets? (Choose the best answer.)",
        "Elastic Load Balancing",
        "IAM",
        "EBS",
        "S3 Transfer Acceleration",
        0,
        "Elastic Load Balancing distributes traffic across healthy targets."
      ],
      [
        "Which AWS service runs code without managing servers?",
        "EC2 Bare Metal",
        "EBS",
        "AWS Lambda",
        "VPC",
        2,
        "Lambda is AWS serverless compute."
      ],
      [
        "Which AWS service runs code without managing servers? (Choose the best answer.)",
        "VPC",
        "EBS",
        "AWS Lambda",
        "EC2 Bare Metal",
        2,
        "Lambda is AWS serverless compute."
      ],
      [
        "Which AWS service provides managed Kubernetes?",
        "Amazon Route 53",
        "Amazon S3",
        "Amazon EKS",
        "Amazon EBS",
        2,
        "EKS is managed Kubernetes on AWS."
      ],
      [
        "Which AWS service provides managed Kubernetes? (Choose the best answer.)",
        "Amazon S3",
        "Amazon EKS",
        "Amazon Route 53",
        "Amazon EBS",
        1,
        "EKS is managed Kubernetes on AWS."
      ],
      [
        "Which AWS service provides a managed message queue?",
        "RDS",
        "Amazon SQS",
        "IAM",
        "S3",
        1,
        "SQS is a managed message queuing service."
      ],
      [
        "Which AWS service provides a managed message queue? (Choose the best answer.)",
        "RDS",
        "S3",
        "IAM",
        "Amazon SQS",
        3,
        "SQS is a managed message queuing service."
      ],
      [
        "Which AWS service provides pub/sub notifications?",
        "EC2",
        "RDS",
        "Amazon SNS",
        "EBS",
        2,
        "SNS provides publish/subscribe messaging and notifications."
      ],
      [
        "Which AWS service provides pub/sub notifications? (Choose the best answer.)",
        "Amazon SNS",
        "EC2",
        "RDS",
        "EBS",
        0,
        "SNS provides publish/subscribe messaging and notifications."
      ],
      [
        "Which AWS service provides DDoS protection and edge security features?",
        "AWS Batch",
        "AWS Shield",
        "Amazon EBS",
        "AWS Glue",
        1,
        "AWS Shield provides managed DDoS protection."
      ],
      [
        "Which AWS service provides DDoS protection and edge security features? (Choose the best answer.)",
        "AWS Shield",
        "Amazon EBS",
        "AWS Batch",
        "AWS Glue",
        0,
        "AWS Shield provides managed DDoS protection."
      ],
      [
        "Which AWS service is a web application firewall?",
        "AWS WAF",
        "Amazon RDS",
        "AWS S3",
        "AWS IAM",
        0,
        "AWS WAF filters HTTP(S) requests using web ACL rules."
      ],
      [
        "Which AWS service is a web application firewall? (Choose the best answer.)",
        "AWS S3",
        "AWS IAM",
        "AWS WAF",
        "Amazon RDS",
        2,
        "AWS WAF filters HTTP(S) requests using web ACL rules."
      ],
      [
        "Which AWS block storage service is attached to EC2 instances?",
        "S3",
        "Route 53",
        "Amazon EBS",
        "EFS only",
        2,
        "EBS provides persistent block storage volumes for EC2."
      ],
      [
        "Which AWS block storage service is attached to EC2 instances? (Choose the best answer.)",
        "Route 53",
        "Amazon EBS",
        "S3",
        "EFS only",
        1,
        "EBS provides persistent block storage volumes for EC2."
      ],
      [
        "Which AWS service provides managed elastic file storage?",
        "EBS only",
        "SQS",
        "S3",
        "Amazon EFS",
        3,
        "EFS provides scalable managed file storage."
      ],
      [
        "Which AWS service provides managed elastic file storage? (Choose the best answer.)",
        "S3",
        "SQS",
        "Amazon EFS",
        "EBS only",
        2,
        "EFS provides scalable managed file storage."
      ],
      [
        "What is an AWS Availability Zone?",
        "An IAM user",
        "An isolated location within an AWS Region",
        "A billing account",
        "An S3 bucket type",
        1,
        "Availability Zones are isolated locations within a region."
      ],
      [
        "What is an AWS Availability Zone? (Choose the best answer.)",
        "An isolated location within an AWS Region",
        "An S3 bucket type",
        "An IAM user",
        "A billing account",
        0,
        "Availability Zones are isolated locations within a region."
      ],
      [
        "Why are multiple Availability Zones used?",
        "To reduce file size",
        "To increase DNS TTL",
        "To disable IAM",
        "To improve resilience against zone-level failures",
        3,
        "Using multiple AZs can improve availability and resilience."
      ],
      [
        "Why are multiple Availability Zones used? (Choose the best answer.)",
        "To increase DNS TTL",
        "To reduce file size",
        "To disable IAM",
        "To improve resilience against zone-level failures",
        3,
        "Using multiple AZs can improve availability and resilience."
      ],
      [
        "Which AWS service uses CloudFormation templates for infrastructure deployment?",
        "AWS CloudFormation",
        "AWS Shield",
        "AWS WAF",
        "AWS CloudTrail",
        0,
        "CloudFormation provisions AWS infrastructure from templates."
      ],
      [
        "Which AWS service uses CloudFormation templates for infrastructure deployment? (Choose the best answer.)",
        "AWS WAF",
        "AWS Shield",
        "AWS CloudFormation",
        "AWS CloudTrail",
        2,
        "CloudFormation provisions AWS infrastructure from templates."
      ],
      [
        "Which AWS service records API activity for auditing?",
        "EFS",
        "Route 53",
        "AWS CloudTrail",
        "CloudWatch only",
        2,
        "CloudTrail records AWS API activity for auditing and governance."
      ],
      [
        "Which AWS service records API activity for auditing? (Choose the best answer.)",
        "EFS",
        "CloudWatch only",
        "Route 53",
        "AWS CloudTrail",
        3,
        "CloudTrail records AWS API activity for auditing and governance."
      ],
      [
        "Which AWS service provides a managed Kubernetes control plane?",
        "S3",
        "Amazon ECS only",
        "Amazon EKS",
        "RDS",
        2,
        "EKS provides managed Kubernetes."
      ],
      [
        "Which AWS service provides container orchestration without Kubernetes?",
        "CloudTrail",
        "Amazon EBS",
        "Amazon ECS",
        "Route 53",
        2,
        "ECS is AWS managed container orchestration."
      ],
      [
        "Which AWS service provides a serverless relational database option?",
        "Route 53",
        "S3",
        "EBS",
        "Amazon Aurora Serverless",
        3,
        "Aurora Serverless adjusts database capacity for supported workloads."
      ],
      [
        "Which AWS service provides secrets management?",
        "CloudWatch",
        "AWS Secrets Manager",
        "S3",
        "ECS",
        1,
        "Secrets Manager securely stores and retrieves secrets."
      ],
      [
        "Which AWS service provides key management?",
        "SQS",
        "AWS WAF",
        "Route 53",
        "AWS KMS",
        3,
        "KMS creates and manages cryptographic keys for AWS services and applications."
      ],
      [
        "Which AWS service provides object lifecycle management in S3?",
        "IAM",
        "EBS",
        "CloudTrail",
        "S3 Lifecycle",
        3,
        "S3 Lifecycle rules transition or expire objects based on policies."
      ],
      [
        "Which AWS service provides centralized configuration and compliance tracking?",
        "EFS",
        "CloudFront",
        "AWS Config",
        "SQS",
        2,
        "AWS Config records resource configurations and evaluates compliance rules."
      ],
      [
        "Which AWS service provides a managed message bus for event routing?",
        "IAM",
        "RDS",
        "EBS",
        "Amazon EventBridge",
        3,
        "EventBridge routes events between sources and targets."
      ],
      [
        "Which AWS service distributes content globally from edge locations?",
        "Amazon VPC",
        "Amazon RDS",
        "AWS IAM",
        "Amazon CloudFront",
        3,
        "CloudFront is AWS content delivery network."
      ],
      [
        "Which AWS service provides centralized organization of multiple AWS accounts?",
        "CloudWatch",
        "Lambda",
        "EBS",
        "AWS Organizations",
        3,
        "AWS Organizations manages multiple AWS accounts centrally."
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
      ],
      [
        "What does MFA add to authentication?",
        "A faster network",
        "More storage",
        "An additional verification factor",
        "A backup copy",
        2,
        "MFA requires more than one authentication factor."
      ],
      [
        "What does MFA add to authentication? (Choose the best answer.)",
        "An additional verification factor",
        "A backup copy",
        "A faster network",
        "More storage",
        0,
        "MFA requires more than one authentication factor."
      ],
      [
        "What is the principle of least privilege?",
        "Give admin access to everyone",
        "Disable logging",
        "Allow all traffic",
        "Give only the access required",
        3,
        "Least privilege minimizes permissions to what is necessary."
      ],
      [
        "What is the principle of least privilege? (Choose the best answer.)",
        "Give admin access to everyone",
        "Disable logging",
        "Allow all traffic",
        "Give only the access required",
        3,
        "Least privilege minimizes permissions to what is necessary."
      ],
      [
        "What is a SIEM commonly used for?",
        "Creating virtual disks",
        "Collecting and analyzing security events",
        "Managing DNS zones only",
        "Replacing a hypervisor",
        1,
        "SIEM platforms aggregate and analyze security telemetry and events."
      ],
      [
        "What is a SIEM commonly used for? (Choose the best answer.)",
        "Collecting and analyzing security events",
        "Creating virtual disks",
        "Managing DNS zones only",
        "Replacing a hypervisor",
        0,
        "SIEM platforms aggregate and analyze security telemetry and events."
      ],
      [
        "What is phishing? (Choose the best answer.)",
        "A backup method",
        "A routing protocol",
        "A disk format",
        "A social-engineering attack",
        3,
        "Phishing attempts to trick users into revealing information or taking unsafe actions."
      ],
      [
        "What is ransomware designed to do?",
        "Create DNS records",
        "Improve backups",
        "Encrypt or otherwise deny access to data for extortion",
        "Increase CPU speed",
        2,
        "Ransomware commonly denies access to data and demands payment."
      ],
      [
        "What is ransomware designed to do? (Choose the best answer.)",
        "Create DNS records",
        "Encrypt or otherwise deny access to data for extortion",
        "Increase CPU speed",
        "Improve backups",
        1,
        "Ransomware commonly denies access to data and demands payment."
      ],
      [
        "What is a firewall primarily used for?",
        "Patching BIOS",
        "Creating users",
        "Compressing files",
        "Controlling network traffic according to rules",
        3,
        "Firewalls enforce traffic-control policies."
      ],
      [
        "What is a firewall primarily used for? (Choose the best answer.)",
        "Creating users",
        "Compressing files",
        "Controlling network traffic according to rules",
        "Patching BIOS",
        2,
        "Firewalls enforce traffic-control policies."
      ],
      [
        "What does encryption provide?",
        "Confidentiality by transforming readable data into protected form",
        "Faster CPU",
        "Automatic backups",
        "Guaranteed availability",
        0,
        "Encryption protects confidentiality by making data unreadable without the required key."
      ],
      [
        "What does encryption provide? (Choose the best answer.)",
        "Faster CPU",
        "Confidentiality by transforming readable data into protected form",
        "Guaranteed availability",
        "Automatic backups",
        1,
        "Encryption protects confidentiality by making data unreadable without the required key."
      ],
      [
        "Which property distinguishes a cryptographic hash from reversible encryption?",
        "A cryptographic hash is designed to be one-way",
        "Hashes require DNS",
        "Hashes always use passwords",
        "Encryption cannot use keys",
        0,
        "Cryptographic hashes are designed to be computationally infeasible to reverse."
      ],
      [
        "Which property distinguishes a cryptographic hash from reversible encryption? (Choose the best answer.)",
        "Encryption cannot use keys",
        "A cryptographic hash is designed to be one-way",
        "Hashes require DNS",
        "Hashes always use passwords",
        1,
        "Cryptographic hashes are designed to be computationally infeasible to reverse."
      ],
      [
        "What does TLS primarily protect?",
        "Data center power",
        "CPU scheduling",
        "Disk capacity",
        "Data in transit",
        3,
        "TLS provides encryption and integrity for network communications."
      ],
      [
        "What does TLS primarily protect? (Choose the best answer.)",
        "Disk capacity",
        "CPU scheduling",
        "Data center power",
        "Data in transit",
        3,
        "TLS provides encryption and integrity for network communications."
      ],
      [
        "What does a digital certificate commonly bind?",
        "A public key to an identity",
        "A password to a username",
        "A disk to a VM",
        "A port to a process",
        0,
        "Certificates associate a public key with an identity and are signed by a certificate authority."
      ],
      [
        "What does a digital certificate commonly bind? (Choose the best answer.)",
        "A password to a username",
        "A public key to an identity",
        "A disk to a VM",
        "A port to a process",
        1,
        "Certificates associate a public key with an identity and are signed by a certificate authority."
      ],
      [
        "What is a CVE identifier used for?",
        "Identifying a publicly disclosed vulnerability",
        "Identifying users",
        "Tracking CPU models",
        "Naming DNS zones",
        0,
        "CVE identifiers provide standardized references for publicly disclosed vulnerabilities."
      ],
      [
        "What is a CVE identifier used for? (Choose the best answer.)",
        "Naming DNS zones",
        "Tracking CPU models",
        "Identifying users",
        "Identifying a publicly disclosed vulnerability",
        3,
        "CVE identifiers provide standardized references for publicly disclosed vulnerabilities."
      ],
      [
        "What is patch management intended to reduce?",
        "Known vulnerabilities and defects",
        "User count",
        "Disk fragmentation only",
        "Network bandwidth",
        0,
        "Security patches often address known vulnerabilities and defects."
      ],
      [
        "What is patch management intended to reduce? (Choose the best answer.)",
        "Network bandwidth",
        "Disk fragmentation only",
        "Known vulnerabilities and defects",
        "User count",
        2,
        "Security patches often address known vulnerabilities and defects."
      ],
      [
        "Why are centralized logs useful for security?",
        "They replace firewalls",
        "They disable authentication",
        "They support correlation and investigation across systems",
        "They increase RAM",
        2,
        "Centralized logs help analysts correlate events and investigate incidents."
      ],
      [
        "Why are centralized logs useful for security? (Choose the best answer.)",
        "They replace firewalls",
        "They increase RAM",
        "They disable authentication",
        "They support correlation and investigation across systems",
        3,
        "Centralized logs help analysts correlate events and investigate incidents."
      ],
      [
        "What is containment in incident response?",
        "Ignoring the alert",
        "Deleting all logs",
        "Limiting the spread or impact of an incident",
        "Publishing passwords",
        2,
        "Containment isolates affected systems or activity to limit damage."
      ],
      [
        "What is containment in incident response? (Choose the best answer.)",
        "Limiting the spread or impact of an incident",
        "Publishing passwords",
        "Deleting all logs",
        "Ignoring the alert",
        0,
        "Containment isolates affected systems or activity to limit damage."
      ],
      [
        "What is the 3-2-1 backup rule?",
        "Three users, two passwords, one server",
        "Three disks, two VMs, one switch",
        "Three firewalls, two routers, one cloud",
        "Three copies, two media types, one offsite copy",
        3,
        "The 3-2-1 rule improves resilience by maintaining multiple copies across media and locations."
      ],
      [
        "What is the 3-2-1 backup rule? (Choose the best answer.)",
        "Three firewalls, two routers, one cloud",
        "Three users, two passwords, one server",
        "Three disks, two VMs, one switch",
        "Three copies, two media types, one offsite copy",
        3,
        "The 3-2-1 rule improves resilience by maintaining multiple copies across media and locations."
      ],
      [
        "What is a core idea of Zero Trust?",
        "Allow unrestricted lateral movement",
        "Disable MFA",
        "Trust every internal user",
        "Verify explicitly and do not trust implicitly",
        3,
        "Zero Trust assumes no implicit trust and continuously evaluates access."
      ],
      [
        "What is a core idea of Zero Trust? (Choose the best answer.)",
        "Disable MFA",
        "Verify explicitly and do not trust implicitly",
        "Allow unrestricted lateral movement",
        "Trust every internal user",
        1,
        "Zero Trust assumes no implicit trust and continuously evaluates access."
      ],
      [
        "What does EDR primarily provide?",
        "Endpoint detection, telemetry and response capabilities",
        "Database replication",
        "DNS hosting",
        "Disk partitioning",
        0,
        "EDR platforms monitor endpoints and support detection and response."
      ],
      [
        "What does EDR primarily provide? (Choose the best answer.)",
        "Disk partitioning",
        "Endpoint detection, telemetry and response capabilities",
        "DNS hosting",
        "Database replication",
        1,
        "EDR platforms monitor endpoints and support detection and response."
      ],
      [
        "What is a brute-force attack?",
        "Encrypting a backup",
        "Compressing traffic",
        "Repeatedly trying possible credentials or secrets",
        "Changing DNS TTL",
        2,
        "Brute-force attacks systematically try many credential combinations."
      ],
      [
        "What is a brute-force attack? (Choose the best answer.)",
        "Repeatedly trying possible credentials or secrets",
        "Changing DNS TTL",
        "Encrypting a backup",
        "Compressing traffic",
        0,
        "Brute-force attacks systematically try many credential combinations."
      ],
      [
        "What is defense in depth?",
        "Removing logs",
        "Disabling backups",
        "Using multiple layers of security controls",
        "Using one firewall only",
        2,
        "Defense in depth reduces reliance on a single security control."
      ],
      [
        "What is defense in depth? (Choose the best answer.)",
        "Disabling backups",
        "Using multiple layers of security controls",
        "Removing logs",
        "Using one firewall only",
        1,
        "Defense in depth reduces reliance on a single security control."
      ],
      [
        "What is data classification used for?",
        "Assigning DNS ports",
        "Increasing CPU speed",
        "Choosing a subnet mask",
        "Applying appropriate handling controls based on data sensitivity",
        3,
        "Classification helps organizations apply suitable protection based on sensitivity."
      ],
      [
        "What is data classification used for? (Choose the best answer.)",
        "Increasing CPU speed",
        "Choosing a subnet mask",
        "Applying appropriate handling controls based on data sensitivity",
        "Assigning DNS ports",
        2,
        "Classification helps organizations apply suitable protection based on sensitivity."
      ],
      [
        "What is IOC in cybersecurity?",
        "Internal Object Cache",
        "Indicator of Compromise",
        "Identity of Control",
        "Internet Operating Certificate",
        1,
        "An IOC is observable evidence that may indicate compromise."
      ],
      [
        "What is an IPS designed to do?",
        "Back up files",
        "Manage passwords",
        "Only log DNS",
        "Detect and block malicious network activity",
        3,
        "An intrusion prevention system can detect and block suspicious network activity."
      ],
      [
        "What is an IDS designed to do?",
        "Assign IP addresses",
        "Detect suspicious activity and generate alerts",
        "Encrypt every file",
        "Replace a switch",
        1,
        "An intrusion detection system monitors for suspicious activity and alerts."
      ],
      [
        "What is password spraying?",
        "Trying a small number of common passwords against many accounts",
        "Deleting users",
        "Encrypting passwords",
        "Trying every password on one account",
        0,
        "Password spraying distributes common-password attempts across many accounts."
      ],
      [
        "What is a DMZ commonly used for?",
        "Managing CPU",
        "Storing backups only",
        "Hosting services that need controlled exposure to external networks",
        "Replacing DNS",
        2,
        "A DMZ isolates externally accessible services from internal networks."
      ],
      [
        "What is CVSS used for?",
        "Scoring vulnerability severity",
        "Encrypting traffic",
        "Monitoring CPU",
        "Creating users",
        0,
        "CVSS provides a standardized framework for vulnerability severity scoring."
      ],
      [
        "What is application allowlisting?",
        "Blocking all DNS",
        "Encrypting logs",
        "Allowing every executable",
        "Permitting only approved applications to execute",
        3,
        "Allowlisting restricts execution to approved applications."
      ],
      [
        "What is segmentation used for?",
        "Changing passwords automatically",
        "Limiting the spread of threats between network zones",
        "Increasing screen resolution",
        "Reducing CPU usage",
        1,
        "Segmentation reduces unnecessary connectivity and can limit lateral movement."
      ],
      [
        "What is eradication?",
        "Removing the root cause or malicious artifacts of an incident",
        "Notifying users only",
        "Collecting evidence only",
        "Writing a report",
        0,
        "Eradication removes malware, persistence mechanisms or other root causes after containment."
      ],
      [
        "What is recovery?",
        "Starting the attack",
        "Returning affected systems to normal operation safely",
        "Deleting all logs",
        "Ignoring vulnerabilities",
        1,
        "Recovery restores systems and monitors them after remediation."
      ],
      [
        "What does RBAC assign to users or groups?",
        "IP addresses",
        "Roles containing permissions",
        "Disk quotas",
        "Only passwords",
        1,
        "Role-based access control assigns roles that contain permissions."
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
      ],
      [
        "Which protocol translates domain names to IP addresses?",
        "DHCP",
        "ARP",
        "DNS",
        "NTP",
        2,
        "DNS resolves names such as example.com to IP addresses."
      ],
      [
        "Which protocol translates domain names to IP addresses? (Choose the best answer.)",
        "ARP",
        "DHCP",
        "DNS",
        "NTP",
        2,
        "DNS resolves names such as example.com to IP addresses."
      ],
      [
        "Which service automatically assigns IP configuration to clients?",
        "DHCP",
        "DNS",
        "SNMP",
        "SSH",
        0,
        "DHCP dynamically provides IP addresses and related configuration."
      ],
      [
        "Which service automatically assigns IP configuration to clients? (Choose the best answer.)",
        "SNMP",
        "DNS",
        "DHCP",
        "SSH",
        2,
        "DHCP dynamically provides IP addresses and related configuration."
      ],
      [
        "Which protocol is connection-oriented? (Choose the best answer.)",
        "ICMP",
        "UDP",
        "ARP",
        "TCP",
        3,
        "TCP establishes a connection and provides reliable ordered delivery."
      ],
      [
        "Which port is commonly used by HTTPS?",
        "22",
        "443",
        "53",
        "25",
        1,
        "HTTPS commonly uses TCP port 443."
      ],
      [
        "Which port is commonly used by HTTPS? (Choose the best answer.)",
        "22",
        "53",
        "25",
        "443",
        3,
        "HTTPS commonly uses TCP port 443."
      ],
      [
        "Which command is commonly used to test basic IP reachability?",
        "chmod",
        "ping",
        "mkdir",
        "whoami",
        1,
        "ping uses ICMP echo requests to test reachability."
      ],
      [
        "Which command is commonly used to test basic IP reachability? (Choose the best answer.)",
        "chmod",
        "ping",
        "whoami",
        "mkdir",
        1,
        "ping uses ICMP echo requests to test reachability."
      ],
      [
        "Which address identifies a network interface at Layer 2?",
        "Port number",
        "Subnet mask",
        "DNS name",
        "MAC address",
        3,
        "A MAC address identifies a network interface at the data-link layer."
      ],
      [
        "Which address identifies a network interface at Layer 2? (Choose the best answer.)",
        "MAC address",
        "Port number",
        "DNS name",
        "Subnet mask",
        0,
        "A MAC address identifies a network interface at the data-link layer."
      ],
      [
        "What is a default gateway used for?",
        "Encrypting HTTP",
        "Forwarding traffic to destinations outside the local subnet",
        "Assigning MAC addresses",
        "Resolving DNS names",
        1,
        "A default gateway forwards packets destined for remote networks."
      ],
      [
        "What is a default gateway used for? (Choose the best answer.)",
        "Assigning MAC addresses",
        "Encrypting HTTP",
        "Resolving DNS names",
        "Forwarding traffic to destinations outside the local subnet",
        3,
        "A default gateway forwards packets destined for remote networks."
      ],
      [
        "How many bits are in an IPv4 address?",
        "128",
        "32",
        "16",
        "64",
        1,
        "IPv4 addresses are 32 bits long."
      ],
      [
        "How many bits are in an IPv4 address? (Choose the best answer.)",
        "64",
        "32",
        "16",
        "128",
        1,
        "IPv4 addresses are 32 bits long."
      ],
      [
        "How many bits are in an IPv6 address?",
        "64",
        "128",
        "32",
        "256",
        1,
        "IPv6 addresses are 128 bits long."
      ],
      [
        "How many bits are in an IPv6 address? (Choose the best answer.)",
        "32",
        "64",
        "128",
        "256",
        2,
        "IPv6 addresses are 128 bits long."
      ],
      [
        "What is the subnet mask for /24 in IPv4?",
        "255.0.0.0",
        "255.255.255.0",
        "255.255.0.0",
        "255.255.255.128",
        1,
        "A /24 leaves 24 network bits and 8 host bits, giving 255.255.255.0."
      ],
      [
        "What is the subnet mask for /24 in IPv4? (Choose the best answer.)",
        "255.255.0.0",
        "255.255.255.128",
        "255.0.0.0",
        "255.255.255.0",
        3,
        "A /24 leaves 24 network bits and 8 host bits, giving 255.255.255.0."
      ],
      [
        "Which OSI layer handles IP routing?",
        "Physical",
        "Transport",
        "Application",
        "Network layer",
        3,
        "The Network layer provides logical addressing and routing."
      ],
      [
        "Which OSI layer handles IP routing? (Choose the best answer.)",
        "Physical",
        "Application",
        "Transport",
        "Network layer",
        3,
        "The Network layer provides logical addressing and routing."
      ],
      [
        "Which OSI layer is responsible for end-to-end transport?",
        "Transport layer",
        "Data Link",
        "Physical",
        "Session",
        0,
        "The Transport layer provides end-to-end transport services such as TCP and UDP."
      ],
      [
        "Which OSI layer is responsible for end-to-end transport? (Choose the best answer.)",
        "Data Link",
        "Transport layer",
        "Physical",
        "Session",
        1,
        "The Transport layer provides end-to-end transport services such as TCP and UDP."
      ],
      [
        "Which device primarily forwards Ethernet frames based on MAC addresses?",
        "Modem only",
        "Switch",
        "DNS server",
        "Router",
        1,
        "A switch forwards Ethernet frames using MAC address tables."
      ],
      [
        "Which device primarily forwards Ethernet frames based on MAC addresses? (Choose the best answer.)",
        "Modem only",
        "Switch",
        "Router",
        "DNS server",
        1,
        "A switch forwards Ethernet frames using MAC address tables."
      ],
      [
        "Which device primarily connects different IP networks?",
        "Repeater",
        "Switch",
        "Router",
        "Patch panel",
        2,
        "Routers forward packets between different networks."
      ],
      [
        "Which device primarily connects different IP networks? (Choose the best answer.)",
        "Switch",
        "Patch panel",
        "Router",
        "Repeater",
        2,
        "Routers forward packets between different networks."
      ],
      [
        "What does NAT commonly do?",
        "Translates addresses between network domains",
        "Assigns usernames",
        "Compresses packets",
        "Encrypts files",
        0,
        "NAT translates IP addressing, often between private and public address spaces."
      ],
      [
        "What does NAT commonly do? (Choose the best answer.)",
        "Encrypts files",
        "Translates addresses between network domains",
        "Assigns usernames",
        "Compresses packets",
        1,
        "NAT translates IP addressing, often between private and public address spaces."
      ],
      [
        "What is a VPN primarily used to provide?",
        "A faster CPU",
        "A new DNS zone",
        "A physical switch",
        "An encrypted tunnel over an untrusted network",
        3,
        "VPNs commonly create protected tunnels across networks such as the Internet."
      ],
      [
        "What is a VPN primarily used to provide? (Choose the best answer.)",
        "A faster CPU",
        "A new DNS zone",
        "An encrypted tunnel over an untrusted network",
        "A physical switch",
        2,
        "VPNs commonly create protected tunnels across networks such as the Internet."
      ],
      [
        "What does ARP resolve on IPv4 Ethernet networks?",
        "Ports to users",
        "IPv4 addresses to MAC addresses",
        "URLs to certificates",
        "MAC to DNS",
        1,
        "ARP maps an IPv4 address to a local MAC address."
      ],
      [
        "What does ARP resolve on IPv4 Ethernet networks? (Choose the best answer.)",
        "URLs to certificates",
        "MAC to DNS",
        "IPv4 addresses to MAC addresses",
        "Ports to users",
        2,
        "ARP maps an IPv4 address to a local MAC address."
      ],
      [
        "Which protocol is used by ping?",
        "SMTP",
        "TCP",
        "FTP",
        "ICMP",
        3,
        "Ping uses ICMP Echo messages."
      ],
      [
        "Which protocol is used by ping? (Choose the best answer.)",
        "TCP",
        "FTP",
        "ICMP",
        "SMTP",
        2,
        "Ping uses ICMP Echo messages."
      ],
      [
        "Which protocol is commonly used to send email?",
        "DHCP",
        "DNS",
        "SMTP",
        "IMAP",
        2,
        "SMTP is used for email submission and transfer."
      ],
      [
        "Which protocol is commonly used to send email? (Choose the best answer.)",
        "DHCP",
        "SMTP",
        "DNS",
        "IMAP",
        1,
        "SMTP is used for email submission and transfer."
      ],
      [
        "What is SNMP commonly used for?",
        "Encrypting disks",
        "Resolving names",
        "Monitoring and managing network devices",
        "Transferring web pages",
        2,
        "SNMP provides management and monitoring information for network devices."
      ],
      [
        "What is SNMP commonly used for? (Choose the best answer.)",
        "Monitoring and managing network devices",
        "Resolving names",
        "Transferring web pages",
        "Encrypting disks",
        0,
        "SNMP provides management and monitoring information for network devices."
      ],
      [
        "Which protocol provides reliable ordered delivery?",
        "ICMP",
        "ARP",
        "UDP",
        "TCP",
        3,
        "TCP provides reliable, ordered byte-stream delivery."
      ],
      [
        "Which protocol is connectionless at the transport layer?",
        "UDP",
        "TLS",
        "SSH",
        "TCP",
        0,
        "UDP does not establish a transport connection like TCP."
      ],
      [
        "Which port is commonly used by SSH?",
        "21",
        "23",
        "25",
        "22",
        3,
        "SSH commonly uses TCP 22."
      ],
      [
        "Which port is commonly used by DNS queries?",
        "3389",
        "53",
        "25",
        "110",
        1,
        "DNS commonly uses port 53 for UDP and TCP."
      ],
      [
        "Which port is commonly used by SMTP?",
        "53",
        "80",
        "143",
        "25",
        3,
        "SMTP commonly uses TCP 25 for server-to-server mail transfer."
      ],
      [
        "Which port is commonly used by HTTP?",
        "22",
        "443",
        "80",
        "53",
        2,
        "HTTP commonly uses TCP 80."
      ],
      [
        "Which port is commonly used by RDP?",
        "3389",
        "22",
        "5985",
        "445",
        0,
        "RDP commonly uses TCP 3389."
      ],
      [
        "What is a routing table?",
        "A set of routes used to decide where packets are forwarded",
        "A password list",
        "A MAC table",
        "A DNS cache",
        0,
        "Routers and hosts use routing tables to select packet forwarding paths."
      ],
      [
        "What is a VLAN used for?",
        "Assigning DNS names",
        "Logical Layer 2 segmentation",
        "Encrypting disks",
        "Increasing CPU",
        1,
        "VLANs logically segment Layer 2 networks."
      ],
      [
        "Which tool traces the path toward a destination?",
        "ping only",
        "traceroute/tracert",
        "nslookup only",
        "arping only",
        1,
        "Traceroute/tracert reveals hops along the path toward a destination."
      ],
      [
        "Which port is commonly used by IMAP over TLS?",
        "995",
        "143",
        "993",
        "110",
        2,
        "IMAPS commonly uses TCP 993."
      ]
    ],
    "group": "Technical & Infrastructure"
  },
"Quantitative Aptitude": {
    "icon": "∑",
    "desc": "Percentages, ratios, averages, profit and loss, time, work and arithmetic.",
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
      ],
      [
        "What is 20% of 250?",
        "60",
        "45",
        "40",
        "50",
        3,
        "20% of 250 is 0.20 × 250 = 50."
      ],
      [
        "What is 20% of 250? (Choose the best answer.)",
        "45",
        "50",
        "60",
        "40",
        1,
        "20% of 250 is 0.20 × 250 = 50."
      ],
      [
        "A value increases from 200 to 240. What is the percentage increase?",
        "25%",
        "20%",
        "15%",
        "18%",
        1,
        "The increase is 40; 40/200 × 100 = 20%."
      ],
      [
        "A value increases from 200 to 240. What is the percentage increase? (Choose the best answer.)",
        "15%",
        "20%",
        "25%",
        "18%",
        1,
        "The increase is 40; 40/200 × 100 = 20%."
      ],
      [
        "An item costs ₹400 and is sold for ₹500. What is the profit percentage?",
        "20%",
        "22%",
        "30%",
        "25%",
        3,
        "Profit is ₹100; 100/400 × 100 = 25%."
      ],
      [
        "An item costs ₹400 and is sold for ₹500. What is the profit percentage? (Choose the best answer.)",
        "30%",
        "20%",
        "22%",
        "25%",
        3,
        "Profit is ₹100; 100/400 × 100 = 25%."
      ],
      [
        "What is the simple interest on ₹5,000 at 8% per year for 2 years?",
        "₹600",
        "₹800",
        "₹900",
        "₹700",
        1,
        "SI = PRT/100 = 5000×8×2/100 = ₹800."
      ],
      [
        "What is the simple interest on ₹5,000 at 8% per year for 2 years? (Choose the best answer.)",
        "₹900",
        "₹800",
        "₹700",
        "₹600",
        1,
        "SI = PRT/100 = 5000×8×2/100 = ₹800."
      ],
      [
        "What is the average of 10, 20 and 30?",
        "25",
        "15",
        "18",
        "20",
        3,
        "The sum is 60 and 60/3 = 20."
      ],
      [
        "What is the average of 10, 20 and 30? (Choose the best answer.)",
        "20",
        "25",
        "18",
        "15",
        0,
        "The sum is 60 and 60/3 = 20."
      ],
      [
        "If A:B = 2:3 and A = 20, what is B?",
        "28",
        "35",
        "25",
        "30",
        3,
        "The scale factor is 10, so B = 3×10 = 30."
      ],
      [
        "If A:B = 2:3 and A = 20, what is B? (Choose the best answer.)",
        "30",
        "25",
        "28",
        "35",
        0,
        "The scale factor is 10, so B = 3×10 = 30."
      ],
      [
        "If a worker completes a job in 10 days at a constant rate, what fraction is completed in one day?",
        "1/20",
        "10",
        "1/10",
        "1/5",
        2,
        "One day represents 1/10 of the total work."
      ],
      [
        "If a worker completes a job in 10 days at a constant rate, what fraction is completed in one day? (Choose the best answer.)",
        "10",
        "1/5",
        "1/10",
        "1/20",
        2,
        "One day represents 1/10 of the total work."
      ],
      [
        "A car travels 120 km in 3 hours. What is its average speed?",
        "45 km/h",
        "40 km/h",
        "60 km/h",
        "30 km/h",
        1,
        "Speed = distance/time = 120/3 = 40 km/h."
      ],
      [
        "A car travels 120 km in 3 hours. What is its average speed? (Choose the best answer.)",
        "30 km/h",
        "40 km/h",
        "60 km/h",
        "45 km/h",
        1,
        "Speed = distance/time = 120/3 = 40 km/h."
      ],
      [
        "What is the simple interest on ₹2,000 at 5% per year for 3 years?",
        "₹250",
        "₹350",
        "₹200",
        "₹300",
        3,
        "SI = 2000×5×3/100 = ₹300."
      ],
      [
        "What is the simple interest on ₹2,000 at 5% per year for 3 years? (Choose the best answer.)",
        "₹350",
        "₹200",
        "₹300",
        "₹250",
        2,
        "SI = 2000×5×3/100 = ₹300."
      ],
      [
        "A price of ₹800 is discounted by 10%. What is the sale price?",
        "₹720",
        "₹700",
        "₹710",
        "₹740",
        0,
        "10% of ₹800 is ₹80, so the sale price is ₹720."
      ],
      [
        "A price of ₹800 is discounted by 10%. What is the sale price? (Choose the best answer.)",
        "₹740",
        "₹720",
        "₹700",
        "₹710",
        1,
        "10% of ₹800 is ₹80, so the sale price is ₹720."
      ],
      [
        "The ratio 4:5 is equivalent to which ratio?",
        "16:25",
        "10:12",
        "8:15",
        "12:15",
        3,
        "Multiplying both terms by 3 gives 12:15."
      ],
      [
        "The ratio 4:5 is equivalent to which ratio? (Choose the best answer.)",
        "16:25",
        "10:12",
        "8:15",
        "12:15",
        3,
        "Multiplying both terms by 3 gives 12:15."
      ],
      [
        "The average of five numbers is 18. What is their total?",
        "80",
        "108",
        "90",
        "72",
        2,
        "Total = average × number of values = 18×5 = 90."
      ],
      [
        "The average of five numbers is 18. What is their total? (Choose the best answer.)",
        "80",
        "108",
        "90",
        "72",
        2,
        "Total = average × number of values = 18×5 = 90."
      ],
      [
        "An article is sold at cost price. What is the profit percentage?",
        "10%",
        "5%",
        "0%",
        "100%",
        2,
        "Selling at cost price gives neither profit nor loss."
      ],
      [
        "An article is sold at cost price. What is the profit percentage? (Choose the best answer.)",
        "10%",
        "0%",
        "100%",
        "5%",
        1,
        "Selling at cost price gives neither profit nor loss."
      ],
      [
        "What is 3/4 of 80?",
        "50",
        "55",
        "60",
        "64",
        2,
        "80×3/4 = 60."
      ],
      [
        "What is 3/4 of 80? (Choose the best answer.)",
        "55",
        "50",
        "64",
        "60",
        3,
        "80×3/4 = 60."
      ],
      [
        "If x + 7 = 19, what is x?",
        "13",
        "10",
        "12",
        "11",
        2,
        "Subtract 7 from both sides: x = 12."
      ],
      [
        "If x + 7 = 19, what is x? (Choose the best answer.)",
        "13",
        "12",
        "11",
        "10",
        1,
        "Subtract 7 from both sides: x = 12."
      ],
      [
        "If 3x = 27, what is x?",
        "6",
        "12",
        "9",
        "8",
        2,
        "Divide both sides by 3: x = 9."
      ],
      [
        "If 3x = 27, what is x? (Choose the best answer.)",
        "6",
        "12",
        "9",
        "8",
        2,
        "Divide both sides by 3: x = 9."
      ],
      [
        "What is the smallest prime number?",
        "1",
        "0",
        "2",
        "3",
        2,
        "2 is the smallest prime number."
      ],
      [
        "What is the smallest prime number? (Choose the best answer.)",
        "0",
        "1",
        "3",
        "2",
        3,
        "2 is the smallest prime number."
      ],
      [
        "Which number is divisible by 3?",
        "127",
        "124",
        "125",
        "123",
        3,
        "1+2+3 = 6, which is divisible by 3."
      ],
      [
        "Which number is divisible by 3? (Choose the best answer.)",
        "125",
        "127",
        "123",
        "124",
        2,
        "1+2+3 = 6, which is divisible by 3."
      ],
      [
        "If a task takes 5 days, what is the daily work rate assuming equal rates?",
        "1/10",
        "5",
        "1/5",
        "1/4",
        2,
        "One day completes one-fifth of the work."
      ],
      [
        "If a task takes 5 days, what is the daily work rate assuming equal rates? (Choose the best answer.)",
        "1/4",
        "1/10",
        "5",
        "1/5",
        3,
        "One day completes one-fifth of the work."
      ],
      [
        "If a shop sells 50 units on Monday and 75 on Tuesday, how many more were sold Tuesday?",
        "25",
        "15",
        "20",
        "30",
        0,
        "75 - 50 = 25."
      ],
      [
        "If a shop sells 50 units on Monday and 75 on Tuesday, how many more were sold Tuesday? (Choose the best answer.)",
        "20",
        "30",
        "15",
        "25",
        3,
        "75 - 50 = 25."
      ],
      [
        "What is 15% of 200?",
        "30",
        "35",
        "20",
        "25",
        0,
        "15% of 200 is 30."
      ],
      [
        "What is 25% of 160?",
        "30",
        "40",
        "45",
        "35",
        1,
        "One quarter of 160 is 40."
      ],
      [
        "If 5 pens cost ₹100, what is the cost of one pen?",
        "₹25",
        "₹30",
        "₹20",
        "₹15",
        2,
        "100 divided by 5 is ₹20."
      ],
      [
        "A number is increased by 10 from 40. What is the result?",
        "60",
        "50",
        "55",
        "45",
        1,
        "40 + 10 = 50."
      ],
      [
        "What is 30% of 90?",
        "30",
        "21",
        "27",
        "24",
        2,
        "0.30 × 90 = 27."
      ],
      [
        "What is 12.5% of 80?",
        "15",
        "8",
        "12",
        "10",
        3,
        "12.5% is one-eighth; 80/8 = 10."
      ],
      [
        "What is 3/5 of 100?",
        "55",
        "65",
        "60",
        "50",
        2,
        "100×3/5 = 60."
      ],
      [
        "A shirt costs ₹1,000 and is discounted by 20%. What is the discount?",
        "₹200",
        "₹100",
        "₹250",
        "₹150",
        0,
        "20% of ₹1,000 is ₹200."
      ],
      [
        "What is the ratio 10:15 in simplest form?",
        "1:2",
        "3:4",
        "2:3",
        "5:6",
        2,
        "Divide both terms by 5 to get 2:3."
      ],
      [
        "If 4 workers finish a job in 6 days at the same rate, how many worker-days are required?",
        "18",
        "24",
        "10",
        "30",
        1,
        "Worker-days = 4×6 = 24."
      ]
    ],
    "group": "Aptitude & Competitive Exams"
  },
"Mathematics": {
    "icon": "π",
    "desc": "Core mathematics covering algebra, geometry, number systems and basic statistics.",
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
      ],
      [
        "What is 15 × 8?",
        "110",
        "120",
        "130",
        "100",
        1,
        "15×8 = 120."
      ],
      [
        "What is 15 × 8? (Choose the best answer.)",
        "100",
        "130",
        "110",
        "120",
        3,
        "15×8 = 120."
      ],
      [
        "What is 144 ÷ 12?",
        "10",
        "14",
        "12",
        "11",
        2,
        "144 divided by 12 is 12."
      ],
      [
        "What is 144 ÷ 12? (Choose the best answer.)",
        "10",
        "14",
        "12",
        "11",
        2,
        "144 divided by 12 is 12."
      ],
      [
        "Solve x - 9 = 4.",
        "5",
        "13",
        "12",
        "14",
        1,
        "Adding 9 to both sides gives x = 13."
      ],
      [
        "Solve x - 9 = 4. Choose the best answer.",
        "13",
        "14",
        "5",
        "12",
        0,
        "Adding 9 to both sides gives x = 13."
      ],
      [
        "Solve 2x + 4 = 14.",
        "4",
        "6",
        "7",
        "5",
        3,
        "2x = 10, so x = 5."
      ],
      [
        "Solve 2x + 4 = 14. Choose the best answer.",
        "7",
        "4",
        "5",
        "6",
        2,
        "2x = 10, so x = 5."
      ],
      [
        "How many degrees are in a straight angle?",
        "360°",
        "180°",
        "120°",
        "90°",
        1,
        "A straight angle measures 180 degrees."
      ],
      [
        "How many degrees are in a straight angle? (Choose the best answer.)",
        "360°",
        "90°",
        "180°",
        "120°",
        2,
        "A straight angle measures 180 degrees."
      ],
      [
        "How many degrees are in a right angle?",
        "45°",
        "180°",
        "90°",
        "120°",
        2,
        "A right angle measures 90 degrees."
      ],
      [
        "How many degrees are in a right angle? (Choose the best answer.)",
        "180°",
        "120°",
        "90°",
        "45°",
        2,
        "A right angle measures 90 degrees."
      ],
      [
        "What is the sum of angles in a triangle?",
        "180°",
        "90°",
        "270°",
        "360°",
        0,
        "The interior angles of a triangle sum to 180 degrees."
      ],
      [
        "What is the sum of angles in a triangle? (Choose the best answer.)",
        "360°",
        "180°",
        "270°",
        "90°",
        1,
        "The interior angles of a triangle sum to 180 degrees."
      ],
      [
        "What is the area of a rectangle 8 units by 5 units?",
        "26 square units",
        "40 square units",
        "80 square units",
        "13 square units",
        1,
        "Area = length×width = 8×5 = 40."
      ],
      [
        "What is the area of a rectangle 8 units by 5 units? (Choose the best answer.)",
        "40 square units",
        "26 square units",
        "13 square units",
        "80 square units",
        0,
        "Area = length×width = 8×5 = 40."
      ],
      [
        "What is the perimeter of a square with side 6 units?",
        "36 units",
        "24 units",
        "12 units",
        "18 units",
        1,
        "Perimeter = 4×side = 24."
      ],
      [
        "What is the perimeter of a square with side 6 units? (Choose the best answer.)",
        "36 units",
        "18 units",
        "24 units",
        "12 units",
        2,
        "Perimeter = 4×side = 24."
      ],
      [
        "What is the value of 2^5?",
        "16",
        "25",
        "64",
        "32",
        3,
        "2×2×2×2×2 = 32."
      ],
      [
        "What is the value of 2^5? (Choose the best answer.)",
        "25",
        "16",
        "64",
        "32",
        3,
        "2×2×2×2×2 = 32."
      ],
      [
        "What is the LCM of 4 and 6?",
        "12",
        "10",
        "24",
        "8",
        0,
        "The smallest common multiple of 4 and 6 is 12."
      ],
      [
        "What is the LCM of 4 and 6? (Choose the best answer.)",
        "24",
        "12",
        "8",
        "10",
        1,
        "The smallest common multiple of 4 and 6 is 12."
      ],
      [
        "What is the HCF of 18 and 24? (Choose the best answer.)",
        "3",
        "12",
        "9",
        "6",
        3,
        "The greatest common factor of 18 and 24 is 6."
      ],
      [
        "What is 1/2 + 1/4?",
        "1/6",
        "3/4",
        "2/4",
        "5/8",
        1,
        "Using denominator 4: 2/4 + 1/4 = 3/4."
      ],
      [
        "What is 1/2 + 1/4? (Choose the best answer.)",
        "3/4",
        "1/6",
        "2/4",
        "5/8",
        0,
        "Using denominator 4: 2/4 + 1/4 = 3/4."
      ],
      [
        "What is 0.75 as a fraction in simplest form?",
        "2/3",
        "3/4",
        "4/5",
        "1/2",
        1,
        "0.75 = 75/100 = 3/4 after simplification."
      ],
      [
        "What is 0.75 as a fraction in simplest form? (Choose the best answer.)",
        "1/2",
        "4/5",
        "3/4",
        "2/3",
        2,
        "0.75 = 75/100 = 3/4 after simplification."
      ],
      [
        "What is the probability of getting heads on a fair coin toss?",
        "1/2",
        "1",
        "1/3",
        "1/4",
        0,
        "There are two equally likely outcomes and one is heads."
      ],
      [
        "What is the probability of getting heads on a fair coin toss? (Choose the best answer.)",
        "1/4",
        "1/2",
        "1/3",
        "1",
        1,
        "There are two equally likely outcomes and one is heads."
      ],
      [
        "What is the median of 3, 5, 7?",
        "6",
        "3",
        "7",
        "5",
        3,
        "The middle value of the ordered set is 5."
      ],
      [
        "What is the median of 3, 5, 7? (Choose the best answer.)",
        "7",
        "3",
        "6",
        "5",
        3,
        "The middle value of the ordered set is 5."
      ],
      [
        "What is the mode of 2, 3, 3, 4?",
        "5",
        "2",
        "3",
        "4",
        2,
        "3 occurs most frequently."
      ],
      [
        "What is the mode of 2, 3, 3, 4? (Choose the best answer.)",
        "4",
        "3",
        "2",
        "5",
        1,
        "3 occurs most frequently."
      ],
      [
        "What is the next number in 2, 4, 6, 8?",
        "12",
        "9",
        "10",
        "11",
        2,
        "The sequence increases by 2 each time."
      ],
      [
        "What is the next number in 2, 4, 6, 8? (Choose the best answer.)",
        "11",
        "9",
        "12",
        "10",
        3,
        "The sequence increases by 2 each time."
      ],
      [
        "What is the volume of a cube with side 3 units?",
        "27 cubic units",
        "18 cubic units",
        "9 cubic units",
        "36 cubic units",
        0,
        "Volume = side³ = 3³ = 27."
      ],
      [
        "What is the volume of a cube with side 3 units? (Choose the best answer.)",
        "18 cubic units",
        "36 cubic units",
        "27 cubic units",
        "9 cubic units",
        2,
        "Volume = side³ = 3³ = 27."
      ],
      [
        "What is the x-coordinate of the point (4, 7)?",
        "4",
        "3",
        "7",
        "11",
        0,
        "The first coordinate is x and the second is y."
      ],
      [
        "What is the x-coordinate of the point (4, 7)? (Choose the best answer.)",
        "4",
        "3",
        "11",
        "7",
        0,
        "The first coordinate is x and the second is y."
      ],
      [
        "What is 17 + 28?",
        "43",
        "46",
        "45",
        "44",
        2,
        "17 + 28 = 45."
      ],
      [
        "What is 96 - 37?",
        "58",
        "57",
        "59",
        "60",
        2,
        "96 - 37 = 59."
      ],
      [
        "What is 13 × 7?",
        "97",
        "87",
        "91",
        "81",
        2,
        "13×7 = 91."
      ],
      [
        "What is 225 ÷ 15?",
        "20",
        "18",
        "12",
        "15",
        3,
        "225/15 = 15."
      ],
      [
        "What is the square of 12?",
        "154",
        "144",
        "124",
        "132",
        1,
        "12×12 = 144."
      ],
      [
        "What is the cube of 4?",
        "32",
        "64",
        "16",
        "81",
        1,
        "4×4×4 = 64."
      ],
      [
        "What is 2/3 of 30?",
        "24",
        "15",
        "20",
        "18",
        2,
        "30×2/3 = 20."
      ],
      [
        "What is 35% of 200?",
        "70",
        "65",
        "60",
        "75",
        0,
        "0.35×200 = 70."
      ],
      [
        "What is the next multiple of 9 after 45?",
        "48",
        "63",
        "52",
        "54",
        3,
        "The next multiple is 9 higher: 54."
      ],
      [
        "What is the sum of the first five positive integers?",
        "20",
        "15",
        "12",
        "10",
        1,
        "1+2+3+4+5 = 15."
      ],
      [
        "What is 18 × 5?",
        "95",
        "85",
        "80",
        "90",
        3,
        "18×5 = 90."
      ]
    ],
    "group": "Aptitude & Competitive Exams"
  },
"Logical Reasoning": {
    "icon": "◈",
    "desc": "Analogy, series, coding-decoding, directions, syllogisms and logical patterns.",
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
      ],
      [
        "What comes next: 2, 4, 6, 8?",
        "10",
        "9",
        "12",
        "11",
        0,
        "The numbers increase by 2."
      ],
      [
        "What comes next: 2, 4, 6, 8? (Choose the best answer.)",
        "10",
        "12",
        "9",
        "11",
        0,
        "The numbers increase by 2."
      ],
      [
        "What comes next: 3, 6, 12, 24?",
        "36",
        "54",
        "42",
        "48",
        3,
        "Each term doubles."
      ],
      [
        "What comes next: 3, 6, 12, 24? (Choose the best answer.)",
        "54",
        "42",
        "48",
        "36",
        2,
        "Each term doubles."
      ],
      [
        "Book is to Reading as Fork is to what?",
        "Sleeping",
        "Driving",
        "Eating",
        "Writing",
        2,
        "A book is used for reading; a fork is used for eating."
      ],
      [
        "Book is to Reading as Fork is to what? (Choose the best answer.)",
        "Sleeping",
        "Eating",
        "Writing",
        "Driving",
        1,
        "A book is used for reading; a fork is used for eating."
      ],
      [
        "Bird is to Nest as Bee is to what?",
        "Kennel",
        "Stable",
        "Hive",
        "Den",
        2,
        "A bee lives in a hive."
      ],
      [
        "Bird is to Nest as Bee is to what? (Choose the best answer.)",
        "Kennel",
        "Hive",
        "Den",
        "Stable",
        1,
        "A bee lives in a hive."
      ],
      [
        "If CAT is coded as DBU by shifting each letter one place forward, how is DOG coded?",
        "FQI",
        "EPH",
        "EOG",
        "DPH",
        1,
        "D→E, O→P, G→H gives EPH."
      ],
      [
        "If CAT is coded as DBU by shifting each letter one place forward, how is DOG coded? (Choose the best answer.)",
        "EOG",
        "FQI",
        "EPH",
        "DPH",
        2,
        "D→E, O→P, G→H gives EPH."
      ],
      [
        "If you face north and turn right, which direction do you face?",
        "East",
        "West",
        "North-East",
        "South",
        0,
        "A right turn from north points east."
      ],
      [
        "If you face north and turn right, which direction do you face? (Choose the best answer.)",
        "East",
        "North-East",
        "West",
        "South",
        0,
        "A right turn from north points east."
      ],
      [
        "If you face east and turn left, which direction do you face?",
        "North-East",
        "North",
        "South",
        "West",
        1,
        "A left turn from east points north."
      ],
      [
        "If you face east and turn left, which direction do you face? (Choose the best answer.)",
        "North-East",
        "South",
        "North",
        "West",
        2,
        "A left turn from east points north."
      ],
      [
        "Your mother's brother is your what?",
        "Paternal uncle",
        "Nephew",
        "Maternal uncle",
        "Cousin",
        2,
        "Your mother's brother is your maternal uncle."
      ],
      [
        "Your mother's brother is your what? (Choose the best answer.)",
        "Cousin",
        "Nephew",
        "Paternal uncle",
        "Maternal uncle",
        3,
        "Your mother's brother is your maternal uncle."
      ],
      [
        "Which is different: Apple, Mango, Carrot, Banana?",
        "Mango",
        "Carrot",
        "Apple",
        "Banana",
        1,
        "Carrot is a vegetable; the others are fruits."
      ],
      [
        "Which is different: Apple, Mango, Carrot, Banana? (Choose the best answer.)",
        "Carrot",
        "Banana",
        "Apple",
        "Mango",
        0,
        "Carrot is a vegetable; the others are fruits."
      ],
      [
        "Which is different: Square, Triangle, Circle, Cube?",
        "Cube",
        "Square",
        "Triangle",
        "Circle",
        0,
        "Cube is a 3D solid; the others are 2D shapes."
      ],
      [
        "Which is different: Square, Triangle, Circle, Cube? (Choose the best answer.)",
        "Square",
        "Cube",
        "Triangle",
        "Circle",
        1,
        "Cube is a 3D solid; the others are 2D shapes."
      ],
      [
        "If all cats are animals and all animals breathe, what follows?",
        "All cats breathe",
        "All breathing things are cats",
        "Some animals are not cats",
        "No cats breathe",
        0,
        "If cats are a subset of animals and animals breathe, cats breathe."
      ],
      [
        "If all cats are animals and all animals breathe, what follows? (Choose the best answer.)",
        "Some animals are not cats",
        "All cats breathe",
        "No cats breathe",
        "All breathing things are cats",
        1,
        "If cats are a subset of animals and animals breathe, cats breathe."
      ],
      [
        "If Ravi is taller than Amit and Amit is taller than Sunil, who is shortest?",
        "Cannot be determined",
        "Ravi",
        "Amit",
        "Sunil",
        3,
        "The ordering is Ravi > Amit > Sunil."
      ],
      [
        "If Ravi is taller than Amit and Amit is taller than Sunil, who is shortest? (Choose the best answer.)",
        "Amit",
        "Ravi",
        "Cannot be determined",
        "Sunil",
        3,
        "The ordering is Ravi > Amit > Sunil."
      ],
      [
        "In a race, A finishes before B and B before C. Who finishes first among them?",
        "C",
        "B",
        "A",
        "Cannot be determined",
        2,
        "The stated order is A before B before C."
      ],
      [
        "In a race, A finishes before B and B before C. Who finishes first among them? (Choose the best answer.)",
        "C",
        "A",
        "B",
        "Cannot be determined",
        1,
        "The stated order is A before B before C."
      ],
      [
        "How many days are in a standard non-leap year?",
        "365",
        "360",
        "366",
        "364",
        0,
        "A standard year has 365 days."
      ],
      [
        "How many days are in a standard non-leap year? (Choose the best answer.)",
        "365",
        "364",
        "366",
        "360",
        0,
        "A standard year has 365 days."
      ],
      [
        "How many degrees does the minute hand move in one minute?",
        "6°",
        "12°",
        "10°",
        "5°",
        0,
        "The minute hand covers 360° in 60 minutes, or 6° per minute."
      ],
      [
        "How many degrees does the minute hand move in one minute? (Choose the best answer.)",
        "6°",
        "12°",
        "5°",
        "10°",
        0,
        "The minute hand covers 360° in 60 minutes, or 6° per minute."
      ],
      [
        "If BLUE is coded by reversing the letters, what is the code?",
        "BULE",
        "EULB",
        "BLUE",
        "ELUB",
        1,
        "Reversing BLUE gives EULB."
      ],
      [
        "If BLUE is coded by reversing the letters, what is the code? (Choose the best answer.)",
        "BLUE",
        "EULB",
        "ELUB",
        "BULE",
        1,
        "Reversing BLUE gives EULB."
      ],
      [
        "If A sits immediately left of B, who is to the right of A?",
        "No one",
        "Cannot be determined",
        "A",
        "B",
        3,
        "Immediate left means B is directly to A's right."
      ],
      [
        "If A sits immediately left of B, who is to the right of A? (Choose the best answer.)",
        "No one",
        "Cannot be determined",
        "A",
        "B",
        3,
        "Immediate left means B is directly to A's right."
      ],
      [
        "If all roses are flowers, can a rose be a flower?",
        "Cannot ever be true",
        "No",
        "Yes",
        "Only sometimes",
        2,
        "The statement explicitly places roses within flowers."
      ],
      [
        "If all roses are flowers, can a rose be a flower? (Choose the best answer.)",
        "Only sometimes",
        "Cannot ever be true",
        "No",
        "Yes",
        3,
        "The statement explicitly places roses within flowers."
      ],
      [
        "Which is different: 2, 3, 5, 9?",
        "5",
        "2",
        "9",
        "3",
        2,
        "2, 3 and 5 are prime numbers; 9 is composite."
      ],
      [
        "Which is different: 2, 3, 5, 9? (Choose the best answer.)",
        "9",
        "5",
        "3",
        "2",
        0,
        "2, 3 and 5 are prime numbers; 9 is composite."
      ],
      [
        "What comes next: AZ, BY, CX?",
        "DW",
        "EV",
        "CY",
        "DX",
        0,
        "The first letter moves forward while the second moves backward: A-Z, B-Y, C-X, D-W."
      ],
      [
        "What comes next: AZ, BY, CX? (Choose the best answer.)",
        "DW",
        "DX",
        "EV",
        "CY",
        0,
        "The first letter moves forward while the second moves backward: A-Z, B-Y, C-X, D-W."
      ],
      [
        "What comes next: 5, 10, 15, 20?",
        "24",
        "22",
        "30",
        "25",
        3,
        "The sequence increases by 5."
      ],
      [
        "What comes next: 1, 4, 7, 10?",
        "11",
        "14",
        "13",
        "12",
        2,
        "The sequence increases by 3."
      ],
      [
        "What comes next: 2, 6, 18, 54?",
        "108",
        "162",
        "144",
        "216",
        1,
        "Each term is multiplied by 3."
      ],
      [
        "What comes next: 100, 90, 80, 70?",
        "50",
        "75",
        "65",
        "60",
        3,
        "The sequence decreases by 10."
      ],
      [
        "What comes next: 1, 2, 4, 8, 16?",
        "32",
        "24",
        "30",
        "36",
        0,
        "Each term doubles."
      ],
      [
        "What comes next: 10, 20, 40, 80?",
        "160",
        "120",
        "180",
        "140",
        0,
        "Each term doubles."
      ],
      [
        "What comes next: 81, 27, 9, 3?",
        "6",
        "2",
        "0",
        "1",
        3,
        "Each term is divided by 3."
      ],
      [
        "What comes next: 7, 14, 21, 28?",
        "35",
        "34",
        "32",
        "42",
        0,
        "The sequence increases by 7."
      ],
      [
        "What comes next: 2, 3, 5, 8, 13?",
        "23",
        "18",
        "20",
        "21",
        3,
        "Each term is the sum of the previous two."
      ],
      [
        "What comes next: 50, 45, 40, 35?",
        "32",
        "28",
        "30",
        "25",
        2,
        "The sequence decreases by 5."
      ]
    ],
    "group": "Aptitude & Competitive Exams"
  },
"English": {
    "icon": "Aa",
    "desc": "Grammar, vocabulary, sentence usage, comprehension and verbal ability.",
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
        "quickly",
        0,
        "Manager is a noun; approved is a verb, the is an article, and quickly is an adverb."
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
      ],
      [
        "Choose the correct sentence.",
        "She go to school every day.",
        "She goes to school every day.",
        "She gone to school every day.",
        "She going to school every day.",
        1,
        "The singular subject she takes goes in the simple present."
      ],
      [
        "Choose the correct sentence. Choose the best answer.",
        "She gone to school every day.",
        "She go to school every day.",
        "She going to school every day.",
        "She goes to school every day.",
        3,
        "The singular subject she takes goes in the simple present."
      ],
      [
        "Choose the correct article: He is ___ honest man.",
        "a",
        "an",
        "no article",
        "the",
        1,
        "Honest begins with a vowel sound, so an is used."
      ],
      [
        "Choose the correct article: He is ___ honest man. Choose the best answer.",
        "the",
        "a",
        "an",
        "no article",
        2,
        "Honest begins with a vowel sound, so an is used."
      ],
      [
        "What is the past tense of go?",
        "gone",
        "went",
        "going",
        "goed",
        1,
        "Went is the simple past form of go."
      ],
      [
        "What is the past tense of go? (Choose the best answer.)",
        "going",
        "went",
        "gone",
        "goed",
        1,
        "Went is the simple past form of go."
      ],
      [
        "What is the plural of child?",
        "children",
        "childrens",
        "childs",
        "childes",
        0,
        "Children is the irregular plural of child."
      ],
      [
        "What is the plural of child? (Choose the best answer.)",
        "childrens",
        "children",
        "childs",
        "childes",
        1,
        "Children is the irregular plural of child."
      ],
      [
        "What is a synonym of rapid?",
        "late",
        "slow",
        "quick",
        "weak",
        2,
        "Rapid means quick or fast."
      ],
      [
        "What is a synonym of rapid? (Choose the best answer.)",
        "late",
        "weak",
        "slow",
        "quick",
        3,
        "Rapid means quick or fast."
      ],
      [
        "What is an antonym of ancient?",
        "old",
        "modern",
        "historic",
        "former",
        1,
        "Modern is opposite in meaning to ancient."
      ],
      [
        "What is an antonym of ancient? (Choose the best answer.)",
        "former",
        "historic",
        "modern",
        "old",
        2,
        "Modern is opposite in meaning to ancient."
      ],
      [
        "What is a synonym of assist?",
        "help",
        "refuse",
        "avoid",
        "delay",
        0,
        "Assist means help."
      ],
      [
        "What is a synonym of assist? (Choose the best answer.)",
        "avoid",
        "refuse",
        "delay",
        "help",
        3,
        "Assist means help."
      ],
      [
        "What is an antonym of scarce?",
        "abundant",
        "limited",
        "rare",
        "small",
        0,
        "Abundant means plentiful, opposite of scarce."
      ],
      [
        "What is an antonym of scarce? (Choose the best answer.)",
        "rare",
        "abundant",
        "small",
        "limited",
        1,
        "Abundant means plentiful, opposite of scarce."
      ],
      [
        "What part of speech is the word quickly?",
        "Adverb",
        "Noun",
        "Pronoun",
        "Conjunction",
        0,
        "Quickly modifies a verb and is an adverb."
      ],
      [
        "What part of speech is the word quickly? (Choose the best answer.)",
        "Pronoun",
        "Conjunction",
        "Adverb",
        "Noun",
        2,
        "Quickly modifies a verb and is an adverb."
      ],
      [
        "What part of speech is happiness?",
        "Noun",
        "Adjective",
        "Adverb",
        "Verb",
        0,
        "Happiness names a state or quality and functions as a noun."
      ],
      [
        "What part of speech is happiness? (Choose the best answer.)",
        "Verb",
        "Noun",
        "Adjective",
        "Adverb",
        1,
        "Happiness names a state or quality and functions as a noun."
      ],
      [
        "What part of speech is beautiful?",
        "Verb",
        "Adjective",
        "Noun",
        "Preposition",
        1,
        "Beautiful describes a noun and is an adjective."
      ],
      [
        "What part of speech is beautiful? (Choose the best answer.)",
        "Adjective",
        "Preposition",
        "Noun",
        "Verb",
        0,
        "Beautiful describes a noun and is an adjective."
      ],
      [
        "Which tense is used in I have finished my work?",
        "Future perfect",
        "Simple past",
        "Present perfect",
        "Past perfect",
        2,
        "Have finished is the present perfect construction."
      ],
      [
        "Which tense is used in I have finished my work? (Choose the best answer.)",
        "Future perfect",
        "Present perfect",
        "Simple past",
        "Past perfect",
        1,
        "Have finished is the present perfect construction."
      ],
      [
        "Which tense is used in They were playing?",
        "Present continuous",
        "Simple future",
        "Past continuous",
        "Past perfect",
        2,
        "Were playing is past continuous."
      ],
      [
        "Which tense is used in They were playing? (Choose the best answer.)",
        "Present continuous",
        "Past perfect",
        "Simple future",
        "Past continuous",
        3,
        "Were playing is past continuous."
      ],
      [
        "Choose the correct word: The book is ___ the table.",
        "on",
        "to",
        "by",
        "at",
        0,
        "On indicates the book is resting on the table surface."
      ],
      [
        "Choose the correct word: The book is ___ the table. Choose the best answer.",
        "to",
        "by",
        "at",
        "on",
        3,
        "On indicates the book is resting on the table surface."
      ],
      [
        "Which word is a conjunction?",
        "quickly",
        "under",
        "beautiful",
        "although",
        3,
        "Although connects clauses and is a conjunction."
      ],
      [
        "Which word is a conjunction? (Choose the best answer.)",
        "beautiful",
        "although",
        "quickly",
        "under",
        1,
        "Although connects clauses and is a conjunction."
      ],
      [
        "Which pronoun can replace Rahul in “Rahul is here”?",
        "They",
        "It",
        "We",
        "He",
        3,
        "Rahul is singular and male in the example, so he can replace the name."
      ],
      [
        "Which pronoun can replace Rahul in “Rahul is here”? (Choose the best answer.)",
        "He",
        "They",
        "We",
        "It",
        0,
        "Rahul is singular and male in the example, so he can replace the name."
      ],
      [
        "Choose the correct form: Neither of the answers ___ correct.",
        "is",
        "be",
        "are",
        "were",
        0,
        "Neither is grammatically singular in standard usage."
      ],
      [
        "Choose the correct form: Neither of the answers ___ correct. Choose the best answer.",
        "are",
        "is",
        "be",
        "were",
        1,
        "Neither is grammatically singular in standard usage."
      ],
      [
        "What does “benevolent” mean?",
        "careless",
        "uncertain",
        "angry",
        "kind and charitable",
        3,
        "Benevolent describes someone inclined to do good or show kindness."
      ],
      [
        "What does “benevolent” mean? (Choose the best answer.)",
        "kind and charitable",
        "angry",
        "careless",
        "uncertain",
        0,
        "Benevolent describes someone inclined to do good or show kindness."
      ],
      [
        "What does “meticulous” mean?",
        "very fast",
        "very careless",
        "very careful and precise",
        "very noisy",
        2,
        "Meticulous means extremely careful about details."
      ],
      [
        "What does “meticulous” mean? (Choose the best answer.)",
        "very fast",
        "very careful and precise",
        "very careless",
        "very noisy",
        1,
        "Meticulous means extremely careful about details."
      ],
      [
        "Which spelling is correct?",
        "accomodation",
        "accommadation",
        "acommodation",
        "accommodation",
        3,
        "Accommodation is the standard spelling."
      ],
      [
        "Which spelling is correct? (Choose the best answer.)",
        "accomodation",
        "accommadation",
        "accommodation",
        "acommodation",
        2,
        "Accommodation is the standard spelling."
      ],
      [
        "What is a synonym of “begin”?",
        "stop",
        "finish",
        "delay",
        "start",
        3,
        "Begin and start have similar meanings."
      ],
      [
        "What is an antonym of “expand”?",
        "extend",
        "increase",
        "contract",
        "grow",
        2,
        "Contract is opposite in meaning to expand."
      ],
      [
        "Choose the correct form: They ___ playing football.",
        "are",
        "be",
        "is",
        "am",
        0,
        "They takes the plural auxiliary are."
      ],
      [
        "Choose the correct form: I ___ a book yesterday.",
        "reading",
        "will read",
        "reads",
        "read",
        3,
        "Read is the simple past form in this sentence."
      ],
      [
        "Choose the correct word: Each student ___ a book.",
        "have",
        "are",
        "has",
        "having",
        2,
        "Each is singular and takes has."
      ],
      [
        "What part of speech is “and”?",
        "Adverb",
        "Adjective",
        "Noun",
        "Conjunction",
        3,
        "And connects words or clauses and is a conjunction."
      ],
      [
        "What part of speech is “under” in “under the table”?",
        "Verb",
        "Preposition",
        "Noun",
        "Conjunction",
        1,
        "Under shows a relationship between the noun and table and is a preposition."
      ],
      [
        "What does “obsolete” mean?",
        "highly popular",
        "newly invented",
        "very expensive",
        "no longer in use",
        3,
        "Obsolete means no longer used or current."
      ],
      [
        "What does “concise” mean?",
        "long and confusing",
        "uncertain",
        "brief and clear",
        "angry",
        2,
        "Concise means expressing something clearly in few words."
      ],
      [
        "What is an antonym of “transparent”?",
        "opaque",
        "visible",
        "obvious",
        "clear",
        0,
        "Opaque is opposite in meaning to transparent."
      ]
    ],
    "group": "Aptitude & Competitive Exams"
  },
"General Studies": {
    "icon": "GS",
    "desc": "Static general knowledge across history, geography, polity, science and economics.",
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
      ],
      [
        "What is the supreme law of India?",
        "A state law",
        "The IPC",
        "The Budget",
        "The Constitution of India",
        3,
        "The Constitution is the supreme legal framework of India."
      ],
      [
        "What is the supreme law of India? (Choose the best answer.)",
        "The Budget",
        "The IPC",
        "A state law",
        "The Constitution of India",
        3,
        "The Constitution is the supreme legal framework of India."
      ],
      [
        "Who is the constitutional head of the Union executive in India?",
        "The Speaker",
        "The Chief Justice",
        "The President",
        "The Prime Minister",
        2,
        "The President is the constitutional head of the Union executive."
      ],
      [
        "Who is the constitutional head of the Union executive in India? (Choose the best answer.)",
        "The President",
        "The Speaker",
        "The Prime Minister",
        "The Chief Justice",
        0,
        "The President is the constitutional head of the Union executive."
      ],
      [
        "What is the lower house of Parliament called?",
        "Lok Sabha",
        "Lok Parishad",
        "Rajya Sabha",
        "Vidhan Sabha",
        0,
        "Lok Sabha is the House of the People and lower house of Parliament."
      ],
      [
        "What is the lower house of Parliament called? (Choose the best answer.)",
        "Lok Sabha",
        "Vidhan Sabha",
        "Lok Parishad",
        "Rajya Sabha",
        0,
        "Lok Sabha is the House of the People and lower house of Parliament."
      ],
      [
        "What is the upper house of Parliament called?",
        "Lok Sabha",
        "Rajya Sabha",
        "Jan Sabha",
        "Vidhan Parishad",
        1,
        "Rajya Sabha is the Council of States and upper house."
      ],
      [
        "What is the upper house of Parliament called? (Choose the best answer.)",
        "Vidhan Parishad",
        "Jan Sabha",
        "Rajya Sabha",
        "Lok Sabha",
        2,
        "Rajya Sabha is the Council of States and upper house."
      ],
      [
        "What is the longest river in India by commonly cited total length?",
        "Godavari",
        "Yamuna",
        "Ganga",
        "Narmada",
        2,
        "The Ganga is commonly identified as India's longest river by total length."
      ],
      [
        "What is the longest river in India by commonly cited total length? (Choose the best answer.)",
        "Narmada",
        "Ganga",
        "Yamuna",
        "Godavari",
        1,
        "The Ganga is commonly identified as India's longest river by total length."
      ],
      [
        "Which ocean lies south of India?",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
        1,
        "India projects into the Indian Ocean."
      ],
      [
        "Which ocean lies south of India? (Choose the best answer.)",
        "Pacific Ocean",
        "Arctic Ocean",
        "Indian Ocean",
        "Atlantic Ocean",
        2,
        "India projects into the Indian Ocean."
      ],
      [
        "Which is the highest mountain peak in the world?",
        "K2",
        "Kangchenjunga",
        "Mount Everest",
        "Nanda Devi",
        2,
        "Mount Everest is the highest mountain above sea level."
      ],
      [
        "Which is the highest mountain peak in the world? (Choose the best answer.)",
        "Mount Everest",
        "Kangchenjunga",
        "Nanda Devi",
        "K2",
        0,
        "Mount Everest is the highest mountain above sea level."
      ],
      [
        "Who is associated with the Mauryan emperor Ashoka?",
        "The Mauryan Empire",
        "Gupta Empire",
        "Mughal Empire",
        "Chola Empire",
        0,
        "Ashoka was a major Mauryan emperor."
      ],
      [
        "Who is associated with the Mauryan emperor Ashoka? (Choose the best answer.)",
        "Chola Empire",
        "Mughal Empire",
        "Gupta Empire",
        "The Mauryan Empire",
        3,
        "Ashoka was a major Mauryan emperor."
      ],
      [
        "The Quit India Movement began in which year?",
        "1950",
        "1942",
        "1930",
        "1947",
        1,
        "The Quit India Movement was launched in August 1942."
      ],
      [
        "The Quit India Movement began in which year? (Choose the best answer.)",
        "1947",
        "1930",
        "1942",
        "1950",
        2,
        "The Quit India Movement was launched in August 1942."
      ],
      [
        "India became independent in which year?",
        "1942",
        "1952",
        "1950",
        "1947",
        3,
        "India gained independence on 15 August 1947."
      ],
      [
        "India became independent in which year? (Choose the best answer.)",
        "1950",
        "1952",
        "1947",
        "1942",
        2,
        "India gained independence on 15 August 1947."
      ],
      [
        "What does GDP stand for?",
        "Government Domestic Production",
        "Gross Development Price",
        "Gross Domestic Product",
        "General Development Plan",
        2,
        "GDP measures the value of final goods and services produced within an economy over a period."
      ],
      [
        "What does GDP stand for? (Choose the best answer.)",
        "Gross Domestic Product",
        "Gross Development Price",
        "General Development Plan",
        "Government Domestic Production",
        0,
        "GDP measures the value of final goods and services produced within an economy over a period."
      ],
      [
        "What is inflation?",
        "A rise in unemployment only",
        "A fall in output only",
        "A sustained rise in the general price level",
        "A fall in all prices",
        2,
        "Inflation is a sustained increase in the general price level."
      ],
      [
        "What is inflation? (Choose the best answer.)",
        "A sustained rise in the general price level",
        "A fall in all prices",
        "A fall in output only",
        "A rise in unemployment only",
        0,
        "Inflation is a sustained increase in the general price level."
      ],
      [
        "What gas do plants primarily use in photosynthesis?",
        "Carbon dioxide",
        "Hydrogen",
        "Nitrogen",
        "Oxygen",
        0,
        "Plants use carbon dioxide, water and light to produce sugars during photosynthesis."
      ],
      [
        "What gas do plants primarily use in photosynthesis? (Choose the best answer.)",
        "Hydrogen",
        "Oxygen",
        "Carbon dioxide",
        "Nitrogen",
        2,
        "Plants use carbon dioxide, water and light to produce sugars during photosynthesis."
      ],
      [
        "What is the chemical symbol for oxygen?",
        "Ox",
        "Og",
        "O2O",
        "O",
        3,
        "O is the chemical symbol for oxygen; O2 is the common molecular form."
      ],
      [
        "What is the chemical symbol for oxygen? (Choose the best answer.)",
        "O",
        "Ox",
        "O2O",
        "Og",
        0,
        "O is the chemical symbol for oxygen; O2 is the common molecular form."
      ],
      [
        "Which organ pumps blood through the human body? (Choose the best answer.)",
        "Liver",
        "Heart",
        "Lung",
        "Kidney",
        1,
        "The heart pumps blood through the circulatory system."
      ],
      [
        "What is the SI unit of electric current?",
        "volt",
        "watt",
        "ohm",
        "ampere",
        3,
        "The ampere is the SI base unit of electric current."
      ],
      [
        "What is the SI unit of electric current? (Choose the best answer.)",
        "ampere",
        "watt",
        "volt",
        "ohm",
        0,
        "The ampere is the SI base unit of electric current."
      ],
      [
        "Which gas is a major greenhouse gas?",
        "Neon",
        "Helium",
        "Argon",
        "Carbon dioxide",
        3,
        "Carbon dioxide is a major greenhouse gas."
      ],
      [
        "Which gas is a major greenhouse gas? (Choose the best answer.)",
        "Carbon dioxide",
        "Helium",
        "Neon",
        "Argon",
        0,
        "Carbon dioxide is a major greenhouse gas."
      ],
      [
        "What is biodiversity?",
        "The variety of living organisms and ecosystems",
        "Only forest area",
        "Only plant count",
        "Only animal weight",
        0,
        "Biodiversity refers to biological variety across genes, species and ecosystems."
      ],
      [
        "What is biodiversity? (Choose the best answer.)",
        "Only animal weight",
        "The variety of living organisms and ecosystems",
        "Only forest area",
        "Only plant count",
        1,
        "Biodiversity refers to biological variety across genes, species and ecosystems."
      ],
      [
        "Where is the headquarters of the United Nations?",
        "Vienna",
        "Paris",
        "New York City",
        "Geneva",
        2,
        "The UN headquarters is in New York City."
      ],
      [
        "Where is the headquarters of the United Nations? (Choose the best answer.)",
        "Geneva",
        "Paris",
        "Vienna",
        "New York City",
        3,
        "The UN headquarters is in New York City."
      ],
      [
        "Which planet is known as the Red Planet?",
        "Mars",
        "Mercury",
        "Venus",
        "Jupiter",
        0,
        "Mars appears reddish because of iron oxide on its surface."
      ],
      [
        "Which planet is known as the Red Planet? (Choose the best answer.)",
        "Mars",
        "Jupiter",
        "Mercury",
        "Venus",
        0,
        "Mars appears reddish because of iron oxide on its surface."
      ],
      [
        "What is the term of office of the President of India?",
        "5 years",
        "4 years",
        "6 years",
        "7 years",
        0,
        "The President of India is elected for a five-year term."
      ],
      [
        "How many Fundamental Duties are currently listed in the Constitution of India?",
        "10",
        "8",
        "12",
        "11",
        3,
        "There are 11 Fundamental Duties in Article 51A."
      ],
      [
        "Which body is the final interpreter of the Constitution?",
        "Election Commission",
        "Supreme Court of India",
        "Finance Commission",
        "Parliament Secretariat",
        1,
        "The Supreme Court has the final judicial authority to interpret the Constitution."
      ],
      [
        "Which is the largest ocean on Earth?",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
        3,
        "The Pacific Ocean is the largest ocean by area."
      ],
      [
        "Which desert covers much of Rajasthan?",
        "Kalahari Desert",
        "Gobi Desert",
        "Atacama Desert",
        "Thar Desert",
        3,
        "The Thar Desert extends across Rajasthan and adjoining areas."
      ],
      [
        "What is H2O commonly known as?",
        "Salt",
        "Oxygen",
        "Water",
        "Hydrogen peroxide",
        2,
        "H2O is the chemical formula for water."
      ],
      [
        "What force pulls objects toward Earth?",
        "Friction",
        "Magnetism only",
        "Gravity",
        "Buoyancy",
        2,
        "Earth's gravity attracts objects toward its center."
      ],
      [
        "What is afforestation?",
        "Building dams",
        "Mining soil",
        "Removing forests",
        "Planting trees on land where forest cover is absent or reduced",
        3,
        "Afforestation is the establishment of forest cover on suitable land."
      ],
      [
        "What does RBI stand for?",
        "Revenue Bank of India",
        "Reserve Banking Institution",
        "Reserve Bank of India",
        "Rural Bank of India",
        2,
        "RBI stands for Reserve Bank of India."
      ],
      [
        "Who was known as the Iron Man of India?",
        "Sardar Vallabhbhai Patel",
        "Dadabhai Naoroji",
        "Bhagat Singh",
        "Subhas Chandra Bose",
        0,
        "Sardar Vallabhbhai Patel is widely known as the Iron Man of India."
      ],
      [
        "Which vitamin is produced in the skin in response to sunlight?",
        "Vitamin C",
        "Vitamin B12",
        "Vitamin K",
        "Vitamin D",
        3,
        "Sunlight exposure helps the skin synthesize vitamin D."
      ]
    ],
    "group": "Aptitude & Competitive Exams"
  },
"Computer Science Fundamentals": {
    "icon": "CS",
    "desc": "Core computing concepts, algorithms, operating systems, networks and software fundamentals.",
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
      ],
      [
        "What is a process?",
        "A file extension",
        "A network cable",
        "A database table",
        "A program instance in execution",
        3,
        "A process is a running instance of a program."
      ],
      [
        "What is a process? (Choose the best answer.)",
        "A database table",
        "A network cable",
        "A program instance in execution",
        "A file extension",
        2,
        "A process is a running instance of a program."
      ],
      [
        "What is a thread?",
        "A unit of execution within a process",
        "A disk partition",
        "A database row",
        "A DNS query",
        0,
        "Threads are execution units within a process and share many process resources."
      ],
      [
        "What is a thread? (Choose the best answer.)",
        "A unit of execution within a process",
        "A disk partition",
        "A DNS query",
        "A database row",
        0,
        "Threads are execution units within a process and share many process resources."
      ],
      [
        "What is virtual memory?",
        "A database index",
        "A CPU instruction set",
        "A network protocol",
        "A memory-management technique that uses storage to extend apparent memory",
        3,
        "Virtual memory uses address translation and storage to provide an abstraction larger than physical RAM."
      ],
      [
        "What is virtual memory? (Choose the best answer.)",
        "A network protocol",
        "A database index",
        "A CPU instruction set",
        "A memory-management technique that uses storage to extend apparent memory",
        3,
        "Virtual memory uses address translation and storage to provide an abstraction larger than physical RAM."
      ],
      [
        "What is a deadlock?",
        "A DNS timeout",
        "A full disk only",
        "A state where processes wait indefinitely for resources held by one another",
        "A successful process exit",
        2,
        "Deadlock occurs when processes are permanently waiting on each other's resources."
      ],
      [
        "What is a deadlock? (Choose the best answer.)",
        "A state where processes wait indefinitely for resources held by one another",
        "A DNS timeout",
        "A successful process exit",
        "A full disk only",
        0,
        "Deadlock occurs when processes are permanently waiting on each other's resources."
      ],
      [
        "How many bits are in one byte?",
        "4",
        "16",
        "32",
        "8",
        3,
        "One byte contains eight bits."
      ],
      [
        "How many bits are in one byte? (Choose the best answer.)",
        "8",
        "32",
        "16",
        "4",
        0,
        "One byte contains eight bits."
      ],
      [
        "What does algorithm complexity describe?",
        "The programming language used",
        "The network protocol",
        "The UI color",
        "How resource usage grows with input size",
        3,
        "Complexity describes how time or space requirements scale with input size."
      ],
      [
        "What does algorithm complexity describe? (Choose the best answer.)",
        "How resource usage grows with input size",
        "The programming language used",
        "The UI color",
        "The network protocol",
        0,
        "Complexity describes how time or space requirements scale with input size."
      ],
      [
        "What does ACID stand for?",
        "Atomicity, Consistency, Isolation, Durability",
        "Access, Control, Index, Data",
        "Array, Class, Interface, Dependency",
        "Accuracy, Capacity, Integrity, Distribution",
        0,
        "ACID describes key transaction properties in relational databases."
      ],
      [
        "What does ACID stand for? (Choose the best answer.)",
        "Accuracy, Capacity, Integrity, Distribution",
        "Atomicity, Consistency, Isolation, Durability",
        "Array, Class, Interface, Dependency",
        "Access, Control, Index, Data",
        1,
        "ACID describes key transaction properties in relational databases."
      ],
      [
        "Which protocol is connection-oriented at the transport layer?",
        "TCP",
        "ARP",
        "ICMP",
        "UDP",
        0,
        "TCP provides connection-oriented transport."
      ],
      [
        "Which protocol is connection-oriented at the transport layer? (Choose the best answer.)",
        "UDP",
        "ARP",
        "TCP",
        "ICMP",
        2,
        "TCP provides connection-oriented transport."
      ],
      [
        "What is authentication?",
        "Encrypting a disk",
        "Granting permissions",
        "Backing up data",
        "Verifying an identity",
        3,
        "Authentication verifies who a user or system is."
      ],
      [
        "What is authentication? (Choose the best answer.)",
        "Encrypting a disk",
        "Granting permissions",
        "Verifying an identity",
        "Backing up data",
        2,
        "Authentication verifies who a user or system is."
      ],
      [
        "What is authorization?",
        "Determining what an authenticated identity may access",
        "Hashing passwords",
        "Verifying identity",
        "Compressing data",
        0,
        "Authorization determines permitted actions or resources."
      ],
      [
        "What is authorization? (Choose the best answer.)",
        "Determining what an authenticated identity may access",
        "Verifying identity",
        "Compressing data",
        "Hashing passwords",
        0,
        "Authorization determines permitted actions or resources."
      ],
      [
        "What does a compiler generally do?",
        "Creates user accounts",
        "Assigns IP addresses",
        "Runs a database server",
        "Translates source code into another executable or intermediate form",
        3,
        "A compiler translates source code into machine code or an intermediate representation."
      ],
      [
        "What does a compiler generally do? (Choose the best answer.)",
        "Assigns IP addresses",
        "Translates source code into another executable or intermediate form",
        "Creates user accounts",
        "Runs a database server",
        1,
        "A compiler translates source code into machine code or an intermediate representation."
      ],
      [
        "What is a stack commonly used for?",
        "Long-term file storage",
        "DNS caching only",
        "Function call frames and local execution state",
        "Network routing",
        2,
        "The call stack stores execution frames, including return information and local variables."
      ],
      [
        "What is a stack commonly used for? (Choose the best answer.)",
        "Network routing",
        "Function call frames and local execution state",
        "Long-term file storage",
        "DNS caching only",
        1,
        "The call stack stores execution frames, including return information and local variables."
      ],
      [
        "What is a heap commonly used for?",
        "Dynamic memory allocation",
        "DNS resolution",
        "CPU instruction decoding",
        "Physical networking",
        0,
        "The heap supports dynamic memory allocation during program execution."
      ],
      [
        "What is a heap commonly used for? (Choose the best answer.)",
        "Physical networking",
        "Dynamic memory allocation",
        "CPU instruction decoding",
        "DNS resolution",
        1,
        "The heap supports dynamic memory allocation during program execution."
      ],
      [
        "What does CPU stand for? (Choose the best answer.)",
        "Computer Processing User",
        "Central Program Utility",
        "Central Processing Unit",
        "Core Program Unit",
        2,
        "CPU stands for Central Processing Unit."
      ],
      [
        "What is RAM?",
        "Volatile main memory used by running programs",
        "A network protocol",
        "Permanent archive storage",
        "A CPU cache only",
        0,
        "RAM is volatile memory used for active program data and instructions."
      ],
      [
        "What is RAM? (Choose the best answer.)",
        "Permanent archive storage",
        "Volatile main memory used by running programs",
        "A network protocol",
        "A CPU cache only",
        1,
        "RAM is volatile memory used for active program data and instructions."
      ],
      [
        "What is a queue?",
        "A hash function",
        "A graph only",
        "A LIFO structure",
        "A FIFO data structure",
        3,
        "Queues normally follow first-in, first-out order."
      ],
      [
        "What is a queue? (Choose the best answer.)",
        "A hash function",
        "A LIFO structure",
        "A FIFO data structure",
        "A graph only",
        2,
        "Queues normally follow first-in, first-out order."
      ],
      [
        "What is a stack?",
        "A FIFO structure",
        "A relational table",
        "A routing protocol",
        "A LIFO data structure",
        3,
        "Stacks normally follow last-in, first-out order."
      ],
      [
        "What is a stack? (Choose the best answer.)",
        "A relational table",
        "A LIFO data structure",
        "A FIFO structure",
        "A routing protocol",
        1,
        "Stacks normally follow last-in, first-out order."
      ],
      [
        "What does version control track?",
        "Changes to files and code over time",
        "Only CPU temperature",
        "User passwords",
        "Network latency",
        0,
        "Version control records and manages changes to project files."
      ],
      [
        "What does version control track? (Choose the best answer.)",
        "Only CPU temperature",
        "Changes to files and code over time",
        "Network latency",
        "User passwords",
        1,
        "Version control records and manages changes to project files."
      ],
      [
        "What does HTTP define?",
        "A CPU architecture",
        "A disk format",
        "Rules for transferring web resources between clients and servers",
        "A password policy",
        2,
        "HTTP defines request-response communication for web resources."
      ],
      [
        "What does HTTP define? (Choose the best answer.)",
        "Rules for transferring web resources between clients and servers",
        "A disk format",
        "A CPU architecture",
        "A password policy",
        0,
        "HTTP defines request-response communication for web resources."
      ],
      [
        "What is a primary key?",
        "A backup file",
        "A column or set of columns that uniquely identifies rows",
        "A duplicated value",
        "A database password",
        1,
        "A primary key uniquely identifies each row in a table."
      ],
      [
        "What is a primary key? (Choose the best answer.)",
        "A backup file",
        "A database password",
        "A duplicated value",
        "A column or set of columns that uniquely identifies rows",
        3,
        "A primary key uniquely identifies each row in a table."
      ],
      [
        "What does RAM stand for?",
        "Remote Address Memory",
        "Rapid Application Memory",
        "Read Access Module",
        "Random Access Memory",
        3,
        "RAM stands for Random Access Memory."
      ],
      [
        "What does ROM stand for?",
        "Random Output Module",
        "Read-Only Memory",
        "Read Online Memory",
        "Random Operating Memory",
        1,
        "ROM stands for Read-Only Memory."
      ],
      [
        "Which number system uses base 2?",
        "Decimal",
        "Octal",
        "Hexadecimal",
        "Binary",
        3,
        "Binary uses only 0 and 1 and has base 2."
      ],
      [
        "Which number system uses base 16?",
        "Hexadecimal",
        "Octal",
        "Decimal",
        "Binary",
        0,
        "Hexadecimal has base 16."
      ],
      [
        "What does URL stand for?",
        "Universal Routing Link",
        "User Reference Locator",
        "Unified Resource Line",
        "Uniform Resource Locator",
        3,
        "URL identifies the location of a resource on a network."
      ],
      [
        "What does CPU cache primarily provide?",
        "Long-term storage",
        "Network routing",
        "User authentication",
        "Faster access to frequently used data and instructions",
        3,
        "CPU caches reduce access latency for frequently used data and instructions."
      ],
      [
        "What is an interrupt?",
        "A file type",
        "A network cable",
        "A database query",
        "A signal that requests CPU attention for an event",
        3,
        "An interrupt signals the processor that an event needs attention."
      ],
      [
        "What is an API endpoint?",
        "A physical CPU socket",
        "A password hash",
        "A defined network or software interface location for an operation",
        "A disk partition",
        2,
        "An endpoint identifies a callable interface location or resource."
      ],
      [
        "What is a compiler warning?",
        "A database backup",
        "A network packet",
        "A diagnostic about code that may be problematic but is not necessarily a fatal error",
        "A successful build only",
        2,
        "Warnings flag potential issues while allowing compilation to continue in many cases."
      ],
      [
        "What is concurrency?",
        "A disk format",
        "Only one task ever running",
        "A DNS protocol",
        "Multiple tasks making progress during overlapping periods",
        3,
        "Concurrency concerns multiple tasks whose execution overlaps in time or interleaves."
      ],
      [
        "What is context switching?",
        "Changing a DNS record",
        "Switching CPU execution from one process or thread to another",
        "Formatting RAM",
        "Changing a file extension",
        1,
        "Context switching saves the current execution state and loads another execution context."
      ]
    ],
    "group": "Computer Science & Programming"
  },
"Data Structures & Algorithms": {
    "icon": "DS",
    "desc": "Arrays, linked lists, stacks, queues, trees, graphs, sorting and algorithmic complexity.",
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
      ],
      [
        "What is the typical random-access time for an array element by index?",
        "O(log n)",
        "O(n)",
        "O(1)",
        "O(n log n)",
        2,
        "Direct indexing computes the element location in constant time."
      ],
      [
        "What is the typical random-access time for an array element by index? (Choose the best answer.)",
        "O(log n)",
        "O(n)",
        "O(n log n)",
        "O(1)",
        3,
        "Direct indexing computes the element location in constant time."
      ],
      [
        "What is a common advantage of linked lists over arrays?",
        "Efficient insertion or deletion when a node position is known",
        "Constant-time random access",
        "No pointer storage",
        "Better cache locality",
        0,
        "Linked lists can insert or delete nodes without shifting an array, when the position is known."
      ],
      [
        "What is a common advantage of linked lists over arrays? (Choose the best answer.)",
        "Efficient insertion or deletion when a node position is known",
        "Constant-time random access",
        "Better cache locality",
        "No pointer storage",
        0,
        "Linked lists can insert or delete nodes without shifting an array, when the position is known."
      ],
      [
        "Which principle does a stack follow?",
        "FIFO",
        "Priority order",
        "Random order",
        "LIFO",
        3,
        "A stack removes the most recently added item first."
      ],
      [
        "Which principle does a stack follow? (Choose the best answer.)",
        "Priority order",
        "FIFO",
        "Random order",
        "LIFO",
        3,
        "A stack removes the most recently added item first."
      ],
      [
        "Which principle does a queue follow?",
        "FIFO",
        "Random order",
        "LIFO",
        "Depth-first order",
        0,
        "A queue removes the earliest added item first."
      ],
      [
        "Which principle does a queue follow? (Choose the best answer.)",
        "Random order",
        "FIFO",
        "Depth-first order",
        "LIFO",
        1,
        "A queue removes the earliest added item first."
      ],
      [
        "Which traversal visits root, then left subtree, then right subtree?",
        "Inorder",
        "Preorder",
        "Level order only",
        "Postorder",
        1,
        "Preorder traversal follows root-left-right."
      ],
      [
        "Which traversal visits root, then left subtree, then right subtree? (Choose the best answer.)",
        "Preorder",
        "Level order only",
        "Inorder",
        "Postorder",
        0,
        "Preorder traversal follows root-left-right."
      ],
      [
        "Which traversal visits left subtree, root, then right subtree?",
        "Preorder",
        "Breadth-first",
        "Inorder",
        "Postorder",
        2,
        "Inorder traversal follows left-root-right."
      ],
      [
        "Which traversal visits left subtree, root, then right subtree? (Choose the best answer.)",
        "Postorder",
        "Breadth-first",
        "Inorder",
        "Preorder",
        2,
        "Inorder traversal follows left-root-right."
      ],
      [
        "Which traversal visits left subtree, right subtree, then root?",
        "Postorder",
        "Level order",
        "Inorder",
        "Preorder",
        0,
        "Postorder traversal follows left-right-root."
      ],
      [
        "Which traversal visits left subtree, right subtree, then root? (Choose the best answer.)",
        "Preorder",
        "Inorder",
        "Postorder",
        "Level order",
        2,
        "Postorder traversal follows left-right-root."
      ],
      [
        "Which algorithm finds shortest paths from a source in a graph with non-negative edge weights?",
        "DFS only",
        "Dijkstra's algorithm",
        "Kruskal only",
        "Binary search",
        1,
        "Dijkstra's algorithm solves the single-source shortest path problem for non-negative edge weights."
      ],
      [
        "Which algorithm finds shortest paths from a source in a graph with non-negative edge weights? (Choose the best answer.)",
        "DFS only",
        "Kruskal only",
        "Dijkstra's algorithm",
        "Binary search",
        2,
        "Dijkstra's algorithm solves the single-source shortest path problem for non-negative edge weights."
      ],
      [
        "Which traversal commonly uses a queue?",
        "Depth-first search",
        "Heap sort",
        "Breadth-first search",
        "Binary search",
        2,
        "BFS explores vertices level by level using a queue."
      ],
      [
        "Which traversal commonly uses a queue? (Choose the best answer.)",
        "Depth-first search",
        "Heap sort",
        "Breadth-first search",
        "Binary search",
        2,
        "BFS explores vertices level by level using a queue."
      ],
      [
        "Which traversal commonly uses a stack or recursion?",
        "Counting sort",
        "Breadth-first search",
        "Merge sort",
        "Depth-first search",
        3,
        "DFS explores deeply and can be implemented with a stack or recursion."
      ],
      [
        "Which traversal commonly uses a stack or recursion? (Choose the best answer.)",
        "Merge sort",
        "Counting sort",
        "Depth-first search",
        "Breadth-first search",
        2,
        "DFS explores deeply and can be implemented with a stack or recursion."
      ],
      [
        "What is the average-case time complexity of quicksort?",
        "O(1)",
        "O(n log n)",
        "O(n)",
        "O(n^2) always",
        1,
        "Quicksort has average O(n log n) time, though its worst case can be O(n^2)."
      ],
      [
        "What is the average-case time complexity of quicksort? (Choose the best answer.)",
        "O(n log n)",
        "O(n^2) always",
        "O(1)",
        "O(n)",
        0,
        "Quicksort has average O(n log n) time, though its worst case can be O(n^2)."
      ],
      [
        "What is the worst-case time complexity of merge sort?",
        "O(log n)",
        "O(n log n)",
        "O(n)",
        "O(n^2)",
        1,
        "Merge sort runs in O(n log n) time in the worst case."
      ],
      [
        "What is the worst-case time complexity of merge sort? (Choose the best answer.)",
        "O(n^2)",
        "O(n log n)",
        "O(n)",
        "O(log n)",
        1,
        "Merge sort runs in O(n log n) time in the worst case."
      ],
      [
        "What prerequisite does binary search require?",
        "A linked list only",
        "A sorted search space",
        "Random data",
        "A hash table only",
        1,
        "Binary search repeatedly halves a sorted search space."
      ],
      [
        "What prerequisite does binary search require? (Choose the best answer.)",
        "A hash table only",
        "Random data",
        "A linked list only",
        "A sorted search space",
        3,
        "Binary search repeatedly halves a sorted search space."
      ],
      [
        "What is the average expected lookup time in a well-designed hash table?",
        "O(n log n)",
        "O(n^2)",
        "O(log n)",
        "O(1)",
        3,
        "Hash tables can provide expected constant-time lookup with a suitable hash function and load factor."
      ],
      [
        "What is the average expected lookup time in a well-designed hash table? (Choose the best answer.)",
        "O(log n)",
        "O(n^2)",
        "O(n log n)",
        "O(1)",
        3,
        "Hash tables can provide expected constant-time lookup with a suitable hash function and load factor."
      ],
      [
        "What property does a min-heap maintain?",
        "Each parent is less than or equal to its children",
        "All values are sorted globally",
        "Each child is always less than its parent",
        "The root is always maximum",
        0,
        "A min-heap keeps the minimum element at the root and maintains parent-child ordering."
      ],
      [
        "What property does a min-heap maintain? (Choose the best answer.)",
        "Each parent is less than or equal to its children",
        "All values are sorted globally",
        "Each child is always less than its parent",
        "The root is always maximum",
        0,
        "A min-heap keeps the minimum element at the root and maintains parent-child ordering."
      ],
      [
        "What is a common characteristic of dynamic programming problems?",
        "No recursion ever",
        "Only sorted input",
        "Constant-size input",
        "Overlapping subproblems and optimal substructure",
        3,
        "Dynamic programming reuses solutions to overlapping subproblems and exploits optimal substructure."
      ],
      [
        "What is a common characteristic of dynamic programming problems? (Choose the best answer.)",
        "Overlapping subproblems and optimal substructure",
        "Constant-size input",
        "No recursion ever",
        "Only sorted input",
        0,
        "Dynamic programming reuses solutions to overlapping subproblems and exploits optimal substructure."
      ],
      [
        "What does a greedy algorithm do at each step?",
        "Randomly chooses a value",
        "Always uses recursion",
        "Makes a locally optimal choice according to its strategy",
        "Tries every possible solution",
        2,
        "Greedy algorithms make local choices hoping they lead to a global solution."
      ],
      [
        "What does a greedy algorithm do at each step? (Choose the best answer.)",
        "Always uses recursion",
        "Makes a locally optimal choice according to its strategy",
        "Randomly chooses a value",
        "Tries every possible solution",
        1,
        "Greedy algorithms make local choices hoping they lead to a global solution."
      ],
      [
        "What is O(log n) growth commonly associated with?",
        "Nested full pair comparison",
        "Linear scan",
        "Binary search",
        "Bubble sort worst case",
        2,
        "Binary search halves the search space each step, producing logarithmic time."
      ],
      [
        "What is O(log n) growth commonly associated with? (Choose the best answer.)",
        "Nested full pair comparison",
        "Linear scan",
        "Bubble sort worst case",
        "Binary search",
        3,
        "Binary search halves the search space each step, producing logarithmic time."
      ],
      [
        "What does a cycle in a graph mean?",
        "A disconnected graph",
        "A path that returns to a previously visited vertex",
        "A sorted graph",
        "A graph with one edge",
        1,
        "A cycle is a closed path returning to a vertex."
      ],
      [
        "What does a cycle in a graph mean? (Choose the best answer.)",
        "A sorted graph",
        "A graph with one edge",
        "A path that returns to a previously visited vertex",
        "A disconnected graph",
        2,
        "A cycle is a closed path returning to a vertex."
      ],
      [
        "What is the height of a tree?",
        "The number of leaves only",
        "The number of edges in all branches combined",
        "The number of roots",
        "The length of the longest downward path from the root under the chosen convention",
        3,
        "Tree height measures the longest root-to-leaf path, with exact node/edge convention depending on definition."
      ],
      [
        "What is the height of a tree? (Choose the best answer.)",
        "The number of edges in all branches combined",
        "The length of the longest downward path from the root under the chosen convention",
        "The number of leaves only",
        "The number of roots",
        1,
        "Tree height measures the longest root-to-leaf path, with exact node/edge convention depending on definition."
      ],
      [
        "Which data structure is best suited for FIFO processing?",
        "Heap only",
        "Graph",
        "Stack",
        "Queue",
        3,
        "Queues naturally implement first-in, first-out processing."
      ],
      [
        "Which data structure supports LIFO processing?",
        "Tree",
        "Stack",
        "Graph",
        "Queue",
        1,
        "Stacks naturally implement last-in, first-out processing."
      ],
      [
        "Which sorting algorithm repeatedly selects the minimum remaining element?",
        "Merge sort",
        "Binary search",
        "Selection sort",
        "Heap sort",
        2,
        "Selection sort repeatedly selects the smallest remaining element for the next position."
      ],
      [
        "Which sorting algorithm builds a sorted portion by inserting each next item?",
        "Insertion sort",
        "BFS",
        "Dijkstra",
        "Selection sort",
        0,
        "Insertion sort grows a sorted prefix by inserting each new element."
      ],
      [
        "Which sorting algorithm uses divide and conquer by splitting arrays and merging them?",
        "Linear search",
        "Merge sort",
        "Bubble sort",
        "DFS",
        1,
        "Merge sort divides the input and merges sorted halves."
      ],
      [
        "What is the worst-case time complexity of linear search?",
        "O(n log n)",
        "O(1)",
        "O(n)",
        "O(log n)",
        2,
        "A linear search may inspect every element."
      ],
      [
        "What is the usual worst-case time complexity of binary search on sorted data?",
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n^2)",
        1,
        "Binary search halves the remaining search space each step."
      ],
      [
        "What is a leaf node in a tree?",
        "A node with two parents",
        "Any internal node",
        "A node with no children",
        "The root only",
        2,
        "A leaf has no child nodes."
      ],
      [
        "What is the root of a tree?",
        "Every leaf",
        "The deepest node",
        "The topmost node",
        "The last node",
        2,
        "The root is the topmost starting node of a tree."
      ],
      [
        "What is an edge in a graph?",
        "A sorting rule",
        "A connection between vertices",
        "A queue entry",
        "A vertex value",
        1,
        "An edge represents a relationship or connection between vertices."
      ]
    ],
    "group": "Computer Science & Programming"
  },
"Programming Fundamentals": {
    "icon": "</>",
    "desc": "Programming basics, variables, functions, control flow, OOP and problem solving.",
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
      ],
      [
        "What is a variable used for? (Choose the best answer.)",
        "Storing a value that a program can access or change",
        "Connecting a network cable",
        "Creating a database server",
        "Formatting a disk",
        0,
        "Variables provide named storage for program data."
      ],
      [
        "Which construct repeats a block while a condition remains true?",
        "if statement",
        "class definition",
        "switch only",
        "while loop",
        3,
        "A while loop repeatedly executes while its condition is true."
      ],
      [
        "Which construct repeats a block while a condition remains true? (Choose the best answer.)",
        "while loop",
        "if statement",
        "switch only",
        "class definition",
        0,
        "A while loop repeatedly executes while its condition is true."
      ],
      [
        "Which construct is commonly used for choosing among multiple cases?",
        "switch",
        "return type",
        "import",
        "while",
        0,
        "A switch statement selects behavior based on a value in languages that support it."
      ],
      [
        "Which construct is commonly used for choosing among multiple cases? (Choose the best answer.)",
        "import",
        "return type",
        "while",
        "switch",
        3,
        "A switch statement selects behavior based on a value in languages that support it."
      ],
      [
        "What is a function? (Choose the best answer.)",
        "A reusable block of code that performs a task",
        "A network packet",
        "A database table",
        "A file system",
        0,
        "Functions package reusable behavior and can accept parameters and return values."
      ],
      [
        "Which type normally represents true or false?",
        "Float",
        "Boolean",
        "Integer",
        "String",
        1,
        "Boolean values represent logical true or false."
      ],
      [
        "Which type normally represents true or false? (Choose the best answer.)",
        "Integer",
        "Float",
        "Boolean",
        "String",
        2,
        "Boolean values represent logical true or false."
      ],
      [
        "Which type commonly represents whole numbers?",
        "Integer",
        "Boolean",
        "Character only",
        "String",
        0,
        "Integer types represent whole-number values."
      ],
      [
        "Which type commonly represents whole numbers? (Choose the best answer.)",
        "Integer",
        "String",
        "Boolean",
        "Character only",
        0,
        "Integer types represent whole-number values."
      ],
      [
        "Which type commonly represents text?",
        "String",
        "Boolean",
        "Integer",
        "Bitmask only",
        0,
        "Strings represent sequences of text characters."
      ],
      [
        "Which type commonly represents text? (Choose the best answer.)",
        "String",
        "Bitmask only",
        "Integer",
        "Boolean",
        0,
        "Strings represent sequences of text characters."
      ],
      [
        "What does the equality operator generally test?",
        "Whether one value is assigned",
        "Whether a file exists",
        "Whether a loop ends automatically",
        "Whether two values are equal",
        3,
        "Equality operators compare values rather than assign them."
      ],
      [
        "What does the equality operator generally test? (Choose the best answer.)",
        "Whether a loop ends automatically",
        "Whether a file exists",
        "Whether one value is assigned",
        "Whether two values are equal",
        3,
        "Equality operators compare values rather than assign them."
      ],
      [
        "What is a syntax error?",
        "A disk failure",
        "A violation of the programming language grammar",
        "A correct result",
        "A network outage",
        1,
        "Syntax errors prevent code from being parsed according to language grammar."
      ],
      [
        "What is a syntax error? (Choose the best answer.)",
        "A disk failure",
        "A network outage",
        "A violation of the programming language grammar",
        "A correct result",
        2,
        "Syntax errors prevent code from being parsed according to language grammar."
      ],
      [
        "What is a runtime error?",
        "A compiler brand",
        "An error that occurs while the program is executing",
        "A database schema only",
        "A spelling rule",
        1,
        "Runtime errors occur during program execution."
      ],
      [
        "What is a runtime error? (Choose the best answer.)",
        "A compiler brand",
        "A database schema only",
        "A spelling rule",
        "An error that occurs while the program is executing",
        3,
        "Runtime errors occur during program execution."
      ],
      [
        "What is a unit test?",
        "A hardware burn-in",
        "A test of a small isolated piece of code",
        "A full network test",
        "A production deployment",
        1,
        "Unit tests focus on small units such as functions or methods."
      ],
      [
        "What is a unit test? (Choose the best answer.)",
        "A production deployment",
        "A full network test",
        "A hardware burn-in",
        "A test of a small isolated piece of code",
        3,
        "Unit tests focus on small units such as functions or methods."
      ],
      [
        "What is encapsulation?",
        "Deleting classes",
        "Encrypting DNS",
        "Sorting arrays",
        "Bundling data and behavior while controlling access",
        3,
        "Encapsulation combines state and behavior and can restrict direct access to implementation details."
      ],
      [
        "What is encapsulation? (Choose the best answer.)",
        "Encrypting DNS",
        "Deleting classes",
        "Sorting arrays",
        "Bundling data and behavior while controlling access",
        3,
        "Encapsulation combines state and behavior and can restrict direct access to implementation details."
      ],
      [
        "What is inheritance?",
        "A mechanism where a type derives behavior or structure from another type",
        "A database backup",
        "A loop counter",
        "A network route",
        0,
        "Inheritance allows a derived type to reuse or extend a base type."
      ],
      [
        "What is inheritance? (Choose the best answer.)",
        "A database backup",
        "A loop counter",
        "A network route",
        "A mechanism where a type derives behavior or structure from another type",
        3,
        "Inheritance allows a derived type to reuse or extend a base type."
      ],
      [
        "What is polymorphism?",
        "Avoiding functions",
        "Using one variable only",
        "Using a common interface with different implementations",
        "Deleting objects",
        2,
        "Polymorphism allows code to work through a common interface while behavior varies by implementation."
      ],
      [
        "What is polymorphism? (Choose the best answer.)",
        "Deleting objects",
        "Using one variable only",
        "Using a common interface with different implementations",
        "Avoiding functions",
        2,
        "Polymorphism allows code to work through a common interface while behavior varies by implementation."
      ],
      [
        "Why are exceptions used?",
        "To format disks",
        "To create IP addresses",
        "To compile HTML",
        "To handle exceptional runtime conditions",
        3,
        "Exceptions provide a structured way to signal and handle exceptional conditions."
      ],
      [
        "Why are exceptions used? (Choose the best answer.)",
        "To create IP addresses",
        "To compile HTML",
        "To handle exceptional runtime conditions",
        "To format disks",
        2,
        "Exceptions provide a structured way to signal and handle exceptional conditions."
      ],
      [
        "What is recursion? (Choose the best answer.)",
        "A variable changing type",
        "A network broadcast",
        "A database join",
        "A function calling itself directly or indirectly",
        3,
        "Recursive functions solve problems by calling themselves on smaller instances."
      ],
      [
        "What is a memory leak?",
        "A disk partition",
        "A DNS error",
        "Allocated memory that is no longer needed but remains unavailable for reuse",
        "A syntax error",
        2,
        "A memory leak occurs when a program retains allocations it no longer needs."
      ],
      [
        "What is a memory leak? (Choose the best answer.)",
        "Allocated memory that is no longer needed but remains unavailable for reuse",
        "A syntax error",
        "A disk partition",
        "A DNS error",
        0,
        "A memory leak occurs when a program retains allocations it no longer needs."
      ],
      [
        "What does a commit represent in Git?",
        "A server reboot",
        "A DNS record",
        "A database query",
        "A recorded snapshot of changes",
        3,
        "A Git commit records a snapshot of project changes."
      ],
      [
        "What does a commit represent in Git? (Choose the best answer.)",
        "A database query",
        "A server reboot",
        "A DNS record",
        "A recorded snapshot of changes",
        3,
        "A Git commit records a snapshot of project changes."
      ],
      [
        "What is an API? (Choose the best answer.)",
        "A compiler warning",
        "A disk image",
        "A defined interface through which software components communicate",
        "A physical cable",
        2,
        "An API defines how software components can interact."
      ],
      [
        "What is a parameter?",
        "A named input accepted by a function",
        "A database table",
        "A CPU register",
        "A network port",
        0,
        "A parameter defines an input to a function."
      ],
      [
        "What is an argument?",
        "A compiler error",
        "A database index",
        "A value supplied to a function call",
        "A loop keyword",
        2,
        "An argument is the actual value passed to a parameter."
      ],
      [
        "What does return do in a function?",
        "Opens a file automatically",
        "Starts a server",
        "Provides a result to the caller and exits the function in typical languages",
        "Creates a class",
        2,
        "return sends a value back and generally ends the current function."
      ],
      [
        "What is a comment used for?",
        "Creating users",
        "Providing human-readable notes in source code",
        "Encrypting variables",
        "Changing CPU speed",
        1,
        "Comments document code and are ignored as executable instructions in most languages."
      ],
      [
        "What is an array?",
        "An ordered collection of elements",
        "A network protocol",
        "A compiler",
        "A database server",
        0,
        "Arrays store elements in an ordered indexed structure."
      ],
      [
        "What is a loop counter?",
        "A password",
        "A DNS record",
        "A variable used to track iteration progress",
        "A class name",
        2,
        "A loop counter commonly tracks how many iterations have occurred."
      ],
      [
        "What is refactoring?",
        "Changing a server IP",
        "Adding random features",
        "Deleting all tests",
        "Changing code structure without intentionally changing its external behavior",
        3,
        "Refactoring improves internal structure while preserving intended behavior."
      ],
      [
        "What is an infinite loop?",
        "A syntax error",
        "A compiled library",
        "A loop that does not reach its termination condition",
        "A loop that runs once",
        2,
        "An infinite loop continues because its exit condition is never reached."
      ],
      [
        "What is a library?",
        "Reusable code provided for programs to use",
        "A CPU",
        "A network cable",
        "A physical book only",
        0,
        "A software library provides reusable functionality."
      ],
      [
        "Which keyword commonly exits a loop immediately?",
        "break",
        "skip",
        "continue",
        "return only",
        0,
        "break terminates the nearest applicable loop in many languages."
      ],
      [
        "Which keyword commonly skips to the next loop iteration?",
        "continue",
        "break",
        "exit",
        "next-function",
        0,
        "continue skips the remaining body of the current iteration in many languages."
      ],
      [
        "What is a floating-point value used to represent?",
        "Numbers that may contain fractional parts",
        "Only text",
        "Only true or false",
        "Only whole numbers",
        0,
        "Floating-point types represent real-number approximations including fractional values."
      ],
      [
        "What is a return value?",
        "A compiler warning",
        "The value a function gives back to its caller",
        "A network response only",
        "A loop counter",
        1,
        "A return value is the result produced by a function for its caller."
      ],
      [
        "What is an object?",
        "An instance of a class in object-oriented programming",
        "A compiler flag",
        "A network port",
        "A database server",
        0,
        "An object is an instance containing state and behavior defined by its class or type."
      ],
      [
        "What is a class?",
        "A network packet",
        "A blueprint or type definition for objects",
        "A database index",
        "A running process only",
        1,
        "A class defines the structure and behavior that objects of that type can have."
      ],
      [
        "What is exception handling?",
        "A mechanism for responding to exceptional conditions during execution",
        "A disk partitioning scheme",
        "A way to assign IPs",
        "A method of sorting arrays",
        0,
        "Exception handling provides structured mechanisms for responding to runtime exceptional conditions."
      ]
    ],
    "group": "Computer Science & Programming"
  },
"DBMS": {
    "icon": "DB",
    "desc": "Relational databases, SQL, keys, normalization, transactions and database concepts.",
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
      ],
      [
        "What does a relational database store data in?",
        "Only graphs",
        "Only files",
        "Network packets",
        "Tables",
        3,
        "Relational databases organize data into tables of rows and columns."
      ],
      [
        "What does a relational database store data in? (Choose the best answer.)",
        "Only graphs",
        "Tables",
        "Network packets",
        "Only files",
        1,
        "Relational databases organize data into tables of rows and columns."
      ],
      [
        "What is a primary key used for?",
        "Storing passwords only",
        "Creating indexes only",
        "Sorting files",
        "Uniquely identifying a row",
        3,
        "A primary key uniquely identifies each row in a table."
      ],
      [
        "What is a primary key used for? (Choose the best answer.)",
        "Sorting files",
        "Uniquely identifying a row",
        "Storing passwords only",
        "Creating indexes only",
        1,
        "A primary key uniquely identifies each row in a table."
      ],
      [
        "What is a foreign key used for?",
        "Encrypting data",
        "Starting a transaction",
        "Linking a row to a key in another table",
        "Compressing rows",
        2,
        "A foreign key establishes a referential relationship to another table."
      ],
      [
        "What is a foreign key used for? (Choose the best answer.)",
        "Linking a row to a key in another table",
        "Encrypting data",
        "Compressing rows",
        "Starting a transaction",
        0,
        "A foreign key establishes a referential relationship to another table."
      ],
      [
        "Which SQL command retrieves data?",
        "SELECT",
        "INSERT",
        "UPDATE",
        "DELETE",
        0,
        "SELECT queries data from tables or other queryable sources."
      ],
      [
        "Which SQL command retrieves data? (Choose the best answer.)",
        "SELECT",
        "DELETE",
        "UPDATE",
        "INSERT",
        0,
        "SELECT queries data from tables or other queryable sources."
      ],
      [
        "Which SQL command adds new rows?",
        "DROP",
        "ALTER",
        "INSERT",
        "SELECT",
        2,
        "INSERT adds rows to a table."
      ],
      [
        "Which SQL command adds new rows? (Choose the best answer.)",
        "ALTER",
        "INSERT",
        "DROP",
        "SELECT",
        1,
        "INSERT adds rows to a table."
      ],
      [
        "Which SQL command modifies existing rows?",
        "TRUNCATE",
        "UPDATE",
        "SELECT",
        "CREATE",
        1,
        "UPDATE changes existing rows."
      ],
      [
        "Which SQL command modifies existing rows? (Choose the best answer.)",
        "SELECT",
        "UPDATE",
        "CREATE",
        "TRUNCATE",
        1,
        "UPDATE changes existing rows."
      ],
      [
        "Which SQL command removes selected rows?",
        "DROP",
        "CREATE",
        "SELECT",
        "DELETE",
        3,
        "DELETE removes rows that match its condition."
      ],
      [
        "Which SQL command removes selected rows? (Choose the best answer.)",
        "DROP",
        "DELETE",
        "CREATE",
        "SELECT",
        1,
        "DELETE removes rows that match its condition."
      ],
      [
        "Which clause filters rows?",
        "WHERE",
        "HAVING only",
        "ORDER BY",
        "GROUP BY",
        0,
        "WHERE filters rows before grouping."
      ],
      [
        "Which clause filters rows? (Choose the best answer.)",
        "ORDER BY",
        "WHERE",
        "GROUP BY",
        "HAVING only",
        1,
        "WHERE filters rows before grouping."
      ],
      [
        "Which clause sorts query results?",
        "JOIN",
        "WHERE",
        "ORDER BY",
        "VALUES",
        2,
        "ORDER BY sorts the result set."
      ],
      [
        "Which clause sorts query results? (Choose the best answer.)",
        "ORDER BY",
        "WHERE",
        "JOIN",
        "VALUES",
        0,
        "ORDER BY sorts the result set."
      ],
      [
        "Which clause groups rows for aggregate calculations?",
        "WHERE",
        "ORDER BY",
        "LIMIT",
        "GROUP BY",
        3,
        "GROUP BY groups rows for aggregate operations."
      ],
      [
        "Which clause groups rows for aggregate calculations? (Choose the best answer.)",
        "GROUP BY",
        "ORDER BY",
        "LIMIT",
        "WHERE",
        0,
        "GROUP BY groups rows for aggregate operations."
      ],
      [
        "Which clause filters groups after aggregation?",
        "FROM",
        "ORDER BY",
        "HAVING",
        "WHERE",
        2,
        "HAVING filters grouped results after aggregation."
      ],
      [
        "Which clause filters groups after aggregation? (Choose the best answer.)",
        "WHERE",
        "FROM",
        "ORDER BY",
        "HAVING",
        3,
        "HAVING filters grouped results after aggregation."
      ],
      [
        "Which join returns matching rows from both joined tables?",
        "CROSS JOIN only",
        "FULL TEXT JOIN",
        "LEFT JOIN only",
        "INNER JOIN",
        3,
        "INNER JOIN returns rows where the join condition matches in both tables."
      ],
      [
        "Which join returns matching rows from both joined tables? (Choose the best answer.)",
        "LEFT JOIN only",
        "CROSS JOIN only",
        "INNER JOIN",
        "FULL TEXT JOIN",
        2,
        "INNER JOIN returns rows where the join condition matches in both tables."
      ],
      [
        "What is the main goal of normalization?",
        "Disabling constraints",
        "Reducing unnecessary redundancy and update anomalies",
        "Increasing duplicate data",
        "Removing all keys",
        1,
        "Normalization structures data to reduce redundancy and anomalies."
      ],
      [
        "What is the main goal of normalization? (Choose the best answer.)",
        "Disabling constraints",
        "Removing all keys",
        "Increasing duplicate data",
        "Reducing unnecessary redundancy and update anomalies",
        3,
        "Normalization structures data to reduce redundancy and anomalies."
      ],
      [
        "What does atomicity mean in ACID?",
        "Every row is duplicated",
        "A transaction is all-or-nothing",
        "Data is always encrypted",
        "Queries are always fast",
        1,
        "Atomicity means a transaction either completes fully or has no partial effect."
      ],
      [
        "What does atomicity mean in ACID? (Choose the best answer.)",
        "Data is always encrypted",
        "A transaction is all-or-nothing",
        "Every row is duplicated",
        "Queries are always fast",
        1,
        "Atomicity means a transaction either completes fully or has no partial effect."
      ],
      [
        "What does durability mean in ACID?",
        "Transactions are always reversible",
        "Committed changes persist despite subsequent failures",
        "Data is always public",
        "Queries never fail",
        1,
        "Durability means committed changes survive failures such as a crash."
      ],
      [
        "What does durability mean in ACID? (Choose the best answer.)",
        "Data is always public",
        "Transactions are always reversible",
        "Committed changes persist despite subsequent failures",
        "Queries never fail",
        2,
        "Durability means committed changes survive failures such as a crash."
      ],
      [
        "What is a database index used for?",
        "Speeding up certain data lookups",
        "Encrypting rows",
        "Replacing tables",
        "Guaranteeing no duplicates in every case",
        0,
        "Indexes can accelerate searches and joins at the cost of storage and write overhead."
      ],
      [
        "What is a database index used for? (Choose the best answer.)",
        "Encrypting rows",
        "Speeding up certain data lookups",
        "Guaranteeing no duplicates in every case",
        "Replacing tables",
        1,
        "Indexes can accelerate searches and joins at the cost of storage and write overhead."
      ],
      [
        "Which constraint prevents NULL values in a column?",
        "CHECKSUM",
        "DEFAULT ONLY",
        "UNIQUE only",
        "NOT NULL",
        3,
        "NOT NULL requires a value to be supplied."
      ],
      [
        "Which constraint prevents NULL values in a column? (Choose the best answer.)",
        "NOT NULL",
        "CHECKSUM",
        "UNIQUE only",
        "DEFAULT ONLY",
        0,
        "NOT NULL requires a value to be supplied."
      ],
      [
        "Which constraint enforces uniqueness?",
        "UNIQUE",
        "NOT NULL",
        "COMMENT",
        "DEFAULT",
        0,
        "UNIQUE prevents duplicate values for the constrained key."
      ],
      [
        "Which constraint enforces uniqueness? (Choose the best answer.)",
        "DEFAULT",
        "UNIQUE",
        "COMMENT",
        "NOT NULL",
        1,
        "UNIQUE prevents duplicate values for the constrained key."
      ],
      [
        "What is a database view?",
        "A password store",
        "A stored query presented as a virtual table",
        "A backup file",
        "A physical hard disk",
        1,
        "A view is a virtual table defined by a query."
      ],
      [
        "What is a database view? (Choose the best answer.)",
        "A password store",
        "A physical hard disk",
        "A stored query presented as a virtual table",
        "A backup file",
        2,
        "A view is a virtual table defined by a query."
      ],
      [
        "What is a database deadlock?",
        "A successful commit",
        "A missing index only",
        "A fast query",
        "Transactions wait on resources held by one another",
        3,
        "A deadlock occurs when transactions wait indefinitely for one another's locks/resources."
      ],
      [
        "What is a database deadlock? (Choose the best answer.)",
        "A successful commit",
        "A missing index only",
        "Transactions wait on resources held by one another",
        "A fast query",
        2,
        "A deadlock occurs when transactions wait indefinitely for one another's locks/resources."
      ],
      [
        "Which SQL command creates a table?",
        "BUILD TABLE",
        "MAKE TABLE",
        "NEW TABLE",
        "CREATE TABLE",
        3,
        "CREATE TABLE defines a new table."
      ],
      [
        "Which SQL command removes a table definition?",
        "REMOVE ROWS",
        "DROP TABLE",
        "TRUNCATE TABLE only",
        "DELETE TABLE",
        1,
        "DROP TABLE removes the table object and its definition."
      ],
      [
        "Which SQL command removes all rows while keeping a table structure?",
        "DROP TABLE",
        "DELETE DATABASE",
        "TRUNCATE TABLE",
        "CLEAR TABLE",
        2,
        "TRUNCATE removes table rows while retaining the table structure."
      ],
      [
        "What is a composite key?",
        "A key with duplicate rows",
        "A password key",
        "A key made from multiple columns",
        "A foreign server",
        2,
        "A composite key uses multiple columns together to identify a row."
      ],
      [
        "What is referential integrity?",
        "Sorting all tables",
        "Encrypting every row",
        "Keeping foreign-key relationships consistent",
        "Removing indexes",
        2,
        "Referential integrity ensures references between related tables remain valid."
      ],
      [
        "What is a transaction?",
        "A table column",
        "A logical unit of database work",
        "A server restart",
        "A network packet",
        1,
        "A transaction groups database operations into a logical unit."
      ],
      [
        "What does COMMIT do?",
        "Undoes changes",
        "Makes a transaction's changes permanent",
        "Drops a table",
        "Creates an index",
        1,
        "COMMIT permanently records the transaction changes."
      ],
      [
        "What does ROLLBACK do?",
        "Adds an index",
        "Creates a table",
        "Undoes uncommitted transaction changes",
        "Commits changes",
        2,
        "ROLLBACK reverses changes made by the current uncommitted transaction."
      ],
      [
        "What is a stored procedure?",
        "A physical backup",
        "A password file",
        "A network route",
        "A named set of SQL or procedural statements stored in the database",
        3,
        "Stored procedures encapsulate reusable database-side logic."
      ],
      [
        "What is a trigger?",
        "A network switch",
        "A manual query only",
        "Database logic that automatically runs in response to defined events",
        "A disk driver",
        2,
        "A trigger executes automatically when its defined database event occurs."
      ]
    ],
    "group": "Computer Science & Programming"
  }
};
