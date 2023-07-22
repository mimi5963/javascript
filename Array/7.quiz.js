let arr1 =['1','2','3','4','2'];

// function changeArr(arr,find,change){
//    return arr.map(val => val === find? change:val);
//  
// }
// console.log(changeArr(arr,'2','23'));
const changeVal = '23';
let result = arr1.map((val) => {
    if(val === '2') return changeVal;
    return val;
});
console.log(result);
//이게 밖에 변수 써야하는게 마음에 걸렸는데.. founction으로 감싸면 되겠다..



//퀴즈 2 특정요소 전달받아 배열에 몇개 있는지 카운트

// function countelement(arr,el){
//     let counter =0;
//     for(let i=0; i<Array.from(arr).length;i++){
//         if(arr[i] == el) counter++;
//     }
//     return counter;
// }
const el = '2';
result = arr1.reduce((count,str) =>{
    if(str === '2') count++;
    return count;
},0)
console.log(result);

arr1.filter(val => val === '2').length;




//앗핫핫 
//
function makeArr(arr1,arr2){
    let minLength = Math.min(arr1.length,arr2.length);
    let newArr = [];
    for(let i=0; i<minLength;i++){
      if(arr1[i] === arr2[i])
         newArr.push(arr1[i]);
    }
    return newArr;
}
let arrs =['1','2','3','4','5'];
const arrss =['1','2','7','8','9'];

result = arrs.filter((val,idx)=>val===arrss[idx]);

console.log(result);

//jsex


const result2 = nums.filter((num)=> num>5).
reduce((avg,num,_,array)=>avg + num/array.length,0);

//사용하지 않는 인자 _처리 가능 ! 