/* ==========================================================================
   SHIVA GANESH PORTFOLIO - ACCURATE CREDENTIALS & CERTIFICATIONS
   Direct links to Credly digital badges and Google Drive certificates.
   Removed redundant "verified on credly" badge clutter.
   ========================================================================== */

const GOOGLE_DRIVE_FOLDER = "https://drive.google.com/drive/folders/1fFWOkMl8EO72BnRldHPPbFqdkQEyvNF5";

const ALL_CREDENTIALS = [
  // CyberArk Professional Certification
  {
    name: "CyberArk Certified Defender — Privileged Access Management (PAM)",
    issuer: "CyberArk",
    category: "security",
    issued_at: "2026-02-07",
    url: "../assets/docs/Defender_PAM.pdf",
    drive_url: GOOGLE_DRIVE_FOLDER,
    image: "../assets/badges/defender_pam.jpg",
    remote_image: null,
    skills: ["CyberArk Core", "Vault & PVWA", "CPM & PSM", "Privileged Access Management", "Access Security"]
  },
  // Google Cloud & AI (from credly.json)
  {
    name: "Certified Partner Specialist Gemini Enterprise Agent Development",
    issuer: "Google Cloud",
    category: "google",
    issued_at: "2026-09-21",
    expires_at: "2027-03-21",
    url: "https://www.credly.com/badges/15aa519e-c957-4fc1-b9da-cfbfb66ec329",
    image: "../assets/badges/certified_partner_specialist_gemini_ente_15aa51.jpg",
    remote_image: "https://images.credly.com/images/73e93208-0df3-435d-b58c-07c8ee6019d9/blob",
    skills: ["Agent Development Kit", "Agents", "Gemini Enterprise", "Memory Management"]
  },
  {
    name: "Deploy an Agent with Agent Development Kit (ADK)",
    issuer: "Google Cloud",
    category: "google",
    issued_at: "2026-09-21",
    url: "https://www.credly.com/badges/89a63db5-9ea7-4b6f-82ad-1fd669620107",
    image: "../assets/badges/deploy_an_agent_with_agent_development_k_89a63d.jpg",
    remote_image: "https://images.credly.com/images/e9c45e2a-a48e-4686-99df-7de0ccd6dae7/blob",
    skills: ["AI Agents", "Agent Development Kit", "Agent Engine"]
  },
  {
    name: "Evaluate and Improve Agent Development Kit Agents",
    issuer: "Google Cloud",
    category: "google",
    issued_at: "2026-09-21",
    url: "https://www.credly.com/badges/2311b2bb-1a57-4a21-88a9-69fff2c36bb7",
    image: "../assets/badges/evaluate_and_improve_agent_development_k_2311b2.jpg",
    remote_image: "https://images.credly.com/images/b1800059-b7de-4065-851d-678287ea0720/blob",
    skills: ["Agent Evaluation", "Evaluation Strategy", "Hands-on Learning"]
  },
  {
    name: "Accelerate Development with Antigravity",
    issuer: "Google Cloud",
    category: "google",
    issued_at: "2026-09-09",
    url: "https://www.credly.com/badges/7fc0e5cf-c3d1-43b9-b75f-f40ad4c447f5",
    image: "../assets/badges/accelerate_development_with_antigravity_7fc0e5.jpg",
    remote_image: "https://images.credly.com/images/9a9bd5ca-b41b-41ed-82ad-43968d960f62/blob",
    skills: ["Agent development", "Application Development", "Software Development"]
  },

  // Cisco Networking & Cybersecurity (from credly.json)
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    category: "cisco",
    issued_at: "2024-06-03",
    url: "https://www.credly.com/badges/5241a5fc-aa1e-429e-90d5-38809062a87b",
    image: "../assets/badges/ccna__enterprise_networking__security__a_5241a5.png",
    remote_image: "https://images.credly.com/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
    skills: ["Dynamic Routing", "NAT", "Network Automation", "QoS", "Security Mitigation", "Virtualization"]
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    category: "cisco",
    issued_at: "2024-05-20",
    url: "https://www.credly.com/badges/f099e5a5-efc4-4f16-9b5a-ae3f22a90f61",
    image: "../assets/badges/ccna__switching__routing__and_wireless_e_f099e5.png",
    remote_image: "https://images.credly.com/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
    skills: ["Switching", "Routing", "WLAN", "Access Security", "High Availability"]
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    category: "cisco",
    issued_at: "2024-04-15",
    url: "https://www.credly.com/badges/c2b39657-c29a-41b1-9e49-cd8874244bd4",
    image: "../assets/badges/ccna__introduction_to_networks_c2b396.png",
    remote_image: "https://images.credly.com/images/70d71df5-f3dc-4380-9b9d-f22513a70417/CCNAITN__1_.png",
    skills: ["IPv4 / IPv6 Subnetting", "Ethernet", "Network Fundamentals", "Security"]
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    category: "cisco",
    issued_at: "2024-02-01",
    url: "https://www.credly.com/badges/7b59f2ac-f85c-43ac-98a2-2b8275edca96",
    image: "../assets/badges/introduction_to_cybersecurity_7b59f2.png",
    remote_image: "https://images.credly.com/images/af8c6b4e-fc31-47c4-8dcb-eb7a2065dc5b/I2CS__1_.png",
    skills: ["Cyber Best Practices", "Network Vulnerabilities", "Threat Detection"]
  },
  {
    name: "Python Essentials 1 & 2",
    issuer: "Cisco / Python Institute",
    category: "cisco",
    issued_at: "2023-05-02",
    url: "https://www.credly.com/badges/db2f38b4-06ce-44d6-9ed8-369dabf29393",
    image: "../assets/badges/python_essentials_1_db2f38.png",
    remote_image: "https://images.credly.com/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    skills: ["OOP", "Data Structures", "Modules", "Generators", "Exception Handling"]
  },

  // Security, Honors & Apprenticeship (from Drive Folder)
  {
    name: "Network Defense Essentials (NDE)",
    issuer: "EC-Council",
    category: "security",
    issued_at: "2024",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "🛡️",
    skills: ["Network Security", "Defense in Depth", "Firewalls", "IDS/IPS"]
  },
  {
    name: "1st Place Winner — PwC Innovation Hackathon",
    issuer: "PricewaterhouseCoopers (PwC)",
    category: "honors",
    issued_at: "2024",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "🏆",
    skills: ["Enterprise Solution Design", "Rapid Prototyping", "Team Leadership"]
  },
  {
    name: "National Apprenticeship Certificate (Software Programmer V1)",
    issuer: "NCVET / IT-ITeS Sector Skills Council",
    category: "honors",
    issued_at: "2026-08-31",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "📜",
    skills: ["Score: 94.8%", "40 NCRF / NSQF Credits", "12 Months 5 Days"]
  },
  {
    name: "PwC Cyber Risk & Regulatory Launchpad",
    issuer: "PricewaterhouseCoopers (PwC)",
    category: "security",
    issued_at: "2024-07-29",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "💼",
    skills: ["Cyber Risk", "Identity Governance", "Enterprise Security"]
  },
  {
    name: "AIMLA 2025 Research Contributor (Paper ID #455)",
    issuer: "AIMLA International Conference",
    category: "honors",
    issued_at: "2025",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "🔬",
    skills: ["Hybrid Machine Learning", "Image Deduplication", "Research Paper"]
  },

  // Cloud & Data Science (AWS / IBM from credly.json)
  {
    name: "AWS Educate Getting Started with Compute",
    issuer: "Amazon Web Services (AWS)",
    category: "cloud",
    issued_at: "2024-02-01",
    url: "https://www.credly.com/badges/fb6b20b7-a812-4c80-9f60-3821a31cfa69",
    image: "../assets/badges/aws_educate_getting_started_with_compute_fb6b20.jpg",
    remote_image: "https://images.credly.com/images/7b08cc0e-064b-407d-b70e-323509c3e474/blob",
    skills: ["AWS Cloud", "AWS Compute", "EC2 Architecture"]
  },
  {
    name: "Getting Started with Threat Intelligence and Hunting",
    issuer: "IBM",
    category: "security",
    issued_at: "2023-05-02",
    url: "https://www.credly.com/badges/5563ebe6-33b8-4892-8ac6-9253a6af626c",
    image: "../assets/badges/getting_started_with_threat_intelligence_5563eb.png",
    remote_image: "https://images.credly.com/images/e3a07258-a514-47ef-9810-8cf41274a0ed/image.png",
    skills: ["Threat Hunting", "Threat Intelligence", "X-Force Exchange", "Incident Response"]
  },
  {
    name: "Getting Started with Enterprise Data Science",
    issuer: "IBM",
    category: "cloud",
    issued_at: "2023-05-02",
    url: "https://www.credly.com/badges/0edf0ccf-3d07-4765-b7a5-f8593c4236d6",
    image: "../assets/badges/getting_started_with_enterprise_data_sci_0edf0c.png",
    remote_image: "https://images.credly.com/images/15dde181-3deb-480b-854f-1a9f251de740/image.png",
    skills: ["Data Exploration", "Watson Studio", "Fraud Analytics", "Model Training"]
  },
  {
    name: "Journey to Cloud: Envisioning Your Solution",
    issuer: "IBM",
    category: "cloud",
    issued_at: "2023-05-02",
    url: "https://www.credly.com/badges/a5768638-106a-43d4-adb9-cffa6773f7ac",
    image: "../assets/badges/journey_to_cloud__envisioning_your_solut_a57686.png",
    remote_image: "https://images.credly.com/images/7416ef81-78db-4222-b378-43d9f41c36e1/image.png",
    skills: ["Hybrid Cloud", "Microservices", "Cloud Migration", "Architecture Framing"]
  },
  {
    name: "PCAP: Programming Essentials in Python",
    issuer: "Cisco / Python Institute",
    category: "cisco",
    issued_at: "2024-05-04",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "🐍",
    skills: ["PCAP Certification", "Advanced Python", "Object-Oriented Programming"]
  },
  {
    name: "Python Concurrent Programming: Multithreading & Multiprocessing",
    issuer: "Advanced Python Institute",
    category: "cloud",
    issued_at: "2024",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "⚡",
    skills: ["Multithreading", "Multiprocessing", "Async IO", "Concurrency"]
  },
  {
    name: "Android Developer Virtual Internship",
    issuer: "AICTE / EduSkills",
    category: "honors",
    issued_at: "2023",
    url: GOOGLE_DRIVE_FOLDER,
    image: null,
    icon: "📱",
    skills: ["Android App Architecture", "Kotlin / Java", "Lifecycle Management"]
  }
];

