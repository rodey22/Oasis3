document.getElementById("convert-btn").addEventListener("click", function () {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  let result;

  if (isNaN(temperature)) {
    result = "Please enter a valid number.";
  } else {
    if (unit === "Celsius") {
      const toFahrenheit = (temperature * 9) / 5 + 32;
      const toKelvin = temperature + 273.15;
      result = `${temperature} °C = ${toFahrenheit.toFixed(
        2
      )} °F, ${toKelvin.toFixed(2)} K`;
    } else if (unit === "Fahrenheit") {
      const toCelsius = ((temperature - 32) * 5) / 9;
      const toKelvin = toCelsius + 273.15;
      result = `${temperature} °F = ${toCelsius.toFixed(
        2
      )} °C, ${toKelvin.toFixed(2)} K`;
    } else if (unit === "Kelvin") {
      const toCelsius = temperature - 273.15;
      const toFahrenheit = (toCelsius * 9) / 5 + 32;
      result = `${temperature} K = ${toCelsius.toFixed(
        2
      )} °C, ${toFahrenheit.toFixed(2)} °F`;
    }
  }

  document.getElementById("result").textContent = result;
});
