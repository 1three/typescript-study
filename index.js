/*
  ...
  1. 괄호를 벗겨주는 ...spread
  2. 여러 개 파라미터 ...rest
*/
// 1. ...spread
const arr1 = [3, 4, 5];
const arr2 = [1, 2, ...arr1];
console.log(arr2);
const obj1 = { name: "Kim", age: 25 };
const obj2 = Object.assign(Object.assign({}, obj1), { birth: 991216 });
console.log(obj2);
// 2. ...rest: type 지정
function allAdd(...x) {
    console.log(x);
}
allAdd(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
/*
  Destructuring
  array, object 내 데이터를 변수로 생성
*/
// const 사람 = { student: true, age: 20 };
// const student = 사람.student;
// const age = 사람.age;
const { student, age } = { student: true, age: 20 };
const [hello, hundred] = ["안녕", 100];
const person = { student: true, age: 20 };
function 함수({ student, age }) {
    console.log(student, age);
}
함수(person);
/*
  Narrowing 활용 1: &&(AND, 합집합, falsy 탐색)
  
  falsy: false, 0, NaN, "", null, undefined, On(BigInt)
  
  1 && null && 3 // null
  undefined && '안녕' && 100 // undefined
*/
function printAll(str) {
    // if, str 존재 or string type
    if (str && typeof str === "string") {
        console.log(str);
    }
}
function behavior(animal) {
    if ("swim" in animal) {
        return animal.swim;
    }
    return animal.fly;
}
/*
  Narrowing 활용 3: 인스턴스 instanceof 부모 (부모 클래스 확인)
*/
const 날짜 = new Date();
if (날짜 instanceof Date) {
    console.log("날짜의 부모 클래스: Date");
}
function ride(x) {
    if (x.wheel === "4개") {
        console.log("이 보드는 " + x.color);
    }
    else {
        console.log("이 바이크는 " + x.color);
    }
}
/*
  never Type
  1. return type: 절대 return 금지
  2. 함수 종료 불가: endpoint 금지
*/
function 함수선언문() {
    throw new Error(); // void type
}
const 함수표현식 = function () {
    throw new Error(); // never type
};
