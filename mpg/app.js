const miles = document.querySelector('#miles');
const gallons = document.querySelector('#gallons');
const submit = document.getElementById('mpg-form');

const mpgField = document.querySelector('#mpg-field');

// Listen for submit
submit.addEventListener('submit', function (e) {
  calc();
  e.preventDefault();
});

// Calculate MPG

// Determine if fields are empty
let calc = function () {
  if (miles.value == '') {
    alert('Please enter a value');
  } else {
    let mpg = parseFloat(miles.value / gallons.value).toFixed(2);
    console.log(mpg);

    // Insert into DOM
    mpgField.classList.add('scale-in');
    mpgField.innerHTML = `${mpg} miles per gallon`;
  }
};
