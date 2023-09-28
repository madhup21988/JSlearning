console.log("Step1")

function stringHandsOn()
{
    var givenstring="  Hey you are doing good, keep it up   ";
    console.log("1.Given string is: ",givenstring);
    console.log("2.Given string length is,",givenstring.length);
    var strNew=givenstring.length;
    var trimStr=givenstring.trim();
    console.log("3.Given string: After trim length is:", trimStr.length);
    var strAfterTrim=trimStr.length;
    var result = strNew - strAfterTrim;
    console.log('4.Removed extra spaces are: ', result);
    
    var chkChar=trimStr.charAt(0);
    //find last character
    var totalLength=trimStr.length;
    var lastChar=trimStr.charAt(totalLength-1);
    console.log(`5.First Character is : ${chkChar} and Last character is :${lastChar}`);

    //Count total number in string
    var countStr=trimStr.split(" ");
    console.log(`6.Total words are : ${countStr.length}`)

    //index of
    var chkIndex=givenstring.indexOf("good");
    console.log(`7.index of good is : ${chkIndex}`)
    
    //starts with slice
    var chkSlice=givenstring.slice(22);
    console.log(`8.Start from index 22 : ${chkSlice}`)
    
    //endwith
    var chkEnds=trimStr.endsWith("up")
    console.log(`9.ends with up : ${chkEnds}`)
    
    //Startwith
    var chkStart=trimStr.startsWith("Hey")
    console.log(`10.start with Hey : ${chkStart}`)
    

    




}

stringHandsOn();


// step 3
// remove spaces use trim

// step 5
// after 3  length-1 last char

// step 6
// in step count


// step7
// indexOf

// step 8
// index 22   slice 

