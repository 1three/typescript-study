/* type 지정: 자동 type 부여 */
// let 이름 = "kim";
// 이름 = "three";
// let 나이 = 20;
// 나이 = 25;

/* type 지정: Union */
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

/* 주어진 이름으로 인사하거나 이름 미제공 시 오류 메시지를 출력하는 함수 */
function hello(name?: string) {
  if (name) {
    console.log("안녕하세요. " + name + "님.");
  } else {
    console.log("이름이 없습니다.");
  }
}

/* 주어진 숫자나 문자열의 길이를 반환하는 함수 */
function count(x: string | number): number {
  //   if (typeof x === "string") {
  //     console.log(x.length);
  //   } else {
  //     console.log(x.toString().length);
  //   }
  return x.toString().length;
}

/* 월소득, 집 보유 여부, 매력점수를 기반으로 600점 이상이면 "결혼 가능"을 반환하는 함수 */
// "아무것도 반환하지 않는다" === "함수가 실행을 마치고 undefined를 반환한다"
function marry(income: number, house: boolean, charm: string): string | void {
  const result = income + (house ? 500 : 0) + (charm === "상" ? 100 : 0);
  if (result >= 600) {
    return "결혼 가능";
  }
}
