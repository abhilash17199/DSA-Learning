// let a = 10;
// let b =20 ;
// console.log("the sum of the two number is " , a+b);


///////////////Type Corection {new chapter} ///////

// when we use + operator in two numbers , it addtion two numbers ,
// but when we use + operator in one is  string and anotherone is  number , then it concaninate
// but in other case , it perform intenligentcally , to perform the task according to the operator given  

// console.log("1"+1);     // output = 11 //// here , it only perform the concaninate
// console.log("1"-2);     // output = -1   ////in othercase it following the operater 
// console.log("1"*2);     // output = 2
// console.log("1"/1);     // output = 1


////////////////Swapping {with extra variable}///////////
// let a = 10;
// let b = 20 ;
// let c ;

// c=a;
// a=b;
// b=c;
// console.log(a);
// console.log(b);


////////////////Swapping {without extra variable}///////////
// let a = 10;
// let b = 20 ;

// a = a+b;   /// a = 30
// b=a-b;     ///  b=10 ,  a=30
// a=a-b;     ///  b = 10 , a=20

// console.log(a);
// console.log(b);


////////////////Swapping {using array destructuring assignment}///////////
// let a = 10;
// let b = 20 ;

// [a,b] = [b,a]
// console.log(a);
// console.log(b);


////////////////////////////  use divide operaters //////////

// when we use divide operator , it gives floating value
// to stop this floating value , we use Mathfloor()

// let a=7;
// let b = 2;

// console.log(a/b)    // output= 3.5
// console.log(Math.floor(a/b));  // ouput = 3
// console.log(Math.floor(b/a));  // output = 0
