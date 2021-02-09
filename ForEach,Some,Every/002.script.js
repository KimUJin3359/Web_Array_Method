const arr = [-5, 3, 4, 2, -7, -2, 7];
let plus = [];
let minus = [];

arr.forEach(e => {
    if (e >= 0) {
        plus.push(e);
    }
    else {
        minus.push(e);
    }
})
console.log(...plus);
console.log(...minus);