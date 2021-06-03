/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 const convert = (s, numRows) => {

    const length = s.length;
    
    const map = {}
    for (let i = 0; i < numRows; i++) {
        map[i] = ""
    }
    
    let counter = 0;
    
    while(counter < s.length) {
        // add in straight line down
        for (let i = 0; i < numRows; i++) {
            map[i] += s[counter];
            counter++;
            if (counter === s.length) break;
        }
        if (counter === s.length) break;
        // add in diagonal line up
        for (let i = numRows - 2; i > 0; i--) {
            map[i] += s[counter];
            counter++;
            if (counter === s.length) break;
        }
    }
    
    // merge the strings together
    
    let finalString = "";
    
    for (let i = 0; i < numRows; i++) {
        finalString += map[i];
    }
    
    return finalString;
    
};