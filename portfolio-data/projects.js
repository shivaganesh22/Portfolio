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
      title: "RSGMovies · Multi-Platform Streaming",
      subtitle: "Django REST Framework · ReactJS Web · Android TV Leanback App · Flutter Mobile · Seedr Cloud API",
      liveUrl: "https://rsgmovies.com",
      liveBackendUrl: "https://rsg-movies.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/rsgmovies",
      whatItHas: "RSGMovies is a movie streaming and download platform for web, Android TV, and mobile. It brings together movie listings and viewing links from Movierulz, TamilMV, iBomma, MovieBlast, iStreamflare, and MovierulzHD, using BeautifulSoup to collect and parse source pages. From a title, users can open available streams or downloads, send a movie to Seedr for cloud access at different resolutions, search torrents, or use the YTmate YouTube downloader. A remote-friendly Android TV experience and release alerts extend the service across screens.",
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
      title: "Auto-Send · Instagram Automation",
      subtitle: "Django 5 · Meta Graph API v26.0 · Webhooks · HMAC-SHA256 · Alpine.js · Tailwind CSS",
      liveUrl: "https://rsgflow.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/Auto-Send",
      whatItHas: "Auto-Send is an Instagram engagement tool that turns comments into public replies or direct messages. Creators configure response workflows and personalize message content, then can require a viewer to follow before selected links or downloads are sent. Incoming events are checked and deduplicated to avoid repeat replies. A dashboard shows message delivery and API response performance, while exportable activity history helps creators review campaigns and investigate failed sends.",
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
      title: "Price Tracker · E-Commerce Intelligence",
      subtitle: "ReactJS 18 Frontend · Django REST Framework Backend · Firebase · Cloud Deployments",
      liveUrl: "https://rsgtracker.vercel.app",
      liveBackendUrl: "https://rsg-price.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/price-tracker",
      whatItHas: "Price Tracker helps shoppers monitor products and find daily deals across Amazon and Flipkart. Users can follow listings, compare current prices and discounts, and review how prices have changed over time. Each product can have a personal target price, so shoppers are notified by email or in the app when the price changes or reaches their chosen threshold. The dashboard brings watchlists, price history, and alerts together, making it easier to spot a deal without checking every store manually.",
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
      title: "AUpulse · Computer Vision Attendance",
      subtitle: "Flutter Mobile App · OpenCV Biometric Embeddings · Django REST API · Proxy Prevention",
      liveUrl: "https://aupulse-api.vercel.app",
      liveBackendUrl: "https://aupulse-cv.vercel.app",
      githubUrl: "https://github.com/shivaganesh22/mini-project",
      whatItHas: "AUpulse is an automated attendance system that connects classroom CCTV footage with student records and the class timetable. It uses real-time facial data to mark enrolled students present for the scheduled class, helping reduce manual effort and proxy attendance. The platform also lets administrators manage students, faculty, rooms, classes, and schedules. Students can review their attendance in the companion app, while administrators generate detailed reports and identify attendance shortages.",
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
      title: "Image Deduplication · AIMLA Research",
      subtitle: "PyTorch · ResNet / EfficientNet / MobileNet · Perceptual Hashing · AIMLA 2025",
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/major-project",
      whatItHas: "Image Deduplication is a Django platform for finding repeated and visually similar images in a collection. It compares images using pretrained ResNet, EfficientNet, and MobileNet models alongside hybrid matching methods, so resized, cropped, or adjusted copies can still be identified. Results show similarity percentages and flag likely duplicates for review. The tool also reports resource usage and estimated storage savings, helping users understand both the matches and the potential cost reduction. The work was presented at AIMLA 2025 as Paper #455.",
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
      desc: "This EAMCET counseling portal guides candidates through college and branch selection based on their entrance rank. Applicants rank options across programs such as CSE, IT, ECE, EEE, CIV, and MEC, then submit their preferences for review. Colleges can review candidate profiles and approve or reject proposed allocations. The system sends allotment letters and status updates by email, while a super-admin manages seat capacity and counseling rounds.",
      tech: ["Django", "Python", "SMTP Email Dispatch", "Role-Based Auth", "SQLite", "PythonAnywhere"],
      liveUrl: "https://amsproject00.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/amsproject"
    },
    {
      title: "Enterprise Application Onboarding & Identity Governance",
      category: "iam_security",
      badge: "PwC Enterprise IAM Automation",
      desc: "This identity-governance portal streamlines the onboarding of SaaS and custom applications into Microsoft Entra ID and Okta. It starts with a ServiceNow request, then checks submitted application details against defined XML profiles before provisioning begins. The workflow configures single sign-on, claim mappings, and SCIM user provisioning through Microsoft Graph. It can also apply Conditional Access baselines, bringing common onboarding steps into a repeatable process.",
      tech: ["Microsoft Entra ID", "Okta", "CyberArk PAM", "Delinea Secret Server", "ServiceNow RITM", "Microsoft Graph API", "Python", "PowerShell", "SAML 2.0", "SCIM"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/app_onboarding"
    },
    {
      title: "Complaint Management System - CMS (Android App)",
      category: "web_mobile",
      badge: "Native Android App",
      desc: "This Android app gives government-school students a way to report infrastructure and administrative issues. Students submit a complaint, and a monitoring team reviews the details and verifies the issue through real-time chat. Once confirmed, the complaint is forwarded to the relevant school for action. Students and reviewers can follow its status, making the process easier to track from the initial report through resolution.",
      tech: ["Android SDK", "Java", "REST API", "Real-Time Chat", "Push Notifications", "MySQL"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/cms"
    },
    {
      title: "FixItNow: Civic Grievance & Community Complaint App (Flutter)",
      category: "web_mobile",
      badge: "Cross-Platform Mobile App",
      desc: "FixItNow gives residents a way to report public infrastructure problems and follow them through resolution. A report can include photos or video as evidence, helping communicate the issue to the people responsible for reviewing it. Each complaint moves through a visible ticket lifecycle from inspection to resolution. Residents can also discuss local issues and upvote reports, helping bring attention to concerns affecting their community.",
      tech: ["Flutter", "Dart", "REST API", "Video Player", "Push Notifications", "Cross-Platform Mobile"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/fixit-now"
    },
    {
      title: "Ecommerce Platform with QR Fraud Prevention (Django)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "This e-commerce platform adds QR verification to the product return process. Each order generates a unique QR code on its invoice, which support staff or delivery personnel scan when a return is requested. The code helps match the returned item with its original purchase and gives the team a way to check discrepancies before accepting it. This helps reduce fraudulent returns and warranty claims while improving confidence in product provenance.",
      tech: ["Django", "Python", "QR Cryptography", "SQLite", "PythonAnywhere"],
      liveUrl: "https://ecommerce0.pythonanywhere.com",
      githubUrl: "https://github.com/shivaganesh22/ecommerce"
    },
    {
      title: "Smart Farming Assistant (Django)",
      category: "ai_ml",
      badge: "Smart Agriculture Platform",
      desc: "The Smart Farming Assistant brings practical agriculture guidance into one platform. It recommends crops and fertilizers, provides weather forecasts, and presents information about government farming schemes. Farmers can also list crops for sale and browse produce offered by others. By combining planning guidance, local conditions, scheme information, and a marketplace, the project supports farmers through both growing decisions and crop trading.",
      tech: ["Django", "Scikit-Learn", "Weather API", "NumPy", "Bootstrap"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/farming"
    },
    {
      title: "Aadhar-Linked Voter Card System (Django)",
      category: "iam_security",
      badge: "Identity Verification",
      desc: "This voter-card system supports registration and record updates linked with Aadhaar details. It checks for duplicate entries when voter information is added or changed, helping prevent duplicate cards and keep records accurate. Users can update voter details as needed, while the system maintains a cleaner and more verifiable register. The goal is to make voter information easier to manage and more reliable over time.",
      tech: ["Django", "Python", "Identity Verification", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/voter"
    },
    {
      title: "Kids Learning Portal (Django)",
      category: "web_mobile",
      badge: "Interactive Educational Portal",
      desc: "The Kids Learning Portal turns course material into a guided learning experience for children. Learners watch videos connected to a topic and then complete quizzes to check their understanding. Passing a quiz unlocks entertaining content and allows them to move to the next level. If they need more practice, the portal guides them back to the relevant material before another attempt, helping reinforce each topic before they continue.",
      tech: ["Django", "Python", "HTML5", "CSS3", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/svsprojects"
    },
    {
      title: "PwC Enterprise IAM & Zero-Trust MFA Portal (Django)",
      category: "iam_security",
      badge: "Enterprise IAM & MFA",
      desc: "This access-control portal brings sign-in security and session management into one place. Users can authenticate with an authenticator app or a FIDO2/WebAuthn security key, and can review active sessions that may be revoked remotely. Federated sign-in is available through Google, while CAPTCHA and request throttling add protection against automated abuse. Together, these controls demonstrate a layered approach to account access and session security.",
      tech: ["Django 5", "django-allauth", "TOTP MFA", "FIDO2 / WebAuthn", "Session Management", "reCAPTCHA", "JWT", "OAuth 2.0"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/pwc"
    },
    {
      title: "AppLock: ML Multi-Factor Biometric Authenticator",
      category: "ai_ml",
      badge: "Biometrics & Hardware Auth",
      desc: "AppLock explores a multi-factor sign-in flow that combines biometric signals with a hardware security key. It analyzes facial landmarks and hand gestures to classify user input, then supports WebAuthn/FIDO2 keys as an additional authentication factor. The project brings these separate checks together as a touchless authentication concept. Its focus is on exploring how machine-learning based signals can complement established security keys in a zero-trust workflow.",
      tech: ["MediaPipe", "Scikit-Learn (SVM & RF)", "WebAuthn / FIDO2", "Flask", "OpenCV", "Python"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/applock"
    },
    {
      title: "Wardobe: P2P Outfit Rental & Fashion Platform (Django)",
      category: "web_mobile",
      badge: "Peer-to-Peer Fashion Marketplace",
      desc: "Wardobe is a community marketplace for discovering and renting clothing from nearby users. Members can manage a wardrobe profile, browse available outfits by location, and arrange a rental through the platform. Digital payments support the transaction, while QR codes help verify garment handover and return. The service is designed to make shared clothing easier to discover and track through its rental lifecycle.",
      tech: ["Django", "Python", "Razorpay API", "QR Cryptography", "Bootstrap", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/wardobe"
    },
    {
      title: "Chart Generator: Interactive Visual Canvas Studio",
      category: "web_mobile",
      badge: "React 18 Canvas Builder",
      desc: "Chart Generator is a visual workspace for turning datasets into charts and flow diagrams. Users can bring in data, arrange visual elements on an interactive canvas, and refine a composition directly on the page. The finished visualization can be exported at high resolution for reuse in reports or presentations. The project combines data exploration with a freeform drawing workflow in one studio.",
      tech: ["React 18", "Konva.js", "React-Konva", "Recharts", "Tailwind CSS", "Flowbite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/chart-generator"
    },
    {
      title: "Placement Management System - PMS (Django)",
      category: "web_mobile",
      badge: "Live on PythonAnywhere",
      desc: "This placement portal organizes campus recruitment from drive setup through candidate selection. Institutions can publish company opportunities, apply eligibility filters, and track applicants across multiple interview rounds. The workflow keeps candidate progress and recruitment activity visible to administrators. Offer metrics provide a summary of outcomes across the placement process.",
      tech: ["Django", "Bootstrap", "Role-Based Auth", "PythonAnywhere"],
      liveUrl: "https://pms0.pythonanywhere.com/",
      githubUrl: "https://github.com/shivaganesh22/pms"
    },
    {
      title: "ProctorVault: Remote Exam Integrity Guardian (Django)",
      category: "iam_security",
      badge: "Session Security & Proctoring",
      desc: "ProctorVault supports remote exam sessions with checks intended to protect assessment integrity. It applies browser-lockdown controls and records tab-switch events during an exam, alongside candidate identity checks. Session events are preserved in an audit log so activity can be reviewed after the assessment. The project brings monitoring and session records together for remote examination workflows.",
      tech: ["Django", "Python", "Session Security", "Audit Logs"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/proctorvault"
    },
    {
      title: "Parkinson's Speech ML Acoustic Classifier",
      category: "ai_ml",
      badge: "Acoustic Signal Processing",
      desc: "This research project examines speech recordings for acoustic patterns associated with Parkinson’s disease. It extracts measures such as vocal jitter, shimmer, pitch variation, and MFCCs from audio samples, then uses the resulting features in a classifier. The workflow is intended to explore whether measurable changes in voice can support further analysis. It is an experimental research tool rather than a clinical diagnostic system.",
      tech: ["Librosa", "FFmpeg", "XGBoost", "Scikit-Learn", "Django"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/parkinson"
    },
    {
      title: "Full-Stack Assessment: Django REST API & React Studio",
      category: "web_mobile",
      badge: "Full-Stack Evaluation",
      desc: "This full-stack assessment pairs a REST API with a responsive web interface. The backend handles calculation and data-filtering requests, while the frontend presents a navigable product catalog and communicates with the API. The modular structure separates data operations from the user-facing experience. It demonstrates an end-to-end workflow from requesting processed data to presenting it in the browser.",
      tech: ["Django REST Framework", "React 18", "Vite", "Axios", "React Router", "Python", "JavaScript"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/21EG112B26"
    },
    {
      title: "College Management Desktop GUI Suite (Python Tkinter)",
      category: "web_mobile",
      badge: "Desktop Python Application",
      desc: "This desktop suite brings common college administration tasks into a single application. Staff can access student records, track fee information, review faculty schedules, and navigate department-management functions. The desktop interface is organized around these administrative areas so routine information is easier to find. The project focuses on a compact workflow for managing institutional records from one place.",
      tech: ["Python", "Tkinter GUI", "SQLite"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/college-manage-system-gui"
    },
    {
      title: "Streamlit Interactive Data Explorer",
      category: "ai_ml",
      badge: "Streamlit Analytics App",
      desc: "This interactive data explorer helps users inspect datasets and visualize patterns without building charts by hand. It supports multivariate data exploration, statistical model runs, and charts that update as the analysis changes. The dashboard keeps the data and its visual summaries together for an iterative workflow. It is designed as a practical space for exploring a dataset and communicating what it contains.",
      tech: ["Python", "Streamlit", "Pandas", "Matplotlib"],
      liveUrl: null,
      githubUrl: "https://github.com/shivaganesh22/streamlit"
    }
  ]
};

// Render Flagship Projects (TOP 5 showcase cards with mobile half-card tap-to-expand)
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
          </div>

          <div class="flagship-links-group">
            ${p.liveUrl ? `
              <a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn-live-pill" onclick="window.soundEngine?.playClick()">
                <span class="live-dot"></span>
                <span>${p.liveUrl.includes('rsgmovies.com') ? 'rsgmovies.com' : 'Live App'}</span>
              </a>
            ` : ''}
            ${p.liveBackendUrl ? `
              <a href="${p.liveBackendUrl}" target="_blank" rel="noopener" class="btn-live-pill backend" onclick="window.soundEngine?.playClick()">
                <span class="live-dot"></span>
                <span>API Live</span>
              </a>
            ` : ''}
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener" class="btn-repo-pill" onclick="window.soundEngine?.playClick()">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
                <span>GitHub</span>
              </a>
            ` : ''}
          </div>
        </div>

        <h3 class="flagship-title">${p.title}</h3>

        <!-- Description Section -->
        <div class="flagship-what-box">
          <div class="flagship-what-text">${p.whatItHas}</div>
        </div>

        <details class="project-details">
          <summary>Project details & technology</summary>
          <div class="flagship-collapsible-content">
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
        </details>
      </div>
    </article>
  `).join('');
}

// Toggle Flagship card expansion on mobile
window.toggleFlagshipCard = function(btn, event) {
  if (event) {
    event.stopPropagation();
  }
  window.soundEngine?.playClick();
  const card = btn.closest('.flagship-card');
  if (!card) return;

  const isExpanded = card.classList.toggle('is-expanded');
  btn.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  const textSpan = btn.querySelector('.expand-btn-text');
  if (textSpan) {
    textSpan.textContent = isExpanded ? 'Collapse Architecture & Details' : 'Tap to Read Full Architecture & Tech Stack';
  }
};

// Handle tap anywhere on flagship card on mobile
window.handleFlagshipCardClick = function(card, event) {
  if (window.innerWidth > 768) return;
  // If user tapped a link, button, or inside a link, allow native action
  if (event.target.closest('a') || event.target.closest('.flagship-mobile-expand-btn')) {
    return;
  }
  const btn = card.querySelector('.flagship-mobile-expand-btn');
  if (btn) {
    window.toggleFlagshipCard(btn, event);
  }
};

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
              <span class="live-dot-sm"></span> Live Demo
            </a>
          ` : ''}
          ${p.githubUrl ? `
            <a href="${p.githubUrl}" target="_blank" rel="noopener" class="link-badge-repo" title="View Source on GitHub" onclick="window.soundEngine?.playClick()">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
              GitHub
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
