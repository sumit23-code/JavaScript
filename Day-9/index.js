
// for (let i = 1; i<=10; i++){

//     console.log(`5 * ${i} = ${5*i}`);
// }


// // print sum of 1 to 100 numbers

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }
// console.log(sum);


// for (let i = 1; i <= 50; i++){
//     if(i%3 === 0){
//         console.log(i)
//     }
// }



// for (let i = 1; i <= 100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(i);
//     }

// }




// let val =("Give me a number");

// for (let i =1; i <= val; i++){
//     if(i % 2 === 0){
//         console.log(`$ {i} this is a even number`);
//     }
//     else{
//         console.log(` $ {i} this is odd number`);
//     }

// }
// console.log(val)


// let sum = 1;
// let i = 1;
// while(i <= 10){
//     sum = sum * i;
//     i++;
// }
//  console.log(sum);




// for ( let i = 1; i <= 50; i++){
//     if(i % 3 === 0){
//         console.log("Fizz")
//     }
//     else if(i % 5 === 0){
//         console.log("Buzz")
//     }
//     else if(i % 15 === 0){
//         console.log("FizzBuzz")
//     }
//     else{console.log(i)}
// }





// var userSelectedFruit = "Apple";
// switch (userSelectedFruit){
//     case "Apple" :
//     console.log("you have selected Apple")


// }

// let string = "Apple";
// let frequency = {};
// for (let i = 0; i < string.length; i++){
//     let char = string[i];
//     frequency[char] = (frequency[char] || 0)+1;
// }
// console.log(frequency);



// var numbers = [1, 2, 3];
// numbers.shift();
// numbers.shift();
// numbers.unshift(5);
// console.log(numbers);





// const animals = ["ant", "bison", "camel", "duck", "elephant", "awdaw"];

// var newArray = animals.slice(0);
// console.log(newArray);

// var newArray = animals.slice(2, 5);
// console.log(newArray);

// var newArray = animals.slice(-3);
// console.log(newArray);

// var newArray = animals.slice(1, -2);
// console.log(newArray);

// var newArray = animals.slice(-2, 1);
// console.log(newArray);




// const months = ["Jan", "March", "April", "June"];

// // months.splice(index, remove/replace index, element )

// months.splice(1, 0, "May");
// months.splice(1, 1, "May");
// months.splice(1, 2, "May");

// console.log(months);






// const months = ["March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);
// // Expected output: Array ["Dec", "Feb", "Jan", "March"]