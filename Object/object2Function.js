const apple ={
    name:'apple',
    display : function(){
        console.log(`${this.name}`);
    },
};
apple.display();

//생성자 함수 (클래스랑은 조금 다른데 활용은 동일한 듯?)
function Fruit(name,emoji){
    this.name = name;
    this.emoji=emoji;
    this.display=() =>{
        console.log(`${this.name}:${this.emoji}`);
    };
}
//함수가 대문자로 시작하면, 생성자 함수를 만들 수 있다
//여기서 this키워드를 사용하면, 클래스 자신을 가리킴(객체)
//return은 생략가능

const apples = new Fruit('aaple','bb');
const oranges = new Fruit('orange','bb');

console.log(apples);
console.log(oranges);
