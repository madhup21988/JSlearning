console.log("==============step1===================");
function greaterNumber(var1, var2) {
  var result = var1 > var2 ? var1 : var2;
  console.log(`Greater Number is:${result}`);
}
console.log(`first time function call Value pass:10,-10`);
greaterNumber(10, -10);
console.log(`second time function call Value pass:800,-899`);
greaterNumber(800, -899);

console.log("==============step2===================");
function isEvenOrOddNumNumber(num) {
  var result = num % 2 == 0 ? "Even" : "odd";
  console.log(`Given Number ${num} is:${result}`);
}
console.log(`first time function call Value pass:29`);
isEvenOrOddNumNumber(29);
console.log(`second time function call Value pass:44`);
isEvenOrOddNumNumber(44);
console.log(`third time function call Value pass:0`);
isEvenOrOddNumNumber(0);
console.log(`fourth time function call Value pass:101`);
isEvenOrOddNumNumber(101);

console.log("==============step3===================");

function  ChkOfWordLength(str)
{
     var wordLength=str.length;
     var result=wordLength%2==0?"Even":"Odd";
     return result;
}

console.log("==============Call Function =======================")
var resultn=ChkOfWordLength("Javascript");
console.log(`given string length is: ${resultn}`);

console.log("==============Call Function =======================")
var resultG=ChkOfWordLength("Google Chrome");
console.log(`given string length is: ${resultG}`);

console.log("==============Call Function =======================")
var resultD=ChkOfWordLength("Developer Smart");
console.log(`given string length is:${resultD}`);

