// 배열         객체
// []           {}
//인덱스생성     속성생성
//foreach사용   foreach불가
//length사용    length불가


let ar = [
    {
        n:"호랑이",
        a:"10",
    },
    {
        n:"코끼리",
        a:"20",
    },
    {
        n:"독수리",
        a:"30",
    },

];
console.log(ar);

for(const key in ar){
    let e = ar[key];
    console.log(e.n, e.a);
    console.log(e['n'], e['a']);
}
let sum = 0;
for (const v of ar){
    sum += v.a;
}
console.log(sum);

let br = ar.map((v,k) => v.n + "");
console.log();



// // index받기
// let ar = [10,20,30];
// console.log(ar);
// for(const index in ar){
    
//     console.log(index,ar[index]);
// }console.log();

// // 값 바로 받기
// for(const value of ar){
//     console.log(value);
    
// }
// ar.forEach(    
//     (v, i) => {
//         console.log(v, i);
//     }
// );console.log();

// let br = ar.map((num) =>{
//     return num * 10;
//     }
// )
// console.log(br);

// br = ar.map((num) =>{
//     num * 100
// })

// let cr = [0,1,2,3];
// let dr = cr.map(num => {
//     if( num % 2){
//         return "odd";
//     }else
//         return "even";
//     }
// );


// console.log(dr);

// let ar = [10,20,30];
// console.log(ar);
// console.log(ar.length);
// console.log(typeof(ar));
// console.log(Array.isArray(ar)); //배열 확인: true


// let ar = [
//     10,
//     "호랑이",
//     true,
//     [10,20,30],
//     {name:"독수리", age:10},
//     function(){},
//     undefined,
// ];
// console.log(ar);

// let br = Array(); //[]
// let cr = Array(5);
// let dr = Array(10,20,30);
// console.log(dr);














// //객체 병합:두개의 객체를 합쳐서 새로운 객체를 만든다.
// let obj1 = {
//     a : 10,
//     b : 20,
// }

// let obj2 = {
//     c : 30,
//     d : 40,

// }




// let obj3 = Object.assign(obj1,obj2);
// console.log(obj3);

// let f1 = (o) =>{
//     console.log(o.d);
// }


// let obj4 = {...obj1,...obj2};

// console.log(obj4);






// let c = "tiger";
// let obj = {
//     a : 10,
//     b : 20,
//     [c] : 30 // c가 가지고 있는 값이 key 값
// }

// console.log(obj.a,obj.b,obj.tiger);



// let obj = {
//     a: 10,
// }
// obj.b = 20;
// console.log(obj);

// obj['c'] = 30; //속성을 추가하는 방법 이와 같은 방법으로 써야할 경우가 있기때문에 알아두는 것이 좋다
// console.log(obj); 

// for (let i = 0; i < 4; i++){
//     obj['tiger' + i] = i*100;
// }
// console.log(obj);


// let obj = {
//     a : 10,
//     b : 20,
//     f1: function(){
//         console.log(this.a,this.b);
//     },    
//     // f2: () => {
//     //     console.log(this.a,this.b);  //undefined 람다식에는 this를 사용할 수 없다.
//     // }
//     f2:function(){
//         for (const key in this) {
//             console.log(this[key]);
//         }
//     }
// }

// obj.f1();
// console.log('------------------------------');
// obj.f2(); 



// let obj = {
//     a : 10,
//     b : 20,
//     f1: () => {console.log('f1')}
// }
// console.log(obj);
// obj.b = 99;
// obj.c = 30;
// console.log(obj);

// delete(obj.b); //obj 객체 b 를 삭제
// console.log(obj);
// obj.f2 = () => {console.log('test');}
// obj.f2();
// delete(obj.f1); // 함수 삭제

// let t = {
//     name : "호랑이",
//     age : 1,
//     bl : true,

// };
// console.log(t);
// console.log(t.name);
// console.log(t.age);
// console.log(t.bl);
// console.log(t['name'],t['age'],t['bl']);

// //객체에서는 foreach와 비슷한 for in 사용
// for (const key in t) {
//     //    console.log(t);
//     console.log(t[key]); //객체 안에 있는 값 표출
// }

// console.log(1,t.name,t.age);

// while(t){
//     console.log(2,name, age);
// }




// //문자
// let str = '' ;
// str += 'let a = 10;';
// str += 'console.log(a)';
// console.log(str);
// //문자열을 하나의 명령어로 해석
// eval(str);

