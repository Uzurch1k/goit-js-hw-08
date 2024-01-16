function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input[type="number"]');
numberInput.value = 0;

const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');

const boxesElem = document.querySelector('#boxes');

createBtn.addEventListener('click', onBtnCreate);

function onBtnCreate() {
  const currentValue = Number(numberInput.value);

  if (1 <= currentValue && 100 >= currentValue) {
    boxesElem.innerHTML = '';
    boxesElem.style.padding = '32px';
    createBoxes(currentValue);
    numberInput.value = 0;
  } else {
    // alert('The number must be between 1 and 100! Please try again :)');
    numberInput.value = 0;
    return;
  }
}

function createBoxes(amount) {
  let boxesHtml = [];

  for (let i = 0; i < amount; i++) {
    boxesHtml.push(
      `<div style="width: ${30 + 10 * i}px; height: ${
        30 + 10 * i
      }px; background-color: ${getRandomHexColor()}"></div>`
    );
  }

  boxesElem.innerHTML = boxesHtml.join('');
}

destroyBtn.addEventListener('click', onBtnDestroy);

function onBtnDestroy() {
  destroyBoxes();
}

function destroyBoxes() {
  boxesElem.innerHTML = '';
  boxesElem.style.padding = '0';
}
