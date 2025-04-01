const reverseString = function(string) {
  let stringAsArray = [];
  let reversedString = ""

  // loop through string and input into an array
  for (const letter of string){
     stringAsArray.push(letter);
  }

  let reversedArray= stringAsArray.reverse();
  for (letter of reversedArray){
    reversedString += letter;
}
  return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
