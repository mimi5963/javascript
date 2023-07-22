//스프레드 연산자, 전개구문
//모든 이터러블은 펼쳐질 수 있다.
//func(...iterable)
//[...iterable]
//{...obj}

function add(a,b,c,d){
    return a+b+c;
}
const nums =[1,2,3];
console.log(add(...nums));
//스프레드 연산자는 이터러블한 객체 매개변수에 전달할 때 
//귀찮게 하나씩 넣는게 아니라 한번에 넣어줌
//뭔가 형식이 안맞으면 이상한 값 자동으로 뜨는 군

//Rest parameters
function sum(fi,se,...nums){
    console.log(nums);
}
sum(1,2,1,2,3,3,4);
//가변인자 nums지역적으로 배열로 자동변환

//스프레드 이용해서 배열만들기
const f1 =[1,2,3];
const f2 =[2,3,3];
let arr = [...f1,...f2];
console.log(arr);

//오브젝트에서 사용하기

const elie ={name:'s',age:'2',home:{add:'ss'}};
const up = {
    ...elie,
    job:"ss"
}
console.log(up);
console.log(elie);
elie.home.add='ks';
console.log(up);
console.log(elie);
