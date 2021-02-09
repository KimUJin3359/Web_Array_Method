const increment = input => input + 1;
const decrement = input => input - 1;
const squared = input => input * input;
const half = input => input / 2;

const init = 1;
const pipeLine = [increment, decrement, increment, decrement, increment, increment, squared, squared, half];
const result = pipeLine.reduce((acc, cur) => cur(acc), init);
console.log(result);