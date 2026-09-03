/*JavaScript Tasks  Beginner Level
Task 1  Variables
Create variables using var, let, and const.
Name
Age
City
College
Requirements:
•	Print all values.
•	Change the var value.
•	Change the let value.
•	Try changing the const value.
•	Try redeclaring each variable and observe what happens.*/

         var name="lisana";
         let age= 25;
         const city="namakkal";
         let college="study world";
         console.log(name);
         console.log(age);
         console.log(city);
         console.log(college);
         var name="jai";
           /* let age=20;
              const city="chennai"    */

/*
Task 2 — Printing Statements
Use:
console.log()
alert()
confirm()
prompt()
document.writeln()
Create one example for each.   */

          console.log("hi");
          alert("welcome");
          confirm("tomorrow have class?");
          prompt("What is your Name?");
          document.writeln("welcome to my website!");

/*Task 3 — User Details
Get from the user:
Name
Age
City
Qualification
Print the details in the console. */
       let Name=prompt("Enter  your name?");
       let Age=prompt("what is your age?");
       let City=prompt("Enter your city?");
       let qualification=prompt("Enter your qualification?");
       console.log(Name);
       console.log(Age);
       console.log(City);
       console.log(qualification);



/*🟡 Data Type Tasks
Task 4 — Find Data Types
Create variables containing:
"JavaScript"
100
99.5
true
false
undefined
null
Print their values and use typeof to identify their data types.*/

     let a=100;
     let b=99.5;
     let c=true;
     let d=false;
     let e=undefined;
     let f=null;
     console.log(typeof a,a);
     console.log(typeof b,b);
     console.log(typeof c,c);
     console.log(typeof d,d);
     console.log(typeof e,e);
     console.log(typeof f,f);

/*Task 5 — Student Array
Create an array containing:
Student names
Example:
let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
Print:
1.	First student
2.	Second student
3.	Last student
4.	Total students
Use only:
array[index]
array.length         */

 let students = ["lisana", "athiran", "Kumar", "Divya", "jai"];

console.log("First student:",students[0]);
console.log("Second student:",students[1]);
console.log("Last student:",students[students.length-1]);
console.log("Total students:",students.length);

/*Task 6 — Employee Object
Create an employee object containing:
name
age
role
skills
isWorking
qualification
skills and qualification should be arrays.
Print:
•	Employee name
•	Age
•	Role
•	First skill
•	Last qualification
•	Working status
This follows the same array-inside-object structure from your notes.
*/
        let employee ={
              name:"lisana",
              age:23,
              role:"webDevelopment",
              skill:["HTML","CSS","java"],
              qualification:["BE","ME","Phd"],
              isworking:true
        }   
         console.log("Employee name:",employee.name);
         console.log("Employee age:",employee.age);
         console.log("Role:",employee.role);
          console.log("first skill:",employee.skill[0]);
          console.log("last qualification:",employee.qualification[employee.qualification.length-1]);
          console.log("working status:",employee.isworking);

/*🔵 Arithmetic Operator Tasks
Task 7 — Calculator
Create:
let a = 20;
let b = 5;
Calculate:
Addition
Subtraction
Multiplication
Division
Modulus
Exponentiation    */
         let a1=20;
         let b1=5;
       console.log(a1+b1);
       console.log(a1-b1)
        console.log(a1*b1);
        console.log(a1/b1);
         console.log(a1%b1);
         console.log(a1**b1);

/*Task 8 — Shopping Bill
Create:
Shirt = 999
Pant = 1499
Shoes = 1999
Bag = 799
Calculate:
Total price
Use arithmetic operators only.*/

         let Shirt = 999;
         let Pant = 1499;
         let Shoes = 1999;
         let Bag = 799;
         let totalPrice=Shirt+Pant+Shoes+Bag;
        console.log(totalPrice);

/*Task 9 — Increment & Decrement
Find the output without running the code first.
A
let a = 10;      

let b = a++;     

console.log(a);    //11
console.log(b);    //10
B
let a = 10;      

let b = ++a;     

console.log(a);     //11
console.log(b);     //11
C
let a = 10;       

let b = a--;      

console.log(a);      //9
console.log(b);      //10
D
let a = 10;         

let b = --a;        

console.log(a);      //9
console.log(b);      //9              */

