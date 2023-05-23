// Remember, we're gonna use strict mode in all scripts now!
"use strict";

let a = 1;
let b = 1;

function printForecast(arr){
    let text="...";
    arr.map((arr,index)=>{
        text=text+`${arr}C in ${index+1} days ...`
    });
    console.log(text+"...")
}


printForecast([17,21,23]);