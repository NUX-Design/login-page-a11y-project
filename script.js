const form = document.querySelector('#login-form');
const message = document.querySelector('#form-message');

// Intentionally simple starter behavior. Students should improve the form
// semantics and error communication with help from A11Y.md.
form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'เข้าสู่ระบบไม่สำเร็จ';
});
