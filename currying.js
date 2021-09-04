//Problem
/*
uses currying on add function so it add parameters x, y, and z.
*/
//
////Solution
function add(x) {
    return function (y) {
        return function (z)  {
            return x + y + z
        }
    }
}
console.log(add(10)(20)(30));
//return : 60
