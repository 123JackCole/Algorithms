/**
 * @param {number} num
 * @return {string}
 */
 const intToRoman = (num) => {

    const map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M"
    };
    
    const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let string = "";
    
    for (let i = 0; num; i++) {
        while (num >= values[i]) {
        
            string += roman[i];
            num -= values[i];
            
        }
    }
    
    return string;
    
};