// function f1(){
//     return {
//         a:10,
//         f:function(){}
//     }
// }
// let obj1 = f1();
// let obj2 = f1();
// console.log(obj1.f === obj2.f);

// function F1(){
//     this.a = 10;
//     this.f = function(){}
// }

// let ins1 = new F1(); //인스턴스
// let ins2 = new F1();
// console.log(ins1.f === ins2.f);

// function F2(){
//     this.a = 10;
// }
// //외부에서 공용함수를 만든다
// let ins3 = new F2();
// let ins4 = new F2();
// F2.prototype.f = function(){} ;
// console.log(ins3.f === ins4.f);

//외부에서 함수 추가
// let obj = {

// }

// obj.f1 = function(){
//     console.log(1);
// }
// obj.f1();
// function F1(){

// }
// F1.prototype.f1 = function(){
//     console.log(2);
// }
// let ins = new F1();


//step1
//객체 생성 앞에는 키값이다 value값
// let obj0 ={  name:"호랑이0", n1:10, n2:60, };
// let obj1 ={  name:"호랑이1", n1:20, n2:70, };
// let obj2 ={  name:"호랑이2", n1:30, n2:80, };
// let obj3 ={  name:"호랑이3", n1:40, n2:90, };
// let obj4 ={  name:"호랑이4", n1:50, n2:10, };

// let ar = [];
// ar.push(obj0);
// ar.push(obj1);
// ar.push(obj2);
// ar.push(obj3);
// ar.push(obj4);

// ar.forEach(Element => {
//     console.log(Element.name,Element.n1,Element.n2);
// })

// step2
// let ar = [];
// ar.push({name:"호랑이0", n1:10, n2:60});
// ar.push({name:"호랑이1", n1:20, n2:70});
// ar.push({name:"호랑이2", n1:30, n2:80});
// ar.push({name:"호랑이3", n1:40, n2:90});
// ar.push({name:"호랑이4", n1:50, n2:10});
// ar.forEach(v => {
//     console.log(v.name,v.n1,v.n2);
// })


// step3  key : 변수
// function makeinfo(name,n1,n2){
//     let obj = {
//         name : name,
//         n1 : n1,
//         n2 : n2
//     }
//     return obj;
// }
// let ar = [];
// ar.push(makeinfo("호랑이0", 10, 60));
// ar.push(makeinfo("호랑이1", 20, 70));
// ar.push(makeinfo("호랑이2", 30, 80));
// ar.push(makeinfo("호랑이3", 40, 90));
// ar.push(makeinfo("호랑이4", 50, 10));
// ar.forEach(v => {
//     console.log(v.name,v.n1,v.n2);
// })

//step4 객체생성을이용한 push
// function makeinfo(name,n1,n2){
//     this.name = name;
//     this.n1 = n1,
//     this.n2 = n2    
// }
// let ar = [];
// ar.push(new makeinfo("호랑이0", 10, 60,));
// ar.push(new makeinfo("호랑이1", 20, 70,));
// ar.push(new makeinfo("호랑이2", 30, 80,));
// ar.push(new makeinfo("호랑이3", 40, 90,));
// ar.push(new makeinfo("호랑이4", 50, 10,));
// ar.forEach((v,i) =>{
//     ar[i].sum = v.n1+v.n2;

//  });

// ar.forEach(v => {
//     console.log(v.name,v.n1,v.n2,v.sum);
// })


// makeinfo.prototype.output = function(){
//     console.log(this.name,this.n1,this.n2,this.sum);
// }

// for(let index in ar){  
//     ar[index].output();
// }


//step 상속 : 실제로 사용하는 경우
// function Apple(){
//     this.query = {
//         name:'홍길동',
//         age:100,
//     };
// }

// function Orange(){
//     this.request ={
//         x:10,
//         y:20,
//     };
// }
// //상속 관계가 댄다
// Orange.prototype = new Apple();
// Orange.prototype.constructor = Orange;

// let ctx = new Orange();
// console.log(ctx.query);
// console.log(ctx.request);

//수학 함수
//math.pi
// console.log(Math.PI);


// abs 절대값 , ceil, flow, round
//min max, log, pow, sqrt
// console.log(Math.sqrt(3));
// console.log(1.7*1.7);

// console.log(Math.random());  //0.0~1.0까지 랜덤
// console.log(Math.random() * 100);
// console.log(Math.floor(Math.random() * 100));

// //
// console.log(Math.sin(30));


// let r = 100 * Math.PI * 30.0 / 180.0
// console.log(Math.sin(r));


let obj = {
    a : 10,
    b : "호랑이",
}
let str = JSON.stringify(obj);
console.log(str);
let json = JSON.parse(str);
console.log(json);
console.log(`${typeof json} ${json}`);



    

 