/*🟣 Assignment Operator Tasks
Task 10
Start with:
let num = 10;
Perform separately:
num += 5
num -= 3
num *= 2
num /= 4
num %= 3
num **= 2
Print the result after each operation.  */
            let num=10;
            num += 5;
            console.log(num);
            num=10;
            num -= 3;
            console.log(num);
            num=10;
            num *= 2;
            console.log(num);
            num=10;
            num /= 4;
            console.log(num);
            num=10;
            num %= 3;
            console.log(num);
            num=10;
            num **= 2;
            console.log(num);
            
/*🔴 Comparison Operator Tasks
Your notes cover <, >, <=, >=, ==, !=, ===, and !==.
Task 11 — Find Output
Predict the result:
console.log(10 > 5);     //true
console.log(10 < 5);     //false
console.log(10 >= 10);   //true
console.log(10 <= 9);    //false

console.log(5 == "5");    //true
console.log(5 === "5");   //false

console.log(10 != "10");   //false
console.log(10 !== "10");  //true    */


/*🟠 Logical Operator Tasks
Task 12 — AND
Find the output:
console.log(true && true);    //true
console.log(true && false);   //false
console.log(false && true);   //false
console.log(false && false);  //false             */
      
/*Task 13 — OR
console.log(true || true);    //true
console.log(true || false);   //true
console.log(false || true);   // true
console.log(false || false);   //false

Task 14 — NOT 
console.log(!true);          //false
console.log(!false);         //true
console.log(!(5 > 10));      //true
console.log(!(10 > 5));      //false

🔥 Task 15 — Combination
Find the output without executing:
console.log(5 == "5" && !(5 === 5) || 6 > 7);
      output:
         true &&  false  ||  false
         false || false
         false

console.log(10 > 5 && 8 < 12 || 4 === "4");
          output:
              true && true || false
              true || false
              true

console.log(7 === 7 && 10 != "10" || 5 >= 5);
         output:
             true &&  false  || true
             false || true
             true
 
console.log(15 < 10 || 20 > 15 && 5 == "5");
        output:
             false || true &&  true
             true || true
             true

These follow the same comparison + logical style in your code.   */
/* 🟤 Ternary Operator Tasks
Task 16 — Voting
Create:
let age = 20;
Use the ternary operator:
age >= 18 → "Eligible to vote"
age < 18  → "Not eligible" */
      let age2=20;
      let voting=age2>=18? console.log("Eligible to vote" ):console.log("not eligible");

/*
Task 17 — Password
Create:
let password = true;
Use ternary:
true  → "Login successful"
false → "Wrong password"  */
       let password=true;
       let login=password=true? console.log("Login successful"):console.log("wrong password");

/*🟢 Concatenation & Template String
Task 18 — User Introduction
Create:
let name = "Naveen";
let age = 25;
let city = "Trichy";
Print:
My name is Naveen. I am 25 years old. I live in Trichy.
Do it two ways:
1.	Using +
2.	Using template literals `${}`
Your notes cover both approaches.  */

         let name3 = "lisana";
         let age3 = 25;
         let city1 = "namakkal";
         console.log("my name is  "+name3+".I am  "+age3+" years old.Ilive in"+city1+".");
         console.log(`My name is  ${name}. I am  ${age3} years old. I live in ${city1}`);
              
/*
🔵 Type Casting Tasks
Task 19 — String Conversion
Use String() to convert:
100
true
undefined
null
[1, 2]
Print the result and its typeof.   */

      /* let val1 =string(100);
      console.log(val1,typeof(val1));
      let val2=string(true);
       console.log(val2,typeof(val2));
       let val3=string(undefined);
       console.log(val3,typeof(val3));
       let val4=string(null);
        console.log(val4,typeof(val4));
        let val5=string([1,2]);
        console.log(val5,typeof(val5)); 
        */

/*
Task 20 — Number Conversion
Predict the output:
console.log(Number());   
       output=0
console.log(Number(""));   
        output=0
console.log(Number("123")); 
       output=123
console.log(Number("a1"));
        output=NAN
console.log(Number(true));
        output=1
console.log(Number(false));
        output=0
console.log(Number(undefined));
        output=NAN
console.log(Number(null));
        output=0
Your notes specifically cover these conversions. */
      

