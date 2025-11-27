const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b ;
};

const sum = function(array) {
	let sumArray = 0;
  for(let i in array)
  {
    sumArray += array[i];
  }
  return sumArray;
};

const multiply = function(array) {
  let multiplyArray = 1;
  for(let i in array)
  {
    multiplyArray *= array[i];
  }
  return multiplyArray;
};

const power = function(base, exponent) {
	let result = 1;
  for(let i = 1; i <= exponent; i++){
    result *= base;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  if (num === 0)
    return 1;
  else if (num === 1)
    return 1;
  else{
    for (let i = 1; i <= num; i++){
      result *= i;
    }
    return result;
  }
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
