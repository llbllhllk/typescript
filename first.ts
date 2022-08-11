// 변수 타이핑
const a = 5;
const b: string = 'hello';
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const f: any = true;  // any를 쓰면 typescript가 아닌 javascript쓰는거랑 같은 의미
// 타입스크립트의 주 목적은 any를 없애는 것!
const g: true = true; // 값을 고정할 수 있음
const h: 6 = 6; // 값을 고정할 수 있음

// 함수 타이핑(매개변수, return)
function add(x: number, y: number): number {
  return x + y
}

// type 명시 법(콜론, type, interface, generic, as)
type Add = (x: number, y: number) => number;  // 타입을 따로 빼서 명시할 수 있음
interface Add {
  (x: number, y: number): number;
}
let aa = 1234;
aa = '1234' as unknown as number; // number였던 aa를 string으로 할당할 때 number로 타이핑할 수 있다.

const enum EDirection { 
  Up, // 1
  Down, // 2
  Left, // 3
  Right // 4
}
const one = EDirection.Up // 1
const two = EDirection.Down // 2
const three = EDirection.Left // 3
const four = EDirection.Right // 4
// enum은 차례로 숫자를 할당한다.(딱히 많이 쓰진 않는다.)
// 자바스크립트 변환시 사라짐.

const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;
// as const를 안쓸 경우 타입스크립트 추론시 number오류가 생기기 떄문에 직접 타이핑 하거나 as const를 사용한다.
// 객체형태로 타이핑시 자바스크립트 변환시 사라지지 않는다.
// 자바스크립트 변환 시 사라지지 않는게 낫다.

// arrow function (헷갈리니 주의)
const add: (x: number, y: number) => number = (x, y) => {
  return x + y;
}
const add: Add = (x, y) => {
  return x + y;
}
// 콜론, type, interface, generic, as는 자바스크립트로 변환되면 사라진다!


// 객체 타이핑
const obj: { lat: number, lon: number} = {
  lat: 37.5,
  lon: 127.5,
};


// 배열(길이 제한 없음) 타이핑
const arr: string[] = ['123', '456'];
const arr: Array<string> = ['123', '456'] // generic(<>안에 부분) 표기법
const arr2: number[] = [123, 456];
const arr2: Array<number> = [123, 456]; // generic(<>안에 부분) 표기법
const arr3: [number, number, string] = [123, 456, '789']  // tuple 방식(길이 제한 있음)
// arr는 타이핑을 하지 않으면 never로 타이핑 되므로 무조건 타이핑해줘야 한다.

const head = document.querySelector('#head')!;

// !란 이건 무조건 undefine나 null은 아니라는 걸 보장한다는 걸 명시하는 것.
// 다른 곳에서 코드 수정 됬을 경우 문제 발생가 발생되므로 쓰지말자. 
// 자바스크립트 변환시 사라짐.


// 타입스크립트 추론을 확인해봤을 때 오류(any가 떳을 경우)가 있으면 타이핑을 해줘야 한다! 맞을 경우 타이핑을 지워도 됨.
