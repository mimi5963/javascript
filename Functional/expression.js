//함수표현식 const name = function() {} 함수표현식

//익명함수
let add = function(a,b){ return a+b;};


//람다식  => js에는 함수형 인터페이스가 없으니 그냥 막 작성가능 (각 람다식별 참조변수 없음)
let add2 = (a,b) => {a+b};


//생성자 함수 new Function();

//익명함수 + 바로호출 IIFE (Immedicately - Invoked Function - Expression)
(function run(){console.log('!');})();

