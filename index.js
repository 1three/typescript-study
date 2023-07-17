/* type 지정: 자동 type 부여 */
// let 이름 = "kim";
// 이름 = "three";
// let 나이 = 20;
// 나이 = 25;
// let singer: { title: string; name: string } = {
//   title: "괜찮아도 괜찮아",
//   name: "권진아",
// };
// let project: { member: string[]; days: number; started: boolean } = {
//   member: ["kim", "park"],
//   days: 30,
//   started: true,
// };
/* type 지정: Union */
// let 이름: string | number = "Kim";
// let 나이: string | number = 25;
// let 배열: (number | string)[] = [1, "2", 3];
// let 객체: { data: number | string } = { data: "1" };
// 객체 = { data: 1 };
/* any & unknown */
// any: 모든 타입 대입 가능
// 타입 안정성 X
// let temp: any = "kim";
// temp = 1;
// temp = undefined;
// temp = [];
// temp = {};
// unknown: 모든 타입 대입 가능
// 타입 안정성 O
// 용도: 외부 데이터와 타입이 알려지지 않은 값 활용
// let temp2: unknown = "kim";
// temp2 = 1;
// temp2 = undefined;
// temp2 = [];
// temp2 = {};
/* type 지정 연습 */
// let user: string = "kim";
// let age: number | undefined = undefined;
// let married: boolean = false;
// let 철수: (string | number | undefined | boolean)[] = [user, age, married];
// let 학교: {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// } = {
//   score: [100, 97, 84],
//   teacher: "Phil",
//   friend: "John",
// };
// 학교.score[4] = false;
// 학교.friend = ["Lee", 학교.teacher];
/* 함수 type 지정 */
// return number
// function multi(x: number): number {
//   return x * 2;
// }
// void: return 방지
// function multi(x: number): void {
//   console.log(x * 2);
// }
// 파라미터 option
// x?: number === x: number | undefined
// function multi(x?: number) {
//   console.log(x * 2);
// }
function hello(name) {
    if (name) {
        console.log("안녕하세요. " + name + "님.");
    }
    else {
        console.log("이름이 없습니다.");
    }
}
function count(x) {
    //   if (typeof x === "string") {
    //     console.log(x.length);
    //   } else {
    //     console.log(x.toString().length);
    //   }
    return x.toString().length;
}
function married(income, house, charm) {
    const result = income + (house ? 500 : 0) + (charm === "상" ? 100 : 0);
    if (result >= 600) {
        return "결혼 가능";
    }
}
console.log(married(700, false, "중"));
console.log(married(100, false, "상"));
