function add(a,b){
    return a+b;
}

const sum = add;

//함수의 이름은 함수를 가리키고 있는 변수 참조변수

//-------------------------------------------------------------
//함수의 매개변수
function add(a,b){
    //매개변수 기본값은 무조건 undefined ..어찌보면 당연
}

function add (a=1,b=2){
    //기본값 Default Parameters 줄 수 있다.
}

//Rest 매개변수 
function sum(...numbers){
    //배열로 바꿈 
}
//-----------------------------------------------
//함수 표현식 