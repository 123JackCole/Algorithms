/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */

 const minStoneSum = (piles, k) => {
    
    let sortedPiles = piles.sort((a, b) => b - a);
    const numPiles = piles.length;
    
    for (let i = 0; i < k; i++) {
        
        sortedPiles[0] = Math.ceil(sortedPiles[0] / 2);
        sortedPiles = piles.sort((a, b) => b - a);
        
    }
    
    return sortedPiles.reduce((a, b) => a + b);
    
};