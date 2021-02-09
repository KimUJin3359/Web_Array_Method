let bucketLists = [
    { id: 3, text: '여행가기', done: false },
    { id: 2, text: '치킨 먹기', done: true },
    { id: 1, text: '코딩 하기', done: false }
];

//삽입 후 정렬
function addList(List) {
    bucketLists.push(List);
    bucketLists.sort((a, b) => {
        if (a['id'] > b['id']){
            return -1;
        }
        else if (a['id'] < b['id']){
            return 1;
        }
        else{
            return 0;
        }
    })
}

//let을 이용한 재할당
function addList2(List){
    bucketLists = List.concat(bucketLists);
}

//unshift 활용
function addList3(List){
    bucketLists.unshift(List);
}

//기존의 bucketLists를 풀어서 붙여줌
function addList4(List){
    bucketLists = [List, ...bucketLists];
}



addList({ id: 4, text: '요리하기', done: true });
console.log(bucketLists);