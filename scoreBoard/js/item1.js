
// 아래 실행결과를 예측하고 map과 forEach의 차이점을 설명하시오.
var items = ['1', '2', '3', '4', '5'];
var newItems = items.map(item => parseInt(item));
console.log(newItems);

var newItems2 = items.forEach(item => parseInt(item));
console.log(newItems2);


// 명령행 스타일
var arr = [1,2,3,4,5];
var arr2 = [];
for (var i = 0; i < arr.length; i++) {
  arr2[i] = arr[i] * 2;
}
console.log(arr2);

// 선언형 스타일
var arr3 = arr.map(item => item * 2);
console.log(arr3);
