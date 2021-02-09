const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const res = arr.reduce((acc, cur) => {
    if (cur % 2 === 0){
        acc += `${cur} 짝수\n`;
    }
    else{
        acc += `${cur} 홀수\n`;
    }
    return acc;
}, [])
console.log(res);

const data = ["BBQ", "BHC", "BBQ", "처갓집", ["굽네치킨", "푸라닭", "BBQ"], "굽네치킨"];

const temp = data.reduce((acc, cur) => acc.concat(cur), []);

const result = temp.reduce((acc, cur) => {
    if (acc[cur]){
        acc[cur]++;
    }
    else{
        acc[cur] = 1;
    }
    return acc;
}, []);

console.log(result);

