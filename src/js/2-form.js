const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const textareaEl = formEl.querySelector('textarea');

formEl.addEventListener('input', handleInput);

function handleInput(event) {
  const message = textareaEl.value.trim();
  const email = formEl.elements.email.value.trim();
  const data = JSON.stringify({ message, email });
  localStorage.setItem(STORAGE_KEY, data);
}

const dataJsn = localStorage.getItem(STORAGE_KEY) ?? '';
try {
  const dataStorage = JSON.parse(dataJsn);
  if (dataStorage && dataStorage.message && dataStorage.email)
  {
    textareaEl.value = dataStorage.message;
  formEl.elements.email.value = dataStorage.email;}
} catch {
  console.log('no data saved');
}

formEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  const messageTrimmed = textareaEl.value.trim();
  const emailTrimmed = formEl.elements.email.value.trim();
  if (messageTrimmed === '' || emailTrimmed === '') {
    return alert('Заповніть усі поля форми!');
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
