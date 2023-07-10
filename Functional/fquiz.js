//주어진 숫자 만큼 0부터 순회
//순회시에 주어진 특정한 일을 수행

//5, 순회 숫자 출력
//5, 순회하는 숫자의 두배값을 다 출력

function iterate(max,actoin){

    for(let i=0; i<max ;i++)
        actoin(i);
}

const iprint = (i) => console.log(i);
const powPrint = (i) => console.log(i*2);

iterate(5,iprint);
iterate(5,powPrint);


setTimeout(()=>{console.log('3초뒤 실행')},3000)


