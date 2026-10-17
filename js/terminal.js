/* ==========================================================================
   SHIVA GANESH PORTFOLIO - DEVELOPER CLI TERMINAL
   Accurate commands, live links, and verified certificates.
   ========================================================================== */

class DeveloperTerminal {
  constructor() {
    this.overlay = document.getElementById('terminal-modal');
    this.input = document.getElementById('terminal-cmd-input');
    this.output = document.getElementById('terminal-output');
    this.history = [];
    this.historyIndex = -1;
    this.isOpen = false;

    this.commands = {
      help: () => `
Available system commands:
  <span class="text-cyan">whoami</span>        - Display engineer identity & summary
  <span class="text-cyan">experience</span>    - Enterprise work timeline & PwC IAM scope
  <span class="text-cyan">projects</span>      - Flagship ecosystems & live application links
  <span class="text-cyan">skills</span>        - Technical proficiencies & security tools
  <span class="text-cyan">education</span>     - Academic degrees, Intermediate & 10th records
  <span class="text-cyan">certs</span>         - 14 Credly badges & Drive certificates
  <span class="text-cyan">iam</span>           - Enterprise identity security architecture
  <span class="text-cyan">contact</span>       - Public profiles, domains & contact links
  <span class="text-cyan">resume</span>        - Access verified resume in Drive
  <span class="text-cyan">matrix</span>        - Toggle cyber matrix rain sequence
  <span class="text-cyan">clear</span>         - Clear terminal buffer
  <span class="text-emerald">sudo hire</span>     - Execute hiring sequence
      `,
      whoami: () => `
<strong>Dornala Shiva Ganesh</strong>
Role: Full-Stack Software Developer · Offensive Security & Reverse Eng. · Enterprise IAM
Education: B.Tech (IT - CGPA <strong>9.05</strong>) · Intermediate (MPC - <strong>98% / 9.80 GPA</strong>) · SSC (<strong>9.3 GPA</strong>)
Primary Domain: <a href="https://shivaganesh.net" target="_blank" class="text-cyan">shivaganesh.net</a>
Email: <a href="mailto:shivaganeshd22@gmail.com" class="text-cyan">shivaganeshd22@gmail.com</a>
Expertise: Multi-platform applications, low-level Android reverse engineering, offensive pentesting, and automated enterprise identity governance.
      `,
      education: () => `
<strong>Academic Background & Qualifications:</strong>
1. <span class="text-cyan">B.Tech in Information Technology</span> [Nov 2021 – May 2025]
   - Institution: Anurag University, Hyderabad
   - Cumulative Grade: CGPA <strong>9.05 / 10.0</strong>
   - Achievements: 1st Place PwC Hackathon, AIMLA 2025 Research Paper #455
2. <span class="text-cyan">Intermediate (Class XII / +2) — MPC (Mathematics, Physics, Chemistry)</span> [2019 – 2021]
   - College: Narayana Junior College, Annojiguda, Hyderabad
   - Board: Telangana State Board of Intermediate Education (TSBIE)
   - Score: <strong>98% Aggregate (GPA: 9.80 / 10.0)</strong>
   - Core: Advanced Mathematics, Physics, Chemistry
3. <span class="text-cyan">Secondary School Certificate (SSC / Class X)</span> [2018 – 2019]
   - School: Telangana State Model School (TS Model School), Pochampally
   - Board: Telangana SSC Board (BSE Telangana)
   - Score: <strong>GPA: 9.3 / 10.0</strong>
   - Achievements: Distinction in Science & Mathematics
      `,
      experience: () => `
<strong>Professional Experience:</strong>
1. <span class="text-cyan">IAM Associate — PwC (Cyber Risk & Regulatory / Access Management)</span> [Aug 2025 - Present]
   - Administered Active Directory (AD DS): Users, Groups, OUs, Domain Controller (DC) promotion, and GPO (partial).
   - Monitored enterprise authentication logs via Quest Change Auditor and Splunk SIEM.
   - Managed cloud identities, groups, and RBAC across Microsoft Entra ID and Okta.
   - Configured Conditional Access (MFA enforcement, sign-in risk, location rules, device compliance).
   - Engineered automated application onboarding (app_onboarding) into Entra ID using ServiceNow RITM tickets.
2. <span class="text-cyan">IAM Intern — PwC (Privileged Access Management - PAM)</span> [Feb 2025 - Aug 2025]
   - Earned CyberArk Certified Defender — Privileged Access Management (PAM) (Feb 2026).
   - Deployed and configured CyberArk Vault, PVWA, CPM, PSM, HTML5 Gateway, and Central Credential Provider (CCP).
   - In Delinea Secret Server, managed privileged account lifecycle, configured automated password rotation, heartbeat validation, and session monitoring.
3. <span class="text-cyan">National Apprenticeship Certificate: Software Programmer (V1)</span> [Score: 94.8%, 40 Credits]
      `,
      projects: () => `
<strong>Key Projects & Live Deployments:</strong>
1. <span class="text-cyan">RSGMovies: Distributed Streaming (Web, Android TV, Mobile & Backend)</span>:
   - Live Website: <a href="https://rsgmovies.com" target="_blank" class="text-emerald">rsgmovies.com</a>
   - Live Backend: <a href="https://rsg-movies.vercel.app" target="_blank" class="text-emerald">rsg-movies.vercel.app</a>
   - Source Code: <a href="https://github.com/shivaganesh22/rsgmovies" target="_blank" class="text-cyan">github.com/shivaganesh22/rsgmovies</a>
   - Integrated APIs & TV: Android TV Leanback app, Movierulz, TamilMV, iBomma, MovieBlast, iStreamflare, MovierulzHD, Seedr, YouTube Downloader
2. <span class="text-cyan">Price Tracker (ReactJS + Django)</span>:
   - Live Frontend: <a href="https://rsgtracker.vercel.app" target="_blank" class="text-emerald">rsgtracker.vercel.app</a>
   - Live Backend: <a href="https://rsg-price.vercel.app" target="_blank" class="text-emerald">rsg-price.vercel.app</a>
   - Source Code: <a href="https://github.com/shivaganesh22/price-tracker" target="_blank" class="text-cyan">github.com/shivaganesh22/price-tracker</a>
3. <span class="text-cyan">Attendance Management System (Flutter App + Django API)</span>:
   - Live API: <a href="https://aupulse-api.vercel.app" target="_blank" class="text-emerald">aupulse-api.vercel.app</a>
   - Live CV: <a href="https://aupulse-cv.vercel.app" target="_blank" class="text-emerald">aupulse-cv.vercel.app</a>
   - Source Code: <a href="https://github.com/shivaganesh22/mini-project" target="_blank" class="text-cyan">github.com/shivaganesh22/mini-project</a>
4. <span class="text-cyan">Image Deduplication Tool (Django)</span>:
   - Published Paper: AIMLA 2025 Paper #455
   - Source Code: <a href="https://github.com/shivaganesh22/major-project" target="_blank" class="text-cyan">github.com/shivaganesh22/major-project</a>
5. <span class="text-cyan">Auto-Send: Instagram Comment & DM Automation (Django)</span>:
   - Live Application: <a href="https://rsgflow.vercel.app" target="_blank" class="text-emerald">rsgflow.vercel.app</a>
   - Source Code: <a href="https://github.com/shivaganesh22/Auto-Send" target="_blank" class="text-cyan">github.com/shivaganesh22/Auto-Send</a>
6. <span class="text-cyan">Enterprise Application Onboarding & Governance</span>:
   - Source Code: <a href="https://github.com/shivaganesh22/app_onboarding" target="_blank" class="text-cyan">github.com/shivaganesh22/app_onboarding</a>
7. <span class="text-cyan">Complaint Management System (Android App)</span>:
   - Source Code: <a href="https://github.com/shivaganesh22/cms" target="_blank" class="text-cyan">github.com/shivaganesh22/cms</a>
8. <span class="text-cyan">Ecommerce Platform with QR Fraud Prevention (Django)</span>:
   - Live Website: <a href="https://ecommerce0.pythonanywhere.com" target="_blank" class="text-emerald">ecommerce0.pythonanywhere.com</a>
   - Source Code: <a href="https://github.com/shivaganesh22/ecommerce" target="_blank" class="text-cyan">github.com/shivaganesh22/ecommerce</a>
9. <span class="text-cyan">Smart Farming Assistant (Django)</span>:
   - Source Code: <a href="https://github.com/shivaganesh22/farming" target="_blank" class="text-cyan">github.com/shivaganesh22/farming</a>
10. <span class="text-cyan">Aadhar-Linked Voter Card System (Django)</span>:
    - Source Code: <a href="https://github.com/shivaganesh22/voter" target="_blank" class="text-cyan">github.com/shivaganesh22/voter</a>
11. <span class="text-cyan">Admission Management System - AMS Web Counseling (Django)</span>:
    - Live Website: <a href="https://amsproject00.pythonanywhere.com" target="_blank" class="text-emerald">amsproject00.pythonanywhere.com</a>
    - Source Code: <a href="https://github.com/shivaganesh22/amsproject" target="_blank" class="text-cyan">github.com/shivaganesh22/amsproject</a>
    - Overview: Dynamic dropdown web counseling alternative to EAMCET with automated seat allocation & email notifications.
12. <span class="text-cyan">Kids Learning Portal (Django)</span>:
    - Source Code: <a href="https://github.com/shivaganesh22/svsprojects" target="_blank" class="text-cyan">github.com/shivaganesh22/svsprojects</a>
13. <span class="text-cyan">PwC Enterprise IAM & Zero-Trust MFA Portal</span>:
    - Source Code: <a href="https://github.com/shivaganesh22/pwc" target="_blank" class="text-cyan">github.com/shivaganesh22/pwc</a>
14. <span class="text-cyan">AppLock: Multi-Factor Biometric Authenticator</span>:
    - Source Code: <a href="https://github.com/shivaganesh22/applock" target="_blank" class="text-cyan">github.com/shivaganesh22/applock</a>
15. <span class="text-cyan">FixItNow: Civic Grievance & Complaint Mobile App</span>:
    - Source Code: <a href="https://github.com/shivaganesh22/fixit-now" target="_blank" class="text-cyan">github.com/shivaganesh22/fixit-now</a>
      `,
      skills: () => `
<strong>Technical Capabilities & Core Arsenal:</strong>
- <span class="text-cyan">Offensive Security & Pentesting:</span>
  Android & Windows hacking, Remote Access Trojan (RAT) creation & payload injection, process injection, AMSI & AV evasion, Kali Linux, Burp Suite (MitM / Traffic Interception), Hydra (Credential Brute-Forcing), SQL Injection (Manual In-Band / Blind & SQLmap), WiFi Pentesting (Aircrack-ng, Wifite, WPA2 Deauth, Handshake Cracking), Metasploit, Nmap, Wireshark.
- <span class="text-cyan">Reverse Engineering & Android Internals:</span>
  Reverse Engineering (DEX/Smali patching, APKTool, JADX), Runtime Method Hooking (Frida, Objection), SSL Pinning Bypass, App Binning & Free Trial Bypasses, Payment & Subscription Logic Analysis, Bootloader Unlocking (Fastboot/ADB), Custom ROMs & Recoveries (TWRP/OrangeFox), Rooting (Magisk, KernelSU, Zygisk root cloaking).
- <span class="text-cyan">Enterprise IAM, PAM & Active Directory:</span>
  Delinea Secret Server, CyberArk Certified Defender PAM, CyberArk Core (Vault, PVWA, CPM, PSM, CCP), Active Directory (AD DS), Users/Groups/OUs, DC Promotion, GPOs (partial), Quest Change Auditor, Splunk SIEM, Microsoft Entra ID, Okta Identity Cloud, SAML 2.0, OAuth 2.0, OIDC, SCIM Automated Provisioning & JIT, Zero-Trust Conditional Access, RBAC.
- <span class="text-cyan">Software & App Development:</span>
  Python (Django 5, DRF, Flask), ReactJS 18, Vite, Flutter (Dart), Native Android (Java/Kotlin), Android TV (Leanback), Node.js, Express, Tailwind CSS, PostgreSQL, MySQL, SQLite, Firebase.
- <span class="text-cyan">Cloud & AI/ML:</span>
  PyTorch, TensorFlow, OpenCV, MediaPipe (Face Mesh), Librosa, XGBoost, Published Paper (AIMLA 2025 #455), AWS Compute, Google Cloud, Vercel, PythonAnywhere, Bash & Linux Sysadmin.
      `,
      certs: () => `
<strong>Verified Credentials (CyberArk, 14 Credly Badges & Google Drive):</strong>
- CyberArk: Certified Defender — Privileged Access Management (PAM) [Feb 2026]
- Google Cloud: Certified Partner Specialist Gemini Enterprise Agent Development
- Google Cloud: Deploy & Evaluate ADK Agents, Accelerate with Antigravity
- Cisco: CCNA (Enterprise Networking, Switching/Routing, Intro to Networks)
- Cisco: Introduction to Cybersecurity, PCAP & Python Essentials
- AWS: Educate Compute Badge
- IBM: Enterprise Data Science, Threat Intelligence & Hunting
- EC-Council: Network Defense Essentials (NDE)
- Honors: 1st Place PwC Hackathon, National Apprenticeship Certificate (94.8%)
- Certificates Folder: <a href="https://drive.google.com/drive/folders/1fFWOkMl8EO72BnRldHPPbFqdkQEyvNF5" target="_blank" class="text-cyan">Open Drive Folder ↗</a>
      `,
      contact: () => `
<strong>Social Media, Profiles & Direct Contact:</strong>
- Domain: <a href="https://shivaganesh.net" target="_blank" class="text-cyan">https://shivaganesh.net</a>
- GitHub: <a href="https://github.com/shivaganesh22" target="_blank" class="text-cyan">https://github.com/shivaganesh22</a>
- LinkedIn: <a href="https://www.linkedin.com/in/shivaganesh6" target="_blank" class="text-cyan">https://www.linkedin.com/in/shivaganesh6</a>
- Credly Badges: <a href="https://www.credly.com/users/shivaganesh22" target="_blank" class="text-cyan">https://www.credly.com/users/shivaganesh22</a>
- Official Drive: <a href="https://drive.google.com/drive/folders/1fFWOkMl8EO72BnRldHPPbFqdkQEyvNF5" target="_blank" class="text-cyan">Certificates & Resumes Drive Folder</a>
- Email: <a href="mailto:shivaganeshd22@gmail.com" class="text-cyan">shivaganeshd22@gmail.com</a>
      `,
      resume: () => {
        window.open('https://drive.google.com/drive/folders/1fFWOkMl8EO72BnRldHPPbFqdkQEyvNF5', '_blank');
        return `Opening official resumes and certificates drive folder in a new tab...`;
      },
      matrix: () => {
        this.runMatrixEffect();
        return `Initializing digital cyber matrix rain...`;
      },
      clear: () => {
        this.output.innerHTML = '';
        return '';
      },
      'sudo hire': () => {
        window.soundEngine?.playSuccess();
        return `
<span class="text-emerald">✔ ROOT ACCESS GRANTED!</span>
Executing optimal decision tree...
[SUCCESS] Shiva Ganesh is an outstanding addition to high-impact software, IAM, and security engineering teams.
Direct contact: <a href="https://www.linkedin.com/in/shivaganesh6" target="_blank" class="text-cyan">Connect on LinkedIn</a> or email <a href="mailto:dornalashivaganesh0@gmail.com" class="text-cyan">dornalashivaganesh0@gmail.com</a>.
        `;
      }
    };

    this.init();
  }

