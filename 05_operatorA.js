function  squareOfWordLength(str)
{
     var lengthOfstr=str.length;
     var result= lengthOfstr*lengthOfstr;
     return result;
}
var resultn=squareOfWordLength("Javascript");
console.log(`"square of given string length" ,${resultn}`);