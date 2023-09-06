/*
if(condition){
    if(condition){
        --------
        --------
    }
}
*/

var eng=95,tamil=98,math=75;
var total=eng+tamil+math;
var avg=total/3;
console.log("Total : ",total);
console.log("Avg : ",avg.toFixed(2));

if(eng>=35 && math>=35 && tamil>=35){
    console.log("Result : Pass")
    if(avg>=91 && avg<=100){
        console.log("Grade : A")
    }
    else if(avg>=81 && avg<=90){
        console.log("Grade : B")
    }
    else if(avg>=71 && avg<=80){
        console.log("Grade : C")
    }
    else{
        console.log("Grade : D")
    }
}
else{
    console.log("Result : Fail")
    console.log("Grade : No grade")
}