//조건문 Conditional Statement
//삼항조건 ternary 조건식 ? 참 : 거짓 
//switch (if~)
let a =0;
switch(a){
    case 'okay':
    case 'good':
        console.log('조음');
        break;


}

//반복문 for Loop
//for(선언문; 조건식; 증감식){} (선언문->조건문->수행->증감->조건)
//continue, break;

for(let i=0; i<5; i++){
    for(let k=0; k<4-i ;k++ )
    process.stdout.write(' ');
    for(let j=0; j<i*2+1;j++)
    process.stdout.write('*');

    console.log('');

}
for(let i=0; i<5; i++){
    for(let k=0; k<=i ;k++ )
    process.stdout.write(' ');
    for(let j=(5-i)*2-3; j>0;j--)  //7 - 7 
    process.stdout.write('*');

    console.log('');

}

for(let i=5; i>0; i--){
    for(let k=5; k>i ;k-- )
    process.stdout.write(' ');
    for(let j=0; j<i*2-1;j++)  //7 - 7 
    process.stdout.write('*');

    console.log('');

}


//while
//do while -> 일단하고 while();
//제어문에서 자주쓰이는 연산자 - 논리연산자(logical && || ! !!불리언으로 변환)