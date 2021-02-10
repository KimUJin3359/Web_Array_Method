# Web_Array_Traversal_Method

### Arrow Function
- 함수표현식
  ```
  let a = function() {
    ...
  }
  ```
  - 변수에 함수를  넣어주는 것
  - 변수 호이스팅이 발생
- 함수선언식
  ```
  function a() {
    ...
  }
  ```
  - 함수 호이스팅이 발생
- 화살표 함수
  ```
  function a = () => {
    ...
  }
  ```
  - 화살표 함수는 **항상 무명메서드**
  - 변수에 담아놓음(함수표현식과 동일)
  - [실습1](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrowFunction/001.script.js)
    - 3, 10을 전달하여 제곱을 리턴하는 화살표 함수 생성
  - 간략한 표현
    - Argument가 1개 일 때, 소괄호 생략 가능
    - 다른 코드 없이 Return만 하는 화살표 함수는 {} 및 return 생략 가능
    - 한 줄만 수행하는 함수도 {} 생략 가능
  - **Arrow Function**이 **함수표현식을 포함**  

### forEach, some, every
- 콜백 함수
  - 이벤트 발생 시 호출되는 예약 함수
    - 사용자가 이벤트를 발생 시켰을 때, 호출되는 예약된 함수
    - OS가 특정 행동을 할 때, 호출되는 예약된 함수
  - 일반 함수의 Parameter로 등록되는 함수
- Array.forEach(Callback 함수)
  - Array의 원소 개수만큼 Callback 함수가 호출
  - Callback 함수 한번 호출될 때 마다 원소가 하나씩 Argument로 들어감
  - [실습1](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ForEach%2CSome%2CEvery/001.script.js)
    - 배열에서 홀수의 값이 몇 개인지 alert
  - [실습2](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ForEach%2CSome%2CEvery/002.script.js)
    - 배열의 원소를 양수, 음수 배열을 만들어 분류
- Array.some(Callback 함수)
  - Array의 원소 개수만큼 Callback 함수가 호출
  - Callback 함수가 한번 호출될 때 마다 원소 하나씩 Argument로 들어감
  - 하나의 조건만 충족해도 true 반환
- Array.every(Callback 함수)
  - Array의 원소 개수만큼 Callback 함수가 호출
  - Callback 함수가 한번 호출될 때 마다 원소 하나씩 Argument로 들어감
  - 모든 조건을 충족해야 true 반환
  - [실습3](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ForEach%2CSome%2CEvery/003.script.js)
    - input의 value를 통해 포함여부 나타내기
      - input1에는 배열안에 값들을 ,로 구분해서 넣음
      - input2에는 포함되어 있는지 확인할 원소를 넣음
      - 결과 버튼 클릭 시 포함, 미포함 출력하기

### find, findIndex
- Array.find(Callback 함수)
  - Array의 원소 개수만큼 Callback 함수가 호출
  - Callback 함수가 한번 호출될 때 마다 원소 하나씩 Argument로 들어감
  - 해당 조건을 만족하는 첫번째 요소의 **값**을 반환
- Array.findIndex(Callback 함수)
  - Array의 원소 개수만큼 Callback 함수가 호출
  - Callback 함수가 한번 호출될 때 마다 원소 하나씩 Argument로 들어감
  - 해당 조건을 만족하는 첫번째 요소의 **인덱스**를 반환
- [실습1](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Find%2CFindIndex/001.script.js)  
  - 해당 name이 존재하는 객체와 객체의 인덱스를 나타내기

### map, filter, reduce
- forEach, map 차이
  - forEach : 배열의 요소를 하나씩 탐색하며, Callback 함수를 수행
  - map : 배열의 요소를 하나씩 탐색하며, Callback 함수의 return 값을 모아둠
- map((요소, index))
  - 배열 안의 각 요소를 변환할 때 사용
  - [실습1](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/001.script.js)
    - 제곱의 값을 모아둔 Array 생성
    - 배열 요소의 길이를 모아둔 Array 생성
