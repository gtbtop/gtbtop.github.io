document.addEventListener('DOMContentLoaded', () => {
  header = document.getElementById('top');
  window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
});