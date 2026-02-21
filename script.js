const form = document.querySelector('form')
// this usecase will give you empty value 
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault()// Prevent actual submission (optional)

const height = parseInt(document.querySelector('#height').value)
const weight = parseInt(document.querySelector('#weight').value)
const results = document.querySelector('#results');

if(height === '' || height < 0 || isNaN(height)) {
  results.innerHTML = `Please enter valid values for height ${height}.`;
}
else if(weight === '' || weight < 0 || isNaN(weight)) {
  results.innerHTML = `Please enter valid values for weight ${weight}.`;
}
else {
  const BMI = (weight / ((height*height) / 10000)).toFixed(2);
  // SHOW THE RESULT
  results.innerHTML = `<span> Your BMI is ${BMI}</span>`;

  if (BMI < 18.5) {
    results.innerHTML += `<span> You are underweight</span>`;
  }
  else if (BMI >= 18.5 && BMI < 24.9) {
    results.innerHTML += `<span> You are normal weight</span>`;
  }
  else if (BMI >= 25 && BMI < 29.9) {
    results.innerHTML += `<span> You are overweight</span>`;
  }
  else {
    results.innerHTML += `<span> You are obese</span>`;
  }

}
});