//Find the length of the longest substring of myString without repeating characters.

/*
Example 1:

Input: s = "abcabcbb"
Output: 3
The answer is "abc", with the length of 3.
*/

/*
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

/*
Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/*
Example 4:
Input: s = "abcdefagbhi"
Output: 9
Explanation: The answer is "cdefagbhi", with the length of 9.
Notice that the first duplicate letter is a, and the longest substring begins well before the second 'a' character.
*/


// o n^2
// const longestSubstring = (myString) => {
 
//     let count = 0,
//         longest = 0,
//         current,
//         map = {};
    
//     for (let i = 0; i < myString.length; i++) {
//         current = myString[i];
     
//         for (let j = i + 1; j < myString.length; j++) {
            
//             count++;
            
//             if (myString[j] === current || map[myString[j]]) {
//                 longest = Math.max(count, longest);
//                 count = 0;
//                 map = {};
//                 break;
//             }
            
//             map[myString[j]] = 1;
            
//         }
        
//         count++;
//         longest = Math.max(count, longest);
//         count = 0;
//         map = {};
        
//     }
    
//     return longest;
    
// }

const myString = "abcabcbb";
//const myString = "bbbbb";
//const myString = "pwwkew";
//const myString = "abcdefagbhi";
//const myString = "";

// O n
const longestSubstring = (myString) => {

    const substrings = [];
    let largest = 0;

    for (let i = 0; i < myString.length; i++) {

        substring[i] = myString[i];

        
        // largest = Math.max(, largest);
    }

    return largest;

}

console.log(longestSubstring(myString));