/* ==========================================================================
   SHIVA GANESH PORTFOLIO - ACCURATE MONOREPOS & VERIFIED DEPLOYMENTS
   Consolidated Monorepos, Verified Vercel Deployments & Scraper Pipelines.
   NO API endpoint dumps — Clear explanations of what each system has & tech stack used.
   ========================================================================== */

const PROJECTS_DATA = {
  flagships: [
    {
      id: "rsgmovies",
      category: "web_mobile",
      badge: "Flagship Monorepo · Multi-Screen Ecosystem",
      title: "RSGMovies Distributed Streaming Platform",
      subtitle: "Django REST API · React Web · Android TV · Flutter Mobile · Seedr Cloud",
      liveUrl: "https://rsgmovies.com",
      liveBackendUrl: "https://rsg-movies.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/rsgmovies",
      monorepoTag: "Consolidated Monorepo (Web + TV + Backend + Scrapers + FCM)",
      whatItHas: "A complete distributed media streaming and cloud transcoding ecosystem engineered for multi-screen consumption (Web, Android TV, and Mobile). Scrapes and aggregates high-definition streams and magnet links from Movierulz, TamilMV, MovieBlast, iStreamflare, Torrent Search Engine, YouTube Downloader, iBOMMA, MovierulzHD, and Seedr Cloud Transcoder. Features HMAC-SHA256 signed backend stream proxying to protect upstream sources, custom 10-foot Android TV UI with spatial D-pad focus handling, and a real-time Node.js FCM push notification daemon alerting users when new releases are indexed.",
      keyFeatures: [
        { title: "Multi-Source Scraper Engine", desc: "Automated real-time scrapers for Movierulz, TamilMV, MovieBlast, iStreamflare, iBOMMA, MovierulzHD, and Torrent Search." },
        { title: "Cloud Stream & Seedr Transcode", desc: "Seedr API cloud torrent downloading and remote multi-resolution transcode pipeline with built-in YouTube video downloader." },
        { title: "Android TV 10-Foot Spatial UI", desc: "Living room TV interface optimized for remote control D-pad navigation, Leanback focus management, and hardware video playback." },
        { title: "Push Notification Daemon", desc: "Node.js background cron worker connected to PostgreSQL broadcasting instant Firebase Cloud Messaging (FCM) release alerts." }
      ],
      tech: ["Django REST Framework", "ReactJS 18", "Android TV (Leanback)", "Flutter", "Node.js", "Seedr API", "Firebase Cloud Messaging", "PostgreSQL", "Vercel", "HMAC-SHA256"]
    },
    {
      id: "auto-send",
      category: "web_mobile",
      badge: "SaaS Platform · Live on Vercel",
      title: "Auto-Send: Instagram Comment & DM Automation SaaS",
      subtitle: "Django 5 · Meta Graph API v26.0 · Webhooks · Alpine.js · Tailwind",
      liveUrl: "https://rsgflow.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/Auto-Send",
      whatItHas: "A production-grade social automation SaaS that monitors incoming Instagram comments in real time via Meta Graph API v26.0 webhooks. When users trigger specific keywords, the platform automatically dispatches contextual public replies and private DMs with download links or resources. Built with SHA-256 HMAC webhook verification, comment deduplication by ID to prevent duplicate messages, follower gating (verifies the user is following before delivering bonuses), and built-in latency analytics.",
      keyFeatures: [
        { title: "Zero-Duplicate Idempotency", desc: "Strict comment_id tracking with SHA-256 HMAC challenge validation ensures each user receives exactly one response." },
        { title: "Follower Gating Pipeline", desc: "Automated API check verifying account follow status before unlocking private resources or bonus downloads." },
        { title: "Real-time Metrics Dashboard", desc: "Built with Chart.js and Alpine.js tracking API response times, dispatch success rates, and exportable CSV audit logs." }
      ],
      tech: ["Django 5", "Python", "Meta Graph API v26.0", "Webhooks", "HMAC-SHA256", "Alpine.js", "Chart.js", "Tailwind CSS", "Vercel"]
    },
    {
      id: "price-tracker",
      category: "web_mobile",
      badge: "Monorepo · Live Full-Stack System",
      title: "Price Tracker: Distributed E-Commerce Monitor",
      subtitle: "React 18 Frontend · Django REST Backend · Firebase · Vercel",
      liveUrl: "https://rsgtracker.vercel.app",
      liveBackendUrl: "https://rsg-price.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/price-tracker",
      monorepoTag: "Consolidated Monorepo (Frontend + Backend)",
      whatItHas: "Distributed e-commerce price monitoring platform tracking product price histories across major shopping platforms in real time. Features a React 18 responsive frontend deployed on Vercel, a high-performance Django REST Framework API engine, and Firebase integration to monitor fluctuations and dispatch instant alerts when products hit user-defined price thresholds.",
      keyFeatures: [
        { title: "Live Price Scraping & Tracking", desc: "Automated web scrapers tracking pricing trends, discounts, and historical price minimums across e-commerce portals." },
        { title: "Dual Cloud Microservices", desc: "Independent production deployments on Vercel: Frontend (rsgtracker.vercel.app) and REST Backend (rsg-price.vercel.app)." },
        { title: "Instant Alert Dispatch", desc: "Firebase-integrated notification pipeline alerting users when products drop below their target price thresholds." }
      ],
      tech: ["React 18", "Django REST Framework", "Python", "Firebase", "Tailwind CSS", "Vercel"]
    },
    {
      id: "aupulse-attendance",
      category: "web_mobile",
      badge: "Monorepo · CCTV Computer Vision",
      title: "AUpulse Automated Attendance Management System",
      subtitle: "Flutter Mobile App + OpenCV CCTV Facial Recognition + Django REST API",
      liveUrl: "https://aupulse-api.vercel.app",
      liveBackendUrl: "https://aupulse-cv.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/mini-project",
      monorepoTag: "Consolidated Monorepo (aupulse_app + aupulse_cv + aupulse-miniproject)",
      whatItHas: "An end-to-end automated attendance management platform integrated with classroom CCTV cameras and academic timetables. The system matches video streams against enrolled student facial embeddings in real time and automatically records attendance, completely eliminating manual roll-call and proxy attendance.",
      keyFeatures: [
        { title: "Real-Time Face Matching", desc: "CCTV facial recognition pipeline (deployed on aupulse-cv.vercel.app) matching video feeds against enrolled biometric profiles." },
        { title: "Proxy-Proof Attendance", desc: "Tamper-resistant automated logging matched directly against class schedules, subject models, and room timetables." },
        { title: "Flutter Student Client", desc: "Cross-platform mobile client allowing students and faculty to review real-time presence percentages, analytics, and shortage warnings." }
      ],
      tech: ["Flutter / Dart", "OpenCV", "Facial Recognition", "Django REST API", "Python", "PostgreSQL", "Vercel"]
    },
    {
      id: "deduplication",
      category: "ai_ml",
      badge: "Published Research · AIMLA 2025 Paper #455",
      title: "Hybrid ML Model for Image Deduplication & Storage Optimization",
      subtitle: "PyTorch · ResNet / EfficientNet / MobileNet · Perceptual Hashing · AIMLA 2025",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/major-project",
      monorepoTag: "Major Project Monorepo (Models + Benchmarks + Paper)",
      whatItHas: "Published machine learning research presented at the 3rd International Conference on Artificial Intelligence and Machine Learning Applications (AIMLA 2025, Paper ID #455). Formulates a hybrid feature extraction and perceptual hashing architecture to detect near-duplicate, cropped, resized, or filtered visual media at scale, significantly reducing redundant cloud storage consumption.",
      keyFeatures: [
        { title: "AIMLA 2025 Paper #455", desc: "Co-authored and published conference paper on hybrid deep learning models for enterprise image deduplication." },
        { title: "Hybrid Feature Extraction", desc: "Combines deep embeddings from ResNet, EfficientNet, and MobileNet with fast perceptual hashing (dHash/pHash) for optimal accuracy and speed." },
        { title: "Cloud Storage Optimization", desc: "Cuts redundant storage footprints across cloud media archives by detecting duplicate images even through post-processing modifications." }
      ],
      tech: ["PyTorch", "TensorFlow", "ResNet", "EfficientNet", "MobileNet", "OpenCV", "Perceptual Hashing (pHash)", "Django"]
    },
    {
      id: "app-onboarding",
      category: "iam_security",
      badge: "Enterprise IAM Automation (PwC)",
      title: "Automated Enterprise App Onboarding & Entra ID Governance",
      subtitle: "ServiceNow RITM Automation · Microsoft Entra ID · Okta · PowerShell / Python",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/app_onboarding",
      whatItHas: "Enterprise identity onboarding automation portal developed to streamline SaaS and custom application provisioning into Microsoft Entra ID and Okta. Ingests ServiceNow RITM tickets, validates metadata against XML schema profiles, and uses the Microsoft Graph API client to programmatically configure SAML 2.0 / OIDC single sign-on, attribute claims mappings, SCIM provisioning, and Conditional Access zero-trust baselines.",
      keyFeatures: [
        { title: "ServiceNow RITM Ingestion", desc: "Automated parsing of incoming ServiceNow service request tickets to extract application metadata, claims, and redirect URIs." },
        { title: "Entra Graph API Automation", desc: "Scripted provisioning of Enterprise Applications, Service Principals, and SSO federation via Python Graph SDK." },
        { title: "SCIM & Privilege Lifecycle", desc: "Configured automated SCIM user lifecycle sync, Just-In-Time (JIT) provisioning, and CyberArk privileged credential rotation." }
      ],
      tech: ["Microsoft Entra ID", "Okta", "CyberArk PAM", "ServiceNow RITM", "Microsoft Graph API", "Python", "PowerShell", "SAML 2.0", "SCIM"]
    },
    {
      id: "fixitnow",
      category: "web_mobile",
      badge: "Cross-Platform Mobile App",
      title: "FixItNow: Civic Grievance & Community Complaint App",
      subtitle: "Flutter · Dart · REST API · Video Evidence · Push Notifications",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/fixit-now",
      whatItHas: "A cross-platform mobile application built in Flutter enabling citizens and communities to report public grievances and infrastructure issues. Users can lodge complaints with photo and video evidence, track resolution progress through a live status pipeline, comment and upvote issues in their locality, and receive instant push notifications as municipal authorities update ticket stages.",
      keyFeatures: [
        { title: "Multimedia Evidence Upload", desc: "Integrated camera and video player allowing citizens to capture and submit verifiable evidence directly with complaint tickets." },
        { title: "Real-Time Ticket Tracking", desc: "Live status updates from submission through verification, resolution, and closure with transparent audit logs." },
        { title: "Community Interaction", desc: "Social discussion module enabling neighbors to upvote, comment on, and highlight priority civic matters." }
      ],
      tech: ["Flutter", "Dart", "REST API", "Video Player", "Push Notifications", "Local Storage", "Cross-Platform Mobile"]
    },
    {
      id: "applock",
      category: "ai_ml",
      badge: "Biometrics & Hardware Auth",
      title: "AppLock: ML Multi-Factor Biometric Security Authenticator",
      subtitle: "MediaPipe 468 Face Landmarks · Hand Gesture Random Forest · WebAuthn / FIDO2",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/applock",
      whatItHas: "An advanced multi-modal biometric security gateway providing alternative authentication methods beyond standard passwords. Evaluates 468 3D facial mesh landmarks with an RBF-kernel SVM, classifies 21 hand joint angles and curl gestures via Random Forest, and enforces physical possession through WebAuthn/FIDO2 hardware security keys.",
      keyFeatures: [
        { title: "468 3D Facial Mesh", desc: "Real-time facial geometry extraction via MediaPipe normalized into geometric distance vectors and classified using scikit-learn SVM." },
        { title: "Hand Gesture Recognition", desc: "21 hand joint angles and curl characteristics evaluated by a trained Random Forest model for touchless gesture unlocking." },
        { title: "Hardware Security FIDO2", desc: "Cryptographic origin challenge validation enforcing physical possession via WebAuthn security keys." }
      ],
      tech: ["MediaPipe", "Scikit-Learn (SVM & RF)", "WebAuthn / FIDO2", "Flask", "OpenCV", "Python"]
    }
  ],

  supporting: [
    {
      title: "Wardobe: P2P Outfit Rental & Fashion Marketplace",
      category: "web_mobile",
      badge: "Peer-to-Peer Fashion Platform",
      desc: "Community clothing rental and wardrobe sharing web application built in Django. Features Razorpay digital payment integration, cryptographic QR codes for garment handover/return authenticity, location-based wardrobe discovery, and user profile management.",
      tech: ["Django", "Python", "Razorpay API", "QR Cryptography", "Bootstrap", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/wardobe"
    },
    {
      title: "Chart Generator: Interactive Visual Canvas Studio",
      category: "web_mobile",
      badge: "React Canvas Builder",
      desc: "Interactive visual data visualization studio built with React 18, Konva.js, React-Konva, and Recharts. Enables dynamic dataset importing, canvas drawing, and high-resolution export of vector charts and flow diagrams.",
      tech: ["React 18", "Konva.js", "React-Konva", "Recharts", "Tailwind CSS", "Flowbite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/chart-generator"
    },
    {
      title: "Ecommerce Platform with QR Fraud Prevention",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Full-scale Django e-commerce platform generating unique cryptographic QR codes for every order invoice to verify returns and combat warranty fraud.",
      tech: ["Django", "Python", "QR Cryptography", "SQLite", "PythonAnywhere"],
      liveUrl: "https://ecommerce0.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/ecommerce"
    },
    {
      title: "Placement Management System (PMS)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Institutional placement workflow portal managing corporate recruitment drives, applicant eligibility filters, multi-round interview tracking, and offer metrics.",
      tech: ["Django", "Bootstrap", "Role-Based Auth", "PythonAnywhere"],
      liveUrl: "https://pms0.pythonanywhere.com/",
      githubUrl: "https://github.com/shivaganesh22/pms"
    },
    {
      title: "Admission Management System (AMS)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Automated student admission portal handling application intake, document verification workflows, automated merit list calculations, and department allotment tracking.",
      tech: ["Django", "Python", "Workflow Engine", "PythonAnywhere"],
      liveUrl: "https://amsproject00.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/amsproject"
    },
    {
      title: "PwC Enterprise IAM & Zero-Trust MFA Security Portal",
      category: "iam_security",
      badge: "Enterprise IAM & MFA",
      desc: "Enterprise multi-factor authentication and zero-trust access control gateway built with Django 5 and django-allauth. Implements TOTP authenticator app support, FIDO2 / WebAuthn hardware security keys, active session management with remote session revocation (usersessions), Google OAuth 2.0 social federation, Google reCAPTCHA bot defense, and HTTP 429 rate-limiting abuse protection.",
      tech: ["Django 5", "django-allauth", "TOTP MFA", "FIDO2 / WebAuthn", "Session Security", "reCAPTCHA", "JWT", "OAuth 2.0"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/pwc"
    },
    {
      title: "Full-Stack Assessment: Django REST API & React Studio",
      category: "web_mobile",
      badge: "Full-Stack Evaluation",
      desc: "Modular full-stack engineering solution coupling a Django REST Framework API engine for real-time calculations and data filtering with a modern React 18 + Vite responsive frontend featuring dynamic product listings, Axios HTTP client, and React Router navigation.",
      tech: ["Django REST Framework", "React 18", "Vite", "Axios", "React Router", "Python", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/21EG112B26"
    },
    {
      title: "Smart Farming Assistant",
      category: "ai_ml",
      badge: "Django + ML Platform",
      desc: "Precision agriculture advisor delivering ML-driven crop and fertilizer suggestions based on soil NPK values and climate, integrated weather forecasts, and crop marketplace.",
      tech: ["Django", "Scikit-Learn", "Weather API", "NumPy", "Bootstrap"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/farming"
    },
    {
      title: "Aadhar-Linked Secure Voter Registration",
      category: "iam_security",
      badge: "Django Identity Security",
      desc: "Secure electoral registration and verification system cross-validating voter cards with Aadhar records to eliminate fraudulent registrations and ensure clean electoral rolls.",
      tech: ["Django", "Python", "Identity Verification", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/voter"
    },
    {
      title: "Complaint Management System (CMS)",
      category: "web_mobile",
      badge: "Native Android App",
      desc: "Native Android mobile app built for government schools. Enables students to submit complaints and provides administrative monitoring teams with real-time status tracking.",
      tech: ["Android SDK", "Java", "REST API", "Push Notifications", "MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/cms"
    },
    {
      title: "Parkinson's Speech ML Acoustic Classifier",
      category: "ai_ml",
      badge: "Acoustic Signal Processing",
      desc: "Biomedical audio analysis pipeline extracting vocal jitter, shimmer, pitch perturbation, and MFCCs using Librosa and FFmpeg, feeding XGBoost classifiers for vocal pattern research.",
      tech: ["Librosa", "FFmpeg", "XGBoost", "Scikit-Learn", "Django"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/parkinson"
    },
    {
      title: "ProctorVault Remote Exam Integrity Guardian",
      category: "iam_security",
      badge: "Session Security",
      desc: "Remote exam integrity platform featuring browser lockdown controls, tab-switch event monitoring, candidate identity checks, and immutable session audit logging.",
      tech: ["Django", "Python", "Session Security", "Audit Logs"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/proctorvault"
    },
    {
      title: "College Management Desktop GUI Suite",
      category: "web_mobile",
      badge: "Desktop Python Application",
      desc: "Desktop administrative software created with Python and Tkinter providing student records, fee tracking, faculty schedules, and department management menus.",
      tech: ["Python", "Tkinter GUI", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/college-manage-system-gui"
    },
    {
      title: "Streamlit Interactive Data Explorer",
      category: "ai_ml",
      badge: "Streamlit App",
      desc: "Interactive data visualization dashboard built with Streamlit and Pandas for exploring multivariate datasets, running statistical models, and generating real-time charts.",
      tech: ["Python", "Streamlit", "Pandas", "Matplotlib"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/streamlit"
    },
    {
      title: "SVS Academic Projects Web Portal",
      category: "web_mobile",
      badge: "Web Application",
      desc: "Web portal for showcasing and archiving engineering academic projects, documentation, source repositories, and demonstration deliverables.",
      tech: ["HTML5", "CSS3", "JavaScript", "PHP / MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/svsprojects"
    }
  ]
};

// Render Flagship Projects (Clean cards: What it has, Key Capabilities, Tech Stack, Live & Repo links)
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
                <span>${p.liveUrl.includes('rsgmovies.com') ? 'rsgmovies.com ↗' : 'Live App ↗'}</span>
              </a>
            ` : ''}
            ${p.liveBackendUrl ? `
              <a href="${p.liveBackendUrl}" target="_blank" rel="noopener" class="btn-live-pill backend" onclick="window.soundEngine?.playClick()">
                <span class="live-dot"></span>
                <span>API Live ↗</span>
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

        ${p.monorepoTag ? `
          <div style="margin-bottom: 12px;">
            <span class="mono text-cyan" style="font-size: 0.78rem; background: rgba(0, 242, 254, 0.08); border: 1px solid rgba(0, 242, 254, 0.25); padding: 3px 10px; border-radius: var(--radius-sm);">
              ⚡ ${p.monorepoTag}
            </span>
          </div>
        ` : ''}

        <!-- What the Project Has Section -->
        <div class="flagship-what-box">
          <div class="box-section-heading">
            <span class="mono text-cyan" style="font-size: 0.8rem; letter-spacing: 0.08em; text-transform: uppercase;">// WHAT THIS PROJECT HAS & DELIVERS</span>
          </div>
          <p class="flagship-what-text">${p.whatItHas}</p>
        </div>

        <!-- Technical Highlights Grid -->
        <div class="flagship-highlights-grid">
          ${p.keyFeatures.map(h => `
            <div class="highlight-box">
              <div class="highlight-title">${h.title}</div>
              <div class="highlight-desc">${h.desc}</div>
            </div>
          `).join('')}
        </div>

        <!-- Tech Stack Used -->
        <div class="flagship-tech-block">
          <span class="tech-block-title mono">// TECH STACK USED:</span>
          <div class="flagship-tags-wrap">
            ${p.tech.map(t => `<span class="tech-chip">#${t}</span>`).join('')}
          </div>
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
      <div class="project-tech-header mono">// TECH STACK:</div>
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
