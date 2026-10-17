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
Education: B.Tech in IT, Anurag University (CGPA: <strong>9.05</strong>)
Primary Domain: <a href="https://shivaganesh.net" target="_blank" class="text-cyan">shivaganesh.net</a>
Email: <a href="mailto:shivaganeshd22@gmail.com" class="text-cyan">shivaganeshd22@gmail.com</a>
Expertise: Multi-platform applications, low-level Android reverse engineering, offensive pentesting, and automated enterprise identity governance.
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
   - Deployed and configured CyberArk Vault, PVWA, CPM, PSM, HTML5 Gateway.
   - Implemented Central Credential Provider (CCP) for secure credential injection.
   - Configured password rotation via CPM and managed account lifecycle in Delinea Secret Server.
3. <span class="text-cyan">National Apprenticeship Certificate: Software Programmer (V1)</span> [Score: 94.8%, 40 Credits]
      `,
      projects: () => `
<strong>Flagship Projects & Live Monorepo Deployments:</strong>
1. <span class="text-cyan">RSGMovies Multi-Screen Ecosystem (Monorepo)</span>:
   - Live Frontend: <a href="https://rsgmovies.com" target="_blank" class="text-emerald">rsgmovies.com</a>
   - Live Backend: <a href="https://rsg-movies.vercel.app" target="_blank" class="text-emerald">rsg-movies.vercel.app</a>
   - Monorepo: <a href="https://github.com/shivaganesh22/rsgmovies" target="_blank" class="text-cyan">github.com/shivaganesh22/rsgmovies</a>
   - Scrapers: Movierulz, TamilMV, MovieBlast, iStreamflare, Torrent Search, YouTube, iBOMMA, MovierulzHD, Seedr
2. <span class="text-cyan">Auto-Send: Instagram Comment & DM SaaS</span>:
   - Live: <a href="https://rsgflow.vercel.app" target="_blank" class="text-emerald">rsgflow.vercel.app</a>
   - GitHub: <a href="https://github.com/shivaganesh22/Auto-Send" target="_blank" class="text-cyan">github.com/shivaganesh22/Auto-Send</a>
3. <span class="text-cyan">Price Tracker Distributed Monitor (Monorepo)</span>:
   - Live Frontend: <a href="https://rsgtracker.vercel.app" target="_blank" class="text-emerald">rsgtracker.vercel.app</a>
   - Live Backend: <a href="https://rsg-price.vercel.app" target="_blank" class="text-emerald">rsg-price.vercel.app</a>
   - Monorepo: <a href="https://github.com/shivaganesh22/price-tracker" target="_blank" class="text-cyan">github.com/shivaganesh22/price-tracker</a>
4. <span class="text-cyan">AUpulse Automated Attendance System (Monorepo)</span>:
   - Live API: <a href="https://aupulse-api.vercel.app" target="_blank" class="text-emerald">aupulse-api.vercel.app</a>
   - Live CV: <a href="https://aupulse-cv.vercel.app" target="_blank" class="text-emerald">aupulse-cv.vercel.app</a>
   - Monorepo: <a href="https://github.com/shivaganesh22/mini-project" target="_blank" class="text-cyan">github.com/shivaganesh22/mini-project</a>
