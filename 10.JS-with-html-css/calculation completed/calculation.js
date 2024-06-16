let calculation = JSON.parse(localStorage.getItem('calculation')) || '';
console.log(calculation);

displayResult();

function clearBtn() {
  calculation = '';
  displayResult();
  localStorage.setItem('calculation', calculation);
}

function displayResult() {
  document.querySelector('.js-result').innerHTML = calculation;
}

function updateCalculation(param) {
  calculation += param;

  displayResult();

  localStorage.setItem('calculation', JSON.stringify(calculation));
}

// note: in this case, the calculation itself is strings already. therefore no need to convert it to string.

// note2: should create a function in order to reuse this code in the future.

function saveToStorage() {
  localStorage.setItem('calculation', calculation);
}
