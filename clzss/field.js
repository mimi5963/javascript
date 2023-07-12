//접근제어자 -캡슐화
//private(#) , public(기본) , protected 
class Fruit1{
    #name;
    #emoji;
    #type = '과일';
    constructor(name,emoji){
        this.#name = name;
        this.#emoji = emoji;
      
    };
    #display(){
        console.log(`${this.#name}:${this.#emoji}`)
    };

}

const apples = new Fruit1('apple','ss');
console.log(apples);
apples.emoji = 's';
apples.name='ss';
console.log(apples);

//동적 필드생성이 가능해서..말이야 ㅜ #필드랑, 동적생성 필드는 이름이 같아도 다른 필드임 
