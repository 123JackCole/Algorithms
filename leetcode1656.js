// https://leetcode.com/contest/weekly-contest-215/problems/design-an-ordered-stream/




/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    
    // create a stream of n values
    this.stream = [...Array(n)];
    this.pointer = 0;
    
};

/** 
 * @param {number} id 
 * @param {string} value
 * @return {string[]}
 */

OrderedStream.prototype.insert = function(id, value) {
    
    this.stream[id - 1] = value;
    const chunk = [];
    while (this.stream[this.pointer]) {
        chunk.push(this.stream[this.pointer]);
        this.pointer++;
    }
    return chunk;
    
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */