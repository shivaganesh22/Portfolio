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
Role: Software Developer · Enterprise IAM · Application Security
Education: B.Tech in IT, Anurag University (CGPA: <strong>9.05</strong>)
Primary Domain: <a href="https://shivaganesh.net" target="_blank" class="text-cyan">shivaganesh.net</a>
Email: <a href="mailto:dornalashivaganesh0@gmail.com" class="text-cyan">dornalashivaganesh0@gmail.com</a>
Positioning: Engineering multi-platform software, automating enterprise identity workflows, and testing application security controls.
      `,
      experience: () => `
<strong>Professional Experience:</strong>
1. <span class="text-cyan">IAM Associate — PwC (Cyber Risk & Regulatory / Access Management)</span> [Aug 2025 - Present]
   - Managed users, groups, roles across Okta and Microsoft Entra ID.
   - Configured Conditional Access (MFA enforcement, sign-in risk, location rules, device compliance).
   - Created applications using SAML 2.0, OIDC/OAuth, SCIM / JIT provisioning.
   - Scripted automated application onboarding into Entra ID.
2. <span class="text-cyan">IAM Intern — PwC (Privileged Access Management - PAM)</span> [Feb 2025 - Aug 2025]
   - Deployed and configured CyberArk Vault, PVWA, CPM, PSM, HTML5 Gateway.
   - Implemented Central Credential Provider (CCP) for secure credential injection.
   - Configured password rotation via CPM and managed account lifecycle in Delinea Secret Server.
3. <span class="text-cyan">National Apprenticeship Certificate: Software Programmer (V1)</span> [Score: 94.8%, 40 Credits]
      `,
      projects: () => `
<strong>Flagship Projects & Live Links:</strong>
1. <span class="text-cyan">RSGMovies Multi-Platform Ecosystem</span>:
   - Live: <a href="https://rsg-movies.vercel.app" target="_blank" class="text-emerald">https://rsg-movies.vercel.app</a>
   - GitHub: <a href="https://github.com/shivaganesh22/rsgmovies" target="_blank" class="text-cyan">github.com/shivaganesh22/rsgmovies</a>
2. <span class="text-cyan">Auto-Send: Instagram Comment & DM SaaS</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/Auto-Send" target="_blank" class="text-cyan">github.com/shivaganesh22/Auto-Send</a>
3. <span class="text-cyan">Hybrid ML Image Deduplication (AIMLA 2025 Paper #455)</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/deduplication" target="_blank" class="text-cyan">github.com/shivaganesh22/deduplication</a>
4. <span class="text-cyan">AUpulse Attendance (Flutter + Django + CCTV Face Verification)</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/aupulse_app" target="_blank" class="text-cyan">github.com/shivaganesh22/aupulse_app</a>
5. <span class="text-cyan">Ecommerce with Anti-Fraud QR Verification</span>:
   - Live: <a href="https://ecommerce0.pythonanywhere.com" target="_blank" class="text-emerald">ecommerce0.pythonanywhere.com</a>
   - GitHub: <a href="https://github.com/shivaganesh22/ecommerce" target="_blank" class="text-cyan">github.com/shivaganesh22/ecommerce</a>
6. <span class="text-cyan">AppLock Multi-Auth (MediaPipe + Random Forest + WebAuthn)</span>:
   - GitHub: <a href="https://github.com/shivaganesh22/applock" target="_blank" class="text-cyan">github.com/shivaganesh22/applock</a>
      `,
      skills: () => `
<strong>Technical Skills Inventory:</strong>
- <span class="text-cyan">Programming:</span> Python, Java, PHP, HTML, CSS, JavaScript, Dart
- <span class="text-cyan">Frameworks:</span> Django, Django REST Framework, ReactJS, Flutter, Flask
- <span class="text-cyan">Databases:</span> MySQL, PostgreSQL, SQLite
- <span class="text-cyan">IAM & Identity:</span> Microsoft Entra ID, Okta, CyberArk PAM, Delinea Secret Server, SAML 2.0, OIDC, SCIM
- <span class="text-cyan">Security Tools:</span> Burp Suite, Metasploit, sqlmap, Aircrack-ng, Kali Linux, Frida, Git
- <span class="text-cyan">AI / ML:</span> PyTorch, TensorFlow, scikit-learn, MediaPipe, OpenCV, Librosa, XGBoost
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
      iam: () => `
<strong>Enterprise Identity Architecture:</strong>
Zero Trust Model: Never Trust, Always Verify.
- Enforcing device compliance, geolocation fencing, and sign-in risk triggers.
- Central Credential Provider (CCP) eliminating hardcoded passwords in scripts.
- Automated SCIM provisioning and Just-in-Time (JIT) access governance.
      `,
      contact: () => `
<strong>Contact & Verification:</strong>
- Domain: <a href="https://shivaganesh.net" target="_blank" class="text-cyan">shivaganesh.net</a>
- Email: <a href="mailto:dornalashivaganesh0@gmail.com" class="text-cyan">dornalashivaganesh0@gmail.com</a>
- GitHub: <a href="https://github.com/shivaganesh22" target="_blank" class="text-cyan">https://github.com/shivaganesh22</a>
- LinkedIn: <a href="https://www.linkedin.com/in/shivaganesh6" target="_blank" class="text-cyan">https://www.linkedin.com/in/shivaganesh6</a>
- Credly: <a href="https://www.credly.com/users/shivaganesh22" target="_blank" class="text-cyan">https://www.credly.com/users/shivaganesh22</a>
- Certificates: <a href="https://drive.google.com/drive/folders/1fFWOkMl8EO72BnRldHPPbFqdkQEyvNF5" target="_blank" class="text-cyan">Google Drive Certificates</a>
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
