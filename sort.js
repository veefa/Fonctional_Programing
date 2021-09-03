//Problem
/*
sort the elements of an array in ascending order. The function should return a new array, and not mutate the globalArray variable
*/
//
////Solution
//
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  let sortedArr = [];
  //to avoid mutating the original array we concatenate an empty array to the one being sorted (concat return a new array), then run the sort method
 
  return sortedArr.concat(arr).sort((a,b) => a - b);

}
console.log(nonMutatingSort(globalArray));
// reurn : [2, 3, 5, 6, 9]
