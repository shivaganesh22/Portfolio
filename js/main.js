/* ==========================================================================
   SHIVA GANESH PORTFOLIO - CORE LOGIC & INTERACTION ENGINE
   Canvas particles, decipher matrix animation, stats counter, 3D tilt
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  initDecipherAnimation();
  initStatsCounter();
  init3DTilt();
  initNavScroll();
  initSoundToggle();
  initMobileNav();
});

/* ==========================================================================
   1. INTERACTIVE CANVAS PARTICLE CONSTELLATION
   ========================================================================== */
function initParticleCanvas() {
  const canvas = document.getElementById('bg-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];
  const mouse = { x: -1000, y: -1000, radius: 150 };

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  const particleCount = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 18000), 70);

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(0, 242, 254, ' : 'rgba(157, 78, 221, '
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse proximity interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x -= (dx / dist) * force * 2.5;
        p.y -= (dy / dist) * force * 2.5;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.shadowBlur = 8;
      ctx.shadowColor = p.color + '0.8)';
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist2 < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const opacity = (1 - dist2 / 120) * 0.22;
          ctx.strokeStyle = `rgba(0, 242, 254, ${opacity})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

/* ==========================================================================
   2. TEXT DECIPHER SCRAMBLE ANIMATION
   ========================================================================== */
function initDecipherAnimation() {
  const el = document.getElementById('role-decipher-text');
  if (!el) return;

  const roles = [
    "Offensive Security & Reverse Engineering",
    "Enterprise IAM & Identity Security",
    "Multi-Platform Software Developer",
    "Python, Django & Cloud Systems",
    "Android TV & Flutter Mobile Engineer"
  ];

  const chars = "!<>-_\\/[]{}—=+*^?#01";
  let roleIdx = 0;
  let frame = 0;
  let queue = [];
  let isResolving = true;

  function setRole(targetText) {
    queue = [];
    for (let i = 0; i < targetText.length; i++) {
      const from = el.textContent[i] || '';
      const to = targetText[i];
      const start = Math.floor(Math.random() * 25);
      const end = start + Math.floor(Math.random() * 25);
      queue.push({ from, to, start, end, char: '' });
    }
    frame = 0;
    update();
  }

  function update() {
    let output = '';
    let complete = 0;

    for (let i = 0; i < queue.length; i++) {
      let { from, to, start, end, char } = queue[i];
      if (frame >= end) {
        complete++;
        output += to;
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = chars[Math.floor(Math.random() * chars.length)];
          queue[i].char = char;
        }
        output += `<span style="color: var(--accent-cyan);">${char}</span>`;
      } else {
        output += from;
      }
    }

    el.innerHTML = output;

    if (complete === queue.length) {
      setTimeout(() => {
        roleIdx = (roleIdx + 1) % roles.length;
        setRole(roles[roleIdx]);
      }, 2800);
    } else {
      frame++;
      requestAnimationFrame(update);
    }
  }

  setRole(roles[0]);
}

/* ==========================================================================
   3. ANIMATED STATS COUNTER
   ========================================================================== */
function initStatsCounter() {
  const statElements = document.querySelectorAll('[data-target]');
  if (!statElements.length) return;

  let hasAnimated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statElements.forEach(el => {
          const target = parseFloat(el.getAttribute('data-target'));
          const isDecimal = el.getAttribute('data-decimal') === 'true';
          const duration = 1800;
          const startTime = performance.now();

          function updateNum(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const currentVal = easeOut * target;

            el.textContent = isDecimal ? currentVal.toFixed(2) : Math.floor(currentVal);

            if (progress < 1) {
              requestAnimationFrame(updateNum);
            } else {
              el.textContent = isDecimal ? target.toFixed(2) : target;
            }
          }

          requestAnimationFrame(updateNum);
        });
      }
    });
  }, { threshold: 0.3 });

  const heroStats = document.querySelector('.hero-stats-grid');
  if (heroStats) observer.observe(heroStats);
}

/* ==========================================================================
   4. 3D CARD TILT EFFECT
   ========================================================================== */
function init3DTilt() {
  const cards = document.querySelectorAll('[data-tilt]');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -7;
      const rotateY = ((x - centerX) / centerX) * 7;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
  });
}

/* ==========================================================================
   5. NAVIGATION SCROLL & ACTIVE LINK SPY
   ========================================================================== */
function initNavScroll() {
  const nav = document.getElementById('site-navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }

    let currentSection = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentSection = sec.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   6. SOUND TOGGLE BUTTON
   ========================================================================== */
function initSoundToggle() {
  const btn = document.getElementById('sound-toggle');
  if (!btn) return;

  function updateIcon(enabled) {
    if (enabled) {
      btn.classList.add('active');
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
      `;
      btn.setAttribute('title', 'Sound Effects: ON (Click to Mute)');
    } else {
      btn.classList.remove('active');
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <line x1="23" y1="9" x2="17" y2="15"></line>
          <line x1="17" y1="9" x2="23" y2="15"></line>
        </svg>
      `;
      btn.setAttribute('title', 'Sound Effects: MUTED (Click to Enable)');
    }
  }

  updateIcon(window.soundEngine.enabled);

  btn.addEventListener('click', () => {
    const isEnabled = window.soundEngine.toggle();
    updateIcon(isEnabled);
  });
}

/* ==========================================================================
   7. MOBILE NAVIGATION DRAWER
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const linksWrap = document.getElementById('nav-links-wrap');

  if (!toggle || !linksWrap) return;

  toggle.addEventListener('click', () => {
    window.soundEngine?.playClick();
    linksWrap.classList.toggle('open');
  });

  linksWrap.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      linksWrap.classList.remove('open');
    });
  });
}
