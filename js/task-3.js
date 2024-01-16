const inputElem = document.querySelector('#name-input');
const titleName = document.querySelector('#name-output');

inputElem.addEventListener('input', onInputChange);

function onInputChange() {
  const inputText = inputElem.value.trim();

  titleName.textContent = inputText === '' ? 'Anonymous' : inputText;
}
