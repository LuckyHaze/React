
// Student 라는 이름의 클래스를 생성하시오.
class Student {
  // 생성자를 추가하시오.
  constructor(name){
    // 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오
    this.name = name;
  }

  // changeName이라는 이름의 메서드를 추가하시오.
  changeName (userName){
    // 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.
    this.name = userName;
  }
}

// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오
const a = new Student("Jane");
console.log(a);

// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
a.changeName("Tom");
console.log(a);



// 생성자의 역할은 무엇인가?
// 생성자에 사용된 this는 무엇을 가르키는가?
