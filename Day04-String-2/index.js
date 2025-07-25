// wap toggel each character //// (if a character is capital then make is small and if a character is small then make it capital)

let str = "abhilashABHILA"
console.log(str)
let toggel = ""
for (let i = 0; i < str.length; i++) {
    let ch = str.charAt(i);
    if (str.charCodeAt(i)>=65 && str.charCodeAt(i)<=90) {
        toggel = toggel + String.fromCharCode(str.charCodeAt(i)+32)
    } else if (str.charCodeAt(i)>=97 && str.charCodeAt(i)<=122){
        toggel = toggel + String.fromCharCode(str.charCodeAt(i)-32)
    }
    
}
console.log(toggel)


/// UPDATED VERSION ////
let str1 = "abhiLASH"
console.log(str)
let toggel1= ""

for (let i = 0; i< str1.length; i++) {
    let ch = str1.charCodeAt(i)
    if(ch>=65 && ch <=90){
      toggel1 = toggel1 + String.fromCharCode(ch+32)
    }
    else if(ch>=97 && ch<=122){
      toggel1 = toggel1 +String.fromCharCode(ch-32)
    }
}
console.log(toggel1)



///  wap frequency of each character in a string   ////

let str2 = "hello"
let arr = new Array(128).fill(0)

for (let i = 0; i < str.length; i++) {
    let index = str.charCodeAt(i);
    arr[index]=arr[index]+1;
}
for (let i = 0; i < arr.length; i++) {
    if (arr[i]>0) {
        console.log(String.fromCharCode(i) + " " +"appears at" + " " +  arr[i]  +  "times")
    }
    
}
console.log(arr)
