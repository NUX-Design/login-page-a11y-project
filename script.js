const form = document.querySelector('#login-form');
const message = document.querySelector('#form-message');

// Intentionally simple starter behavior for the initial project version.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'เข้าสู่ระบบไม่สำเร็จ';
});
