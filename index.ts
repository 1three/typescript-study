/* :type */
// string, number, boolean, null, undefined, bigint, [], {}
// let 이름: string = "Kim";
// let 이름: string[] = ["kim", "park"];

/* ?: option */
// let 이름: { name: string } = { name: "kim" };
// let 이름: { name: string; age?: number } = { name: "three", age: 23 };

/* type: 대문자 */
// let id: string | number = "three";
// type IdType = string | number;
// let id: IdType = "three";

/* function: param & return */
// function multi(x: number): number {
//   return x * 2;
// }
// function multi(x: number | string) {
//   if (typeof x === "number") {
//     return x * 2;
//   }
// }

/* [array]: 순서 + type */
// type Member = [number, boolean];
// let john: Member = [100, true];

/* {object}: 순서 + type */
// type PersonObject = {
//   firstName?: string;
//   age: number;
// };
// let 한슬: PersonObject = {
//   firstName: "Kim",
//   age: 25,
// };

/* class: 순서 + type */
// class Person {
//   name; // 프로퍼티
//   constructor(name: string) { // 생성자 함수
//     this.name = name;
//   }
// }
