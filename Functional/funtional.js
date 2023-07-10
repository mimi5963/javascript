//함수 -> 특정한 일을 수행하는 코드의 집합

function add(a,b){
    return a+b;
};
//매개변수는 let~ 동적할당 함수의 return도
//return도 안정해주넹 

function add(num1,num2){
    const result = num1+num2;
    return result;
}

console.log(add(1,2));

function fu(name1,lastname){
    return `${name1} ${lastname}`;
}

console.log(fu('장','우'));