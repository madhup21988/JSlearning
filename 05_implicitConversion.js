var result;

result='3'+2;
console.log("implicit conversion to String",result);



result='3'+true;
console.log("implicit conversion to String",result);


result='3'+undefined;
console.log("implicit conversion to String",result);


result='3'+null;
console.log("implicit conversion to String",result);

console.log("===========Implicit Boolean  Conversion to Number===================");

result='4'-true;
console.log("Implicit Boolean  Conversion to Number",result);


result='4'+true;
console.log("Implicit Boolean  Conversion to Number",result);


result='4'+false;
console.log("Implicit Boolean  Conversion to Number",result);

console.log("===========Implicit string Conversion to Number===================");

result='4'-'2';
console.log("Implicit string Conversion to Number",result);


result='4'-2;
console.log("Implicit string Conversion to Number",result);

result='4'*2;
console.log("Implicit string Conversion to Number",result);

result='4'/2;
console.log("Implicit string Conversion to Number",result);

console.log("===========Implicit string Conversion to Number===================");







