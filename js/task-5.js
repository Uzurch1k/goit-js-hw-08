function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElem = document.querySelector('body');
const colorElem = document.querySelector('.color');
const btnElem = document.querySelector('.change-color');

btnElem.addEventListener('click', onBtnClick);

function onBtnClick() {
  const newColor = getRandomHexColor();
  bodyElem.style.backgroundColor = newColor;
  colorElem.textContent = newColor;
}
