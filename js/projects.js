/* ==========================================================================
   SHIVA GANESH PORTFOLIO - PROJECTS ARCHIVE & VERIFIED DEPLOYMENTS
   Accurate descriptions sourced directly from verified resumes.
   ========================================================================== */

const PROJECTS_DATA = {
  flagships: [
    {
      id: "rsgmovies",
      category: "web_mobile",
      badge: "Live Streaming & Downloading Platform",
      title: "RSG MOVIES (Django + RestAPI, Flutter App, ReactJs)",
      subtitle: "Movierulz · TamilMV · iBomma · MovieBlast · iStreamflare · Seedr · YouTube Downloader",
      liveUrl: "https://rsgmovies.com",
      liveBackendUrl: "https://rsg-movies.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/rsgmovies",
      whatItHas: "Built a movie platform integrating APIs (Movierulz, TamilMV, iBomma, MovieBlast, iStreamflare, MovierulzHD) for streaming and downloading. Users can upload movies to Seedr for free access in various resolutions, with additional features like a YouTube downloader and torrent searcher.",
      keyFeatures: [
        { title: "Multi-Source Scraping", desc: "Aggregates and indexes streams and magnet links across Movierulz, TamilMV, iBomma, MovieBlast, iStreamflare, and MovierulzHD." },
        { title: "Seedr Cloud Transcoder", desc: "Direct Seedr API integration for cloud torrent downloading, video playback across resolutions, and YouTube video downloader." },
        { title: "Multi-Client Ecosystem", desc: "Responsive ReactJs web application, Flutter mobile app, and dedicated Android TV interface with 10-foot remote D-pad controls." },
        { title: "Push Notification Daemon", desc: "Automated notification worker connected to PostgreSQL broadcasting instant release alerts via Firebase Cloud Messaging." }
      ],
      tech: ["Django REST Framework", "ReactJS", "Flutter", "Android TV (Leanback)", "Node.js", "Seedr API", "Firebase Cloud Messaging", "PostgreSQL", "Vercel"]
    },
    {
      id: "price-tracker",
      category: "web_mobile",
      badge: "Live Deal Tracking Platform",
      title: "Price Tracker (ReactJS + Django)",
      subtitle: "Amazon & Flipkart Deal Monitor · Personalized Price Alerts · Vercel",
      liveUrl: "https://rsgtracker.vercel.app",
      liveBackendUrl: "https://rsg-price.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/price-tracker",
      whatItHas: "Developed a dynamic price tracking system that monitors product prices and highlights daily deals from Amazon and Flipkart. Users can set personalized alerts for price changes, with instant notifications sent via email and app, ensuring they never miss a deal.",
      keyFeatures: [
        { title: "Live Price Scraping", desc: "Automated scrapers monitoring live product pricing, discounts, and historical deal trends across Amazon and Flipkart." },
        { title: "Personalized Deal Alerts", desc: "Configurable price thresholds that dispatch automated alerts via email and app notifications when prices drop." },
        { title: "Independent Microservices", desc: "Dual deployments on Vercel: responsive ReactJS frontend (rsgtracker.vercel.app) and Django REST backend (rsg-price.vercel.app)." }
      ],
      tech: ["ReactJS", "Django REST Framework", "Python", "Firebase", "Tailwind CSS", "Vercel"]
    },
    {
      id: "attendance-system",
      category: "web_mobile",
      badge: "Automated CCTV Biometrics (AUpulse)",
      title: "Attendance Management System (Flutter App + Django API)",
      subtitle: "CCTV Facial Recognition · Timetable Integration · Proxy Prevention",
      liveUrl: "https://aupulse-api.vercel.app",
      liveBackendUrl: "https://aupulse-cv.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/mini-project",
      whatItHas: "An automated attendance system linked with CCTV and class timetable. Reduces human effort and prevents proxy attendance by marking students present based on real-time facial data. Admins can manage academic structures and generate detailed attendance reports.",
      keyFeatures: [
        { title: "Real-Time Face Recognition", desc: "CCTV facial recognition pipeline matching classroom video feeds against enrolled student facial embeddings." },
        { title: "Proxy Prevention", desc: "Completely eliminates manual roll-calls and proxy marking by synchronizing presence with academic timetables and rooms." },
        { title: "Admin Reports & Student App", desc: "Cross-platform Flutter mobile client for students and administrative dashboard for generating presence reports." }
      ],
      tech: ["Flutter / Dart", "OpenCV", "Facial Recognition", "Django REST API", "Python", "PostgreSQL", "Vercel"]
    },
    {
      id: "deduplication",
      category: "ai_ml",
      badge: "Published Research · AIMLA 2025 Paper #455",
      title: "Image Deduplication Tool (Django)",
      subtitle: "AIMLA 2025 Paper #455 · Pretrained ResNet / EfficientNet / MobileNet · Storage Optimization",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/major-project",
      whatItHas: "Built a platform to detect duplicate images using pretrained models (ResNet, EfficientNet, MobileNet) and hybrid methods. Displays similarity percentages, resource usage, and flags duplicates, helping reduce storage and save costs. Published research paper at the 3rd International Conference on Artificial Intelligence and Machine Learning Applications (AIMLA 2025, Paper #455).",
      keyFeatures: [
        { title: "Hybrid Feature Extraction", desc: "Combines deep convolutional features from ResNet, EfficientNet, and MobileNet with fast perceptual hashing (pHash/dHash)." },
        { title: "Cloud Storage Optimization", desc: "Identifies duplicate, cropped, or filtered images to reduce redundant cloud storage footprints and infrastructure costs." },
        { title: "AIMLA 2025 Paper #455", desc: "Peer-reviewed research publication presenting experimental benchmarks on deep learning deduplication models." }
      ],
      tech: ["PyTorch", "Django", "ResNet", "EfficientNet", "MobileNet", "OpenCV", "Perceptual Hashing", "Python"]
    },
    {
      id: "auto-send",
      category: "web_mobile",
      badge: "Live Social Automation SaaS",
      title: "Auto-Send: Instagram Comment & DM Automation (Django)",
      subtitle: "Meta Graph API v26.0 · Webhooks · HMAC Signature Verification · Vercel",
      liveUrl: "https://rsgflow.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/Auto-Send",
      whatItHas: "Automated Instagram comment monitoring and private DM dispatch SaaS. Intercepts incoming user comments in real time via Meta Graph API v26.0 webhooks with SHA-256 HMAC challenge validation, comment ID deduplication, and follower gating before sending resource download links.",
      keyFeatures: [
        { title: "Real-Time Webhook Engine", desc: "Ingests incoming Instagram comment webhooks with SHA-256 HMAC signature verification and challenge handshakes." },
        { title: "Zero-Duplicate Idempotency", desc: "Strict comment ID tracking ensures each interaction is handled exactly once without duplicate automated messages." },
        { title: "Follower Gating Pipeline", desc: "Automated API check verifying user follow status before delivering private bonuses or resource download links." }
      ],
      tech: ["Django 5", "Python", "Meta Graph API v26.0", "Webhooks", "HMAC-SHA256", "Alpine.js", "Tailwind CSS", "Vercel"]
    },
    {
      id: "app-onboarding",
      category: "iam_security",
      badge: "PwC Enterprise IAM Automation",
      title: "Enterprise Application Onboarding & Identity Governance",
      subtitle: "ServiceNow RITM Automation · Microsoft Entra ID · Okta · Microsoft Graph API",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/app_onboarding",
      whatItHas: "Automated enterprise identity onboarding tool ingesting ServiceNow RITM tickets to provision applications into Microsoft Entra ID and Okta via Microsoft Graph API with SAML 2.0 / OIDC single sign-on, attribute claims, and SCIM user provisioning.",
      keyFeatures: [
        { title: "ServiceNow RITM Ingestion", desc: "Automatically parses application onboarding tickets, extracts metadata, claims mappings, and redirect URIs." },
        { title: "Entra Graph API Scripting", desc: "Programmatic creation of Enterprise Applications, Service Principals, and SSO federation via Python & PowerShell." },
        { title: "SCIM & Privilege Lifecycle", desc: "Automated SCIM user provisioning, Just-In-Time (JIT) access, and role assignment governance." }
      ],
      tech: ["Microsoft Entra ID", "Okta", "CyberArk PAM", "Delinea Secret Server", "ServiceNow RITM", "Microsoft Graph API", "Python", "PowerShell", "SAML 2.0", "SCIM"]
    },
    {
      id: "cms-app",
      category: "web_mobile",
      badge: "Native Android Mobile App",
      title: "Complaint Management System (Android App)",
      subtitle: "Government School Grievance Portal · Real-Time Chat & Monitoring Interface",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/cms",
      whatItHas: "Designed an Android app for government schools allowing students to submit complaints. Features include a monitoring team interface with chat functionality for real-time verification and forwarding of complaints to schools.",
      keyFeatures: [
        { title: "Student Grievance Submission", desc: "Native Android app enabling students to lodge grievances regarding school infrastructure and administration." },
        { title: "Monitoring Team Chat Panel", desc: "Dedicated verification interface with real-time chat for evaluating issues and coordinating with schools." },
        { title: "Real-Time Complaint Routing", desc: "Streamlined forwarding of verified complaints to school authorities with escalation tracking." }
      ],
      tech: ["Android SDK", "Java", "REST API", "Real-Time Chat", "Push Notifications", "MySQL"]
    },
    {
      id: "fixitnow",
      category: "web_mobile",
      badge: "Cross-Platform Mobile App",
      title: "FixItNow: Civic Grievance & Community Complaint App (Flutter)",
      subtitle: "Video & Photo Evidence · Real-Time Ticket Pipeline · Community Upvotes",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/fixit-now",
      whatItHas: "Cross-platform civic grievance reporting mobile app allowing citizens to lodge complaints with photo and video evidence, track resolution stages in real time, and interact with community discussions.",
      keyFeatures: [
        { title: "Multimedia Evidence Upload", desc: "Integrated camera and video recording allowing citizens to attach verifiable evidence to grievances." },
        { title: "Resolution Tracking Pipeline", desc: "Transparent status progression from ticket submission through municipal inspection, resolution, and closure." },
        { title: "Community Upvoting & Chat", desc: "Local community engagement module enabling neighbors to upvote, comment on, and highlight priority civic matters." }
      ],
      tech: ["Flutter", "Dart", "REST API", "Video Player", "Push Notifications", "Cross-Platform Mobile"]
    }
  ],

  supporting: [
    {
      title: "Ecommerce Platform with QR Fraud Prevention (Django)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Implemented an eCommerce platform with QR code scanning for fraud prevention. Each order generates a unique QR code for verification during returns, enhancing transaction security.",
      tech: ["Django", "Python", "QR Cryptography", "SQLite", "PythonAnywhere"],
      liveUrl: "https://ecommerce0.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/ecommerce"
    },
    {
      title: "Smart Farming Assistant (Django)",
      category: "ai_ml",
      badge: "Smart Agriculture Platform",
      desc: "Developed a smart farming platform offering crop and fertilizer recommendations, weather forecasting, and government scheme information. Includes functionalities for buying and selling crops, providing a comprehensive solution for modern agriculture.",
      tech: ["Django", "Scikit-Learn", "Weather API", "NumPy", "Bootstrap"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/farming"
    },
    {
      title: "Aadhar-Linked Voter Card System (Django)",
      category: "iam_security",
      badge: "Identity Verification",
      desc: "Created a secure system for registering and updating voter cards linked to Aadhar to prevent duplication and ensure accurate records.",
      tech: ["Django", "Python", "Identity Verification", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/voter"
    },
    {
      title: "Kids Learning Portal (Django)",
      category: "web_mobile",
      badge: "Interactive Educational Portal",
      desc: "Created an interactive educational portal where children engage with course-related videos, followed by quizzes to reinforce learning. Upon passing the quiz, they gain access to entertaining content, while those needing improvement are guided through the course material again, ensuring mastery before moving on to the next level.",
      tech: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/svsprojects"
    },
    {
      title: "PwC Enterprise IAM & Zero-Trust MFA Portal (Django)",
      category: "iam_security",
      badge: "Enterprise IAM & MFA",
      desc: "Enterprise multi-factor authentication and zero-trust access control gateway built with Django 5 and django-allauth. Implements TOTP authenticator apps, FIDO2/WebAuthn hardware security keys, active session management with remote session revocation (usersessions), Google OAuth 2.0 social federation, Google reCAPTCHA bot defense, and HTTP 429 rate-limiting protection.",
      tech: ["Django 5", "django-allauth", "TOTP MFA", "FIDO2 / WebAuthn", "Session Management", "reCAPTCHA", "JWT", "OAuth 2.0"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/pwc"
    },
    {
      title: "AppLock: ML Multi-Factor Biometric Authenticator",
      category: "ai_ml",
      badge: "Biometrics & Hardware Auth",
      desc: "Multi-modal biometric security gateway combining MediaPipe 468 3D facial mesh landmarks (SVM), hand gesture recognition (Random Forest), and WebAuthn/FIDO2 hardware security keys.",
      tech: ["MediaPipe", "Scikit-Learn (SVM & RF)", "WebAuthn / FIDO2", "Flask", "OpenCV", "Python"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/applock"
    },
    {
      title: "Wardobe: P2P Outfit Rental & Fashion Platform (Django)",
      category: "web_mobile",
      badge: "Peer-to-Peer Fashion Marketplace",
      desc: "Peer-to-peer outfit rental and wardrobe sharing platform built in Django with Razorpay payment gateway integration, user profile management, and cryptographic QR code handover and return verification.",
      tech: ["Django", "Python", "Razorpay API", "QR Cryptography", "Bootstrap", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/wardobe"
    },
    {
      title: "Chart Generator: Interactive Visual Canvas Studio",
      category: "web_mobile",
      badge: "React 18 Canvas Builder",
      desc: "Interactive visual data visualization studio built with React 18, Konva.js, React-Konva, and Recharts. Enables dynamic dataset importing, canvas drawing, and high-resolution export of vector charts and flow diagrams.",
      tech: ["React 18", "Konva.js", "React-Konva", "Recharts", "Tailwind CSS", "Flowbite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/chart-generator"
    },
    {
      title: "Placement Management System - PMS (Django)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Institutional placement workflow portal managing corporate recruitment drives, applicant eligibility filters, multi-round interview tracking, and offer metrics.",
      tech: ["Django", "Bootstrap", "Role-Based Auth", "PythonAnywhere"],
      liveUrl: "https://pms0.pythonanywhere.com/",
      githubUrl: "https://github.com/shivaganesh22/pms"
    },
    {
      title: "Admission Management System - AMS (Django)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Automated student admission portal handling application intake, document verification workflows, automated merit list calculations, and department allotment tracking.",
      tech: ["Django", "Python", "Workflow Engine", "PythonAnywhere"],
      liveUrl: "https://amsproject00.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/amsproject"
    },
    {
      title: "ProctorVault: Remote Exam Integrity Guardian (Django)",
      category: "iam_security",
      badge: "Session Security & Proctoring",
      desc: "Remote online examination proctoring system with browser lockdown controls, tab-switch event monitoring, candidate identity checks, and immutable session audit logging.",
      tech: ["Django", "Python", "Session Security", "Audit Logs"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/proctorvault"
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
      title: "Full-Stack Assessment: Django REST API & React Studio",
      category: "web_mobile",
      badge: "Full-Stack Evaluation",
      desc: "Modular engineering solution pairing a high-performance Django REST Framework backend API for calculations and data filtering with a modern React 18 and Vite client-side frontend featuring responsive product catalogs, route navigation, and Axios integration.",
      tech: ["Django REST Framework", "React 18", "Vite", "Axios", "React Router", "Python", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/21EG112B26"
    },
    {
      title: "College Management Desktop GUI Suite (Python Tkinter)",
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
      badge: "Streamlit Analytics App",
      desc: "Interactive data visualization dashboard built with Streamlit and Pandas for exploring multivariate datasets, running statistical models, and generating real-time charts.",
      tech: ["Python", "Streamlit", "Pandas", "Matplotlib"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/streamlit"
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
                <span>GitHub ↗</span>
              </a>
            ` : ''}
          </div>
        </div>

        <h3 class="flagship-title">${p.title}</h3>

        <!-- Description Section -->
        <div class="flagship-what-box">
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
          <span class="tech-block-title mono">// TECH STACK:</span>
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
