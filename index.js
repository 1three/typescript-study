/* Type 확정 */
// 1. Narrowing: 타입 지정
// 1-1. typeof 변수
function plusOne(x) {
    if (typeof x === "number")
        return x + 1;
    else
        return x + 1;
}
function temp(x) {
    let array = [];
    if (typeof x === "number") {
        array[0] = x;
    }
}
// 1-2. 속성명 in 오브젝트자료
// 1-3. 인스턴스 instanceof 부모
// 2. Assertion: 타입 덮어쓰기
// 2-1. 변수 as 타입 (용도: 타입 확정 시 / 들어올 타입이 확실할 때)
function test(x) {
    let array = [];
    array[0] = x; // x의 type을 number로 덮어쓰기
}
function teacher(teacherType) {
    if (typeof teacherType.subject === "string") {
        return teacherType.subject;
    }
    else if (Array.isArray(teacherType.subject)) {
        const last = teacherType.subject.length - 1;
        return teacherType.subject[last];
    }
    else {
        return "Error";
    }
}
console.log(teacher({ subject: "math" }));
console.log(teacher({ subject: ["science", "art", "korean"] }));
let 동물;
// type 변수 활용: const
const 출생지역 = "seoul";
// 출생지역 = 'busan'; // 재할당 금지
const 생일 = { month: 12, day: 16 };
생일.month = 1; // obejct 수정 가능
const 생년월일 = { year: 99, month: 12, day: 16 };
const 좌표 = { x: 1, y: 2 };
// type 변수 특징: 재정의 불가
// type Name = number;
/* Literal Type: 특정 글자/숫자 가지도록 제한을 두는 Type */
let 방향;
방향 = "left";
function game(hand) { }
/*
  as const
  1. object의 value로 type 변경
  2. object의 모든 속성 readonly 변경
*/
var 자료 = { name: "kim" }; // type "string" → "kim"
function onlyKim(x) { } // type "kim"
let num = function (x, y) {
    return x + y;
};
console.log(num(1, 2)); // 3
let memberInfo = {
    name: "kim",
    age: 25,
    plusOne(x) {
        // common function
        return x + 1;
    },
    sayHello: () => {
        // arrow function
        console.log("hello");
    },
};
console.log(memberInfo.plusOne(1));
memberInfo.sayHello();
const cutZero = (input) => {
    return input.startsWith("0") ? input.slice(1) : input;
};
/* 입력받은 문자열 내 모든 "-"를 제거 및 숫자로 반환하는 함수 */
// /-/g: 문자열 내 모든 "-", ""로 대체
function removeDash(input) {
    return Number(input.replace(/-/g, ""));
}
/*
    문자열, 첫 번째 함수, 두 번째 함수를 파라미터로 가지는 함수
    
    문자열을 첫 번째 함수에 전달,
    그 결과를 두 번째 함수에 전달,
    그 결과를 콘솔에 출력하는 함수
*/
function applyFunction(input, stringFunc, numberFunc) {
    const result1 = stringFunc(input);
    const result2 = numberFunc(result1);
    console.log(result2);
}
applyFunction("010-1111-2222", cutZero, removeDash);
