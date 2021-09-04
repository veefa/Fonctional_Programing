//Problem
/*
Use the every method inside the checkPositive function to check if every element in arr is positive.
The function should return a Boolean value.
*/
//
////Soluion
//
function checkPositive(arr) {
  return arr.every(e => e > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5]));
//return : false
