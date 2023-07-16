let arr1 =['1','2','3','4','2'];

function changeArr(arr,find,change){
    let newArr =Array.from(arr);
    do{
        let findidx = newArr.indexOf(find);
        if(findidx === -1) break;
        newArr[findidx] = change;
    }while(true);
    return newArr;
}
console.log(changeArr(arr,'2','23'));

//퀴즈 2 특정요소 전달받아 배열에 몇개 있는지 카운트

function countelement(arr,el){
    let counter =0;
    for(let i=0; i<Array.from(arr).length;i++){
        if(arr[i] == el) counter++;
    }
    return counter;
}

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

//jsex