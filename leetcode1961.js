/**
 * @param {string} s
 * @param {string[]} words
 * @return {boolean}
 */
 const isPrefixString = (s, words) => {
    
    let currWords = "";
    
    while (words.length) {
        currWords += words.shift();
        if (currWords === s) return true;
    }
    
    return false;
    
};