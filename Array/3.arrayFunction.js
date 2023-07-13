const fruit = [1,2,3,4];
//특정 오브젝트가 배열인지 아닌지 체그
Array.isArray();
//특정 아이템 위치 찾기
fruit.indexOf();

//배열안에 아이템 체크
fruit.includes();

//추가 제일 뒤
fruit.push(); //배열 자체 수정하고 길이를 리턴

//추가 제일 앞
fruit.unshift() //배열 길이 리턴

//제거 - 제일 뒤
fruit.pop() // 제거된 아이템 출력
//제거 -제일 앞
fruit.shift() //제거된 아이템 출력


//중간 추가 또는 제거
fruit.splice(1,1); //삭제된 아이템 출력 배열 자체 
fruit.splice(1,0,'추가'); //삭제 안하고 추가 
//시작 인덱스,몇개 삭제할 건지, 추가할 아이템 




//-- 잘라진 새로운 배열을 만듦
let newArr = fruit.slice(0,2);
// 여러 배열 이어주기
newArr.concat(fruit);
// 배열 순서 거꾸로 
newArr.reverse();
// 중첩 배열을 하나의 배열로 펴기 - 새로운 배열 리턴
let arr =[[1,2,3],[4,[5,6]]];
arr.flat() //1단계만 flat해줌
arr.flat(2) // 몇단계 중첩 배열을 falt하게 만들건지 
arr = arr.flat(2);

//특정한 값으로 배열을 채우기 
arr.fill(0); //배열 자체 업데이트
arr.fill('2',1,3);



//배열을 문자열 합하기
let text =arr.join();
let t2 = arr.join('L');
console.log(t2);
