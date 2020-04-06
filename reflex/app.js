const card = document.querySelector('#card');
const result = document.querySelector('#result');
let startTime = 0;

card.addEventListener('mousedown', startTest);
card.addEventListener('mouseup', endTest);

function startTest() {
  console.log('start');
  card.classList.add('yellow');
  card.classList.remove('green');
  randomChange();
}

function randomChange() {
  let interval = (Math.random() * (8 - 2) + 2) * 1000;
  console.log(interval);
  setTimeout(reflex, interval);
}

function reflex() {
  startTime = Date.now();
  card.classList.add('red');
  card.classList.remove('yellow');
  console.log(Date.now());
  return false;
}

function endTest() {
  if (startTime !== 0) {
    let endTime = Date.now();
    let reflexTime = endTime - startTime;
    result.innerHTML = `You finished in ${reflexTime}.`;
  } else {
    result.innerHTML = 'Too Soon!';
  }
  console.log('Test Over');
}
