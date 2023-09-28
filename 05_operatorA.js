function  squareOfWordLength(str)
{
     var lengthOfstr=str.length;
     var result= lengthOfstr*lengthOfstr;
     return result;
}
console.log("==============Step 1=======================")

console.log("==============Call Function 1.3.1=======================")
var resultn=squareOfWordLength("Javascript");
console.log(`"square of given string length is:" ,${resultn}`);

console.log("==============Call Function 1.3.2=======================")
var resultG=squareOfWordLength("Google Chrome");
console.log(`"square of given string length is:" ,${resultG}`);

console.log("==============Call Function 1.3.3=======================")
var resultD=squareOfWordLength("Developer Smart");
console.log(`"square of given string length is:" ,${resultD}`);

console.log("==============Step 2=======================")

function newString()
{
     var str2="I am Angular Developer";
     var str3=str2.length;
     var resultl=str3/str2.length;
     
     console.log(`2.1 : length is ${str3} ,After divide by total no.available in string is : ${resultl} `);
    
     var results=str3*str2.length;
     
     console.log(`2.2 :length is ${str3} ,After Multiplication by total no.available in string is : ${results} `);

}
newString();




