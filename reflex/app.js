const card = document.querySelector('#card');
const result = document.querySelector('#result');
const resetButton = document.querySelector('#reset-button');

let startTime = 0;

card.addEventListener('mousedown', startTest);
card.addEventListener('mouseup', endTest);

function startTest() {
  card.classList.add('yellow');
  card.classList.remove('green');
  randomChange();
}

function randomChange() {
  let interval = (Math.random() * (8 - 2) + 2) * 1000;
  setTimeout(reflex, interval);
}

function reflex() {
  startTime = Date.now();
  card.classList.add('red');
  card.classList.remove('yellow');
}

function endTest() {
  if (startTime !== 0) {
    let endTime = Date.now();
    let reflexTime = endTime - startTime;
    result.innerHTML = `You finished in ${reflexTime} milliseconds.`;
  } else {
    result.innerHTML = 'Too Soon!';
  }
  card.removeEventListener('mousedown', startTest);
  card.removeEventListener('mouseup', endTest);

  resetButton.classList.remove('hiddendiv');
  resetButton.addEventListener('click', reset);
}

function reset() {
  startTime = 0;
  card.addEventListener('mousedown', startTest);
  card.addEventListener('mouseup', endTest);

  result.innerHTML = '';
  resetButton.classList.add('hiddendiv');
  card.classList.add('green');
  card.classList.remove('red');
  card.classList.remove('yellow');
}
