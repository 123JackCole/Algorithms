// https://leetcode.com/contest/weekly-contest-215/problems/design-an-ordered-stream/




/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    
    // create a stream of n values
    const stream = new Array(n);
    let pointer = 0;
    
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */

OrderedStream.prototype.insert = function(id, value) {
    
    stream[id - 1] = value;
    const chunk = [];
    while (stream[pointer]) {
        chunk.push(stream[pointer]);
        pointer++;
    }
    console.log(chunk)
    return chunk;
    
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */