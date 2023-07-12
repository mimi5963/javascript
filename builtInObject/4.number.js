//Number에 관련된 static들 

const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);
//static 속성
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN); //넘버인지 아닌지
console.log(Number.NEGATIVE_INFINITY);
//등
if(num1 === Number.NaN);
if(Number.isNaN(num1));


//지수 표기법 (매우 크거나 작은 표기법)
const num3 =102;
console.log(num3.toExponential());

//반올림하여 문자열 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toLocaleString('ar-EG'));

//원라는 자릿수까지 유효하도록 반올림(여기서 자릿수란 전체 숫자 수)
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(2));//표현이 어려워지면 지수표기법

console.log(Number.EPSILON)//0과 1사이에서 나타낼 수 있는 가장 작은 수 
//사용법 0.1+0.2-0.2 이런거 계산시 작은 오차 발생 이런거 표현하는게 엡솔론
// 작은 차이를 무시하고 싶어 그냥 같은 값으로 간주하고 싶어
// 0.1+0.2-0.2 === 0.1 => num-0.1 < number.EPSION



