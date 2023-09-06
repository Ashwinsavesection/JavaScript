//basic of booleon in decimal true=1 false=0

var bit=23;
var bit2=10;

console.log("AND : ",bit&bit2);

/*
  AND(&) : anything true is true,any one false is false.

  Binery       decimal 

  0001 0111    23
  0000 1010    10
  ---------------
  0000 0010    2

*/

console.log("OR  : ",bit|bit2);

/*
  OR(|) : any one true is true,all false is false.

  Binery       decimal 

  0001 0111    23
  0000 1010    10
  ---------------
  0001 1111    31

*/

console.log("NOT : ",~bit);


/*
    NOT(~) : add 1 that number to negative

    23  23+1=24  -24

*/

console.log("Xor : ",bit2^bit);

/*
  Xor(^) : Reverse of AND(&) true = false , false = true

  Binery       decimal 

  0001 0111    23
  0000 1010    10
  ---------------
  0001 1101    29

*/

console.log(bit<<2);

/*
    n = enter value 
  left Shift(<<) : added 'n' 0s in binery number
  examble n=2

  0001 0111        23
  0101 1100        92
*/

console.log(bit>>2);

/*
    n = enter value 
  left Shift(>>) : added 'n' 0s in binery number
  examble n=2

  0001 0111        23
  0000 0101        92
*/