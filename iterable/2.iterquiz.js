//0부터 10이하까지 숫자의 2배를 순회하는 이터레이터 반복자
class obj {
   constructor(){}
    [Symbol.iterator](){
        let i=0;
        return{
            next(){
                if(i<10) return{value:i++*2, done:false};
                return {value:undefined,done:true};
            }
        }
    }
}

const o1 = new obj();
let iter = o1[Symbol.iterator]();
// for(let item of o1){
//    // console.log(item);
// }
 console.log(iter.next());
 console.log(iter.next());

//이터러블한 클래스를 만드는 거랑, 객체 만드는 거랑 다름
//클래스나 객체가 이터러블 프로토콜 잘 오버라이딩 했으면 그냥 불러와도됨
//이터러블 객체 꺼내서 불러와도됨
//function을 저렇게 바로 리턴해줘도됨 


//정답 

const m = {
[Symbol.iterator](){
    const max = 10;
    let num =0;
    return{
        next(){
            return {value:num++ *2, done:num>max};
        }
    }
}
}

//이터레이터 재사용

function makeIterable(initV,maxVa,callback){
    return{
        [Symbol.iterator](){
           let num = initV;
            return{
                next(){
                    return {value:callback(num++), done:num>maxVa};
                },
            };
    },
};
};

const m2 = makeIterable(0,20,(num)=>{return num*2});
for(let item of m2){
    console.log(item);
}