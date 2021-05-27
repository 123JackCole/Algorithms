/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {

    if (x === 0) {
      return 0;
    }
    
    let temp = x;
    let returnNum;
    let currentNum;
    
    while (temp) {
      if (temp < 0) {
        temp *= -1;
      }
      currentNum = temp % 10;
      if (returnNum === undefined) {
        returnNum = currentNum;
      } else {
        returnNum = returnNum * 10 + currentNum;
      }
      
      temp = Math.floor(temp / 10);
    }

    if (returnNum < 2147483647) {
      if (x < 0) {
        returnNum *= -1;
      }
        return returnNum;   
    } else {
      return 0;
    }
    
};