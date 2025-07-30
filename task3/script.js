function convertTemp() {
  const input = document.getElementById('tempInput').value;
  const unit = document.querySelector('input[name="unit"]:checked').value;
  const result = document.getElementById('result');

  if (input === '' || isNaN(input)) {
    result.textContent = "Please enter a valid number!";
    return;
  }

  const temp = parseFloat(input);
  let converted, output;

  if (unit === 'Celsius') {
    converted = (temp * 9/5) + 32;
    output = `${converted.toFixed(2)} °F`;
  } else {
    converted = (temp - 32) * 5/9;
    output = `${converted.toFixed(2)} °C`;
  }

  result.textContent = `Converted Temperature: ${output}`;
}