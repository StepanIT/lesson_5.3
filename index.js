'use strict';


const addLineToList = (text) => {
  const lineList = document.querySelector('.line-list');
  const newLine = document.createElement('li');
  newLine.textContent = text;
  lineList.appendChild(newLine);
};

const removeLastLine = () => {
  const lineList = document.querySelector('.line-list');
  if (lineList.lastChild) {
    lineList.removeChild(lineList.lastChild);
  }
};


const clearList = () => {
  const lineList = document.querySelector('.line-list');
  lineList.innerHTML = '';
};


const checkLine = (input) => {
  input = input.trim();

  if (!input) {
    return;
  }

  if (input.toLowerCase() === 'del') {
    removeLastLine();
  } else if (input.toLowerCase() === 'clear') {
    clearList();
  } else {
    addLineToList(input);
  }
};


const userLine = () => {
  while (true) {
    const userChoise =
     prompt(`Введите любую фразу 
(del-удалить последнюю строку, clear-очистить список,
exit-выход из программы)`);
    if (userChoise === null || userChoise.toLowerCase() === 'exit') {
      break;
    }
    checkLine(userChoise);
  }
};

userLine();


