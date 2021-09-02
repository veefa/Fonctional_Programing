//Problem
/*
Write your own Array.prototype.myMap(), which should behave exactly like Array.prototype.map(). 
You should not use the built-in map method. 
The Array instance can be accessed in the myMap method using this
*/
//Solution 1
//using the for loop
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  var newArray = [];
  //loop through each element of the array that passed
  for (let i = 0; i < this.length; i++) {
    //this refers to the array on which myMap is done. this is the array itself
     newArray.push(callback(this[i]));
    //push the result into newArray
  }
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
//return: [46, 130, 196, 10]
////
//Solution 2
//using the forEach()

Array.prototype.myMap = function(callback) {
  var newArray = [];
  this.forEach(arr => newArray.push(callback(arr)));
  return newArray;
};

var new_s = s.myMap(function(item) {
  return item * 2;
});
//return: [46, 130, 196, 10]
