const fibonacci = function(seqNumber) {
  seqNumber = Number(seqNumber)

  if (seqNumber === 0){
    return 0;
  } else if (seqNumber < 0){
    return "OOPS";
  } else if (seqNumber === 1) {
    return 1;
  } else {
    let firstNumber = 0;
    let secondNumber = 1;
    let sum;

    for (let i = 2; i <= seqNumber; i++) {
      sum = firstNumber + secondNumber;
      firstNumber = secondNumber;
      secondNumber = sum;
    }
      return sum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
