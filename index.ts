/*
  interface
  1. 편리한 { object } type 지정
  2. extends
  2-1. 타입명 중복 가능
  2-2. 속성 중복 불가능
*/
// type Square = { color: string; width: number };
interface Square {
  color: string;
  width: number;
}

let 네모: Square = { color: "red", width: 100 };

interface Student {
  name: string;
}

interface Teacher extends Student {
  // name: string;
  age: number;
}

/* 여러 {object}를 갖는 [array] type 지정 */
interface Cart {
  product: string;
  price: number;
}

let 장바구니: Cart[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

/*
    interface
  
    두 개의 매개변수를 받아
    덧셈 결과를 반환하는 plus()  함수와
    뺄셈 결과를 반환하는 minus() 함수를 가진 객체 생성
  */
interface Calc {
  plus: (x: number, y: number) => number;
  minus: (x: number, y: number) => number;
}

const math: Calc = {
  plus(x, y) {
    return x + y;
  },
  minus(x, y) {
    return x - y;
  },
};
