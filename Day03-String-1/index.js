/// print elemet of string  ////

let str = "abhilash"
for (let i = 0; i < str.length; i++) {
   console.log(str[i]) ;
    
}



//// user input  print elemet of string  ///// 

let str1 = prompt("write here....")

for (let i = 0; i < str.length; i++) {
    console.log(str[i])
    
}




//////////  reverse the elemet of string  /////

let str2 = "abhilash"
for (let i = str.length-1; i >=0 ; i--) {
    console.log(str.charAt(i))
    
}




/// wap reverse the whole string  ///

let str3 = "abhilash"
let reverse = "";
for (let i = str.length-1; i >=0; i--) {
    reverse=reverse+str[i]
    
}
console.log(reverse);




/// wap check if the string is pallindrom or not  ///

let str4 = prompt("enter here")
let reverse1 = ""
for (let i = str.length-1; i>=0; i--) {
    reverse1 = reverse1+ str.charAt(i)
    
}
if (reverse1===str) {
    console.log(`${str} is a palindrome.`);
} else {
    console.log(`${str} is not a palindrom`)
}



// wap check if the string is pallindrom or not  by 2 pointer algorithm ///
let str5 = prompt("enter here...")
let i =0 ,j = str.length-1 ;
let ispalindrom =true
while(i<j){
    if (str.charAt(i)!= str.charAt(j)) {
        ispalindrom = false
        break;
    }
    i++
    j--
}
if (ispalindrom) {
    console.log(`${str} is a palindrom number`)
} else {
    console.log(`${str} is not a palindrom number`)
}
