const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const textareaEl = formEl.querySelector('textarea');

formEl.addEventListener('input', handleInput);

function handleInput(event) {
  event.preventDefault();
  const message = textareaEl.value.trim();
  const email = formEl.elements.email.value.trim();
  const data = JSON.stringify({ message, email });
  localStorage.setItem(STORAGE_KEY, data);
}

const dataJsn = localStorage.getItem(STORAGE_KEY) ?? '';
try {
  const dataStorage = JSON.parse(dataJsn);
  textareaEl.value = dataStorage.message;
  formEl.elements.email.value = dataStorage.email;
} catch {
  console.log('no data saved');
}

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  if (textareaEl.value === '' || formEl.elements.email.value === '') {
    return alert('Fill out all form fields!');
  } else {
    const info = {
      email: formEl.elements.email.value,
      message: textareaEl.value,
    };
    console.log(info);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
  }
}
