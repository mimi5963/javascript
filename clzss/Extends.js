// //상속
// class Tiger{
//     constructor(color){
//         this.color = color;
//     }
//     eat(){
//         console.log("냠");

//     }
//     sleep(){
//         console.log('잔다');
//     }
// }


class Animal{
    constructor(color){
                this.color = color;
            }
            eat(){
                console.log("냠");
        
            }
            sleep(){
                console.log('잔다');
            }
}
//여긴 생성자도 상속이 되눈
class Tiger extends Animal{}
const tiger = new Tiger('노랭이');
console.log(tiger);
tiger.sleep();
tiger.eat();

//단 자식에서 생성자 만들때 부모생성자 호출해줘야함
class Dog extends Animal{
    constructor(color,ownerName){
        super(color);
        this.ownerName = ownerName;
    }
    play(){
        console.log('놀자');
    }
    //오버라이딩 
    eat(){
        super.eat();
        console.log("개가먹음");
    }
}

const dog = new Dog('빨강','엘리');
console.log(dog);
dog.eat();
dog.play();
dog.sleep();