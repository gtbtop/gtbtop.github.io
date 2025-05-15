document.addEventListener('DOMContentLoaded', () => {
  arrow = document.getElementById('arrowSvg');
  wrapper = document.getElementById('arrow-wrapper')
  path = arrow.querySelector('path');
  turn = document.getElementById('magic');
  let offset = 0;
  let visible = false;

  turn.addEventListener('click', () => {
    visible = !visible;
    wrapper.style.display = visible ? 'block' : 'none';
  });

  window.addEventListener('scroll', () => {
    maxScroll = document.body.scrollHeight - window.innerHeight;
    ratio = Math.min(window.scrollY / maxScroll, 1);
    rr = Math.floor(255 * (1 - ratio));
    gg = 38;
    bb = Math.floor(255 * ratio);
    newcolor = `rgb(${rr},${gg},${bb})`;

    path.setAttribute('fill', newcolor);
  });

  document.addEventListener('mousemove', (event) => {
    arrowBox = arrow.getBoundingClientRect();
    centerX = arrowBox.left + arrowBox.width / 2;
    centerY = arrowBox.top + arrowBox.height / 2;
    dx = event.clientX - centerX;
    dy = event.clientY - centerY;
    angle = Math.atan2(dy, dx) * (180 / Math.PI);
    arrow.dataset.angle = angle;
    updateTransform();
  });

  function updateTransform() {
    angle = parseFloat(arrow.dataset.angle) || 0;
    arrow.style.transform = `translateX(${offset}px) rotate(${angle}deg)`;
  }
});
