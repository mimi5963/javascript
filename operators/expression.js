let b; //선언문
b =2; // 표현식, 할당문

//표현식인지 아닌지는 할당이나 평가가 가능한지 보면됨

//산술연산자 arithmetic 
// ** 지수연산자 포함됨 

//단항연산자 unary
//+,-,! --> !!도가능(부정부정) - 값을 불리언으로 바꾸기 
//+ 숫자가 아닌 타입들을 숫자로 변환하면 어떤 값이 나오는지 알 수 있음

console.log(+false);
console.log(+'text'); //nan
console.log(+undefined); //nan
console.log(!!1); // !1의부정 불리언, !!1의 불리언


//할당연산자 = assignment 
//증감연산자 ++ increment, decrement;

//비교연산자 > < >= <= Relational

//연산자 우선순위 (증감 - 단항 - 산술(산술안에 */+-) 등등..)

//동등비교연산자 == 값이 같음 != 값이다름, === 값과 타입이 같음, !== 값과 타입이 다름

console.log(2 == '2'); // true 문자 2가 숫자로 자동변환
console.log(2 === '2'); // false 타입이 다름
console.log(true == 1);
console.log(true === 1);

const obj1 = {
    name : 'js'
};
const obj2 = {
    name : 'js'
};

console.log(obj1 == obj2 ); //false 주소다름 메모리셀의 값 혹은 주소 비교
console.log(obj1.name == obj2.name); //true



