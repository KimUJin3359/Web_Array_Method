const arr = ["홍길동", "임꺽정", "홍길동", "피카츄", "피카츄", "홍길동"];
const res = arr.reduce((acc, cur) => {
    if (acc[cur]){
        acc[cur]++;
    }
    else{
        acc[cur] = 1;
    }
    return acc;
}, []);

const result = arr.reduce((acc, cur) => {
    acc[cur] = (acc[cur] ? acc[cur] : 0) + 1;
    return acc;
})

const data = ["삼겹살", "돈까스", ["마라탕", "삼겹살"]];

const a = data.reduce((acc,cur) => acc.concat(cur), []);

console.log(res);
console.log(result);
console.log(a);