const guessField = document.querySelector('#guess');
const submit = document.querySelector('#btn');
let prev = document.querySelector('#prevGuesses');
let guessNum = 1;
const last = document.querySelector('#lastResult');

let rand = Math.floor(Math.random() * 100) + 1;

guessField.focus();

function trackGuesses() {
	let guess = Number(guessField.value);

	if (guessField.value === '' || guess === 0) {
		alert('Please fill in a number between 1 and 100!');
		return;
	} else {
		if (guessNum === 1) {
			prev.textContent = 'Previous Guesses: ';
		}
		prev.textContent += guess + ' ';

		if (rand === guess) {
			last.textContent = 'Congrats! You got it right!';
			last.style.backgroundColor = 'green';
			endGame();
		} else if (guess > rand) {
			guessField.value = '';
			guessField.focus();

			last.textContent = 'Wrong! Too high!';
			last.style.backgroundColor = 'red';
		} else {
			guessField.value = '';
			guessField.focus();

			last.textContent = 'Wrong! Too low!';
			last.style.backgroundColor = 'red';
		}

		if (guessNum >= 10) {
			endGame();
		} else {
			guessNum++;
		}
	}
}

function endGame() {
	guessField.disabled = true;
	submit.disabled = true;
	const resetButton = document.createElement('button');
	resetButton.textContent = 'Start a new game';
	document.body.appendChild(resetButton);
	resetButton.addEventListener('click', reset);
}

function reset() {
	prev.textContent = '';
	guessNum = 1;
	last.textContent = '';
	last.style.backgroundColor = 'white';

	guessField.disabled = false;
	guessField.value = '';
	guessField.focus();
	submit.disabled = false;

	resetButton.parentNode.removeChild(resetButton);

	rand = Math.floor(Math.random() * 100) + 1;
}

submit.addEventListener('click', trackGuesses);
