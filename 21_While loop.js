
var a=1;

while(a<=10){
    console.log(a);
    a++;
}

var names=["Ram","sam","Ravi","Sundar"]
var find;
var array=0; 
while(array<4){
    find=names[array];
    if(find=="Ravi")
    {
        console.log("Yes.available in ",array)
        break;
    }
    else{
        array++;
    }
}
