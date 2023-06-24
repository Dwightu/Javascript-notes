// 'use strict';

// a()

// function a(){
//     console.log('hhhhhhhhh');
//     console.log(this)
// }



// const people={
//     age: 13,
//     calcAge: function(){
//         console.log(this);
//         const calcAgeExt = function(){
//             console.log(this);
//         }
//         calcAgeExt.bind(this)
//         calcAgeExt()
//     }
// }

// people.calcAge();

let a=1;
let b=a;

b=23;

console.log(a,b)

let af={
    age:1
}
let bf=af;
bf.age=123;

console.log(af,bf)