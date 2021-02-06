/*
Given a number n, write a function that returns PI to n decimal places.

Examples
5 ➞ 3.14159
4 ➞ 3.1416
15 ➞ 3.141592653589793

Notes
- n will not be above 15, to keep this challenge simple.
- Round up the last digit if the next digit in PI is greater or equal to 5 (see the second example above).
- The return value must be a decimel - not a string.
*/

function mypi(n){
    var pi = Math.PI;
    var result = parseFloat(pi.toFixed(n));
    console.log(typeof result);
  }
  
  mypi(4);