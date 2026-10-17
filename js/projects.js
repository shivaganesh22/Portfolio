/* ==========================================================================
   SHIVA GANESH PORTFOLIO - PROJECTS DATA & LOGIC ENGINE
   Flagship case studies, multi-platform media showcase, search & filtering
   ========================================================================== */

const PROJECTS_DATA = {
  flagships: [
    {
      id: "rsgmovies",
      category: "web_mobile",
      badge: "Flagship Multi-Platform Ecosystem",
      title: "RSGMovies Multi-Client Streaming Ecosystem",
      subtitle: "React Web · Django REST API · Android TV (Leanback) · Native Android",
      summary: "An enterprise-grade, multi-platform streaming & media discovery ecosystem engineered across web, Android TV, and native mobile clients. Features custom HLS adaptive bitrate playback, HMAC-SHA256 signed stream proxying, QR-based Entra authentication, and single-session server revocation.",
      platforms: {
        tv: {
          label: "Android TV (Leanback)",
          badge: "TV-Native React Native / ExoPlayer",
          mainImage: "assets/img/projects/tv_home_clean.png",
          thumbnails: [
            { src: "assets/img/projects/tv_home_clean.png", title: "TV Home Grid & Carousel" },
            { src: "assets/img/projects/tv_movies_grid_perfect.png", title: "Movies Leanback Catalog" },
            { src: "assets/img/projects/tv_detail_new.png", title: "Movie Detail & Stream Picker" },
            { src: "assets/img/projects/tv_settings_live.png", title: "TV Settings & Profile" },
            { src: "assets/img/projects/tv_action_dialog_opened.png", title: "Action & Resolution Dialog" }
          ]
        },
        web: {
          label: "React Web (Vite)",
          badge: "React 18 / Tailwind / Responsive",
          mainImage: "assets/img/projects/web_230950.png",
          thumbnails: [
            { src: "assets/img/projects/web_230950.png", title: "Web Player & Media Details" },
            { src: "assets/img/projects/web_231056.png", title: "Catalog & Filter Grid" },
            { src: "assets/img/projects/web_231517.png", title: "Series & Season Navigation" },
            { src: "assets/img/projects/web_231739.png", title: "Search & Video Quality Select" }
          ]
        },
        backend: {
          label: "Django REST Backend",
          badge: "Backend-Proxied HMAC-SHA256 URL Signing",
          mainImage: "assets/img/projects/tv_action_dialog_opened.png",
          thumbnails: [
            { src: "assets/img/projects/tv_action_dialog_opened.png", title: "Backend API Proxy" },
            { src: "assets/img/projects/web_231739.png", title: "Stream Selection Logic" }
          ]
        }
      },
      tabs: {
        architecture: `
          <ul>
            <li><strong>Cross-Platform Parity:</strong> Unified Django REST API backend powering React Web (Vite), Android TV (<code>react-native-tvos</code>), and native Android.</li>
            <li><strong>Leanback D-Pad Engine:</strong> Full keyboard & TV remote D-pad spatial focus engine with traps, auto-scrolling hero carousels, and zero touch requirements.</li>
            <li><strong>Secure Proxy Architecture:</strong> Backend HMAC-SHA256 signature validation preventing stream tampering and direct client credentials exposure.</li>
          </ul>
        `,
        security: `
          <ul>
            <li><strong>QR Entra Authentication:</strong> TV client generates cryptographic ephemeral request token; authenticated web user approves via biometric/SSO; TV receives Bearer token.</li>
            <li><strong>Single-Session Enforcement:</strong> Displaced devices are immediately invalidated with server-side session revocation (<code>401 SESSION_REVOKED</code>).</li>
            <li><strong>In-Memory Secrets:</strong> Fallback provider tokens reside in volatile RAM only, never persisted to disk or AsyncStorage.</li>
          </ul>
        `,
        playback: `
          <ul>
            <li><strong>Dynamic HLS Level Detection:</strong> Extracts actual bitrate levels directly from <code>.m3u8</code> manifest, discarding hardcoded resolution mocks.</li>
            <li><strong>External Player Hand-off:</strong> Direct intent triggers for VLC, MX Player, and PotPlayer with intent payload validation.</li>
            <li><strong>Intelligent Watch History:</strong> Automatically marks progress at 95% completion and persists cross-device watch positions.</li>
          </ul>
        `
      },
      tags: ["React 18", "Django 5", "react-native-tvos", "ExoPlayer", "HLS Streaming", "HMAC-SHA256", "OIDC QR Auth", "PostgreSQL"],
      github: "https://github.com/shivaganesh22",
      demo: null
    },
    {
      id: "iam-automation",
      category: "iam_security",
      badge: "Enterprise Identity & Access Governance",
      title: "Automated Enterprise Application Onboarding & IAM Governance",
      subtitle: "Microsoft Entra ID · Okta · PowerShell / Python · CyberArk · SCIM",
      summary: "Engineered robust enterprise IAM automation to provision, configure, and govern single sign-on (SSO), role-based access control (RBAC), and Conditional Access policies across Microsoft Entra ID and Okta, drastically reducing onboarding cycle times.",
      platforms: {
        workflow: {
          label: "IAM Pipeline",
          badge: "Production Identity Lifecycle",
          mainImage: "assets/img/projects/web_231056.png",
          thumbnails: [
            { src: "assets/img/projects/web_231056.png", title: "Enterprise Identity Orchestration" }
          ]
        }
      },
      tabs: {
        architecture: `
          <ul>
            <li><strong>Orchestrated Onboarding:</strong> Parameterized scripts automating Entra ID App Registrations, Enterprise Applications, Service Principals, and OAuth/OIDC redirect URIs.</li>
            <li><strong>SAML 2.0 & OIDC Federation:</strong> Automated attribute mapping, claims issuance, signing certificate rotation, and token lifespan policies.</li>
            <li><strong>SCIM & JIT Provisioning:</strong> Configured automated user lifecycle synchronization from identity store to enterprise SaaS targets.</li>
          </ul>
        `,
        security: `
          <ul>
            <li><strong>Zero-Trust Conditional Access:</strong> Policy matrix enforcing MFA, compliant device filters, location-based IP fencing, and real-time sign-in risk evaluation.</li>
            <li><strong>Privileged Access Management (PAM):</strong> CyberArk Vault & Delinea Secret Server integration with automated CPM password rotation and PSM session recording.</li>
            <li><strong>Least-Privilege RBAC:</strong> Automated group membership binding and entitlement review reporting to prevent privilege creep.</li>
          </ul>
        `
      },
      tags: ["Microsoft Entra ID", "Okta", "CyberArk PAM", "Delinea", "SAML 2.0", "OAuth 2.0 / OIDC", "SCIM", "PowerShell", "Python"],
      github: "https://github.com/shivaganesh22/pwc",
      demo: null
    },
    {
      id: "auto-send",
      category: "web_mobile",
      badge: "SaaS Webhook Engine",
      title: "Auto-Send: Instagram Comment & DM Automation SaaS",
      subtitle: "Django 5 · Meta Graph API v26.0 · Alpine.js · Tailwind · Chart.js",
      summary: "A production-grade social automation SaaS delivering automated comment replies and private direct messages via Meta Graph API v26.0. Features signature challenge verification, comment deduplication, follower gating, and real-time latency analytics.",
      platforms: {
        dashboard: {
          label: "SaaS Dashboard",
          badge: "Meta Graph API v26.0",
          mainImage: "assets/img/projects/web_231517.png",
          thumbnails: [
            { src: "assets/img/projects/web_231517.png", title: "Analytics & Automation Rule Builder" }
          ]
        }
      },
      tabs: {
        architecture: `
          <ul>
            <li><strong>Idempotent Event Pipeline:</strong> Webhook challenge verification with SHA-256 HMAC payload validation and strict <code>comment_id</code> deduplication caching.</li>
            <li><strong>Rule Execution Engine:</strong> Per-post triggers for keyword matching, universal replies, and dynamic template variables (<code>{username}</code>, <code>{link}</code>, <code>{keyword}</code>).</li>
            <li><strong>Observability & Metrics:</strong> Graph API inspector tracking request latency, response status codes, payload dumps, and CSV activity exports.</li>
          </ul>
        `,
        security: `
          <ul>
            <li><strong>Follower Gating:</strong> Verified API checks to ensure private DMs or bonus links are only dispatched to confirmed account followers.</li>
            <li><strong>Rate Limiting & Anti-Spam:</strong> Compliant pacing adhering to Meta platform rate limits with automatic exponential backoff.</li>
          </ul>
        `
      },
      tags: ["Django 5", "Meta Graph API", "Webhooks", "HMAC-SHA256", "Alpine.js", "Chart.js", "Tailwind CSS", "PostgreSQL"],
      github: "https://github.com/shivaganesh22/Auto-Send",
      demo: null
    },
    {
      id: "deduplication",
      category: "ai_ml",
      badge: "Published Research · AIMLA 2025 Paper #455",
      title: "Hybrid ML Model for Image Deduplication & Cloud Storage Optimization",
      subtitle: "Pretrained Deep Learning · ResNet / EfficientNet / MobileNet · AIMLA 2025",
      summary: "Published research contribution presented at the 3rd International Conference on Artificial Intelligence and Machine Learning Applications (AIMLA 2025). Formulates a hybrid feature extraction and perceptual hashing architecture to detect near-duplicate and modified visual media at scale.",
      platforms: {
        research: {
          label: "Research & Models",
          badge: "AIMLA 2025 Contributor",
          mainImage: "assets/img/projects/web_231739.png",
          thumbnails: [
            { src: "assets/img/projects/web_231739.png", title: "Hybrid Similarity Pipeline" }
          ]
        }
      },
      tabs: {
        architecture: `
          <ul>
            <li><strong>Deep Feature Comparison:</strong> Benchmarked deep convolutional embeddings from ResNet, EfficientNet, and MobileNet against traditional perceptual hashing (dHash/pHash).</li>
            <li><strong>Hybrid Matching Pipeline:</strong> Combines deep latent representation cosine similarity with Hamming distance clustering to catch cropped, resized, and color-shifted duplicates.</li>
            <li><strong>Storage Optimization:</strong> Designed to eliminate redundant visual data in high-volume enterprise and educational repositories, directly slashing storage overhead.</li>
          </ul>
        `,
        metrics: `
          <ul>
            <li><strong>Paper ID:</strong> 455 — AIMLA 2025 Conference Proceedings.</li>
            <li><strong>Frameworks:</strong> TensorFlow 2.18, PyTorch 2.6, torchvision, OpenCV, scikit-learn, Django 5.1.</li>
          </ul>
        `
      },
      tags: ["PyTorch", "TensorFlow", "ResNet", "EfficientNet", "MobileNet", "Perceptual Hashing", "OpenCV", "AIMLA 2025"],
      github: "https://github.com/shivaganesh22/deduplication",
      demo: null
    },
    {
      id: "applock",
      category: "ai_ml",
      badge: "Biometric & Hardware Authentication",
      title: "AppLock: ML-Powered Multi-Factor Biometric Authentication",
      subtitle: "MediaPipe 468 Face Landmarks · Hand Gesture RF · WebAuthn / FIDO2",
      summary: "A cutting-edge alternative authentication framework allowing users to enroll and verify identities using computer vision biometrics, hardware security keys, and cryptographic hashes within a unified Flask application.",
      platforms: {
        biometrics: {
          label: "Auth Modalities",
          badge: "MediaPipe + WebAuthn",
          mainImage: "assets/img/projects/web_230950.png",
          thumbnails: [
            { src: "assets/img/projects/web_230950.png", title: "Multi-Auth Verification Modal" }
          ]
        }
      },
      tabs: {
        architecture: `
          <ul>
            <li><strong>Face Landmark Recognition:</strong> Extracts 468 facial 3D landmarks via MediaPipe, feeding normalized geometric distance vectors into a scikit-learn Support Vector Machine (RBF kernel).</li>
            <li><strong>Hand Gesture Classification:</strong> Computes 21 hand joint angles and curl characteristics evaluated by a Random Forest classifier.</li>
            <li><strong>WebAuthn / FIDO2 Hardware Integration:</strong> Native biometric and hardware security key authentication with cryptographic origin challenge validation.</li>
          </ul>
        `
      },
      tags: ["MediaPipe", "scikit-learn (SVM/RF)", "WebAuthn / FIDO2", "Flask", "OpenCV", "NumPy", "SQLAlchemy"],
      github: "https://github.com/shivaganesh22/applock",
      demo: null
    }
  ],
  supporting: [
    {
      title: "Price Tracker Full-Stack Application",
      category: "web_mobile",
      desc: "Distributed price tracking and product monitor pairing a React 18 frontend with a scalable Django REST backend and Firebase integration for real-time price alerts.",
      tech: ["React 18", "Django REST", "Firebase", "Tailwind CSS"],
      github: "https://github.com/shivaganesh22/pricetracker-frontend",
      demo: null
    },
    {
      title: "AUpulse Attendance & Computer Vision",
      category: "web_mobile",
      desc: "Cross-platform Flutter mobile application connected to a Django backend and computer vision facial verification pipeline to automate attendance and prevent proxy submissions.",
      tech: ["Flutter / Dart", "Django API", "OpenCV", "Facial Verification"],
      github: "https://github.com/shivaganesh22/aupulse_app",
      demo: null
    },
    {
      title: "Anti-Fraud eCommerce with QR Verification",
      category: "web_mobile",
      desc: "Full-featured Django e-commerce platform incorporating cryptographic order-specific QR codes to prevent return fraud and counterfeit product claims.",
      tech: ["Django", "Python", "QR Cryptography", "SQLite"],
      github: "https://github.com/shivaganesh22/ecommerce",
      demo: "https://ecommerce0.pythonanywhere.com"
    },
    {
      title: "Smart Farming Assistant & ML Advisory",
      category: "ai_ml",
      desc: "Agricultural advisory system using scikit-learn to recommend ideal crops and fertilizers based on soil nutrients and weather patterns, coupled with an online crop marketplace.",
      tech: ["Django", "scikit-learn", "Weather API", "NumPy"],
      github: "https://github.com/shivaganesh22/farming",
      demo: null
    },
    {
      title: "Parkinson's Audio Speech ML Classifier",
      category: "ai_ml",
      desc: "Acoustic signal processing tool extracting vocal jitter, shimmer, and spectral features using Librosa and FFmpeg, feeding XGBoost classifiers for acoustic pattern research.",
      tech: ["Librosa", "XGBoost", "FFmpeg", "scikit-learn", "Django"],
      github: "https://github.com/shivaganesh22/parkinson",
      demo: null
    },
    {
      title: "Complaint Management System (CMS)",
      category: "web_mobile",
      desc: "Native Android application built in Java for educational governance, enabling real-time grievance submission, administrative chat, and verification tracking.",
      tech: ["Android Java", "REST API", "Push Notifications", "MySQL"],
      github: "https://github.com/shivaganesh22/cms",
      demo: null
    },
    {
      title: "ProctorVault Remote Exam Guardian",
      category: "iam_security",
      desc: "Django-based examination integrity platform implementing secure session handling, candidate verification, and audit logging for digital assessments.",
      tech: ["Django", "Python", "Session Security", "Audit Logs"],
      github: "https://github.com/shivaganesh22/proctorvault",
      demo: null
    },
    {
      title: "Placement Management System (PMS)",
      category: "web_mobile",
      desc: "Role-based institutional portal streamlining student placement registration, company eligibility tracking, interview schedules, and recruiter analytics.",
      tech: ["Django", "Bootstrap", "Role-Based Auth", "PythonAnywhere"],
      github: "https://github.com/shivaganesh22/pms",
      demo: "https://pms0.pythonanywhere.com/"
    },
    {
      title: "Admission Management System (AMS)",
      category: "web_mobile",
      desc: "Workflow automation system managing applicant processing, document verification, merit list calculations, and department allotments.",
      tech: ["Django", "Python", "Workflow Engine"],
      github: "https://github.com/shivaganesh22/amsproject",
      demo: "https://amsproject00.pythonanywhere.com"
    },
    {
      title: "College Management GUI",
      category: "web_mobile",
      desc: "Desktop administrative suite created with Python and Tkinter providing student records, fee tracking, and department management menus.",
      tech: ["Python", "Tkinter GUI", "SQLite"],
      github: "https://github.com/shivaganesh22/college-manage-system-gui",
      demo: null
    }
  ]
};

