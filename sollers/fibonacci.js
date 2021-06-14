// return the nth fibonacci number
const fibonacci = (n) => {

    let [p1, p2] = [0, 1];

    for (let i = 0; i < n - 1; i++) {

        [p1, p2] = [p2, p1 + p2];

    }

    return p2;

}

// 1, 1, 2, 3, 5, 8
console.log(fibonacci(5));