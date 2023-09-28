function maleMarriageEligibility(gender,age,boyName)
{
    var result=gender="Male" && age>=21?`${boyName} you are eligible for Marriege`:`${boyName} you are not eligible for Marriege`;
    console.log(`Eligibility is: ${result}`);
}
console.log("================Step1==============")
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");


function femaleMarriageEligibility(gender,age,girlname)
{
    var resultm=gender="Female" && age>=18?`${girlname} you are eligible for Marriege`:`${girlname} you are not eligible for Marriege`;
    console.log(`Eligibility is: ${resultm}`);
}
console.log("================Step2==============")
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");
