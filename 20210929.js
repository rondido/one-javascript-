let obj = {
    n: 10,
    obj2:{
        f1 : () =>{
            console.log(this);
            console.log(this.n);
            
        }
    }
}
obj.obj2.f1();
function Ffff(){

}
let ins = Ffff(); //인스턴스


// 생성자 함수(클래스) >> new
// function Func(){
//     this.num = 100;
//     this.obj = {
//         num : 200,
//         f1 : () =>{
//             console.log(this);
//         },
//         f2:function(){
//             console.log(this);
//         }
//     };
//     this.m1 = function(){

//     }
// }

// let ins = new Func();
// ins.obj.f1();
// ins.obj.f2();

//객체 안에서 람다 사용은 주의 해야한다. 
//람다에서 this를 사용하면 빈객체가 된다.
// let obj ={
//     num: 100,
//     func01:()=>{
//         console.log(this);
//         console.log(this.num);
//     },
//     func02 : function(){
//         console.log(this);
//         console.log(this.num);
        
//     },
//     func03(){
//         console.log(this);
//         console.log(this.num);          
//     },
// }

// obj.func01();
// obj.func02();
// obj.func03();



// //다양하게 활용 가능: 절대값 비교
// function fuc(a,b){
//     return a.n - b.n;
// }

// let a = 'abc';
// let array = ['d','e','f'];
// let Object = [{
//     name:'a'
//     },
//     {
//         name:'b'
//     }
// ]
// console.log(a.length);
// console.log(array.length);

// array.forEach((v,i) => {
//     console.log(v,i);
// })
    





// var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
//     return accumulator + currentValue;
//   }, 0);
//   console.log(sum);

//   var total = [0,1,2,3].reduce((accumulator,currentValue) => accumulator + currentValue,0);

// var initialvalue = 0;
// var sum = [{x:1}, {x:2},{x:3}].reduce(function (accumulator, currentValue){
//     return accumulator + currentValue.x;
// },initialvalue)

// console.log(sum);

// var flattened = [[0,1], [2,3],[4,5]].reduce(
//     function(accumulator,currentValue){
//         return accumulator.concat(currentValue);
//     },
//     []
// );

// var flattened = [[0,1],[2,3],[4,5]].reduce(  (accumulator,currentValue) =>{
//     return accumulator.concat(currentValue);
//     },
//     []
// );

// var names = ['Alice', 'Bob', 'TIff', 'Bruce','Alice'];

// var countedNames = names.reduce(function (allNames, name){
//     if(name in allNames){
//         allNames[name]++;
//     }
//     else{
//         allNames[name] = 1;
//     }
//     return allNames;
// }, {});

// console.log(countedNames);

// var people = [
//     {name:'Alice', age: 21},
//     {name:'max', age: 20},
//     {name:'Jane', age:20}
// ];

// function groupBy(objectArray, property){
//     return objectArray.reduce(function(acc,obj){
//         var key = obj[property];
//         if(!acc[key]){
//             acc[key] = [];
//         }
//         acc[key].push(obj);
//         return acc;
//     }, {});
// }

// var friends = [{
//     name: 'Anna',
//     books: ['Bible','Harry Potter'],
//     age: 21
// },{
//     name:'Bob',
//     books:['War and peace', 'Romeo and Juliet'],
//     age: 26
// },{
//     name: 'Alice',
//     books: ['The Lord of the Rings', 'The Shining'],
//     age: 18
// }];
// var allbooks = friends.reduce(function(accumulator,currentValue){
//     return [...accumulator,...currentValue.books];
// },['Alphabet']);
// console.log(allbooks);


// let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
// let result = arr.sort().reduce((accumulator,current)=>{
//     const length = accumulator.length
//     if(length === 0 || accumulator[length -1 ] !== current){
//         accumulator.push(current);
//     }
//     return accumulator;
// }, []);
// console.log(result);

// let arr = [
//     {
//       name: "tiger",
//       age: 10,
//       ranges: [
//         [20, 38],
//         [99, 202],
//         [333, 444],
//       ],
//     },
//     {
//       name: "lion",
//       age: 10,
//       ranges: [
//         [88, 123],
//         [555, 572],
//         [633, 884],
//       ],
//     },
//   ];

  

//   console.log(arr[0].ranges.reduce());
//   console.log(
//     arr[0].ranges.reduce((count, [from, to]) => {
//       return count + (to - from);
//     }, 0) +
//     arr[1].ranges.reduce((count,[from, to]) => {return count + (to - from);},0)
//   );
  






// //reduce
// const array1 = [1,2,3,4];
// const reducer = (previousValue, currentValue) => previousValue + currentValue;