// Render Supporting Projects Grid
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
        <div class="project-external-links">
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener" class="icon-link" title="View Source on GitHub" onclick="window.soundEngine?.playClick()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
          ` : ''}
          ${p.demo ? `
            <a href="${p.demo}" target="_blank" rel="noopener" class="icon-link" title="Open Live Demo" onclick="window.soundEngine?.playClick()">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
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

// Attach Event Handlers
document.addEventListener('DOMContentLoaded', () => {
  renderSupportingProjects();

  // Filter Pills
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', (e) => {
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

  // Flagship Tabs Switcher
  document.querySelectorAll('.flagship-tabs-nav .tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parent = btn.closest('.flagship-content-side');
      if (!parent) return;
      window.soundEngine?.playClick();

      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      parent.querySelectorAll('.tab-content-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.getAttribute('data-tab');
      const panel = parent.querySelector(`.tab-content-panel[data-panel="${targetId}"]`);
      if (panel) panel.classList.add('active');
    });
  });

  // RSGMovies Platform Switcher
  document.querySelectorAll('.platform-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.flagship-card');
      if (!card) return;
      window.soundEngine?.playClick();

      card.querySelectorAll('.platform-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const platformKey = btn.getAttribute('data-platform');
      const projectData = PROJECTS_DATA.flagships.find(f => f.id === 'rsgmovies');
      if (!projectData || !projectData.platforms[platformKey]) return;

      const pData = projectData.platforms[platformKey];
      const stageImg = card.querySelector('.stage-img');
      const stageBadge = card.querySelector('.stage-badge');
      const thumbContainer = card.querySelector('.thumbnail-carousel');

      if (stageImg) stageImg.src = pData.mainImage;
      if (stageBadge) stageBadge.textContent = pData.badge;

      if (thumbContainer && pData.thumbnails) {
        thumbContainer.innerHTML = pData.thumbnails.map((t, idx) => `
          <div class="thumb-item ${idx === 0 ? 'active' : ''}" onclick="switchStageImage(this, '${t.src}', '${t.title}')">
            <img src="${t.src}" alt="${t.title}" />
          </div>
        `).join('');
      }
    });
  });
});

window.switchStageImage = function(elem, src, title) {
  window.soundEngine?.playClick();
  const parent = elem.closest('.flagship-media-side');
  if (!parent) return;

  parent.querySelectorAll('.thumb-item').forEach(t => t.classList.remove('active'));
  elem.classList.add('active');

  const stageImg = parent.querySelector('.stage-img');
  if (stageImg) {
    stageImg.style.opacity = '0.5';
    setTimeout(() => {
      stageImg.src = src;
      stageImg.style.opacity = '1';
    }, 150);
  }
};
