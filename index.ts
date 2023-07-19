/*
  접근제어자
  
  public: 클래스 외부에서 접근 가능 (기본 접근 제한자)
  private: 오직 해당 클래스 내에서만 접근 가능, 외부나 파생 클래스에서 접근 불가
  protected: 해당 클래스와 서브 클래스 내에서 접근 가능, 외부에서는 접근 불가
  static: 인스턴스화 없이 클래스 자체에서 접근 가능, 인스턴스에서는 접근 불가
*/
class 사람 {
  public 이름: string;
  private 비밀번호: string;
  protected 나이: number;
  static 종: string = "호모 사피엔스"; // 부모클래스에 직접 부여 (상속 불가)

  constructor(이름: string, 비밀번호: string, 나이: number) {
    this.이름 = 이름;
    this.비밀번호 = 비밀번호;
    this.나이 = 나이;
  }

  public 인사하기() {
    console.log(`안녕하세요, 제 이름은 ${this.이름} 입니다.`);
  }
}

class 직장인 extends 사람 {
  // extends 되어도 function으로 객체 생성 후 this로 호출 가능
  경력여부() {
    if (this.나이 < 30) {
      console.log(`${this.이름}은 ${this.나이}세로 신입`);
    } else {
      console.log(`${this.이름}은 ${this.나이}세로 경력`);
    }
  }
}

const 홍길동 = new 직장인("홍길동", "password1234!", 35);

홍길동.인사하기();
홍길동.경력여부();
console.log(사람.종); // static: 부모클래스에 직접 접근

/* 접근제어자 활용 */
class Pro {
  // skill = "JS";
  // intro = `${this.skill} 전문가`;

  // static: 부모클래스에 직접 접근
  static skill = "JS";
  intro = `${Pro.skill} 전문가`;
}

let 철수 = new Pro();
console.log(철수);

Pro.skill = "TS";
let 미애 = new Pro();
console.log(미애);
