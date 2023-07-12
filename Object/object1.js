//object literal { key:value}
//new object()
//object.create();

// key- 문자,숫자,문자열,심볼 value - 원시, 객체 (함수)

let apple = {
    name:'apple', // 그냥 프러퍼티
    'hello-bye':'bye', //문자열 키 
    0:1,
    ['hello-bye1'] : 'bye', // 대괄호가능
    
};

apple.name //마침표 표기법
apple['hello-bye1'] //그냥 프로퍼티 말고 다른 문자열 숫자 쓰면 대괄호
apple['hello-bye'] // 대괄호 표기법 bracket notation
apple[0]
apple['name'] // 항상 이렇게 접근 가능

//속성추가 동적추가
apple.emoji ='ss';
apple.emoji

//속성 삭제
delete apple.emoji;
console.log(apple.emoji); //undifined

//대부분의 경우 그냥 문자열로 만들어요 (속성)
//접근할때는 .이나 대괄호 사용



//---------------------------------------------------------------

//객체 동적 접근하기

const obj ={
    name:'엘리',
    age:20,
};
//코딩하는 시점에, 정적 접근이 확정
obj.name;
obj.name;

//동적으로 속성에 접근하고 싶을 때 대괄호 사용
function getValue(obj,key){
    return obj[key];
}
//대괄호 사용하면, 이런식으로 값을 전달해서 동적으로 결정할 수 있음

//*동적 접근,생성 -> 매개변수(다형성)->콜백도 이것 , Refection 두가지 방법 .class(다형성 사용)
// new같은 연산자 사용안하고, 함수를 통해 전달하는데, 다형성 사용할 때
console.log(getValue(obj,'name'));

function addKey(obj,key,value){
    obj[key] = value;
}
addKey(obj,'job','enginner');
console.log(obj);

function deleteKey(obj,key){
    delete obj[key];
}

//무언가 동적으로 사용할 때 []를 사용함
//.표기법은 정적 할당에 사용함 
//------------------------------------------------------------------------

//객체 축약 버전

const x =0;
const y =0;
const coordinate ={x,y}//{x:x,y:y};
//key이름과 value가 참조하고 있는 값이 동일한 경우 짧게 축약형 사용 가능
console.log(coordinate);

function mkeObj(name,age){
    return {name,age};
}
console.log(mkeObj('장원',27));