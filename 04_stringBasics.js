var greet = 'Good Morning';

console.log("========= length property =============");
var totalLength = greet.length;
console.log('Length of the string is: ', totalLength);

console.log("========== charAt() =============== ");
var charAt0 = greet.charAt(0);
console.log("Character at index 0 is: ", charAt0);

console.log("========== charAt() =============== ");
var charAt5 = greet.charAt(5);
console.log("Character at index 5 is: ", charAt5);


var lastIndexChar = greet.charAt(greet.length-1);
console.log('Last index char is: ', lastIndexChar);

var lastIndexthirdChar = greet.charAt(greet.length-3);
console.log('Last index char is: ', lastIndexthirdChar);


console.log("========== concatenation =============== ");
var firstName = "Jenny";
var lastName = " Gates"
var result = firstName.concat(lastName);
console.log(result);

console.log("========== indexOf =============== ");
var indexOfM = greet.indexOf('M');
console.log('Index of M is: ', indexOfM);

 console.log(greet.indexOf('nin'));

 console.log('Index of char z:',greet.indexOf('z'));

 console.log('Index of char D:',greet.indexOf('D'));
 console.log('Index of char o is:', greet.indexOf('o'));
 console.log('Index of char o is:', greet.lastIndexOf('o'));

 console.log("========== replace =============== ");
var result =greet.replace('Morning', "Afternoon");
console.log(result);
var result = greet.replace(' ', "-");
console.log(result);


console.log("========== trim() =============== ");
var str = "   Good Afternoon  ";
var lengthBeforeTrim = str.length;
console.log("Length before trim : ", str.length);
var result = str.trim();
console.log("Length after trim: ", result.length);
var lengthAfterTrim = result.length;
var result = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', result);

var strs = " Hey you are doing good, keep it up "
var lengthBeforeTrim = strs.length;
console.log("Length before trim : ", strs.length);
var resultl = strs.trim();
console.log("Length after trim: ", resultl.length);
var lengthAfterTrim = resultl.length;
var resultp = lengthBeforeTrim - lengthAfterTrim;
console.log('Removed extra spaces are: ', resultp);


console.log("========== slice() =============== ");
var greet = 'Hello Good Morning!';
var result = greet.slice(6);
console.log(result);
var result = greet.slice(6, 10);
console.log(result);


console.log("========== split() =============== ");
var result = greet.split(" ");
console.log(result);

//WAP to count the total number words
var str = "I am UI Developer";
var words = str.split(" ");
console.log(words);
console.log('Total words is: ', words.length);
// console.log(typeof words);
console.log(`Total words is: ', ${words.length}:`);   //backtick



// String template
console.log(`I am "UI" Developer `);
var num1 = 10;
var num2 = 20;
var result = num1 + num2;
console.log("Addition of ", num1, "and ", num2, "is :", result);
console.log(` Addition of ${num1} and ${num2}  is: ${result}`);

