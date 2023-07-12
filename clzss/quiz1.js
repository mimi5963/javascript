// //counter클래스 만들기
// class Counter{
//     static #counter =0; 
//     counter;
//     constructor(){
//         this.counter = Counter.#counter++;
//     }
//     showcounter(){
//         console.log(this.counter);
//     }
   
// }

// const co1 = new Counter();
// const co2 = new Counter();

// co1.showcounter();
// co2.showcounter();

//isNaN -> isnotanumber


class Counter{
    constructor(startValue){
        if(isNaN(startValue) || startValue<0){
        this.val = 0;
        }
        else{
        this.val = startValue;
        }
    }

    get Showvalue(){
        console.log(this.val);
    }

    increaseVal = () => {this.val++;}

};

const co1 = new Counter(0);

co1.Showvalue;
co1.increaseVal();
co1.Showvalue;

