/* ==========================================================================
   SHIVA GANESH PORTFOLIO - SYNTHESIZED WEB AUDIO ENGINE
   Zero external audio dependencies, pure Web Audio API oscillator synthesis
   ========================================================================== */

class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = localStorage.getItem('sg_sound_enabled') === 'true';
    this.gainNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.gainNode = this.ctx.createGain();
        this.gainNode.gain.value = 0.15; // Pleasant subtle volume
        this.gainNode.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem('sg_sound_enabled', this.enabled);
    if (this.enabled) {
      this.init();
      this.playChirp(600, 1200, 0.08);
    }
    return this.enabled;
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.03);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch (e) {}
  }

  playChirp(startFreq = 400, endFreq = 900, duration = 0.08) {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(startFreq, now);
      osc.frequency.exponentialRampToValueAtTime(endFreq, now + duration);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

      osc.connect(gain);
      gain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {}
  }

  playKeypress() {
    if (!this.enabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      const freq = 1200 + Math.random() * 400;
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.02);

      osc.connect(gain);
      gain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + 0.02);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = now + idx * 0.06;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);

        gain.gain.setValueAtTime(0.08, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.12);

        osc.connect(gain);
        gain.connect(this.gainNode);

        osc.start(t);
        osc.stop(t + 0.12);
      });
    } catch (e) {}
  }
}

window.soundEngine = new AudioEngine();
