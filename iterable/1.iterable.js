const array =[1,2,3];
for(const item of array){
    console.log(item);
}

array.values();// iterator반환 for of spread사용가능
array.keys();
array.entries();

//Iteravle 하다는건 순회가 가능하다
//[Symbol.iterator](): Iterator (객체에 이런 필드가 있어야함)
// 심볼정의를 가지거나, 특정한 함수가 Itrator를 return해야함
//순회가 가능하면 for of, spread사용가능 

