document.addEventListener('DOMContentLoaded', () => {
 imageList = [
    'resources/Maskgroup.webp',
    'resources/placeholder1.webp',
    'resources/placeholder3.webp',
    'resources/placeholder2.webp'
  ];
  preview = document.getElementById('preview');
  gallery = document.getElementById('gallery');
  image = document.getElementById('popupImage');
  closeb = document.getElementById('popupClose');
  left = document.getElementById('arrowLeft');
  right = document.getElementById('arrowRight');

  let current = 0;
  function UpdateArrows() {
    if (current === 0) {
      left.style.display = 'none';
    } else {
      left.style.display = 'block';
    }
    if (current === imageList.length - 1) {
      right.style.display = 'none';
    } else {
      right.style.display = 'block';
    }
  }

  function ShowImage(index) {
    current = index;
    image.src = imageList[index];
    gallery.classList.add('active');
    UpdateArrows();
  }
  function CloseGallery() {
    gallery.classList.remove('active');
  }

  preview.addEventListener('click', () => ShowImage(0));

  closeb.addEventListener('click', CloseGallery);
  gallery.addEventListener('click', event => {
    if (event.target === gallery) CloseGallery();
  });

  left.addEventListener('click',  () => {
    if (current > 0) {
      ShowImage(current - 1);
    }
  });
  right.addEventListener('click', () => {
    if (current < imageList.length-1) {
      ShowImage(current + 1);
    }
  });

  document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    if (current > 0) {
      ShowImage(current - 1);
    }
  } else if (event.key === 'ArrowRight') {
    if (current < imageList.length - 1) {
      ShowImage(current + 1);
    }
  } else if (event.key === 'Escape') {
    CloseGallery();
  }
  });
});