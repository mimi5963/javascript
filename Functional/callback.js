//콜백함수

const add = (a,b) => a+b;
const multiply = (a,b)  => a*b;

function calculator(a,b,action){
    let result = action(a,b);
    console.log(result);
    return result;
}

//위와같이 외부에서 주어지는 함수(매개변수) 콜백함수라고함
//함수의 레퍼런스를 외부로부터 전달받아서 액션을 나중에 함수안에서 호출됨

calculator(1,2,add); //call back형태로 전달 (add 직접호출x add주소만 전달 호출은 함수안에서)
calculator(1,2,multiply);

//전달된 action은 콜백함수이다.
//전달될 당시에 함수를 바로 호출해서 반환된 값을 전달하는 것이 아니라
//함수를 가리키고 있는 함수의 래퍼런스(참조)가 전달된다.
//그래서 함수는 고차함수 안에서 (calcul)필요한 순간에 호출



//java에 함수형인터페이스를 통한 다형성 같은 것

//call back은 나중에 호출해줘~ 이런 너낌?

