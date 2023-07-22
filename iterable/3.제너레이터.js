function* mulgen(){
    for(let i=0; i<10;i++){
        console.log(i);
        yield i**2;
    }
} 
const multip = mulgen();
const m1 = multip.next();
console.log(m1.value+""+m1.done);
//제너레이터는 내가 호출한 만큼만 돌아감 
//for문으로 제너레이터 만든다고 해도 호출한 만큼만 돌아가서 
//for문안에 콘솔찍어봐도 한번만 돌아갔음 

//multip.return(); // 제너레이터 끝남
//multip.throw('Error'); // 제너레이터 안으로 에러 던짐 
m1 = multip.next();
console.log(m1.value+""+m1.done);