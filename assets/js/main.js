// NiPlex Harness V1 — minimal JS

// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => {
    links.classList.toggle('open');
  });
}

// Agent Ready copy button
const copyBtn = document.getElementById('copy-btn');
const promptEl = document.getElementById('agent-prompt');
const statusEl = document.getElementById('copy-status');

if (copyBtn && promptEl) {
  copyBtn.addEventListener('click', async () => {
    const text = promptEl.textContent;
    try {
      await navigator.clipboard.writeText(text);
      if (statusEl) {
        statusEl.hidden = false;
        setTimeout(() => { statusEl.hidden = true; }, 2000);
      }
      copyBtn.textContent = 'Copied!';
      setTimeout(() => { copyBtn.textContent = 'Copy Prompt'; }, 2000);
    } catch (e) {
      // fallback
      const range = document.createRange();
      range.selectNodeContents(promptEl);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
      document.execCommand('copy');
      sel.removeAllRanges();
      if (statusEl) {
        statusEl.hidden = false;
        setTimeout(() => { statusEl.hidden = true; }, 2000);
      }
    }
  });
}