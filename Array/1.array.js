//배열 생성 방법
let array = new Array(2);

array = new Array(1,2,3);
array = Array.of(1,2,3,4);
const anotherArray = [1,2,3,4];
array = Array.from(anotherArray);
//from은 이터러블 객체를 전달함 (순회가 가능한)

//일반적으로 배열은 동일한 크기를 가지며
//연속적으로 이어져 있어야함
//자바스크립트 배열은 연속적으로 이어져있고
//오브젝트와 유사함
//자바스크립트 배열은 일반적인 배열의 동작을 흉내낸 특수 객체
//이를 보완하기 위해서 타입이 정해진 타입배열이 있다.

array = Array.from({

    0: '안',
    1: 'sud',
    length : 2,
});

//따라서 위와 같이 인덱스에 해당하는 속성에 값을 할당하고 length만 써주면 
//배열 만들기 가능




