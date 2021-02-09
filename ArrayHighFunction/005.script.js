let bucketLists = [
    { id: 3, text: '여행가기', done: false },
    { id: 2, text: '치킨 먹기', done: true },
    { id: 1, text: '코딩 하기', done: false }
];

function toggle(id){
    bucketLists.filter(bucketList => bucketList.id === id).map(bucketList => {
        if (bucketList.done === true){
            bucketList.done = false;
        }
        else {
            bucketList.done = true;
        }
    })
}

toggle(2);

console.log(bucketLists);