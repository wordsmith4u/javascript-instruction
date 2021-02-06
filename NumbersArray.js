/*
Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

Examples
[[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]] ➞ [7, 90, 2]
[[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]] ➞ [-34, -2, 7]
[[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]] ➞ [0.7634, 9.32, 9]

Notes
-Watch out for negative integers.
*/


function findLargestNums(arr){
    var result = [];
  
    arr.map(function(obj){
      result.push(Math.max.apply(null, obj));
    });
    
    return result;
  }

  var theArray = [[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]];
findLargestNums(theArray);