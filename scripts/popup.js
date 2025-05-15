document.addEventListener('DOMContentLoaded', () => {
  notification = document.getElementById('notification');
  closen = document.getElementById('closePopup');
  storageKey = '30secnotification';
  function showPopup() {
    notification.classList.add('active');
  }
  function closePopup() {
    notification.classList.remove('active');
    localStorage.setItem(storageKey, 'true');
  }
  if (!localStorage.getItem(storageKey)) {
    setTimeout(showPopup, 30000);
  }
  closen.addEventListener('click', closePopup);
  notification.addEventListener('click', (event) => {
    if (event.target === notification) closePopup();
  });
});
