/*console.log("Hello guys")

const username="Abhijit";
let age=10;
let age1=12.3
let age2=age + age1;
let isloggedin=true;

//console.log(age2, username);
//console.log(typeof(username))

//console.log(typeof(isloggedin))

let data:any="phone";
data=10;
data=true;
data="abhijit"

console.log(typeof(data))


let data1:unknown="phone";
data1=10;
data1=true;
data1=56

console.log(typeof(data1))




let data3:any=10
 data3="anu"
 data3=50;
 data3=true

 console.log(data3)*/





 /*let arrayname=new Array(10,15,20,25);
let sum = 0;

for (let i = 0; i < arrayname.length; i++) {
  sum = sum+arrayname[i];
}

let average = sum / arrayname.length;

console.log("Average of the array is:", average);



// By reduce()

let sum1 = arrayname.reduce((acc, val) => acc + val, 0);
let average1 = sum1 / arrayname.length;

console.log("Average of the array is:", average);
//
const breads: string[] = ["milkbread", "naan", "kulcha", "pitaa", "brownBread"];
 
for (const bread of breads) {
  if (bread.length <= 4) {
    console.log(`${bread} this bread is small`);
  } else if (bread.length <= 6) {
    console.log(`${bread} this bread is medium`);
  } else {
    console.log(`${bread} this bread is long`);
  }
}
 
// Credentials array
const credentials = [
  { username: "bob", password: 123 },
  { username: "tim", password: 1263 },
  { username: "sid", password: 1253 }
];
 
console.log("User Credentials:");
console.log(credentials);

//

const fruits: string[] = ["apple", "banana"];
fruits.push("mango");
console.log(fruits);
 
const numbers: number[] = [1, 2];
numbers.push(3);
console.log(numbers);
 
const number: number[] = [];
number.push(4);
console.log(number);
 
for (let i = 0; i < 10; i++) {
  number.push(i);
}
console.log(number);  */



//

/*const Teachers = [
  { name: 'Abhijit', subject: 'Math' },
  { name: 'Gajunan', subject: 'Science' },
  { name: 'Archana', subject: 'History' }
];
 
// Access specific teachers
console.log(Teachers[0].name, Teachers[0].subject); // John Math
console.log(Teachers[2].name, Teachers[2].subject); // Jim History
 
// Loop through all teachers
for (const teacher of Teachers) {
  console.log(`${teacher.name} teaches ${teacher.subject}`);
}
*/

const playersIPL= [
  { city: "Mumbai", State: "Maharashra"},
  { city: "Bangluru", State: "Karnataka"},
  { city: "Delhi", State: "Delhi"},
  { city: "Chennai", State: "Tamilnadu"},
  { city: "Pune", State: "Maharashta"}
];
 
console.log(playersIPL[0].city,'is of', playersIPL[0].State);  
console.log(playersIPL[1].city,'is of', playersIPL[1].State);  
console.log(playersIPL[2].city,'is of', playersIPL[2].State);  
console.log(playersIPL[3].city,'is of', playersIPL[3].State);  
console.log(playersIPL[4].city,'is of', playersIPL[4].State);


/*const nums:number[]=[1,2,3,4,5];
let even:number[]=[];
let odd:number[]=[];
let prime:number[]=[];


for(const num of nums){

  if(num%2===0)
  {

    console.log(  `${num}, is even number`)
    even.push(num)
  }
  else{

        console.log(  `${num}, is odd number`)

        odd.push(num)

  }
}*/


// Even, Odd and Prime number with for loop

let nums: number[] = [3, 46, 6,0, 8, 9,17,80,93,91,97];  
let even: number[] = [];
let odd: number[] = [];
let prime: number[] = [];
 
for (const num of nums) {
    // check even or odd
    if (num % 2 === 0) {
        console.log(`${num} this is even`);
        even.push(num);
    } else {
        console.log(`${num} this is odd`);
        odd.push(num);
    }
 
    // check prime
    let primeno = true;
    if (num <= 1) {
        primeno = false;
    }
     else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                primeno = false;
                break;
            }
        }
    }
 
    if (primeno) {
        console.log(`${num} this is prime`);
        prime.push(num);
    }
}
 
console.log("Even numbers:", even);
console.log("Odd numbers:", odd);
console.log("Prime numbers:", prime);


let n: number = 10;
let a: number = 0;
let b: number = 1, next: number;
let i: number = 1;
 
console.log(a);
console.log(b);


 
// using while loop
while (i < n) {
    next = a + b;
    a = b;
    b = next;
    console.log(next);
    i++;
}
 
// using do-while loop
i = 1;
a = 0;
b = 1;
 
do {
    next = a + b;
    a = b;
    b = next;
    console.log(next);
    i++;
} while (i < n);
 


// Exercise 2

const fruits: string[] = ['apple', 'banana', 'mango'];

  console.log('Second fruit:', fruits[1]);

  // Exercise 3

  

const products= [
  { id: 1, name: 'Laptop', price: 150000 },
  { id: 2, name: 'Smartphone', price: 8000 },
  { id: 3, name: 'Headphones', price: 1500 },
];

  for (let i = 0; i < products.length; i++) {
      console.log(products[i].name,'have a price',products[i].price);

    
  }



  //exercise 3

  const city= [
  { city: "Mumbai", State: "Maharashra"},
  { city: "Bangluru", State: "Karnataka"},
  { city: "Delhi", State: "Delhi"},
  { city: "Chennai", State: "Tamilnadu"},
  { city: "Pune", State: "Maharashta"}
];
 
console.log(city[0].city,'is of', city[0].State);  
console.log(city[1].city,'is of', city[1].State);  
console.log(city[2].city,'is of', city[2].State);  
console.log(city[3].city,'is of', city[3].State);  
console.log(city[4].city,'is of', city[4].State);


// exercise 4
 let arrayname=new Array(10,15,20,25);
let sum = 0;

for (let i = 0; i < arrayname.length; i++) {
  sum = sum+arrayname[i];
}

let average = sum / arrayname.length;

console.log("Average of the array is:", average);



// Exercise 5

const loginUsers = [
  { username: "Abhijit", password: "pass123" },
  { username: "Gajanan", password: "pass1234" },
  { username: "Archana", password: "pass12345" },
  { username: "Pavithra", password: "pass123456" },
];

for (let i = 0; i < loginUsers.length; i++) {
  console.log("this app have Testing Users" + loginUsers[i].username);
}




let abhi=30;
let kom1=30;

let sum1=abhi+kom1
console.log(sum1)

 kom1=70;
sum1+=kom1


console.log(sum1)
console.log(kom1)