/* ==========================================================================
   SHIVA GANESH PORTFOLIO - INTERACTIVE ENTERPRISE IAM STUDIO
   Interactive protocol visualizer, Conditional Access simulator, and PAM workflows
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // Tab Switcher between SSO Flow, Conditional Access, and PAM Architecture
  const iamNavBtns = document.querySelectorAll('.iam-nav-btn');
  iamNavBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      iamNavBtns.forEach(b => b.classList.remove('active'));
      document.querySelectorAll('.iam-display-view').forEach(v => v.classList.remove('active'));

      btn.classList.add('active');
      window.soundEngine?.playClick();
      const viewId = btn.getAttribute('data-view');
      const targetView = document.getElementById(viewId);
      if (targetView) targetView.classList.add('active');
    });
  });

  // Conditional Access Simulator Logic
  const riskSelect = document.getElementById('ca-risk-select');
  const deviceSelect = document.getElementById('ca-device-select');
  const locationSelect = document.getElementById('ca-location-select');
  const decisionTag = document.getElementById('ca-decision-tag');
  const decisionDesc = document.getElementById('ca-decision-desc');
  const decisionBox = document.getElementById('ca-decision-box');

  function evaluateConditionalAccess() {
    if (!riskSelect || !deviceSelect || !locationSelect || !decisionTag) return;

    const risk = riskSelect.value;
    const device = deviceSelect.value;
    const location = locationSelect.value;

    window.soundEngine?.playClick();

    if (risk === 'high' || (location === 'untrusted' && risk === 'medium')) {
      decisionTag.textContent = '❌ ACCESS BLOCKED (Zero-Trust Triggered)';
      decisionTag.style.color = '#ff5f56';
      decisionBox.style.borderColor = 'rgba(255, 95, 86, 0.4)';
      decisionDesc.textContent = 'High sign-in risk or untrusted anomaly detected. Identity protection triggers an immediate session block. Self-service password reset & credential revocation required.';
    } else if (risk === 'medium' || device === 'unmanaged' || location === 'untrusted') {
      decisionTag.textContent = '⚠️ GRANT WITH MFA & APP PROTECTION';
      decisionTag.style.color = '#f59e0b';
      decisionBox.style.borderColor = 'rgba(245, 158, 11, 0.4)';
      decisionDesc.textContent = 'Device is unmanaged or location is outside corporate fencing. Policy mandates Entra ID Phishing-Resistant MFA (FIDO2 / Number Matching) and session sign-in frequency of 1 hour.';
    } else {
      decisionTag.textContent = '✅ SEAMLESS SINGLE SIGN-ON GRANTED';
      decisionTag.style.color = 'var(--accent-emerald)';
      decisionBox.style.borderColor = 'rgba(0, 245, 160, 0.4)';
      decisionDesc.textContent = 'Compliant Entra-joined device within trusted corporate perimeter with low risk. Seamless SSO token issued with standard 8-hour refresh window.';
    }
  }

  [riskSelect, deviceSelect, locationSelect].forEach(select => {
    if (select) select.addEventListener('change', evaluateConditionalAccess);
  });
});

window.runSsoSimulation = function() {
  const steps = [
    { text: "1. User requests target SaaS application.", node: "node-user" },
    { text: "2. App redirects with signed SAML/OIDC Auth Request to Entra ID.", node: "node-app" },
    { text: "3. Entra ID / Okta evaluates user credentials & Conditional Access.", node: "node-idp" },
    { text: "4. Cryptographic JWT / SAML Assertion issued with claims.", node: "node-idp" },
    { text: "5. Gateway / App validates signature and grants authorized session.", node: "node-gateway" }
  ];

  const statusText = document.getElementById('sso-simulation-status');
  if (!statusText) return;

  window.soundEngine?.playChirp(500, 1000, 0.1);
  let currentStep = 0;

  function nextStep() {
    if (currentStep < steps.length) {
      statusText.innerHTML = `<strong>${steps[currentStep].text}</strong>`;
      window.soundEngine?.playKeypress();
      currentStep++;
      setTimeout(nextStep, 1000);
    } else {
      statusText.innerHTML = `<span style="color: var(--accent-emerald);">✔ Authentication & Token Validation Complete!</span>`;
      window.soundEngine?.playSuccess();
    }
  }

  nextStep();
};
