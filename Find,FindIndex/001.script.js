const chicken = [
    {name : "머리", quantity: 1},
    {name : "날개", quantity: 2},
    {name : "닭다리", quantity: 2},
    {name : "닭가슴살", quantity: 1},
    {name : "닭발", quantity: 2},
];

let value = chicken.find(e => e.name === "닭다리");
let index = chicken.findIndex(e => e.name === "닭다리");

console.log(value);
console.log(index);
