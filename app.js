// for-1
// let a = parseInt(prompt("a ni kiriting (a<b)"));
// let b = parseInt(prompt("b ni kiriting (a<b)"));

// let count = 0;
// for (let i = a; i <= b; i++) {
//     console.log(i);
//     count++;

// }
// console.log(" Jami " + count + " ta sonlar chiqarildi");


// for-2
// let a = parseInt(prompt("a ni kiriting "));
// let b = parseInt(prompt("b ni kiriting "));

// let count = 0;
// for (let i = b - 1; i > a; i--) {
//     console.log(i);
//     count--;

// }
// console.log("Jami " + count + " ta sonlar chiqarildi")


// for-3
// let narx = parseInt(prompt("Kanfet narxi: "));
// for(let kg = 1;  kg <= 10; kg++){
//     let hisob = narx  * kg;
//     console.log(kg  + " kg kanfet narxi: " + hisob + " so'm");
// }


// for-4


// let pricePerKg = parseFloat(prompt("Bir kg konfetning narxini kiriting:"));

// for (let kg = 1.2; kg <= 2; kg += 0.2) {
//   let totalPrice = pricePerKg * kg;
//   console.log(`${kg.toFixed(1)} kg konfet narxi: ${totalPrice.toFixed(2)} so'm`);
// }

// for-5


// let a = parseInt(prompt("a ni kiriting "));
// let b = parseInt(prompt("b ni kiriting "));


// let yigindi = 0;

// for (let i = a; i <= b; i++) {
//     yigindi += i;
// }

// console.log("Yig'indi:"+ yigindi);


// for-6

// let a = parseInt(prompt("a ni kiriting "));
// let b = parseInt(prompt("b ni kiriting "));


// let yigindi = 1;

// for (let i = a; i <= b; i++) {
//     yigindi *= i;
// }

// console.log("Ko'paytma:"+ yigindi);


// for-7

// let a = parseInt(prompt("a ni kiriting "));
// let b = parseInt(prompt("b ni kiriting "));


// let yigindi = 1;

// for (let i = a; i <= b; i++) {
//     yigindi *= i**2;
// }

// console.log("Ko'paytma:"+ yigindi);


// for-8
// let n = parseInt(prompt("n ni kiriting "));

// let yigindi = 1;
// for (let i = 1; i <= n; i++) {
//     yigindi += 1 / i;
// }
// console.log("Javop : " + yigindi);

//  for-9
// let n = parseInt(prompt("n ni kiriting "));

// let yigindi = 1;
// for (let i = 1; i <= n; i++) {
//     yigindi += 1 * i;
// }
// console.log("Javop : " + yigindi);

// for-10
// let n = 10; 

// let square = 0; 
// for (let i = 0; i < n; i++) {
//     let term = 2 * i + 1; 
//     square += term; 
//     console.log(`Qo'shiluvchi: ${term}, Hozirgi yig'indi: ${square}`);
// }

// console.log("Natijada"+ n+ "ning kvadrati:" +square);


// for-11
// let a = 2.5;
// let n = 3;

// let result = 1;

// for (let i = 0; i < n; i++) {
//     result *= a;
// }

// console.log(a + "ning " + n + "-darajasi:" + result);

// for-12
// let a = 2.5;
// let n = 4;

// let result = 1;

// for (let i = 1; i <= n; i++) {
//     result *= a;
//     console.log(a + " ning " + i + "-darajasi:" + result);
// }

// for-13
// let a = 2.5; 
// let n = 10;  

// let sum = 1;  
// let result = 1;

// for (let i = 1; i <= n; i++) {
//     result *= a;
//     console.log(`${a} ning ${i}-darajasi: ${result}`);
//     sum += result; 
// }

// console.log("Yig'indi S:" +sum);


// for-14
// let n = 5; 

// let sum = 0;

// for (let i = 1; i <= n; i++) {
//     let factorial = 1;
//     for (let j = 1; j <= i; j++) {
//         factorial *= j;
//     }
//     sum += factorial;
//     console.log(`${i}! = ${factorial}`);
// }

// console.log(`Yig'indi S = ${sum}`);

// for-15
// let N = 4; 
// let K = 3; 
// let sum = 0;

// for (let i = 1; i <= N; i++) {
//     sum += Math.pow(i, K); 
//     console.log(`${i}^${K} = ${Math.pow(i, K)}`);
// }

// console.log(`Yig'indi S = ${sum}`);

// for 16
// let N = 4; 

// let sum = 0;

// for (let i = 1; i <= N; i++) {
//     sum += Math.pow(i, i);
//     console.log(`${i}^${i} = ${Math.pow(i, i)}`);
// }

// console.log(`Yig'indi S = ${sum}`);


// for 17
// let A = 3; 
// let B = 6;
// for (let i = A; i <= B; i++) {
//     for (let j = 1; j <= i - A + 1; j++) {
//         console.log(i);
//     }
// }


// for 18
// let num = 28; 

// let divisors = [];
// let sum = 0;
// let count = 0;

// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         divisors.push(i); 
//         sum += i;         
//         count++;          
//     }
// }

// console.log(`Bo'luvchilar: ${divisors.join(', ')}`);
// console.log(`Bo'luvchilar soni: ${count}`);
// console.log(`Bo'luvchilar yig'indisi: ${sum}`);

// for 19
// let n = 19; 

// let isPrime = true;

// for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         isPrime = false;  
//         break; 
//     }
// }

// if (n > 1) {
//     if (isPrime) {
//         console.log(`${n} tub son.`);
//     } else {
//         console.log(`${n} tub emas.`);
//     }
// } else {
//     console.log("Iltimos, n > 1 ni kiriting.");
// }

// for 20

// let N =5; 

// for (let i = 1; i <= N; i++) {
//     let row = ''; 
//     for (let j = 1; j <= i; j++) {
//         row += j + ' '; 
//     }
//     console.log(row.trim());
// }




// --------------------------------------------------------------------

// while-1
// function findEmptySpace(A, B) {
//     let emptySpace = A;
    
//     while (emptySpace >= B) {
//         emptySpace -= B; 
//     }
    
//     return emptySpace; // Qolgan bo'sh joyni qaytaramiz
// }

// const A = 17; 
// const B = 5;  

// const boshJoy = findEmptySpace(A, B);
// console.log(`A kesmasining bo'sh joyi: ${boshJoy}`);


// while-2
// function countSegments(A, B) {
//     let count = 0; 
//     let remainingLength = A;

//     while (remainingLength >= B) {
//         remainingLength -= B; 
//         count++; 
//     }

//     return count; 
// }

// const A = 17; 
// const B = 5;  

// const segmentCount = countSegments(A, B);
// console.log(`A kesmasida B kesmadan joylashtirish mumkin bo'lgan soni: ${segmentCount}`);