/*Task 21 — Boolean Conversion
Predict:
console.log(Boolean());
        output =false
console.log(Boolean(""));
        output=false
console.log(Boolean("hello"));
        output=true
console.log(Boolean(123));
        output=true
console.log(Boolean(true));
        output=true
console.log(Boolean(false));
         output=false
console.log(Boolean(undefined));
          output=false
console.log(Boolean(null));
          output=false
console.log(Boolean([]));
          output=true
console.log(Boolean({}));
           output=true
_______________________________
🔴 Flow Control Tasks
Task 22 — Voting Eligibility
Get age using prompt().
18 or above → "You can vote"
Below 18   → "You can't vote"
Use:
if
else  */
        let age4=prompt("enter you age?");
        if(age4>=18){
            console.log("You can Vote");
        }else{
            console.log("You can't vote");
        }

/*_______________________________________
Task 23 — Positive or Negative
Get a number from the user.
Check:
Positive
Negative
Zero
Use if / else if / else. */
      let num1=prompt("enter a number?");

      if (num1>0){
            console.log("positive");

      }else if(num<0){
            console.log("Negative");
      }else{
            console.log("zero");
      }

/*_______________________________________
Task 24 — Grade System
Get marks from the user.
Create:
90–100 → A Grade
80–89  → B Grade
70–79  → C Grade
60–69  → D Grade
Below 60 → Fail
Use if / else if / else.     */
     let marks=prompt("Enter your marks?");
      if(marks>=90){
            console.log("A Grade");
      }else if(marks>=80){
            console.log("B Grade");
      }else if(marks>=70){
            console.log("C Grade");
      }else if(marks>=60){
            console.log("D Grade");
      }else{
            console.log("Fail");
      }

/*________________________________________
🟣 Nested If Task
Task 25 — Job Eligibility
Get:
Age
Height
Weight
Rules:
Age >= 18
Height >= 160
Weight >= 60
If all conditions are satisfied:
"Congratulations! You are selected"
Otherwise display the appropriate reason.
This is based directly on the nested-if structure in your code.*/

   let age5=prompt("Enter you age");
   let height=prompt("Enter your height");
   let weight=prompt("Enter your weight");
   if(age5>=18){
        if(height>=160){
                if(weight>=60){
                        console.log("congratulations! you are selected");
                }else{
                       alert("Your weight is not enough");
                }
              }else{
                     alert("your height is not enough") ;  
                }
             }else{
                     alert("your ageis not enough");

                }

/*________________________________________
🟡 Switch Tasks
Task 26 — Traffic Light
Get a traffic light color:
red
yellow
green
Use switch.
red    → Stop
yellow → Ready
green  → Go   */
        let trafficLight="red";
        switch(trafficLight){
                case "red":console.log("Stop");break
                case "yellow":console.log("Ready");break
                case "green":console.log("Go");break
                default:console.log("Not a traffic light color");break
        }
/*________________________________________
Task 27 — Day
Create:
let day = 1;
Use switch:
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday
Add:
default → Invalid day
*/
          let day=1;
          switch(day){
                case 1:console.log("Monday");break
                case 2:console.log("Tuesday");break
                case 3:console.log("wednesday");break
                case 4:console.log("Thursday");break
                case 5:console.log("Friday");break
                case 6:console.log("Saturday");break
                case 7:console.log("sunday");break
                default:console.log("Invalid day");break
          }


/*🏆 FINAL MINI PROJECT
Task 28 — Student Result System
Create a small Student Result System using everything you've learned.
Step 1 — Get user details
Name
Age
City 
Step 2 — Get marks
Tamil
English
Maths     
Step 3 — Calculate
Total
Average         
Step 4 — Check result
Use if / else if / else:
90+ → A
80+ → B
70+ → C
60+ → D
Below 60 → Fail 
Step 5 — Check voting
Age >= 18       
Step 6 — Display
Use a template string:
Name: Naveen
Age: 22
City: Trichy
Total: 250
Average: 83.33
Grade: B
Voting: Eligible */

       const name7="lisana";
       const age1=26;
        const city2="namakkal";
        
        let tamil=80;
        let english=90;
        let maths=95;

        let total=tamil+english+maths;
        let average=total/3;
  
         let grade=85;
          if(average>=90){
                console.log("grade=A");     
          }else if(average>=80){
                console.log("grade=B");
          } else if(average>=70){
                console.log("grade=C");
          }else if(average>=60){
                console.log("grade=D");
          }else {
                console.log("Fail");
          }
        let voting1=25
        if(voting1>=18){
                console.log("voting is Eligible");
        }else{
                console.log("voting is not Eligible")

        }        let output=
                  (`Name:${name7}
                   Age:${age1}
                   city:${city2}
                   Total:${total}
                    Average:${average}
                    Grade:${grade}
                    Voting:${voting1}`);
                    console.log(output);
                   
        





           














