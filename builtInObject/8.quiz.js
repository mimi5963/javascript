//1문자열의 모든 캐릭터 하나씩 출력하라
const text = 'Hello World!';
for(let i=0; i<text.length;i++){
    console.log(text.charAt(i));
}
//2. 사용자 id 잘라내여 id를 배열로 보관
const ids ='user1, user2, user3, user4';
const idss = ids.split(', ');
console.log(idss);

//3.1초에 한번씩 (날짜포함) 출력하자
//setInterval(1000);
console.log(new Date().toDateString());

//setInterval(()=>{console.log(new Date().toDateString());},1000);