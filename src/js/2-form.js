const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
const textareaEl = formEl.querySelector('textarea');
const btnEl = formEl.querySelector('button');

formEl.addEventListener('input', handleInput);

function handleInput(event) {
  event.preventDefault();
  const text = textareaEl.value;
  const email = formEl.elements.email.value;
  const data = JSON.stringify({ text, email });
  console.log(data);
  localStorage.setItem(STORAGE_KEY, data);
}

const dataJsn = localStorage.getItem(STORAGE_KEY) ?? '';
try {
  const dataStorage = JSON.parse(dataJsn);
  textareaEl.value = dataStorage.text;
  formEl.elements.email.value = dataStorage.email;
} catch {
  console.log('no data saved');
}

btnEl.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  const info = {
    email: formEl.elements.email.value,
    message: textareaEl.value,
  };

  event.currentTarget.reset();
  console.log(info);
}
