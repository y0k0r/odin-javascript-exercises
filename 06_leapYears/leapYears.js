const leapYears = function(year) {
  if (year % 400 === 0) {
      return true
  } else if (year % 4 === 0 && year % 100 !== 0) {
      return true
  } else {
      return false
  }  
};
leapYears(700)
// Do not edit below this line
module.exports = leapYears;
