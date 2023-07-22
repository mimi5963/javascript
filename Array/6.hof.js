
const fruits = ['바나나','사과','포도','딸기'];

//배열을 돌면서 원하는 작업 forEach
fruits.forEach(function(value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);
});
function literator(array,action){
    //반복문
    action(i); 
    //forEach와 동일
}
//사용하지않는 매개변수 인자는 지워도됨
//이때 사용되는 콜백함수는 (Value:T, index:number, array:T[]) => void

//2. 원하는 조건 
const item1 ={name : '하', price: 2};
const item2 ={name : '수', price: 2};
const item3 ={name : '핫', price: 2};
const products =[item1,item2,item3];
let found =products.find((value) => {
    return value.name === '하';
});
//find (value) => return true인 요소 return(콜백함수 true)
//제일 먼저 조건에 맞는 아이템 반환

//findIndex: 제일 먼저 조건에 맞는 아이템의 인덱스를 반환

//3. 배열의 아이템이 부분족으로 조건에 맞는지 확인 (true or false 반환)
found = products.some((val) => val.name ==='수');


//4. 배열의 아이템이 전부 조건에 맞는지 
found = products.every((item) => item.name ==='학');

//5. 조건에 맞는 모든 아이템 반환 (새로운 배열)
found = products.filter((item) => item.price ===2);
console.log(found);

console.clear();


//6. map 배열의 아이템을 다른 아이템으로 맵핑
const nums = [1,2,3,4,5];
found = nums.map(val => val*2);
console.log(found);
found = nums.map(val => {
    if(val %2 ===0)
    return val*2;
    return val;
});
console.log(found);

//flatmap: 배열등의 value를 낱개로 풀어서 하나의 배열로 만들어 return
//원래 value -> []라면 각 value에 []를만들고 [[],[]]인데, flatMap은 value->[]라면 [val,]임 
found = nums.map((item) => [item,2]);
console.log(found);
found = nums.flatMap((item) => [item,2]);
console.log(found);

//ex
found = ['dream','coding'].map((text) => text.split(''));
console.log(found);
found = ['dream','coding'].flatMap((text) => text.split(''));
console.log(found);

//sort 배열의 아이템을 정렬
//문자열 형태의 오름차순으로 요소 정렬, 기존 배열 변경
const texts =['hi','abc'];
texts.sort();
console.log(texts);

const numbers = [0,5,4,2,1,10];
numbers.sort((a,b) => b-a);
//순차적으로 0,5 => 5,4 (버블정렬)
//<0 a가 앞으로정렬 
//>0 b가 앞으로 정렬 
console.log(numbers);


//reduce : 배열의 요소들을 접어서 값을 하나로 
found = [7,2,3,4,5].reduce((sum,value)=> sum+=value);
console.log(found);
