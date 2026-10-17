/* ==========================================================================
   SHIVA GANESH PORTFOLIO - INTERACTIVE DEVELOPER CLI TERMINAL
   Interactive shell, hotkey toggle (~), command history, sound effects
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
  <span class="text-cyan">projects</span>      - Flagship ecosystems & engineering case studies
  <span class="text-cyan">skills</span>        - Technical proficiencies & security tools
  <span class="text-cyan">certs</span>         - Verified Credly badges & Drive credentials
  <span class="text-cyan">iam</span>           - Enterprise identity security architecture
  <span class="text-cyan">contact</span>       - Public profiles, domains & contact links
  <span class="text-cyan">resume</span>        - Access verified resume files
  <span class="text-cyan">matrix</span>        - Toggle cyber matrix rain sequence
  <span class="text-cyan">clear</span>         - Clear terminal buffer
  <span class="text-emerald">sudo hire</span>     - Execute hiring sequence
      `,
      whoami: () => `
<strong>Dornala Shiva Ganesh</strong>
Role: Software Developer · Enterprise IAM · Application Security
Education: B.Tech in IT, Anurag University (CGPA: <strong>9.05</strong>)
Primary Domain: <a href="https://shivaganesh.net" target="_blank" class="text-cyan">shivaganesh.net</a> | <a href="https://sg22.me" target="_blank" class="text-cyan">sg22.me</a>
Positioning: Engineering multi-platform software, automating enterprise identity workflows, and testing application security controls.
      `,
      experience: () => `
<strong>Professional Experience:</strong>
1. <span class="text-cyan">IAM Associate — PwC (Cyber Risk & Regulatory)</span> [Aug 2025 - Present]
   - Entra ID & Okta administration, Conditional Access, SAML 2.0 / OIDC integrations.
   - Scripted automated enterprise application onboarding workflows.
2. <span class="text-cyan">IAM Intern — PwC (Privileged Access Management)</span> [Feb 2025 - Aug 2025]
   - CyberArk Vault, PVWA, CPM password rotation, PSM session isolation, CCP credential provider.
   - Delinea Secret Server account lifecycle management.
3. <span class="text-cyan">Associate Trainee & National Apprenticeship</span> [94.8% Score, 40 NCRF Credits]
      `,
      projects: () => `
<strong>Flagship Projects:</strong>
1. <span class="text-cyan">RSGMovies Ecosystem</span>: Multi-platform streaming with React Web, Django REST API, Android TV Leanback app, and native Android.
2. <span class="text-cyan">IAM Automation Engine</span>: Automated Entra ID & Okta application provisioning pipeline.
3. <span class="text-cyan">Auto-Send SaaS</span>: Instagram comment & DM automation SaaS via Meta Graph API v26.0.
4. <span class="text-cyan">Image Deduplication</span>: Published AIMLA 2025 research on hybrid ML deduplication.
5. <span class="text-cyan">AppLock</span>: Multi-auth framework (MediaPipe Face Landmarks, Random Forest gestures, WebAuthn).
      `,
      skills: () => `
<strong>Technical Skills Inventory:</strong>
- <span class="text-cyan">IAM & Identity:</span> Microsoft Entra ID, Okta, CyberArk PAM, Delinea Secret Server, SAML 2.0, OIDC, SCIM.
- <span class="text-cyan">Development:</span> Python, Django, React, react-native-tvos, Flutter, Java, REST APIs, PostgreSQL.
- <span class="text-cyan">Security & Systems:</span> Burp Suite, Frida, Kali Linux, Nmap, Wi-Fi Tools, Reverse Engineering.
- <span class="text-cyan">AI / ML:</span> TensorFlow, PyTorch, scikit-learn, MediaPipe, OpenCV, Librosa.
      `,
      certs: () => `
<strong>Credentials (14 Credly Badges + Drive):</strong>
- Google Cloud: Certified Partner Specialist Gemini Enterprise Agent Development
- Google Cloud: Deploy & Evaluate ADK Agents, Accelerate with Antigravity
- Cisco: CCNA (Enterprise Networking, Switching/Routing, Intro to Networks)
- Cisco: Introduction to Cybersecurity, PCAP & Python Essentials
- AWS: Educate Compute Badge
- IBM: Enterprise Data Science, Threat Intelligence & Hunting
- EC-Council: Network Defense Essentials (NDE)
- Honors: 1st Place PwC Hackathon, National Apprenticeship Certificate (94.8%)
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
- GitHub: <a href="https://github.com/shivaganesh22" target="_blank" class="text-cyan">https://github.com/shivaganesh22</a>
- LinkedIn: <a href="https://www.linkedin.com/in/shivaganesh6" target="_blank" class="text-cyan">https://www.linkedin.com/in/shivaganesh6</a>
- Credly: <a href="https://www.credly.com/users/shivaganesh22" target="_blank" class="text-cyan">https://www.credly.com/users/shivaganesh22</a>
- Certificates: <a href="https://drive.google.com/drive/folders/1fFWOkMl8EO72BnRldHPPbFqdkQEyvNF5" target="_blank" class="text-cyan">Google Drive Folder</a>
- Domains: <a href="https://shivaganesh.net" target="_blank" class="text-cyan">shivaganesh.net</a> / <a href="https://sg22.me" target="_blank" class="text-cyan">sg22.me</a>
      `,
      resume: () => {
        window.open('https://drive.google.com/drive/folders/1fFWOkMl8EO72BnRldHPPbFqdkQEyvNF5', '_blank');
        return `Opening official resume and certificates drive folder in a new tab...`;
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
Direct contact: <a href="https://www.linkedin.com/in/shivaganesh6" target="_blank" class="text-cyan">Connect on LinkedIn</a> or visit <a href="https://github.com/shivaganesh22" target="_blank" class="text-cyan">GitHub</a>.
        `;
      }
    };

    this.init();
  }

  init() {
    if (!this.overlay || !this.input) return;

    // Toggle Buttons
    document.querySelectorAll('[data-terminal-trigger]').forEach(btn => {
      btn.addEventListener('click', () => this.toggle());
    });

    // Close button
    const closeBtn = document.getElementById('terminal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', () => this.close());

    // Click outside window to close
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    // Hotkey ~ / ` to toggle
    window.addEventListener('keydown', (e) => {
      if (e.key === '`' || e.key === '~') {
        // Only if not focused on another input
        if (document.activeElement.tagName !== 'INPUT' || document.activeElement === this.input) {
          e.preventDefault();
          this.toggle();
        }
      } else if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Terminal Input
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
