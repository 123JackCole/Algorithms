// write a function that takes n and returns the first n items in the fibonacci sequence
// 1 1 2 3 5 8 13 21 34

// return an array
// 

const fibonacci = (n) => {

    const nums = [1, 1];
    let [left, right] = [1, 1];

    if (n === 1) return [1];
    if (n === 2) return nums;

    for (let i = 0; i < n; i++) {

        nums.push(left + right);

    }

    return nums;

}