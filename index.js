/* class type */
class Person {
    // 2-1. 함수 선언
    // constructor: { object } 반환
    constructor(input) {
        this.name = input;
    }
    // 2-2. 함수 선언
    // prototype 내 함수
    sayHello(input) {
        console.log("Hello. " + input + ".");
    }
}
const human1 = new Person("Kim");
const human2 = new Person("Lee");
console.log(human1);
console.log(human2);
Person.prototype.sayHello("GGmj");
/*
    Car 클래스 생성
  
    모델/가격 정보를 담은 객체를 복사하는 기능
    가격의 10%를 출력하는 tax 메소드
  */
class Car {
    constructor(model, price) {
        this.model = model;
        this.price = price;
    }
    tax() {
        return this.price / 10;
    }
}
const car = new Car("소나타", 3000);
console.log(car);
console.log(car.tax());
/*
    문자와 숫자를 인자로 받아서 이를 각각 문자 배열과 숫자 배열로 저장하는 Word 클래스
    입력 받을 수 있는 문자와 숫자의 개수 제한 X
  
    let obj = new Word('kim', 3, 5, 'park');
    console.log(obj.num) // [3,5]
    console.log(obj.str) // ['kim', 'park']
  */
class Word {
    constructor(...arr) {
        this.str = [];
        this.num = [];
        arr.forEach((input) => {
            if (typeof input === "string") {
                this.str.push(input);
            }
            if (typeof input === "number") {
                this.num.push(input);
            }
        });
    }
}
const obj = new Word("kim", 3, 5, "lee");
console.log(obj.num);
console.log(obj.str);
