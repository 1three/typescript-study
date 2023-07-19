/* import, export, namespace */

// namespace: 중요타입 정의 시
namespace MyNamespace {
  export interface PersonInterface {
    age: number;
  }
  export type NameType = number | string;
}

export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}
