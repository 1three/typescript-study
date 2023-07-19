/* import, export, namespace */
// import { Car, Bike } from "./vehicle";
// const 현대차: Car = { wheel: 4, model: "black" };
// const 현대자전거: Bike = { wheel: 2, model: "white" };
// console.log(현대차);
// console.log(현대자전거);
/*
  Generic 함수
  
  1. <>
  2. 파라미터에 type 입력
*/
function returnFirst1(x) {
    return x[0];
}
const temp1 = returnFirst1([4, 2]);
console.log(temp1);
// console.log(temp + 1); // Error: not number, just unknown type
function returnFirst2(x) {
    return x[0];
}
// 사용자가 입력한 <number> // MyType = number
// 사용자가 입력한 <string> // MyType = string
// parameter, return 모두 적용
const temp2 = returnFirst2([6, 4, 2]);
console.log(temp2); // 6
console.log(temp2 + 1); // 7
const temp3 = returnFirst2(["2", "4", "6"]);
console.log(temp3); // 2
console.log(temp3 + 1); // 21
/*
  type parameter 제한: extends
*/
function minus(x) {
    return x - 1;
}
const 뺄셈 = minus(5);
console.log(뺄셈); // 4
// type LengthCheck = { length: number };
function returnLength(input) {
    return input.length;
}
console.log(String.prototype);
console.log(Number.prototype);
const 길이1 = returnLength("hello");
console.log(길이1);
// string type: length(프로토타입) 보유
// const 길이2 = returnLength<number>(1234);
// number type: length(프로토타입) 미보유
