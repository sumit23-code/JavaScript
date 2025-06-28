var left = 9;
var right = 15;
console.log(left>right)
console.log(right>left)


var age = 26;
if (age == 19){
    console.log("You are eligible for admission in Indian Military Academy");
}else if(age>25 && age<=19){
    console.log("You are eligible for admission in Indian Military Academy");
} else{
    console.log("You are not aligible for admission in Indian Military Academy")
}



var userSelectedFlower = "sunflower";

switch (userSelectedFlower) {
  case "Rose":
    console.log("You have selected Rose.");
    break;
  case "Lotus":
    console.log("You have selected Lotus.");
    break;
  case "Lily":
    console.log("You have selected Lily.");
    break;
  default:
    console.log("You have selected none of available Flower.");
    break;
}