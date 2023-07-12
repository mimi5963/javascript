//접근자 프로퍼티(Accessor Property)
//갯터샛터유~ 똑같음 하는일 근데 표기법이 쫌 다름
class Student{
    constructor(firstname,lastName){
        this.firstName = firstname;
        this.lastName = lastName;
    };
    get fullName(){
        return `${this.lastName} ${this.firstName}`;
    };
    set Setname(name){
        this.firstName = name;
    }
}

const stud = new Student('수지','김');
console.log(stud.fullName); //정적필드로 선언하지 않은 이유는 함수 호출 시점시 필드 변경되어 있으면 반영하려고
console.log(stud);
//근데 이걸 함수로 접근하기 싫고, 일반속성처럼 접근하고 싶어 
//이럴 때 get을 앞에 써주면 된다 함수 앞에 그러면 마치 프로퍼티처럼 함수를 접근할 수 있다.
//걍 함수 호출의 방식을 바꾸는 것 뿐
//특히 속성에 간주되는 함수를 호출할때 

stud.Setname = '냠냠냠';
console.log(stud);