// console.log(array1.reduce(reducer));


// // 배열안에 값에서 5를 값이 합해져서 나옴
// console.log(array1.reduce(reducer, 5));



// //some: 하나만 만족해도 true
// let ar = [1,5,11,39,21];
// console.log(ar.some(v => v % 2 == 0));

// //특정 조건을 이용해서 내가 원하는 데이터를 뽑아서 사용.
// let br = ar.filter( v => v < 15);
// console.log(br);


// //every :결석데이터(있어야하는 데이터가 없거나, 없어야 되는 데이터 있는 경우)찾을때 사용
// let ar = [1,2,10,39,20]

// let br =[1,2,10,50,20];


// // let func = function(){
// //     return value < 40;
// // }



// console.log(ar.every(func));
// console.log(br.every((value) => v < 40));
// console.log(br.every(
//     (v) => {return v < 40}
// ));

// //indexof : 검색
// let ar = ["tiger","cat","lion","apple"];
// console.log(ar.indexOf("lion"));
// console.log(ar.indexOf("lon"));

// console.log(ar.indexOf("lion", 3)); //3은 인덱스 번호 3인곳부터 찾아라
// console.log(ar.lastIndexOf("apple"));



// //splice
// let ar =[1,2,3];
// // [시작위치,삭제항목수,추가항목]
// ar.splice(1,0,10,20,30);
// console.log(ar);
// ar.splice(1,2,88,99);
// console.log(ar);

// let br =[66,55.44,33];
// ar.splice(0,0,br);
// console.log(ar);

// let ar = [
//     {n:30, s:'삼성'},
//     {n:20, s:'현대'},
//     {n:10, s:'롯데'},
// ]

// function func(a, b){
//     return a.n - b.n;
// }
// ar.sort(func);
// console.log(ar);

// // 52. slice - 특정 부분을 잘라낼때 사용
// // slice() - 원본 손상 없음
// let ar = [10, 20, 30, 40, 50, 60];
// // slice 유효 범위 : silce(2, 4) = [2, 4) - 주석을 잡아 표기하기도 함
// let br = ar.slice(2, 4); // 2 <= x < 4
// console.log(ar);
// console.log(br);

// //sort //숫자로 보는게아니라 문자열로 본다 그래서 사전순으로 정열 해준다.
// let ar = [52,73,13,32];
// ar.sort();
// console.log(ar); // 103,273,32,52

// ar.sort(func);

// //규칙 설정
// function func(a,b){ //인터페이스화 무조건 인수 2개를 받아야한다.
//  //  return   (a > b) ? +1 : -1;   
//  let c = a / 10 + a % 10;
//  let d = b/ 10 + b % 10;
//  return a- b;
// }
// ar.sort(func);
// console.log(ar);




//shift
// let ar = [10,20,30];
// console.log(ar.shift());
// console.log(ar);
// console.log(ar.unshift(40)); //데이터 추가 갱신 가능
// console.log(ar);
// console.log(ar.unshift(50, 60, 70));
// console.log(ar);


//reverse
// let ar = [10,20,30];
// console.log(ar.reverse());

//join
// let ar = ['tiger','lion','cat'];
// console.log(ar.join());
// console.log(ar.join(''));
// console.log(ar.join(" + "));

//ex34)concat()
// let ar = [10,20,30];
// let br = ar.concat(40);
// console.log(ar);
// console.log(br);

// let cr = [40,50,60];
// let dr = ar.concat(cr);
// console.log(dr);
// console.log('test');

// let er = [...ar,...cr];
// console.log(er);

// let fr = ar.push(ar);
// console.log(fr);



// let ar = [80,20,10,15];
// //pop()* : *는 원본 데이터를 손상시킨다
// let num = ar.pop();
// console.log(ar,num);

// //push()
// ar.push(20);
// console.log(ar,num);



//ex33) 배열의 함수

// let ar = [80,20,10,15];
// console.log(ar, typeof ar, Array.isArray(ar));

// let br= ar.toString();
// console.log(br, typeof br);

// let st01 = "80,20,10,15";
// console.log(st01, typeof st01);

// let date = new Date();
// console.log(date);
// log

//디버깅
// let ar = [
//     {
//         n:"호랑이",
//         a:10,
//     },
//     {
//         n:"코끼리",
//         a:10,
//     },
//     {
//         n:"독수리",
//         a:30,
//     },
// ]
// console.log(1);
// console.log(ar);
// console.log(2);

// for(const v of ar){
//     console.log(v); 
// }


// console.log(3);
// console.log(ar);
// console.log(4);
