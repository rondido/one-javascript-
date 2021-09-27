


// 19.
function t1(){
    console.log('1');
}

function t2(n, s){
    console.log('2');
}

function t3(){
    console.log('3');
    return 888;
}

function t4(n){
    console.log('4');
    return n*2;
}

t1()
t2(10, '홍길돌');
console.log(t3());
console.log(t4(5));

function t5(){ // 인수를 적지 않아도 사용가능함
    console.log(arguments.length); // 내부에 예약된 객체
    for (const key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }
}
t5(10, 20, 30)



function f4(num){console.log(num);}
f4(100);

(function(num){
    console.log(num);
})(200);

(function(dt){
let start = new Date().getTime();
while(new Date().getTime() < start+1000);
})(2000);
console.log('test');


//생성자 함수: 클래스와 동격이다.
function Fff555(){
    this.num = 10;
    this.num2 = 10;
    this.m1() = function(){
        console.log('m1');
    }
    this.m2() = () => {
        console.log('m1');
    }
}

let ins = new Fff555();
ins.m1();
ins.m2();
new Fff555().m1();




// f1() 
//  function f1(){
//      console.log('1'); //호이스팅 방식
//  }

//  //호이스팅이 안댄다
//  f2();
//  let f2 = function(){
//      console.log('2');
//  }

// function f1(){
//     console.log('1');
// }
// f1()

// let f2 = function(){
//     console.log('2');
// }
// f2();


// let f3 = () => {
//     console.log('3');
// }
// f3();


// //즉시 실행 함수
// (function(){ 
//     console.log('4'); 
// })(); // 곧 호출 하겠다. 즉석 떡볶이 같은 존재;
// ((function(){ 
//     console.log('5'); 
// }))();




// console.log(100 == 100);
// console.log(100 == '100');
// console.log(100 === '100'); //엄격하게 같은지를 비교한다. 값과 data type까지 같은지를 비교한다.

//  let start = new Date().getTime();
//  console.log(start); 

//  while(new Date().getTime() < start+2000);

// for(var i =0; new Date().getDate() < start + 1000; i++){
// }

// console.log(i);
// Data()

// let nm = new Date();
// console.log(nm.getFullYear(),'년');

// console.log(nm.getMonth(),'월');
// console.log(nm.getDate(),'일');

// console.log(nm.getDay() + '요일');
// console.log(nm.getHours() + '시');
// console.log(nm.getMinutes() + '분');
// console.log(nm.getSeconds() + '초');
// console.log(typeof(nm));
// console.log(typeof(typeof(Date)));
// console.log(typeof n);
// console.log(typeof date);

// console.log(3**4**2); //3의 4승 4의 2승
// console.log(3**16);
// console.log(Math.pow(3,4));

// Java와 동일
// 산술연산, 비교연산, 논리 연산 
// 증가연산, 감소연산 , 복합대입연산
// 제어문 동일,삼항연산, true,false



// let s = '1000';
// let n = 1000;
// console.log(typeof(s), typeof(n));

// console.log(Number(s) + 10);
// console.log(parseInt(s) + 10);
// let r1 = s;
// let r2 = s;
// console.log(typeof(r1), typeof(r2));

// console.log(String(n) + 0);



// //Ex 6) var , let 차이
// var a = 10;

// if (true) {
//     var a = 20;
//     console.log(a); // 20
// }

// console.log(a); // 20

// let b = 10;

// if (true) {
//     let b = 20;
//     console.log(b); // 10, 지역성 유지
// }

// console.log(b); // 10

// //Ex 7) const
// const a = 10;
// a = 20;
// console.log(a);

// //Ex8) 문자열 더하기
// let str = "호랑이";
// str += "독수리";

// console.log(str);