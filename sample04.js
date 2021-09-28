// //Promise
// const myPromise = new Promise((resolve, reject)=>{
//     console.log("doning some heavy work: network, read files")
//     setTimeout(()=>{
//        resolve('hi');
//        reject(new Error('this is error msg'));
//     }, 2000);
//   })
  
//   myPromise.then(value=>{
//     console.log(value) // resolve 가 있다면 'hi' 출력 
//   })
//   .catch(error=>{
//     console.log(error) // reject에 있는 'this is error msg' 출력
//   })
//   .finally(()=>{
//     console.log('finally!!')
//   })


//   const initialPokemon = () =>
//   new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve('파이리'), 1000)
//   });

// const nextPokemon = prevPokemon =>
//   new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve(`${prevPokemon} => 리자드`), 1000)
//   });

// const finalPokemon = prevPokemon =>
//   new Promise((resolve, reject)=>{
//     setTimeout(()=>resolve(`${prevPokemon} => 리자몽`), 1000)
//   });

// initialPokemon() // 1초 소요
//   .then(prev=>{
//     console.log(prev) // 파이리
//     return nextPokemon(prev) // 1초 소요
//   })
//   .then(prev=>{
//     console.log(prev) // 파이리 => 리자드
//     return finalPokemon(prev) // 1초 소요
//   })
//   .then(console.log) // 파이리 => 리자드 => 리자몽

