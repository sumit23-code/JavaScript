// function - is a block of code used to perform a specific task


function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "O";
    }
    else if (score >= 80 && score <= 89) {
        return "A";
    }
    else if (score >= 60 && score <= 79) {
        return "B";
    }
    else if (score >= 50 && score <= 59) {
        return "C";
    }
    else if (score >= 35 && score <= 49) {
        return "D";
    }
    else if(score >= 0 && score <= 34){
        return "Fail";
    }
    else {
        return "Invalid Marks";
    }
}
console.log(getGrade(-32));




let a = 5;
let b = 10;
function getAddition(){
    console.log(a+b);
}
getAddition();
function getSubtraction(){
    console.log(a-b);
}
getSubtraction();

//using parameter

function getAdditionOfVariables(num1,num2){
    console.log(num1+num2)
}
getAdditionOfVariables(a,b);
getAdditionOfVariables(50,101);



function Addition( num1 , num2 , num3 , num4 ){
    console.log(num1 + num2 + num3 + num4);
}
function Subtraction( num1 , num2 , num3 , num4 ){
    console.log(num1 - num2 - num3 - num4);
}
Addition(5,2,6,8);
Subtraction(8,5,3,2);