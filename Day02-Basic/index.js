////////////////////////////  use divide operaters //////////

// when we use divide operator , it gives floating value
// to stop this floating value , we use Mathfloor()

// let a=7;
// let b = 2;

console.log(a/b)    // output= 3.5
console.log(Math.floor(a/b));  // ouput = 3
console.log(Math.floor(b/a));  // output = 0


//////////////////  using modulous operatores ///////
// let a=7;
// let b = 2;

console.log(a%b);  // output = 1   // in modulous sign which is written leftside is divident , right side divisior
console.log(b%a);  // output = 2 //  if the divisior is larger then the divident , then the answer is the dividant itself 


/////////////////////////////////
///////////////////////// go throughly in unary operator ////////////
/////////////////////////////////
// let a = 11;   // output= 12
// let b = a++;   // output= 11

console.log(a)
console.log(b)


////
// let a = 11;   // output= 12
// let b = ++a;   // output= 12

console.log(a)
console.log(b)

//////example////
let i = 11;
i = i++ + ++i;
console.log(i);

//////example 2////
let a =11 , b=22;
let c= a + b + a++ + b++ + ++a + ++b;
console.log("a=" +a);
console.log("b=" +b);
console.log("c=" +c);


//////////////////////example = area of rectangle
// let length = 10
// let breadth = 20 ;
// console.log(length*breadth);


//////////////////////example = perimetere of rectangle   // formula = 2*(length+breadth)
let length = 10
let breadth = 20 ;
console.log(2*(length+breadth))


///////example =  generate a otp of 4 digit

console.log(Math.trunc((Math.random()*9000)+1000))



//////////////////////example = area of tringle by heron's formula
///// what is heron's formula =  Math.sqrt (s * (s-a) * (s-b) * (s-c))
//// what is s ?  s is semiparemeter // formula = (a+b+c)/2

// let a = 5;
// let b= 4;
// let c= 3;

// let s= (a+b+c)/2
// console.log(s);

// console.log(Math.sqrt(s * (s-a) *(s-b) * (s-c)));




// /////////// what is circumference of circle? //////// formula = 2*pi*r
// let r =14;

// console.log((2*Math.PI*r).toFixed(2))


///////////////////if else //////////////


// wap check the voter are they eligable or not ///////
let voter1 = prompt("whats your age")
console.log("voter age is =",voter1);
if (voter1>=18) {
    console.log("you are eliglble for vote");
} else {
    console.log("you are not eliglble for vote");
}


///////make it full proof syntax//
let voter = Number(prompt("whats your age"));

if(isNaN(voter)){
    console.log("its not a valid input")
}
else if(voter>=18){
    console.log("u r eliglble for vote")
}
else{
    console.log('u r not eliglble for vote')
}


//////////////////shop discount ///////