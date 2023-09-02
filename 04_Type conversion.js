//string conversion | v=String(v)
var a=25;
console.log("before type of a = ",typeof a,a);
a=String(a);
console.log("after type of a = ",typeof a,a);

var a=new Date();
console.log("before type of a = ",typeof a,a);
a=String(a);
console.log("after type of a = ",typeof a,a);

var a=[10,20,30,40,50];
console.log("before type of a = ",typeof a,a);
a=String(a);
console.log("after type of a = ",typeof a,a);

var a=true;
console.log("before type of a = ",typeof a,a);
a=String(a);
console.log("after type of a = ",typeof a,a);

//number conversion

var b="125";
console.log("before type of b = ",typeof b,b);
b=Number(b);
console.log("after type of b =",typeof b,b);

var b=true;
console.log("before type of b = ",typeof b,b);
b=Number(b);
console.log("after type of b =",typeof b,b);
