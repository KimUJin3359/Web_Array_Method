const bucketLists = [
    { id: 3, text: '여행가기', done: false },
    { id: 2, text: '치킨 먹기', done: true },
    { id: 1, text: '코딩 하기', done: false }
];

function sortKey(key){
    return bucketLists.sort((a,b) => {
        if (a[key] > b[key]){
            return 1;
        }
        else if (a[key] < b[key]){
            return -1;
        }
        else{
            return 0;
        }
    })
}

console.log(...sortKey('id'));
console.log(...sortKey('text'));
console.log(...sortKey('done'));