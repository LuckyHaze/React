// 생성자함수에서의 this
function Person() {
  this.arms = 2;
  this.legs = 2;
}

const person = new Person();
// arms의 출력 결과는 무엇인가?
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는?
console.log(person);