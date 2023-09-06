/*
if(condititon){
    -----------
    -----------
}
*/

//Examble - 1
let age=17;
if(age>=18)
{
    console.log("your eligible for vote");
}
else if(age<=17 && age>=15)
{
    console.log("please wait few years");
}
else
{
    console.log("your not eligible for vote");
}

//Examble - 2
var avg=72;
var grade;
if(avg>=90 && avg<=100){
    grade='A';
}
else if(avg>=80 && avg<=89){
    grade='B';
}
else if(avg>=70 && avg<=79){
    grade='C';
}
else{
    grade='D';
}
console.log('Grade : ',grade);