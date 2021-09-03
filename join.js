//Problem
/*
sentence from the words in the string str. 
The function should return a string. For example, I-like-Star-Wars would be converted to I like Star Wars. 
For this challenge, do not use the replace method.
*/
//
////Solution
//
function sentensify(str) {
  let arr = str.split(/\W+/);
  return arr.join(" ");
}
consolle.log(sentensify("May-the-force-be-with-you"));
//return : May the force be with you
