const convertToCelsius = function(degreesFahrenheit) {
  return Number.parseFloat(((degreesFahrenheit - 32) * (5/9)).toFixed(1));
};

const convertToFahrenheit = function(degreesCelsius) {
  return Number.parseFloat((degreesCelsius * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
