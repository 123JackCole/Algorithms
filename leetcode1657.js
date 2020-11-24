// 1657. Determine if Two Strings Are Close

// Two strings are considered close if you can attain one from the other using the following operations:

// Operation 1: Swap any two existing characters.
// For example, abcde -> aecdb
// Operation 2: Transform every occurrence of one existing character into another existing character, and do the same with the other character.
// For example, aacabb -> bbcbaa (all a's turn into b's, and all b's turn into a's)
// You can use the operations on either string as many times as necessary.

// Given two strings, word1 and word2, return true if word1 and word2 are close, and false otherwise.

var closeStrings = function(word1, word2) {
    
    if (word1.length !== word2.length) return false;
    
    word1Map = {};
    word2Map = {};

    for(let i = 0; i < word1.length; i++) {
        word1Map[word1[i]] ? word1Map[word1[i]]++ : word1Map[word1[i]] = 1;
        word2Map[word2[i]] ? word2Map[word2[i]]++ : word2Map[word2[i]] = 1;
    }

    // return false is the letters are not the same
    word1Letters = Object.keys(word1Map).sort();
    word2Letters = Object.keys(word2Map).sort();

    for(let i = 0; i < word1Letters.length; i++) {
        if (word1Letters[i] !== word2Letters[i]) return false;
    }

    // return false if the counts are not the same
    word1Counts = Object.values(word1Map).sort((a,b) => a - b);
    word2Counts = Object.values(word2Map).sort((a,b) => a - b);

    for(let i = 0; i < word1Counts.length; i++) {
        if (word1Counts[i] !== word2Counts[i]) return false;
    }

    return true;
    
};