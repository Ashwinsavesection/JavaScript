/*
    var
    let 
    let
*/

//1.scope

var a=25;//var scope is global so var access any area.
var b=25;
console.log(a+b);

if(true){
    let msg="let scope work only in particular scope";
}
if(true){
    const msg="const scope work only in particular scope";
}
//--------------------------------------------------

//2.variable redeclaretion

var redc=25;
var redc=44;
console.log(redc);

let redc2=23;
//let redc2=45;
console.log(redc2);

const redc3=46;
//const redc3=45;
console.log(redc3);
//------------------------------------------------

//3.value assigment

var a3=25;
a3=49;
console.log(a3);

let b3=20;
b3=34;
console.log(b3);

const c3=57;
//c3=45;
console.log(c3);
