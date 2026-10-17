/* ==========================================================================
   SHIVA GANESH PORTFOLIO - PROJECTS ARCHIVE & VERIFIED DEPLOYMENTS
   Top 5 Flagship Systems & Complete Project Repository Portfolio
   ========================================================================== */

const PROJECTS_DATA = {
  // TOP 5 FEATURED SHOWCASE SYSTEMS
  flagships: [
    {
      id: "rsgmovies",
      category: "web_mobile",
      badge: "Live Multi-Screen Media Ecosystem",
      title: "RSGMovies: Distributed Streaming Platform (Web, Android TV, Mobile & Backend)",
      subtitle: "Django REST Framework · ReactJS Web · Android TV Leanback App · Flutter Mobile · Seedr Cloud API",
      liveUrl: "https://rsgmovies.com",
      liveBackendUrl: "https://rsg-movies.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/rsgmovies",
      whatItHas: "A production-grade, distributed media aggregation and streaming platform engineered for multi-screen consumption across Web, Mobile, and living room Android TVs. Features custom real-time scraping engines that aggregate, parse, and proxy high-definition streams and magnet links from Movierulz, TamilMV, iBomma, MovieBlast, iStreamflare, and MovierulzHD. Incorporates cloud-based torrent transcoding via the Seedr REST API with multi-resolution playback and an integrated YouTube video downloader. Engineered with a dedicated Android TV Leanback application featuring 10-foot spatial D-pad navigation, Leanback focus management, and ExoPlayer hardware decoding, paired with a real-time Node.js background worker broadcasting instant release updates via Firebase Cloud Messaging (FCM).",
      keyFeatures: [
        { title: "Multi-Source Scraping & Stream Proxy", desc: "Automated resilient scrapers aggregating streams and magnet links from Movierulz, TamilMV, iBomma, MovieBlast, iStreamflare, and MovierulzHD with HMAC-signed backend stream proxying." },
        { title: "Android TV 10-Foot Spatial UI", desc: "Dedicated Android TV application built with the AndroidX Leanback library, custom spatial D-pad remote focus handlers, and ExoPlayer hardware video acceleration." },
        { title: "Cloud Transcoding & Torrent Engine", desc: "Seedr API integration enabling remote cloud torrent caching, multi-resolution video transcoding, and built-in YouTube video downloading." },
        { title: "Real-Time Push Notification Worker", desc: "Node.js background daemon connected to PostgreSQL broadcasting instant release alerts across web and mobile clients via Firebase Cloud Messaging." }
      ],
      tech: ["Django REST Framework", "ReactJS", "Android TV (Leanback)", "Flutter", "Node.js", "Seedr API", "ExoPlayer", "Firebase Cloud Messaging", "PostgreSQL", "Vercel"]
    },
    {
      id: "auto-send",
      category: "web_mobile",
      badge: "Live Social Automation SaaS",
      title: "Auto-Send: Automated Social Engagement & DM Dispatch Engine",
      subtitle: "Django 5 · Meta Graph API v26.0 · Webhooks · HMAC-SHA256 · Alpine.js · Tailwind CSS",
      liveUrl: "https://rsgflow.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/Auto-Send",
      whatItHas: "An enterprise-grade social automation SaaS designed to capture lead engagement on Instagram in real time. Listens for incoming public comments via Meta Graph API v26.0 webhooks with SHA-256 HMAC cryptographic signature validation. Employs an idempotent dispatch engine that tracks comment IDs to guarantee zero duplicate messages, executes automated follower verification gating before unlocking private download resources, and delivers instantaneous contextual direct messages (DMs) and public comment replies. Includes an interactive analytics dashboard tracking API latency, delivery rates, and exportable audit logs.",
      keyFeatures: [
        { title: "Real-Time Webhook Verification", desc: "Ingests live Instagram comment payloads with SHA-256 HMAC challenge validation and automated token renewal." },
        { title: "Zero-Duplicate Idempotency Engine", desc: "Prevents duplicate outreach through strict transactional database locks on incoming comment_id records." },
        { title: "Follower Gating Pipeline", desc: "Automatically queries the Meta Graph API to verify account follow status before dispatching gated links and bonus downloads." },
        { title: "Live Analytics & Audit Logs", desc: "Interactive metrics dashboard tracking API response latency, dispatch success percentages, and exportable CSV audit histories." }
      ],
      tech: ["Django 5", "Python", "Meta Graph API v26.0", "Webhooks", "HMAC-SHA256", "Alpine.js", "Chart.js", "Tailwind CSS", "Vercel"]
    },
    {
      id: "price-tracker",
      category: "web_mobile",
      badge: "Live Full-Stack Deal Intelligence",
      title: "Price Tracker: Distributed E-Commerce Price Monitor & Alert Engine",
      subtitle: "ReactJS 18 Frontend · Django REST Framework Backend · Firebase · Cloud Deployments",
      liveUrl: "https://rsgtracker.vercel.app",
      liveBackendUrl: "https://rsg-price.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/price-tracker",
      whatItHas: "A distributed e-commerce price monitoring platform tracking live product pricing, discounts, and historical deal fluctuations across Amazon and Flipkart. Features independent production microservices deployed on Vercel: a responsive ReactJS 18 client-side analytics interface and a high-throughput Django REST Framework backend API. Automatically tracks price changes and triggers personalized real-time alerts via email and push notifications when products hit user-defined price minimums.",
      keyFeatures: [
        { title: "Automated Price Scraping Engine", desc: "Resilient web scraping pipelines continuously capturing product price trends, deal percentages, and historical minimums." },
        { title: "Personalized Threshold Triggering", desc: "User-configured alert thresholds that trigger automated email and app notifications whenever a target price is reached." },
        { title: "Dual Cloud Architecture", desc: "Fully decoupled production deployments on Vercel: responsive React 18 UI (rsgtracker.vercel.app) and Django REST API (rsg-price.vercel.app)." }
      ],
      tech: ["ReactJS 18", "Django REST Framework", "Python", "Firebase", "Web Scraping", "Tailwind CSS", "Vercel"]
    },
    {
      id: "attendance-system",
      category: "web_mobile",
      badge: "Biometric Computer Vision Pipeline",
      title: "AUpulse: CCTV Facial Recognition Attendance & Academic Mapping",
      subtitle: "Flutter Mobile App · OpenCV Biometric Embeddings · Django REST API · Proxy Prevention",
      liveUrl: "https://aupulse-api.vercel.app",
      liveBackendUrl: "https://aupulse-cv.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/mini-project",
      whatItHas: "An end-to-end automated academic attendance management platform integrating classroom CCTV camera feeds with real-time biometric face recognition. Eliminates manual roll-call overhead and proxy attendance by matching live video frames against enrolled student facial embeddings. Dynamically maps student presence against academic timetables, room schedules, and faculty subject models, providing a cross-platform Flutter mobile client for real-time presence tracking and an administrative dashboard for attendance shortage analytics.",
      keyFeatures: [
        { title: "CCTV Biometric Recognition", desc: "OpenCV and deep facial feature extraction pipeline analyzing video streams to mark attendance in real time." },
        { title: "Anti-Proxy Timetable Sync", desc: "Matches detected student identities directly against scheduled class timetables and room assignments to prevent fraudulent roll-call." },
        { title: "Mobile & Administrative Suite", desc: "Cross-platform Flutter mobile app for students with presence percentages and faculty admin tools for generating official attendance shortage reports." }
      ],
      tech: ["Flutter / Dart", "OpenCV", "Facial Recognition", "Django REST Framework", "Python", "PostgreSQL", "Vercel"]
    },
    {
      id: "deduplication",
      category: "ai_ml",
      badge: "Published Research · AIMLA 2025 Paper #455",
      title: "Image Deduplication & Cloud Storage Optimization Platform",
      subtitle: "PyTorch · ResNet / EfficientNet / MobileNet · Perceptual Hashing · AIMLA 2025",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/major-project",
      whatItHas: "Published machine learning research presented at the 3rd International Conference on Artificial Intelligence and Machine Learning Applications (AIMLA 2025, Paper ID #455). Formulates a hybrid feature extraction architecture coupling deep convolutional embeddings from pretrained ResNet, EfficientNet, and MobileNet models with perceptual hashing algorithms (pHash, dHash). Detects duplicate, cropped, resized, and color-filtered media at scale with high precision, displaying similarity percentages, compute resource usage, and storage savings metrics to dramatically cut cloud media storage expenses.",
      keyFeatures: [
        { title: "Hybrid Deep Embeddings + Hashing", desc: "Combines deep convolutional neural representations with fast perceptual hash hamming distance metrics for real-time duplicate detection." },
        { title: "Storage & Cost Reduction", desc: "Flags redundant visual assets across cloud repositories, reducing multi-terabyte storage footprints and bandwidth overhead." },
        { title: "Published Academic Paper", desc: "Co-authored and published peer-reviewed conference research paper (AIMLA 2025 Paper #455)." }
      ],
      tech: ["PyTorch", "Django", "ResNet", "EfficientNet", "MobileNet", "OpenCV", "Perceptual Hashing (pHash)", "Python"]
    }
  ],

  // ALL OTHER REPOSITORIES & SYSTEMS
  supporting: [
    {
      title: "Admission Management System - AMS (Django)",
      category: "web_mobile",
      badge: "Web Counseling & Admission Portal",
      desc: "Web-based engineering counseling and college seat allocation platform developed as a modernized, error-free alternative to traditional state EAMCET counseling portals. Traditional portals require candidates to manually cross-reference complex tables and manually enter code numbers, frequently resulting in mistaken college selections. AMS replaces this with dynamic dropdown selectors allowing candidates to submit prioritized college and branch choice lists (CSE, IT, ECE, EEE, CIV, MEC) based on entrance rank. Colleges receive instant application notifications with full student profiles to evaluate, approve, or reject seat allocations. Automated SMTP email triggers immediately dispatch official allotment letters to the student's registered email with college code, branch, and tuition fee details upon approval (or status alerts upon rejection), while a super-admin console oversees institutional capacity and overall allocation rounds.",
      tech: ["Django", "Python", "SMTP Email Dispatch", "Role-Based Auth", "SQLite", "PythonAnywhere"],
      liveUrl: "https://amsproject00.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/amsproject"
    },
    {
      title: "Enterprise Application Onboarding & Identity Governance",
      category: "iam_security",
      badge: "PwC Enterprise IAM Automation",
      desc: "Enterprise identity onboarding automation portal developed to streamline SaaS and custom application provisioning into Microsoft Entra ID and Okta. Ingests ServiceNow RITM tickets, validates metadata against XML schema profiles, and uses the Microsoft Graph API client to programmatically configure SAML 2.0 / OIDC single sign-on, attribute claims mappings, SCIM user provisioning, and Conditional Access zero-trust baselines.",
      tech: ["Microsoft Entra ID", "Okta", "CyberArk PAM", "Delinea Secret Server", "ServiceNow RITM", "Microsoft Graph API", "Python", "PowerShell", "SAML 2.0", "SCIM"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/app_onboarding"
    },
    {
      title: "Complaint Management System - CMS (Android App)",
      category: "web_mobile",
      badge: "Native Android App",
      desc: "Native Android mobile application built for government schools allowing students to lodge grievances regarding school infrastructure and administrative issues. Features a dedicated monitoring team verification interface with real-time chat for evaluating reported issues, authenticating evidence, and automatically routing validated complaints to relevant school authorities with live status tracking.",
      tech: ["Android SDK", "Java", "REST API", "Real-Time Chat", "Push Notifications", "MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/cms"
    },
    {
      title: "FixItNow: Civic Grievance & Community Complaint App (Flutter)",
      category: "web_mobile",
      badge: "Cross-Platform Mobile App",
      desc: "Cross-platform civic grievance reporting mobile application built in Flutter enabling citizens to report public infrastructure issues. Features camera and video recording for multimedia evidence uploads, a transparent ticket lifecycle tracking pipeline from inspection to resolution, and localized community discussion with upvoting to highlight critical neighborhood civic issues.",
      tech: ["Flutter", "Dart", "REST API", "Video Player", "Push Notifications", "Cross-Platform Mobile"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/fixit-now"
    },
    {
      title: "Ecommerce Platform with QR Fraud Prevention (Django)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "Full-scale Django e-commerce platform incorporating cryptographic QR code scanning to combat return fraud and warranty spoofing. Each customer order invoice generates a unique tamper-evident cryptographic QR code that customer service and delivery personnel scan during returns to verify item provenance and enhance transaction authenticity.",
      tech: ["Django", "Python", "QR Cryptography", "SQLite", "PythonAnywhere"],
      liveUrl: "https://ecommerce0.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/ecommerce"
    },
    {
      title: "Smart Farming Assistant (Django)",
      category: "ai_ml",
      badge: "Smart Agriculture Platform",
      desc: "Precision agriculture advisor delivering machine-learning-driven crop and fertilizer suggestions based on soil NPK values and climatic factors. Integrates real-time weather forecasting APIs, government agricultural scheme repositories, and a peer-to-peer digital marketplace for buying and selling farm produce.",
      tech: ["Django", "Scikit-Learn", "Weather API", "NumPy", "Bootstrap"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/farming"
    },
    {
      title: "Aadhar-Linked Voter Card System (Django)",
      category: "iam_security",
      badge: "Identity Verification",
      desc: "Secure electoral registration and verification system cross-validating voter cards with national Aadhar identity records. Implements duplicate-entry detection algorithms to eliminate fraudulent registrations, update constituency changes, and guarantee clean, verifiable electoral databases.",
      tech: ["Django", "Python", "Identity Verification", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/voter"
    },
    {
      title: "Kids Learning Portal (Django)",
      category: "web_mobile",
      badge: "Interactive Educational Portal",
      desc: "Interactive educational web platform where children engage with curated course videos followed by adaptive quizzes to reinforce subject comprehension. Upon passing the quiz, students unlock entertaining educational media, while those needing improvement are dynamically guided back through prerequisite course materials to ensure mastery.",
      tech: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/svsprojects"
    },
    {
      title: "PwC Enterprise IAM & Zero-Trust MFA Portal (Django)",
      category: "iam_security",
      badge: "Enterprise IAM & MFA",
      desc: "Enterprise multi-factor authentication (MFA) and access control gateway built with Django 5 and django-allauth. Implements TOTP authenticator app support, FIDO2 / WebAuthn hardware security keys, active session management with remote session revocation (usersessions), Google OAuth 2.0 social federation, Google reCAPTCHA bot defense, and HTTP 429 rate-limiting protection.",
      tech: ["Django 5", "django-allauth", "TOTP MFA", "FIDO2 / WebAuthn", "Session Management", "reCAPTCHA", "JWT", "OAuth 2.0"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/pwc"
    },
    {
      title: "AppLock: ML Multi-Factor Biometric Authenticator",
      category: "ai_ml",
      badge: "Biometrics & Hardware Auth",
      desc: "Multi-modal biometric security gateway combining MediaPipe 468 3D facial mesh landmarks (SVM), hand gesture recognition (Random Forest), and WebAuthn/FIDO2 hardware security keys for touchless zero-trust authentication.",
      tech: ["MediaPipe", "Scikit-Learn (SVM & RF)", "WebAuthn / FIDO2", "Flask", "OpenCV", "Python"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/applock"
    },
    {
      title: "Wardobe: P2P Outfit Rental & Fashion Platform (Django)",
      category: "web_mobile",
      badge: "Peer-to-Peer Fashion Marketplace",
      desc: "Community clothing rental and wardrobe sharing platform built in Django. Features Razorpay digital payment integration, cryptographic QR codes for garment handover and return verification, location-based wardrobe discovery, and user profile management.",
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

// Render Flagship Projects (TOP 5 full-screen showcase cards)
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