// //비동기을 형식을 동기식으로 바꿔야한다.
// for(var i = 0; i<3; i++){
// setTimeout(()=>{
//         console.log(i);
//         },
//         1000
//     )
// }


// for(let i =0; i < 3; i++){
//     //즉시 실행
//     (function(x){
//         setTimeout(() => {
//             console.log(x);
//         }, i*1000);
//     })(i);
// }

// //비동기 함수 
// //실행의 순서를 지키지 않는다.
// // 내가원하는 시간 뒤에 함수를 호출
// console.log('1');
// setTimeout(
//     function(){
//         console.log('3');        
//     },
//     2000
// )
// console.log('2');

// //  회중시계 같은 것이다
// let num = 0;
// let id = setInterval(() => {
//     console.log(num++);
// }, 2000);

// setTimeout(
//     ()=>{
//         clearInterval(id)
//         console.log('exit');
    
//     },
//     1300
// );





// let f1 = () =>{
//     return 100;
// }
// //위와 아래는 같은 문법
// let f2 = () =>  100;

// let f3 = () =>{
//     return console.log(1);
// }

// let f4 = () => console.log(1);

// a => b => 100;
// a => b => {
//     return 100;
// }
// a =>{
//     return b => {
//         return 100
//     }
// };
// let a = function(a) {
//     return function(b){
//         return 100;
//     }
// }

// let t = function (a){
//     return function (B){
//         return 100;
//     };
// };
// console.log(t()());


// t = a =>{
//     return b => {
//         return 100
//     }
// };

// //1. 인수 없을때
// t =() => () => {return 100;}

// t= () =>{return () => {
//     return 100;
//     }
// }
// console.log(t()());

// //4
// t= (a) =>{return () => {
//     return 100 + a;
//     }
// }
// console.log(t(10)());

// //5
// t= (a) =>{ 
//     return (b) => {
//         return a + b;
//     }
// }

// console.log(t(10)(20));

// //6
// t = (a) => (b) => a + b; 

// //인수전달이 한개일때 괄호 생략 가능
// t = (a) => (b) => b + a;
// t = a => b => b + a;
 
// //1)
// ((a) => {(b) => {}})();

// (function(a) {
//     return (function(b){

//     })
// })();
// //2)
// ((a) => {(b) => {}})();

// ((a) => {

//         (b) => {} })();

// //3
// ((a) => {
//     ((b) => {
//         console.log(a + b)
//     })(20)
// })(10)

// (function(a){
//     (function(b){
//         console.log(a + b);
//     })(20)
// })(10);

// let f1 = function(fc){
//     fc(11);
// };

// f1((function(a){
//     (function(b){
//         console.log(a + b);
//     })(20)
// }));

// f1(((a) => {
//     ((b) => {
//         console.log(a + b)
//     })(20)
// }));


// let f1 = function(a){
//     console.log(a);
// }
// f1();

// // (a) => {}
// f1 = () => {
//     console.log(1);
// };
// f1(2);

// // (a) => {(b) => {}}
// f2 = function(a){
//     console.log(a);
//     f3 = function (b){
//         console.log(b);
//     }
//     f3(a+4);
// }
// f2(1);



// //클로즈 함수
// let f1 = function(){
//     let a = 100;
//     return function(){
//         console.log(a);        
//     }
// }
// f1()();



// // 리턴값이 함수인 즉시시행 함수
// (function(){
//     console.log(1);
//     return function(){
//         console.log(2);
//     }
// })()();


// let f1 = function(fc){
//     console.log('1');
//     let f2 = function(){
//         console.log('2');
//     }
//     return f2; //return f2(); 함수 호출 앞에꺼는 함수 2번자체 코드를 호출
// }
// f1()();

// let f3 = function(f3){
//     console.log('3');
//     return function(){
//         console.log('4');
//     };
// }
// f3()();


// let f1 = function(fc){
//     console.log('1');
//     f1();

// }
// let f2 = function(){
//     console.log('2');    
// }
// //방법 1
// f1(f2);
// //방법 2
// f1(function(){
//     console.log('3');    
// });
// //방법 3
// f1(() =>{
//     console.log('4');    
// });



// let f1 = function(){
//     console.log('1');
//     let f2 =function(){
//         console.log('2');
//     }
//     f2();
// }
// f1();

// let f1 = function(){
//     console.log('3');
//     let f2 =function(){
//         console.log('4');
//     }
//     f2();
// }
// f1();