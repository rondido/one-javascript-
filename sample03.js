// function myFunc(name) {
// 	return '안녕' + name;
// }

// 위 코드와 같은 출력이 나오게 만들어 주세요.

// const myFunc = (빈칸) => {
// 	빈칸
// }

// 위 코드와 같은 출력이 나오게 만들어 주세요.

// const myFunc = (빈칸) => 빈칸;

// -------------------------------------------------------------------------------

// const myArray = ['진웅', '성준', '정환', '용민'];

// let arr1 = myArrary.(빈칸)(function(item) {
// 	return item;
// });

// 빈칸에 들어갈 것은?
// 답: 
// -----------------------------------------------------------------------------------

// const arr = ['정환', 20, '열성적인 자바스크립트', '안녕', '진웅', '어떻게 지내니?'];

// const Func = (...anArray) => {
// 	return anArray;
// };

// console.log(Func(arr));
// 출력코드를 작성하세요.
// 답:


// const [ val1, val2, val3, ...rest ] = arr;

// const Func = (restOfArr) => {
// 	return restOfArr.filter((item) => {return item}).join(" ");
// };

// console.log(Func(rest)); 

// 출력코드를 작성하세요.
// 답:

// -----------------------------------------------------------------------------------

// flex에서의 justify-content 속성으로 각각 올바른것은?



// -----------------------------------------------------------------------------------

// 현재 브라우저의 크기가 가로 1000px, 세로 800px일때
// 1vmin / 1vmax / 1vh / 1vw는 각각 몇 px인지 적고

// 브라우저의 크기가 가로 600px 세로 1200px로 변경되었을 때
// 1vmin / 1vmax / 1vh / 1vw는 각각 몇 px인가?



// -----------------------------------------------------------------------------------

// 각 번호에서 출력되는 값을 쓰시오.
// function abc() {
// 	var a = "bbb";
// 	console.log(a)     					 // 1번
// 	function c() {
// 		console.log(a);    				 // 2번
// 		(function() {
// 			console.log(a);    			 // 3번 
// 			a = "ccc";
// 		})();
// 		var a;
// 		console.log(a) 	  		  	 // 4번
// 	}
// 	function d() {
// 		console.log(a);    			 	// 5번
// 	}
// 	c();
// 	a = "ddd";
// 	d();
// };
// abc();


// -----------------------------------------------------------------------------------

// 2. if(2 == ___ ) 중, 밑줄에 값이 들어올때 true가 아닌 경우를 고르시오.

// ① Number(2)

// ② Number(2).valueOf()

// ③ Number(2).toString()

// ④ 2.valueOf()

// ⑤ 2 .toString()



// -----------------------------------------------------------------------------------


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']


// const a = fruits.forEach(function (item, i){
//     console.log(`${item}-${i}`);   
// }) 
// console.log(a);


// const b = fruits.map(function (item, i){
//      return `${item}-${i}`
// })
// console.log(b);


// const c = fruits.map(function (item, i){
//     return {
//         id: i,
//         name: item
//     }
// })
// console.log(c);


// 출력되는 값을 작성하세요.


// -----------------------------------------------------------------------------------

// 아래의 함수를 익명함수로 만들고 즉시실행가능한 함수로 만들어보세요.
// (아래의 코드는 함수를 작성하고 함수를 호출하는 방법이다)

// const a = 20;

// function double(){
//     console.log(a * 2);
// }
// double();




// 문제 1 Spread Syntax
//      const obj1 = { key: 'key1' };
//      const obj2 = { key: 'key2' };
//      const array = [obj1, obj2];

//      //기존 array copy
//      const arrayCopy = [] array.map or array.foreach;
     
//     //ES6 array copy
//      const arrayCopy2 = /*이 곳을 채워주세요.*/
//      console.log(array, arrayCopy2);


// 문제 2 Destructuring assignment
// const ellie = {
//      name: name,
//      age: age,
// };

