document.addEventListener('DOMContentLoaded', () => {
  open_form = document.getElementById('openForm');
  form_popup = document.getElementById('formPopup');
  close_form = document.getElementById('formClose');
  form = document.getElementById('form');
  submit_button = document.getElementById('submit');

  open_form.addEventListener('click', () => {
    form_popup.classList.add('active');
  });
  close_form.addEventListener('click', () => {
    form_popup.classList.remove('active');
  });
  form_popup.addEventListener('click', (event) => {
    if (event.target === form_popup) form_popup.classList.remove('active');
  });

  phoneRegex = /^[0-9+\-\s()]{7,20}$/;
  emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  textRegex = /^[A-Za-zА-Яа-яЁё0-9\s.,!?()"-]+$/;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    email = form.email.value.trim();
    phone = form.mobile.value.trim();
    message = form.message.value.trim();

    if (!emailRegex.test(email)) {
      alert('Неправильный email');
      form.email.focus();
      return;
    }
    if (!phoneRegex.test(phone)) {
      alert('Неправильный номер телефона');
      form.phone.focus();
      return;
    }
    if (!textRegex.test(message)) {
      alert('Русский + английский + знаки препинания');
      form.message.focus();
      return;
    }

    submit_button.textContent = 'sending...';
    submit_button.disabled = true;
    submit_button.style.cursor = 'wait';
    data = {phone, email, message};

    try {
      response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error(`Ошибка ${response.status}`);

      submit_button.textContent = 'Sent!';
      submit_button.style.background = '#55C47B';
      submit_button.style.cursor = 'default';
    } catch (err) {
      console.error(err);
      alert('Ошибка при отправке');
      submit_button.textContent = 'Send';
      submit_button.disabled = false;
      submit_button.style.cursor = 'pointer';
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      form_popup.classList.remove('active');
    }
  });
});