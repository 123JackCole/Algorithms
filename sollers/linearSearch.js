const linearSearch = (n, array) => {
    for (i of array) {
        if (n === i) return i;
    }

    return -1;
}

console.log(linearSearch(2, [1,1,1,1,1,1,2,1,3]));