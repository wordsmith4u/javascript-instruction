/*
Christmas Eve is almost upon us, so naturally we need to prepare some milk and cookies for Santa!

Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

Examples:
Date( 2013, 11, 24 ) ➞ true
Date( 2013, 0, 23 ) ➞ false
Date( 3000, 11, 24 ) ➞ true

Notes
- Dates in JavaScript are zero based, otherwise you can assume dates will always be valid.
*/

let xmasEve = new Date(2020, 11, 24);

function timeForMilkAndCookies(date){
  let day = date.getDate();
  let month = date.getMonth();
  
  if (day == 24 && month == 11){
    return true;
  } else {
    return false;
  }
}

timeForMilkAndCookies(xmasEve);
