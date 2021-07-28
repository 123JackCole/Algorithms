/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const getLucky = (s, k) => {
    
    const map = {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        e: '5',
        f: '6',
        g: '7',
        h: '8',
        i: '9',
        j: '10',
        k: '11',
        l: '12',
        m: '13',
        n: '14',
        o: '15',
        p: '16',
        q: '17',
        r: '18',
        s: '19',
        t: '20',
        u: '21',
        v: '22',
        w: '23',
        x: '24',
        y: '25',
        z: '26'
    };
    
    let value = "";
    
    for (let i = 0; i < s.length; i++) {
        value += map[s[i]];
    }
    
    let parsedValue = 0;
    
    for (let i = 0; i < value.length; i++) {
        parsedValue += value[i];
    }
    
    for (let i = 0; i < k; i++) {
        
        console.log(parsedValue)
        
        value = 0;
        
        while (parsedValue > 0) {
            value += parsedValue % 10;
            parsedValue = Math.floor(parsedValue / 10);
            console.log(value, parsedValue)
        }
        parsedValue = value;
        
    }
    
    return value;
    
};
