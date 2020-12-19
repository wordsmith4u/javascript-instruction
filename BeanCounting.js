function countBs(str) {
    let total = 0; 
    for (let i = 0; i < str.length; ++i) {
      if (str[i] == "B")
        total ++;
      }
    }
    return total;
 
  
  function countChar(str, char) {
    let total = 0; 
    for (let i = 0; i < str.length; ++i) {
      if (str[i] == char)
        total ++;
    }
  }
    return total;
 
  
  console.log(countBs("BBC"));
  // → 2
  console.log(countChar("Mississippi", "s"));
  // → 4