/* ==========================================================================
   SHIVA GANESH PORTFOLIO - ACCURATE PROJECT INVENTORY & ARCHITECTURE
   Extracted from verified resumes, GitHub repositories, and Vercel deployments.
   NO raw screenshots: Focused on clean technical architecture, live links, and repos.
   ========================================================================== */

const PROJECTS_DATA = {
  flagships: [
    {
      id: "rsgmovies",
      category: "web_mobile",
      badge: "Full-Stack Media Ecosystem",
      title: "RSGMovies Multi-Platform Streaming Platform",
      subtitle: "Django REST API · React Web · Android TV · Flutter Mobile",
      summary: "A distributed streaming and media discovery ecosystem integrating APIs for streaming and downloading. Features upload pipeline to Seedr for cloud streaming in various resolutions, YouTube downloader, torrent searcher, custom D-pad spatial focus on Android TV, HMAC-SHA256 signed backend stream proxying, and QR-based Entra authentication.",
      liveUrl: "https://rsg-movies.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/rsgmovies",
      endpoints: [
        "GET /api/movies/feed/ — Aggregated media stream feeds",
        "POST /api/seedr/upload/ — Stream caching & multi-resolution transcode",
        "POST /api/tv/auth/qr/init/ — Ephemeral QR session initialization",
        "POST /api/tv/auth/qr/approve/ — Web biometric approval & token issue"
      ],
      highlights: [
        { title: "Architecture", desc: "Unified Django REST API backend deployed on Vercel powering React Web, Android TV (Leanback), and mobile clients." },
        { title: "Security & Auth", desc: "QR Entra ID authentication with single-session enforcement (displaced device receives 401 SESSION_REVOKED)." },
        { title: "Media Engine", desc: "HMAC-SHA256 signed backend stream proxying preventing direct credential exposure or stream tampering." }
      ],
      tech: ["Django REST Framework", "ReactJS", "Flutter", "react-native-tvos", "Seedr API", "Vercel", "PostgreSQL", "HMAC-SHA256"]
    },
    {
      id: "iam-automation",
      category: "iam_security",
      badge: "PwC Enterprise Work",
      title: "Automated Enterprise App Onboarding & IAM Governance",
      subtitle: "Microsoft Entra ID · Okta · PowerShell / Python · CyberArk PAM",
      summary: "Engineered automated scripts at PwC to onboard enterprise applications into Microsoft Entra ID and Okta. Automated single sign-on (SSO), SAML 2.0 / OIDC federation, attribute/claims mapping, SCIM / Just-in-Time provisioning, and Conditional Access zero-trust policy enforcement.",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/pwc",
      endpoints: [
        "New-EntraAppOnboarding.ps1 — Parameterized enterprise app registration",
        "Config-ConditionalAccess.ps1 — Zero-trust policy baseline enforcement",
        "Audit-GroupEntitlements.ps1 — RBAC least-privilege verification"
      ],
      highlights: [
        { title: "Orchestrated Provisioning", desc: "Automates Enterprise Applications, Service Principals, OAuth redirect URIs, and admin roles from input parameters." },
        { title: "Zero-Trust Enforcement", desc: "Configured Entra Conditional Access policies (Phishing-resistant MFA, sign-in risk, device compliance, location fencing)." },
        { title: "Privileged Access (PAM)", desc: "CyberArk Vault, PVWA, CPM password rotation, PSM session recording, and CCP programmatic secret injection." }
      ],
      tech: ["Microsoft Entra ID", "Okta", "CyberArk PAM", "Delinea Secret Server", "SAML 2.0", "OAuth 2.0 / OIDC", "SCIM", "PowerShell", "Python"]
    },
    {
      id: "auto-send",
      category: "web_mobile",
      badge: "SaaS Webhook Platform",
      title: "Auto-Send: Instagram Comment & DM Automation SaaS",
      subtitle: "Django 5 · Meta Graph API v26.0 · Alpine.js · Tailwind · Chart.js",
      summary: "A production-grade social automation SaaS delivering automated comment replies and private direct messages via Meta Graph API v26.0. Built with SHA-256 HMAC webhook verification, comment deduplication by ID, follower gating, and real-time latency analytics.",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/Auto-Send",
      endpoints: [
        "POST /webhooks/instagram/ — SHA-256 HMAC verified event challenge handler",
        "GET /api/graph/inspect/ — Meta Graph API payload and round-trip latency inspector",
        "POST /automation/rules/ — Rule engine dispatcher with follower gating verification"
      ],
      highlights: [
        { title: "Idempotency Pipeline", desc: "Webhook challenge verification with strict comment_id deduplication to prevent duplicate message dispatches." },
        { title: "Follower Gating", desc: "Verifies account follower state via Meta Graph API before dispatching private links or bonus downloads." },
        { title: "Observability", desc: "Built-in request inspector tracking response latency, status codes, payload dumps, and CSV activity exports." }
      ],
      tech: ["Django 5", "Meta Graph API v26.0", "Webhooks", "HMAC-SHA256", "Alpine.js", "Chart.js", "Tailwind CSS"]
    },
    {
      id: "deduplication",
      category: "ai_ml",
      badge: "Published Research · AIMLA 2025 Paper #455",
      title: "Hybrid ML Model for Image Deduplication & Storage Optimization",
      subtitle: "Pretrained Deep Learning · ResNet / EfficientNet / MobileNet · AIMLA 2025",
      summary: "Published research presented at the 3rd International Conference on Artificial Intelligence and Machine Learning Applications (AIMLA 2025). Formulates a hybrid feature extraction and perceptual hashing architecture to detect near-duplicate and modified visual media at scale.",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/deduplication",
      endpoints: [
        "POST /api/dedup/analyze/ — Deep CNN feature vector extraction & cosine clustering",
        "POST /api/dedup/hash/ — Perceptual Hamming distance candidate matching",
        "GET /api/dedup/metrics/ — Latency, memory footprint, and storage reduction report"
      ],
      highlights: [
        { title: "AIMLA 2025 Paper #455", desc: "Co-authored and published conference paper on hybrid machine learning for image deduplication." },
        { title: "Deep Feature Extraction", desc: "Benchmarked embeddings from ResNet, EfficientNet, and MobileNet against traditional perceptual hashing (dHash/pHash)." },
        { title: "Storage Savings", desc: "Eliminates duplicate visual media in large-scale cloud repositories to minimize redundant storage costs." }
      ],
      tech: ["PyTorch", "TensorFlow", "ResNet", "EfficientNet", "MobileNet", "OpenCV", "AIMLA 2025", "Django"]
    },
    {
      id: "aupulse-app",
      category: "web_mobile",
      badge: "Computer Vision & Mobile",
      title: "AUpulse Attendance Management System",
      subtitle: "Flutter Mobile App + Django REST API + CCTV Facial Recognition",
      summary: "An automated attendance-management system linked with CCTV and class timetables. Eliminates human effort and prevents proxy attendance by marking students present based on real-time facial recognition data, complete with institutional administration and reporting.",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/aupulse_app",
      endpoints: [
        "POST /api/attendance/mark/ — CCTV biometric stream face matching & verification",
        "GET /api/attendance/reports/ — Department-level timetable and presence analytics",
        "POST /api/academic/structure/ — Semester, section, and student enrollment sync"
      ],
      highlights: [
        { title: "Biometric Attendance", desc: "CCTV facial recognition pipeline validating classroom presence against timetabled section rosters." },
        { title: "Proxy Prevention", desc: "Tamper-proof real-time facial landmark logging eliminating manual roll-call and paper proxies." },
        { title: "Mobile & Admin Portal", desc: "Flutter client for student presence visibility paired with Django API for administration." }
      ],
      tech: ["Flutter / Dart", "Django REST API", "OpenCV", "Facial Recognition", "MySQL", "PostgreSQL"]
    },
    {
      id: "applock",
      category: "ai_ml",
      badge: "Biometric & Hardware Auth",
      title: "AppLock: ML Multi-Factor Biometric Authentication",
      subtitle: "MediaPipe 468 Face Landmarks · Hand Gesture RF · WebAuthn / FIDO2",
      summary: "An alternative multi-factor authentication framework enabling enrollment and verification via 468 MediaPipe 3D face landmarks evaluated by an SVM (RBF kernel), 21 hand joint angles evaluated by Random Forest, and WebAuthn hardware security keys.",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/applock",
      endpoints: [
        "POST /auth/face/verify/ — 468 MediaPipe landmark distance vector evaluation via SVM",
        "POST /auth/gesture/verify/ — Hand joint angles and curl classification via Random Forest",
        "POST /auth/webauthn/assertion/ — Cryptographic origin challenge validation"
      ],
      highlights: [
        { title: "468 Face Landmarks", desc: "Real-time MediaPipe facial mesh with normalized geometric vectors fed into scikit-learn SVM." },
        { title: "Hand Gesture RF", desc: "21 hand joint angles and curl characteristics evaluated by Random Forest." },
        { title: "FIDO2 / WebAuthn", desc: "Hardware security key challenge-response protocol enforcing physical possession." }
      ],
      tech: ["MediaPipe", "scikit-learn (SVM/RF)", "WebAuthn / FIDO2", "Flask", "OpenCV", "SQLAlchemy"]
    }
  ],
  supporting: [
    {
      title: "Ecommerce Platform with QR Fraud Prevention",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Full-scale Django e-commerce platform featuring cryptographic QR code generation for every order. Used for return verification and anti-counterfeiting.",
      tech: ["Django", "Python", "QR Cryptography", "SQLite"],
      liveUrl: "https://ecommerce0.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/ecommerce"
    },
    {
      title: "Smart Farming Assistant",
      category: "ai_ml",
      badge: "Django Platform",
      desc: "Smart agriculture platform offering machine learning crop and fertilizer recommendations, weather forecasts, government scheme information, and an online crop marketplace.",
      tech: ["Django", "scikit-learn", "Weather API", "NumPy"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/farming"
    },
    {
      title: "Complaint Management System (CMS)",
      category: "web_mobile",
      badge: "Native Android",
      desc: "Android application in Java designed for government schools. Enables students to submit complaints and provides monitoring teams with real-time verification and chat.",
      tech: ["Android Java", "REST API", "Push Notifications", "MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/cms"
    },
    {
      title: "Aadhar-Linked Voter Card System",
      category: "web_mobile",
      badge: "Django Security",
      desc: "Secure system for registering and updating voter cards linked to Aadhar to eliminate duplication and ensure verifiable electoral records.",
      tech: ["Django", "Python", "Identity Verification", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/voter"
    },
    {
      title: "Placement Management System (PMS)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Institutional placement workflow portal in Django. Handles company drives, eligibility tracking, student interview scheduling, and placement analytics.",
      tech: ["Django", "Bootstrap", "Role-Based Auth", "PythonAnywhere"],
      liveUrl: "https://pms0.pythonanywhere.com/",
      githubUrl: "https://github.com/shivaganesh22/pms"
    },
    {
      title: "Admission Management System (AMS)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Workflow automation system in Django managing applicant processing, document verification, merit list calculations, and department allotments.",
      tech: ["Django", "Python", "Workflow Engine"],
      liveUrl: "https://amsproject00.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/amsproject"
    },
    {
      title: "Price Tracker Distributed Application",
      category: "web_mobile",
      badge: "React + Django",
      desc: "Distributed price tracking monitor pairing a React 18 frontend with a scalable Django REST backend and Firebase integration for real-time price alerts.",
      tech: ["React 18", "Django REST", "Firebase", "Tailwind CSS"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/pricetracker-frontend"
    },
    {
      title: "Parkinson's Audio Speech ML Classifier",
      category: "ai_ml",
      badge: "Acoustic ML",
      desc: "Acoustic signal processing tool extracting vocal jitter, shimmer, and spectral features using Librosa and FFmpeg, feeding XGBoost classifiers for acoustic pattern research.",
      tech: ["Librosa", "XGBoost", "FFmpeg", "scikit-learn", "Django"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/parkinson"
    },
    {
      title: "ProctorVault Remote Exam Guardian",
      category: "iam_security",
      badge: "Session Security",
      desc: "Django-based examination integrity platform implementing secure session handling, candidate verification, and tamper-resistant audit logging.",
      tech: ["Django", "Python", "Session Security", "Audit Logs"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/proctorvault"
    },
    {
      title: "College Management GUI Suite",
      category: "web_mobile",
      badge: "Desktop Python",
      desc: "Desktop administrative suite created with Python and Tkinter providing student records, fee tracking, and department management menus.",
      tech: ["Python", "Tkinter GUI", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/college-manage-system-gui"
    }
  ]
};

// Render Flagship Projects (NO raw screenshots, sleek technical architecture cards)
function renderFlagshipProjects() {
  const container = document.getElementById('flagship-list-container');
  if (!container) return;

  container.innerHTML = PROJECTS_DATA.flagships.map(p => `
    <article class="flagship-card" data-tilt id="card-${p.id}">
      <div class="flagship-card-inner">
        <!-- Top Header Bar -->
        <div class="flagship-top-header">
          <div class="flagship-badge-group">
            <span class="flagship-tag-badge">${p.badge}</span>
            <span class="flagship-subtitle-mono mono">${p.subtitle}</span>
          </div>

          <div class="flagship-links-group">
            ${p.liveUrl ? `
              <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn-live-pill" onclick="window.soundEngine?.playClick()">
                <span class="live-dot"></span>
                <span>Live Demo ↗</span>
              </a>
            ` : ''}
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn-repo-pill" onclick="window.soundEngine?.playClick()">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub Repo ↗</span>
              </a>
            ` : ''}
          </div>
        </div>

        <h3 class="flagship-title">${p.title}</h3>
        <p class="flagship-summary">${p.summary}</p>

        <!-- Technical Highlights Grid -->
        <div class="flagship-highlights-grid">
          ${p.highlights.map(h => `
            <div class="highlight-box">
              <div class="highlight-title">${h.title}</div>
              <div class="highlight-desc">${h.desc}</div>
            </div>
          `).join('')}
        </div>

        <!-- Terminal Architecture Endpoints Strip -->
        ${p.endpoints && p.endpoints.length ? `
          <div class="endpoints-box">
            <div class="endpoints-header">
              <span class="mono text-cyan" style="font-size:0.75rem;">// CORE ARCHITECTURE & API CONTRACTS</span>
            </div>
            <div class="endpoints-list mono">
              ${p.endpoints.map(e => `<div>${e}</div>`).join('')}
            </div>
          </div>
        ` : ''}

        <!-- Stack Tag Pills -->
        <div class="flagship-tags-wrap">
          ${p.tech.map(t => `<span class="tech-chip">#${t}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');
}

// Render Supporting Projects Grid with Live Links & Repo Links
function renderSupportingProjects(filter = 'all', searchQuery = '') {
  const container = document.getElementById('supporting-projects-grid');
  if (!container) return;

  const query = searchQuery.toLowerCase().trim();
  const filtered = PROJECTS_DATA.supporting.filter(p => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesSearch = !query || 
      p.title.toLowerCase().includes(query) || 
      p.desc.toLowerCase().includes(query) || 
      p.tech.some(t => t.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted); font-family: var(--font-mono);">
        No projects match your filter criteria.
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div class="project-card" data-tilt>
      <div class="project-card-top">
        <div class="project-folder-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
        </div>
        <div class="project-actions-row">
          ${p.liveUrl ? `
            <a href="${p.liveUrl}" target="_blank" rel="noopener" class="link-badge-live" title="Open Live Application" onclick="window.soundEngine?.playClick()">
              <span class="live-dot-sm"></span> Live Demo ↗
            </a>
          ` : ''}
          ${p.githubUrl ? `
            <a href="${p.githubUrl}" target="_blank" rel="noopener" class="link-badge-repo" title="View Source on GitHub" onclick="window.soundEngine?.playClick()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub ↗
            </a>
          ` : ''}
        </div>
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.desc}</p>
      <ul class="project-tech-list">
        ${p.tech.map(t => `<li>#${t}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderFlagshipProjects();
  renderSupportingProjects();

  // Filter Pills
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.soundEngine?.playClick();
      const filter = btn.getAttribute('data-filter') || 'all';
      const search = document.getElementById('project-search-input')?.value || '';
      renderSupportingProjects(filter, search);
    });
  });

  // Search Input
  const searchInput = document.getElementById('project-search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const activeFilter = document.querySelector('.filter-pill.active')?.getAttribute('data-filter') || 'all';
      renderSupportingProjects(activeFilter, e.target.value);
    });
  }
});
