/*JavaScript tasks
🟢 Task 1 — var, let, const
Create three variables:
•	var → student name
•	let → student age        
•	const → college name
Requirements:
1.	Print all three values.    */

      var studentName="lisana";
      let studentAge=26;
      const collegeName ="study world college";
      console.log(studentName);
      console.log(studentAge);
      console.log(collegeName);

//2.	Change the var value.

         var studentName="jai";
         console.log(studentName);

//3.	Change the let value.

         studentAge=29;
         console.log(studentAge);


//4.	Try changing the const value and observe the error.

      //    const college="chennai university";

//5.	Try redeclaring the var variable.

            var studentname ="chandran";
            console.log(studentName);

//6.	Try redeclaring the let variable and observe the error.
             //   let studentAge="22"

/*
🟢 Task 2 — User Information
Get the following information from the user using prompt():
•	Name
•	Age
•	City

Print the result in the console.
Expected:
Name: Naveen
Age: 22
City: Trichy         */

        let name=prompt("what is your Name?");
        console.log("Name:" ,name);
        let age=prompt("what is your Age?");
        console.log("Age:" , age);
        let city=prompt("Enter your city?");
        console.log("City:" ,city);
                   
/*
🟢 Task 3 — Welcome Message
Get the user's name using prompt().
Display:
Welcome Naveen!
Use alert().    */

         let userName=prompt("Enter your name?");
         console.log(userName);
         alert("welcome" ,name ,"!");
/*

🟢 Task 4 — Age Calculator
Ask the user for their birth year.
Calculate their approximate age using:
Current Year - Birth Year
Print the age in the console.
Example:
Birth Year: 2000
Age: 26   */

let birthYear=prompt("what is your birth year?");
let currentYear=2026;
age=(currentYear -birthYear);
console.log(age);

/*🔵 Data Type Tasks
Task 5 — Identify Data Types
Create variables containing:
"Hello"
100
25.5
true
false
undefined
null
Use typeof and print each data type.*/
   
let variable1="Hello"
let variable2=100;
let variable3=25.5;
let variable4=true;
let variable5=false;
let variable6=undefined;
let variable7=null;
console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log(typeof variable4);
console.log(typeof variable5);
console.log(typeof variable6);
console.log(typeof variable7);

/*
Task 6 — Student Data
Create an object:
name
age
city
qualification
isStudent
Print:
1.	Complete object
2.	Name
3.	Age
4.	Qualification
5.	isStudent   */
  let student={
      name:"lisana",
      age:21,
      city:"bangalore",
      qualification:"BE",
      isStudent:"true"
  };
    console.log(student);
    console.log(student.name);
    console.log(student.age);
    console.log(student.qualification);
    console.log(student.isStudent);
/*
Task 7 — Fruit Array
Create an array containing 6 fruits.
Apple
Mango
Orange
Banana
Grapes
Papaya
Print:
1.	First fruit
2.	Second fruit
3.	Last fruit
4.	Total number of fruits
Hint:
array.length
array.length - 1 */

let fruits=["Apple","Mango","Orange","Banana","Grapes","Papaya"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);
console.log(fruits.length);

/*
🟡 Arithmetic Operator Tasks
Task 8 — Basic Calculator
Create two numbers:
let a = 20;
let b = 5;
Perform:
•	Addition
•	Subtraction
•	Multiplication
•	Division
•	Modulus
•	Exponentiation
Print every result separately.  */
       
let a=20;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

/*
Task 9 — Shopping Bill
Create:
Shirt = 999
Pant = 1499
Shoes = 1999
Calculate the total price.
Expected:
Total = 4497*/
   
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;
let totalBill= Shirt + Pant + Shoes;
console.log("Total="+ totalBill);

/*
Task 10 — Simple Marks Calculation
Create marks for 3 subjects:
Tamil = 80
English = 75
Maths = 90
Calculate:
•	Total marks
•	Average marks   */

