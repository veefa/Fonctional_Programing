//Problem
/*
Use the some method inside the checkPositive function to check if any element in arr is positive. The function should return a Boolean value
*/
//
////Solution
//function checkPositive(arr) {
  return arr.some(e => e > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));
//return : true
