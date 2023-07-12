class Employee{
  constructor(name,department,workinghour){
    this.name = name;
    this.department = department;
    this.workinghour = workinghour;
  };
  get getWorkinghour(){
    return this.workinghour;
  };
}

class Emp1 extends Employee{
    static #payper1hour = 10000;
    get getpayment(){
        console.log(super.getWorkinghour*Emp1.#payper1hour*30);
    }
}

class Emp2 extends Employee{
    static #hour1 = 8000;
     get getpayment(){
        console.log(super.getWorkinghour*Emp2.#hour1*30);
    }
}

const e1 = new Emp1('홍길동','개발',8);
const e2 = new Emp2('장사장','수리',8);
console.log(e1);
console.log(e2);
e1.getpayment;
e2.getpayment;