let Tamil=80;
let English=75;
let Maths=90;
let totalMarks= Tamil+English+Maths;
let AverageMarks=totalMarks/3;
console.log("TotalMarks="+ totalMarks);
console.log("AverageMarks="+ AverageMarks);

/*
🟠 Increment & Decrement Tasks
Task 11 — Post Increment
Predict the output before running the code:
let a = 10;
let b = a++;

console.log(a);
console.log(b);
Write your expected output first, then run it.
             output: a=11   b=10     */

               let a1 = 10;
               let b1 = a1++;
               console.log(a1);
               console.log(b1);

/*
Task 12 — Pre Increment
Predict the output:
let a = 10;
let b = ++a;

console.log(a);
console.log(b);   
                   output: a=11   b= 11 */
  
/*
Task 13 — Post Decrement
Predict:
let a = 20;

let b = a--;

console.log(a);
console.log(b); 
                   output: a=19    b=20  */


/*
Task 14 — Pre Decrement
Predict:
let a = 20;

let b = --a;

console.log(a);
console.log(b);
                   output: a=19   b=19   

🔴 Challenge Tasks
Task 15 — Find the Final Values
Without running the code, find the output:
let a = 5;

let b = a++;

let c = ++a;

let d = b--;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
Students should write the answer first and then verify it.
         
               output:   a=7     b=4   c=7    d=5

            
Task 16 — Assignment Operators
Given:
let num = 10;
Perform each operation separately:
+=
-=
*=
/=
%=
**=
Example:
num += 5;
console.log(num);  */
     let num=10;
     num=10;
     num+=5;
     console.log(num);
     num=20;
     num-=5;
     console.log(num);
     num=25;
     num*=5;
     console.log(num);
     num=20;
     num/=5;
     console.log(num);
     num=25;
     num%=5;
     console.log(num);
     num=30;
     num**=2;
     console.log(num);

 /*     
🏆 Task 17 — Mini Student Profile
Create a student profile using:
Variables
Name
Age
City
College
Array
Store 5 favorite subjects.
Object
Create an employee/student object containing:
name
age
city
subjects
isStudent
Then print:
1.	Student name
2.	Student age
3.	City
4.	First subject
5.	Last subject
6.	Total subjects
7.	Complete object */
 
       let Name="lisana";
       let Age=25;
       let City="Namakkal";
       let College="STUDY WORLD";
       let favoriteSubjects=["Maths","English","Science","Tamil","computer Science"];
       let studentDetails = {
            name:name,
            age:age,
            city:city,
            subjects:favoriteSubjects,
            isStudent:true
       };
       console.log("1. Student Name:",studentDetails.name);
       console.log("2. Student Age:",studentDetails.age);
       console.log("3. Student City:",studentDetails.city);
       console.log("4. First subject:",studentDetails.subjects[0]);
       console.log("5. Last subjects:",studentDetails.subjects[-1]);
       console.log("6. Total subjects:",studentDetails.subjects.length);
       console.log("7. Complete object:",studentDetails);

/*
🔥 Final Challenge — User + Calculator
Get two numbers from the user using prompt().
Perform:
Addition
Subtraction
Multiplication
Division
Modulus
Power
Then display all results using console.log().
Restriction: Use only the concepts you have taught so far:
var, let, const, prompt(), console.log(), data types, arrays, objects, arithmetic operators, increment/decrement, and assignment operators.

*/
  let num1=Number(prompt("Enter the first number::?"));
  let num2=Number(prompt("Enter the second number?"));
  let addition=num1+num2;
  let subtraction=num1-num2;
  let multiplication=num1*num2;
  let division=num1/num2;
  let modulus=num1%num2;
  let power=num1**num2;
  console.log(addition);
  console.log(subtraction);
  console.log(multiplication);
  console.log(division);
  console.log(modulus);
  console.log(power);


                

























