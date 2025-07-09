//Print all even numbers from 1 to 50 using a for loop and if condition.

// for (let i=1; i<=50; i++){

//     if(i % 2 == 0){
//        console.log(i); 
//     }

// }
// console.log(i)


//Using a while loop, print numbers from 10 to 1 in reverse order.

// let i = 10;
// while (i >= 1) {
//   console.log(i);
//   i--;
// }


//Using a for loop, print only the odd numbers from 1 to 100.

// for (let i=1; i<=100; i++){
//     if(i % 2 == 1){
//         console.log(i)
//     }        
// }



// Create a program to count how many numbers between 1 and 100 are divisible by both 3 and 5 using for and if. 

// var count=0;
// for (let i=1; i<100; i++){
//     // console.log(i, "i")
//     if(i % 3 == 0 || i % 5 == 0){

//     count++;
// }
// }

// console.log(count, "count")






let a = [4, 8, 7, 13, 12]
let sum = 0;

for (let i = 0; i < a.length; i++) {
    sum += a[i];
}
console.log(sum)