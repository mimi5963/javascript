//객체를 손쉽게 만들 수 있는 템플릿
//1. 생성자 함수 (오래된 고전적 방법)
//2. 클래스 - 최신버전

class Fruit{
    static MAX_FRUIT = 11222;
    //생성자 : new시 호출
    constructor(name,emoji){
        this.name = name;
        this.emoji = emoji;
        this.number = MAX_FRUIT;
    };
    //함수만들기 
    display(){
        console.log(`${this.name}:${this.emoji}`)
    };

    //클래스 레벨
    static makeRandomFruit(){
        //클래스 레벨의 메서드는 this 사용불가
        return new Fruit('ba','dk');
    }
}

//클래스의 인스턴스  == 객체 -> 클래스를 통해 만들어진 객체만을 통칭
//붕어빵 틀로 찍어졌냐 아니냐 정도 차이

//static 조금 더 강하게 제한을 받음 java에서는 static이어도 인스턴스로 접근 가능했는데
//얘는 인스턴스로는 접근 못해유 딱 구분해벌임;;
