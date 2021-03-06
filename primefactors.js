/**
 * Returns an array of the prime factors for the inputted number
 * @param number The number to analyze
 * @returns {Array}
 */
var projectEulerThree = function(number){
  var factors = [];
  var divider = 2;
  while(number > 1){
    while(number % divider === 0){
      number /= divider;
      factors.push(divider);
    }
    divider += 1;
  }
  return factors;
};