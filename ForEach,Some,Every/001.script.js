const arr = [4, 3, 5, 1, 6, 5];
let res = 0;

arr.forEach(v => {
    if (v % 2 == 1) {
        res += 1;
    }
})
console.log(res);