document.addEventListener('DOMContentLoaded', () => {
  function two(n) {
    return n.toString().padStart(2, '0');
  }
  function updateTimer() {
    now  = new Date();
    diff = target - now;
    d = Math.floor(diff / (1000 * 60 * 60 * 24));
    h  = Math.floor((diff / (1000 * 60 * 60)) % 24);
    m = Math.floor((diff / (1000 * 60)) % 60);
    s = Math.floor((diff / 1000) % 60);
    timer.textContent = `${d}д ${two(h)}ч ${two(m)}м ${two(s)}с`;
  }
  timer = document.getElementById('timer');
  target = new Date('2026-05-26T00:00:00');
  intervalId = setInterval(updateTimer, 1000);
  updateTimer();
});