5. <span class="text-cyan">Hybrid ML Image Deduplication (AIMLA 2025 Paper #455)</span>:
   - Monorepo: <a href="https://github.com/shivaganesh22/major-project" target="_blank" class="text-cyan">github.com/shivaganesh22/major-project</a>
6. <span class="text-cyan">Automated Enterprise App Onboarding (PwC)</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/app_onboarding" target="_blank" class="text-cyan">github.com/shivaganesh22/app_onboarding</a>
7. <span class="text-cyan">FixItNow: Civic Grievance & Complaint Mobile App</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/fixit-now" target="_blank" class="text-cyan">github.com/shivaganesh22/fixit-now</a>
8. <span class="text-cyan">Wardobe: P2P Outfit Rental & Fashion Platform</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/wardobe" target="_blank" class="text-cyan">github.com/shivaganesh22/wardobe</a>
9. <span class="text-cyan">Chart Generator: Interactive Visual Canvas Studio</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/chart-generator" target="_blank" class="text-cyan">github.com/shivaganesh22/chart-generator</a>
10. <span class="text-cyan">AppLock Multi-Biometric Authenticator</span>:
    - GitHub: <a href="https://github.com/shivaganesh22/applock" target="_blank" class="text-cyan">github.com/shivaganesh22/applock</a>
11. <span class="text-cyan">PwC Enterprise IAM & Zero-Trust MFA Portal</span>:
    - GitHub: <a href="https://github.com/shivaganesh22/pwc" target="_blank" class="text-cyan">github.com/shivaganesh22/pwc</a>
12. <span class="text-cyan">Full-Stack Assessment: Django REST API & React Studio</span>:
    - GitHub: <a href="https://github.com/shivaganesh22/21EG112B26" target="_blank" class="text-cyan">github.com/shivaganesh22/21EG112B26</a>
13. <span class="text-cyan">Ecommerce with Anti-Fraud QR Verification</span>:
    - Live: <a href="https://ecommerce0.pythonanywhere.com" target="_blank" class="text-emerald">ecommerce0.pythonanywhere.com</a>
    - GitHub: <a href="https://github.com/shivaganesh22/ecommerce" target="_blank" class="text-cyan">github.com/shivaganesh22/ecommerce</a>
      `,
      skills: () => `
<strong>Technical Capabilities & Core Arsenal:</strong>
- <span class="text-cyan">Offensive Security & Pentesting:</span>
  Android & Windows hacking, Remote Access Trojan (RAT) creation & payload injection, process injection, AMSI & AV evasion, Kali Linux, Burp Suite (MitM / Traffic Interception), Hydra (Credential Brute-Forcing), SQL Injection (Manual In-Band / Blind & SQLmap), WiFi Pentesting (Aircrack-ng, Wifite, WPA2 Deauth, Handshake Cracking), Metasploit, Nmap, Wireshark.
- <span class="text-cyan">Android Internals & Reverse Engineering:</span>
  Bootloader Unlocking (Fastboot/ADB), Rooting (Magisk, KernelSU, Zygisk), Custom Recovery (TWRP, OrangeFox), Custom ROM Flashing, APK Modding & Smali Instrumentation, SSL Pinning Bypass (Frida / Objection / JustTrustMe), App Binning & Free Trial Bypasses, Payment Logic Analysis.
- <span class="text-cyan">Enterprise IAM & Active Directory:</span>
  Active Directory (AD DS), Users/Groups/OUs, DC Promotion, GPOs (partial), Change Auditor, Splunk SIEM, Microsoft Entra ID, Okta Identity Cloud, CyberArk PAM (Vault, PVWA, CPM, PSM, CCP), SAML 2.0, OAuth 2.0, OIDC, SCIM Automated Provisioning, Zero-Trust Conditional Access, Role-Based Access Control (RBAC).
- <span class="text-cyan">Software & App Development:</span>
  Python (Django 5, DRF, Flask), ReactJS 18, Vite, Flutter (Dart), Native Android (Java/Kotlin), Android TV (Leanback), Node.js, Express, Tailwind CSS, PostgreSQL, MySQL, SQLite, Firebase.
- <span class="text-cyan">Cloud & AI/ML:</span>
  PyTorch, TensorFlow, OpenCV, MediaPipe (Face Mesh), Librosa, XGBoost, Published Paper (AIMLA 2025 #455), AWS Compute, Google Cloud, Vercel, PythonAnywhere, Bash & Linux Sysadmin.
      `,
      certs: () => `
<strong>Verified Credentials (14 Credly Badges + Google Drive):</strong>
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