- filter((요소, index))
  - 배열에서 특정 조건을 만족하는 값들만 따로 추출
  - [실습2](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/002.script.js)
    - 배열 요소 중 홀수 값만 모아둔 Array 생성
    - 배열 요소 중 3보다 크고 9보다 작은 값을 모아둔 Array 생성
  - [실습3](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/003.script.js)    
    - 해당 객체 중 done 속성이 false인 객체들만을 모아둔 Array 생성
- reduce
  - 배열에서 특정 조건을 만족하는 값들만 따로 추출
  - 첫번째 인자는 **결과 값(acc)**을 의미
  - 두번째 인자는 **현재 값(cur)**을 의미
  - [실습4](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/004.script.js)
    - 배열 요소의 중복된 개수 찾기
    - 배열을 펼처 배열 요소들을 하나의 배열로 만들기
  - [실습5](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/005.script.js)    
    - 더하기 1, 빼기 1, 제곱, 나누기 2가 섞여있을 때 결과값 출력
  - [실습6](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/006.script.js)    
    - 홀수인수는 '홀수', 짝수인수는 '짝수'로 나타내기
    - reduce를 활용하여 배열을 펼치고 각 치킨 브랜드의 수 세기
- [실습7](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/007.script.js)    
  - filter, map/ reduce을 활용하여 짝수인 경우에만 10을 곱해서 나타내기
- [실습8](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/Map%2CFilter%2CReduce/008.script.js)  
  - count가 0인 메뉴는 보이지 않게함
  - event가 true인 경우 saledPrice에 10퍼센트 감면된 가격을 추가
  - filter, map/ reduce 두 가지로 구현
  
### 순회 메소드
- [실습1](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrayHighFunction/001.script.js)
  ```
  <li id="3"><label>
      <input type="checkbox">bucketLists.ID
      ...
  ```
  - 위와 같은 결과가 나오도록 render 함수를 사용
- [실습2](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrayHighFunction/002.script.js)  
  ```
  [3, 2, 1]
  ['여행가기', '치킨 먹기', '코딩 하기']
  [false, true, false]
  ```
  - 위와 같은 결과가 나오도록 코드 완성
- [실습3](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrayHighFunction/003.script.js)  
  - ID, text, done 순서대로 sorting하여 출력하기
- [실습4](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrayHighFunction/004.script.js)  
  - bucketLists에 { id: 4, text: '요리하기', done: true }요소 추가하기
  - 정렬은 id가 큰 순서부터 작은순서대로 적용
- [실습5](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrayHighFunction/005.script.js)  
  - 해당 id의 done 값을 toggle시켜주는 함수 구현
- [실습6](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrayHighFunction/006.script.js)
  - 해당 배열 안에 존재하는 가장 큰 ID 값 출력
- [실습7](https://github.com/KimUJin3359/Web_Array_Traversal_Method/blob/master/ArrayHighFunction/007.script.js)  
  - 해당 id의 객체를 삭제하는 함수 구현

### 총 정리
- sort는 **원본 배열을 수정**
- sort는 '첫번째 문자부터' 기준으로 정렬한다
  - 숫자 요소로 이루어진 배열을 정렬할 때는 주의가 필요)
```
const score = [40, 100, 1, 5, 2, 25, 10];
score.sort();
-> 1, 10, 100, ..
score.sort((a,b) => a - b);
-> 1, 2, 5, ...
score.sort((a,b) => b - a);
-> 100, 25, 10, ...
```
- **반환값**
  - map : 여러개
  - filter : 여러개 ~ 1개
  - reduce : 무조건 1개
- const, let vs var
  - var : 변수 호이스팅이 발생
  - const, let : 변수 호이스팅이 발생하지 않는 것처럼 동작
    - 객체값, 원시값에 따라 다름
    ```
    const a = 10; (할당)
    a = 20; (재할당)
    error
    ```
    ```
    const a = {} (객체값)
    a.~~ = --
    ```
