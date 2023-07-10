//상수만들기 const
//let은 재할당이 된다.

//const 재할당이 불가능
//1. 상수, 2. 상수변수 

const text ='hh';
//text = dd; //에러

//상수로 사용
const MAX_FRUITS = 5;

//재할당 불가능한 상수변수 또는 변수

const apple ={name:'app',};
//apple는 다른 값을 할당받을 수 없음

//const 재할당x 변경은 ok

//------------------------------------------------------------------------------------


//타입 확인 (typeof)
let variavle;
console.log(typeof variavle);

variavle ='';
console.log(typeof variavle);

variavle= 123; // 실행시 할당된 값에 따라 타입이 결정
console.log(typeof variavle);

//컴파일러있는 언어는 데이터 타입 선언하고 변수 할당 -> 정적으로 타입이 미리 정해진다.
//컴파일러에서도 동적로딩하면, 타입을 미리 안정하고 Class.forname같은거 사용하자너~ 
//동적 정적 차이가 이런거구나 데이터 타입을 선언하고 할당해야하느냐, 할당되면 정해지느냐
// 타입을 정의하고 값을 집어넣느냐, 값이 집어넣어지면서, 타입이 결정되느냐 
//자바스크립트는 dynamic, weakly typed programming language