function renderCredentials(filter = 'all') {
  const container = document.getElementById('credentials-grid');
  if (!container) return;

  const filtered = ALL_CREDENTIALS.filter(c => filter === 'all' || c.category === filter);

  container.innerHTML = filtered.map(c => {
    const isCredly = c.url.includes('credly.com');
    const imageTag = c.image 
      ? `<img src="${c.image}" alt="${c.name}" class="cred-badge-img" onerror="this.onerror=null; this.src='${c.remote_image || ''}'" />`
      : `<span style="font-size: 2rem;">${c.icon || '🏅'}</span>`;

    return `
      <div class="credential-card" data-tilt>
        <div class="cred-card-top">
          <div class="cred-badge-img-wrap">
            ${imageTag}
          </div>
          <div class="cred-meta-block">
            <span class="cred-issuer">${c.issuer}</span>
            <h4 class="cred-title">${c.name}</h4>
          </div>
        </div>
        ${c.skills && c.skills.length ? `
          <div class="cred-skills-row">
            ${c.skills.slice(0, 3).map(s => `<span class="cred-skill-pill">${s}</span>`).join('')}
          </div>
        ` : ''}
        <div class="cred-info-row">
          <span>${c.issued_at}</span>
          <a href="${c.url}" target="_blank" rel="noopener" class="cred-link-btn" onclick="window.soundEngine?.playClick()">
            ${isCredly ? 'View Credential' : 'View Certificate'}
          </a>
        </div>
      </div>
    `;
  }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderCredentials();

  document.querySelectorAll('.cred-filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cred-filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      window.soundEngine?.playClick();
      const filter = btn.getAttribute('data-filter') || 'all';
      renderCredentials(filter);
    });
  });
});
