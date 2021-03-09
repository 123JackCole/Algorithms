const checkOnesSegment = (s) => {
    
    let count = 1,
        prev = "1";
    
    for (let i = 1; i < s.length; i++) {
        
        if (prev === "0" && s[i] === "1") count++;
        
        prev = s[i];
        
        if (count > 1) return false;
        
    }
    
    return true;
};