// //기존
// {
//      const name = ellie.name;
//      const age =  ellie.age;
//      console.log(name,age);
// }

// //ES6
//  /*이 곳을 채워주세요.*/
// console.log(name,age);

// 문제 3 Default parameters
// ES6에서 parameter message의 default를 간편하게 설정하는법은?

// //기존 parameter 받기
// {
//     function printMessage(message) {
//         if(message == null) {//기존 default
//            message = 'default message';
//         }
//         console.log(message);
//     } 

//     printMessage('hello');
//     printMessage();
// }


// function myFunc(name) {
// 	return '안녕' + name;
// }

// 위 코드와 같은 출력이 나오게 만들어 주세요.

// const myFunc = (빈칸) => {
// 	빈칸
// }

// 위 코드와 같은 출력이 나오게 만들어 주세요.

// const myFunc = (빈칸) => 빈칸;

// -------------------------------------------------------------------------------

// const myArray = ['진웅', '성준', '정환', '용민'];

// let arr1 = myArrary.(빈칸)(function(item) {
// 	return item;
// });

// 빈칸에 들어갈 것은?
// 답: 
// -----------------------------------------------------------------------------------

// const arr = ['정환', 20, '열성적인 자바스크립트', '안녕', '진웅', '어떻게 지내니?'];

// const Func = (...anArray) => {
// 	return anArray;
// };

// console.log(Func(arr));
// 출력코드를 작성하세요.
// 답:


// const [ val1, val2, val3, ...rest ] = arr;

// const Func = (restOfArr) => {
// 	return restOfArr.filter((item) => {return item}).join(" ");
// };

// console.log(Func(rest)); 

// 출력코드를 작성하세요.
// 답:

// -----------------------------------------------------------------------------------

// flex에서의 justify-content 속성으로 각각 올바른것은?



// -----------------------------------------------------------------------------------

// 현재 브라우저의 크기가 가로 1000px, 세로 800px일때
// 1vmin / 1vmax / 1vh / 1vw는 각각 몇 px인지 적고

// 브라우저의 크기가 가로 600px 세로 1200px로 변경되었을 때
// 1vmin / 1vmax / 1vh / 1vw는 각각 몇 px인가?



// -----------------------------------------------------------------------------------

// 각 번호에서 출력되는 값을 쓰시오.
// function abc() {
// 	var a = "bbb";
// 	console.log(a)     					 // 1번
// 	function c() {
// 		console.log(a);    				 // 2번
// 		(function() {
// 			console.log(a);    			 // 3번 
// 			a = "ccc";
// 		})();
// 		var a;
// 		console.log(a) 	  		  	 // 4번
// 	}
// 	function d() {
// 		console.log(a);    			 	// 5번
// 	}
// 	c();
// 	a = "ddd";
// 	d();
// };
// abc();


// -----------------------------------------------------------------------------------

// 2. if(2 == ___ ) 중, 밑줄에 값이 들어올때 true가 아닌 경우를 고르시오.

// ① Number(2)

// ② Number(2).valueOf()

// ③ Number(2).toString()

// ④ 2.valueOf()

// ⑤ 2 .toString()



// -----------------------------------------------------------------------------------


// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'orange']


// const a = fruits.forEach(function (item, i){
//     console.log(`${item}-${i}`);   
// }) 
// console.log(a);


// const b = fruits.map(function (item, i){
//      return `${item}-${i}`
// })
// console.log(b);


// const c = fruits.map(function (item, i){
//     return {
//         id: i,
//         name: item
//     }
// })
// console.log(c);


// 출력되는 값을 작성하세요.


// -----------------------------------------------------------------------------------

// 아래의 함수를 익명함수로 만들고 즉시실행가능한 함수로 만들어보세요.
// (아래의 코드는 함수를 작성하고 함수를 호출하는 방법이다)

// const a = 20;

// function double(){
//     console.log(a * 2);
// }
// double();