  init() {
    if (!this.overlay || !this.input) return;

    document.querySelectorAll('[data-terminal-trigger]').forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });

    const closeBtn = document.getElementById('terminal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === '`' || e.key === '~') {
        if (document.activeElement.tagName !== 'INPUT' || document.activeElement === this.input) {
          e.preventDefault();
          this.toggle();
        }
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    this.input.addEventListener('keydown', (e) => {
      window.soundEngine?.playKeypress();

      if (e.key === 'Enter') {
        const cmd = this.input.value.trim();
        this.executeCommand(cmd);
        if (cmd) {
          this.history.push(cmd);
          this.historyIndex = this.history.length;
        }
        this.input.value = '';
      } else if (e.key === 'ArrowUp') {
        if (this.history.length > 0 && this.historyIndex > 0) {
          this.historyIndex--;
          this.input.value = this.history[this.historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input.value = this.history[this.historyIndex];
        } else {
          this.historyIndex = this.history.length;
          this.input.value = '';
        }
      }
    });
  }

  toggle() {
    this.isOpen ? this.close() : this.open();
  }

  open() {
    this.isOpen = true;
    this.overlay.classList.add('open');
    window.soundEngine?.playChirp(400, 800, 0.08);
    setTimeout(() => this.input.focus(), 100);
  }

  close() {
    this.isOpen = false;
    this.overlay.classList.remove('open');
    window.soundEngine?.playClick();
  }

  executeCommand(rawCmd) {
    const cmd = rawCmd.toLowerCase();
    const cmdItem = document.createElement('div');
    cmdItem.className = 'cmd-history-item';

    cmdItem.innerHTML = `
      <div class="cmd-line-prompt">
        <span class="prompt-prefix">guest@shivaganesh:~$</span>
        <span>${rawCmd}</span>
      </div>
    `;

    if (!cmd) {
      this.output.appendChild(cmdItem);
      return;
    }

    const responseDiv = document.createElement('div');
    responseDiv.className = 'cmd-response';

    if (this.commands[cmd]) {
      const resp = this.commands[cmd]();
      if (resp) responseDiv.innerHTML = resp;
    } else {
      responseDiv.innerHTML = `<span style="color: #ff5f56;">Command not recognized: '${rawCmd}'. Type '<span class="text-cyan">help</span>' for available commands.</span>`;
    }

    if (cmd !== 'clear') {
      cmdItem.appendChild(responseDiv);
      this.output.appendChild(cmdItem);
    }

    this.output.scrollTop = this.output.scrollHeight;
  }

  runMatrixEffect() {
    let count = 0;
    const interval = setInterval(() => {
      const chars = "010101SHIVAGANESHENTRAOKTAIAMCYBERARK0101";
      const randomLine = Array.from({length: 40}, () => chars[Math.floor(Math.random() * chars.length)]).join(' ');
      const div = document.createElement('div');
      div.style.color = '#00f5a0';
      div.style.fontSize = '0.78rem';
      div.textContent = randomLine;
      this.output.appendChild(div);
      this.output.scrollTop = this.output.scrollHeight;
      count++;
      if (count > 15) clearInterval(interval);
    }, 80);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.devTerminal = new DeveloperTerminal();
});
