//WAP any two functions with no arguments & no return type as per your choice & log message on console
console.log("============step-1 -two functions with no arguments & no return type============");
function college(){
    var collegeName="Indira Gandhi Institue of Technology";
    console.log("College Name is:",collegeName);


}
function school(){
    var collegeName="Indira Gandhi Institue of Technology";
    console.log("second function isschool Name is:",collegeName);

}

college();
school();
console.log("============step-2 -two functions with no arguments & no return type============");

function personalDetails()
{
    var firstName="Madhuri";
    var lastName="Phadtare";
    var colegeName="YMIMCollege";
    console.log("Fisrt Name is :",firstName);
        console.log("lastName os :",lastName);
            console.log("college Name :",colegeName);
}
personalDetails();

console.log("============step-3functions with arguments & no return type============");
    var SName="Anushka";
    function swapValues(HName,SName)
{
    console.log("Before Swapping",HName,SName);
    var temp;
    temp=HName;
    HName=SName;
    SName=temp;
    console.log("After swapping Value is",HName,SName);

}

swapValues("virat","anushka");
swapValues(1000,2000);
swapValues(10,20);

console.log("============step-4 functions with arguments & return type============");

  function addThreeValues(ValueA,ValueB,ValueC)
  {
    var add;
    add=ValueA+ValueB+ValueC;

    return add;
  }
  var result=addThreeValues(10.63,600,40);
  console.log("Addition is:",result);

  
  var addResult=addThreeValues("Hello ","Good ","Morning");
  console.log("Addition is:",addResult);

  