const sumAll = function(numberOne, numberTwo) {
  let sum = 0;
  if (numberOne < 0 || 
      numberTwo < 0 ||
      !Number.isInteger(numberOne) ||
      !Number.isInteger(numberTwo)) {
      return "ERROR";
  } else if (numberOne < numberTwo) {
      for (; numberOne <= numberTwo; numberOne++) {
        sum += numberOne;
      }
  } else {
      for (; numberOne >= numberTwo; numberOne--) {
        sum += numberOne
      }
  }
  return sum;
};

sumAll(2,4);
// Do not edit below this line
module.exports = sumAll;
