/*JavaScript Practice Tasks
Task 1 — For Loop
Print numbers from 1 to 10 using a for loop.  */

          for(let a=1;a<=10;a++){
            console.log(a);
          }

/*
 Task 2 — Reverse Number
Print numbers from 10 to 1 using a for loop.*/

           for(let a=10;a>0;a--){
            console.log(a);
           }
/*
 Task 3 — Even Numbers
Print all even numbers from 1 to 20.     */

             for(let a=2;a<=20;a+=2){
                console.log(a);
             }

/*
 Task 4 — Odd Numbers
Print all odd numbers from 1 to 20.  */
             for(let b=1;b<=20;b++){
                console.log(b);
             }

// Task 5 — Multiplication Table
  
       let num=prompt("Enter a number?");
       for(let c=1;c<=10;c++){
        console.log(num+"x"+c+"="+num*c);

       }

/* While Loop
Task 6 — Countdown
Using while, print:   */

            let i=10;
            while(i>=1){
                console.log(i);
                i--;
            }         
/*
    Task 7 — Sum of Numbers
    Using while, calculate:               */

          let sum=0;
          let number=1;
          while(number<=10){
            sum=sum +number ;
            number++;
          }
          console.log(sum);


 /* Do While
    Task 8 — Print Numbers  */

               let b=1;
               do{
                console.log(b);
                b++;
               }while(b<=5)


/*
   Task 9 — Do While Understanding
   What is the output?

    Answer:A do while loop always executes at least one time
           one error must be display. 
    output: 10                      */        
            
               let a1 = 10;
               do {
               console.log(a1);
               a1++;
               } while (a1 <= 5);
            

//   Task 10 — String Characters


               let str="javascript";
               for(let a of str){
                console.log(a);
               }

//   Task 11 — Array Values
 
               
            let fruits = ["apple", "orange", "banana", "mango", "grapes"];
            for(let b of fruits){
            console.log(b);
            }
      
//    Task 12 — Student Names

            let students=["Arun","Priya","athiran","prabha","suppiah"];
                for(let student of students){
                     console.log("student:"  +student);
                    }
            
//  For...in
//  Task 13 — Employee Object
                 
                    let employee = {
                     name: "Arun",
                     age: 25,
                     role: "Developer",
                     city: "Chennai"
                    };

                    for(let c in employee){
                        console.log( c,employee[c]);
                    }

//  Task 14 — Product Object
     
        let product= {
            productName:"phone",
            price:"40000",
            brand:"samsung",
            category:"electronics",
            stock:50 
         }
        for(let key in product){
             console.log(key,":",product[key]);
        }
            
/*   Functions
   Task 15 — Simple Function    */

                function welcome() {
                console.log("welcome to javascript");
                }
                 welcome();
                 welcome();
                 welcome();
                  

//   Task 16 — Function With Parameter
          
           function greet(name){
            console.log("hello  "+ name);
           }

           greet("Naveen");
           greet("Arun");
           greet("Priya");

//Task 17 — Multiple Parameters

               
            function student(name,age,department){
                console.log("Name: ",name);
                console.log("Age: ",age);
                console.log("Department: ",department);
            }
            student("lisana",21,"CSE");
            student("jai ",22,"ECE");
            student("Athiran ",23,"IT");

// Return
//  Task 18 — Addition Function
       
                function add(a, b){
                    return a+b;

                }
                let result = add(10, 20);
                 console.log(result);
              

//  Task 19 — Salary

                     function salary(amount) {
                       return amount;
                     }
                     let salary1=salary(50000);
                     console.log(salary1);
 

// Task 20 — Bonus Calculator

               function bonus(salary, bonusAmount){
                 return salary + bonusAmount;
                }
                let total=bonus(50000,5000);
                 console.log("Total:"+total);
        

//  Default Parameter
//  Task 21

                    function employee1(name, role = "Developer") {
                    console.log("name: " + name);
                    console.log("Role: " + role);
                    }
                    employee1("Arun");
                    employee1("Priya","Designer"); 

//  Function Types
//  Task 22 — Named Function

                     function square(number) {

                      return number * number;
                    }
                     console.log(square(2));
                     console.log(square(10));
                     console.log(square(20));
                     console.log(square(28));
                     console.log(square(43));


//  Task 23 — Anonymous Function
                   
                   let calculate = function(a, b) {
                    return a + b;
                   }
                   let result1=calculate(20,25);
                   console.log(result1);
                     

//  Task 24 — Arrow Function

                   let multiply = (a, b) => {
                    return a * b;
                    }
                    let result3=multiply(26,35);
                    console.log(result3);

//  Scope
//  Task 25 — Predict the Output

         /* Answer: 
            var:
               var is an global / function scope,
               both inside and outside block can be access.

            let and const:
                 let and const is an block scope 
                 only inside block can be access.             */
                   
                     function test() {
                    if(true){
                     var a = 10;
                     let b = 20;
                     const c = 30;
                     console.log(a);
                     console.log(b);
                     console.log(c);
                     }
                     console.log(a);
                    }
                     test();


/*    Hoisting 
     Task 26 -predict

        ANSWER: it will prints undefined instead of error.        */

               console.log(a4);
                 var a4= 10;


/*  Task 27
     Predict:
     console.log(b);

      let b = 20;    

            ANSWER:It will print reference error.cannot access b before initialization.      */
    
                  
/*
Task 28
Predict:
console.log(c);
const c = 30;
Then explain the difference between the three.  

                ANSWER:it will print reference error.cannot acess before initialization
                
                var: it will prints undefined
                let:  it will prints reference error
                const:it will also prints reference error
                
*/

/*  IIFE
    Task 29 — Self Invoking Function
    Create an IIFE that immediately prints:  */

                (function(){
                    console.log("welcome to Javascript");
                })();

                (function(product,discount){
                    alert(`how going on sale, ${product} betterprice, the discount is ${discount} %`);
                })("phone",50);
                

 /* Callback / Higher-Order Function
    Task 30

         ANSWER: 
              Callback function: welcome
              higher-orderfunction: execute                              */


                    function welcome() {
                    console.log("Welcome");
                    }
                   function execute(callback) {
                    callback();
                    }
                     execute(welcome);

/*
    Generator Function
    Task 31 — Cashback
    Create a generator:
 */
             
                function* cashback(){
                yield "10% cashback";
                yield "20% cashback";
                yield "30% cashback";
                yield "Better luck next time";
                }
                let voucher=cashback();
                for(let value of voucher){
                    console.log(value);
                }

/*
    FINAL MINI PROJECT
    Task 32 — Employee Management Console

          Employee data
          Create an array containing employee objects:
 */
                

                let employees = [
                    {
                     name: "Arun",
                     age: 25,
                     department: "IT",
                     role: "Developer",
                     salary: 40000
                    },

                    {
                    name:"Priya",
                    age: 24,
                    department:"HR",
                    role: "HR Executive",
                    salary: 35000
                    }
                    ];

        // 1. for...of  
        // Print every employee.
           
                    for(let employee of employees){
                        console.log(employee);
                    }

        //  2. for...in
        //  Print each employee's keys and values.

                    for(let employee of employees){
                        for(let key in employee){

                         console.log(key+ ":" +employee[key]);
                        }   
                         console.log("-----------");
                        
                        }

        //  3. Function
        //  Create a function to display employee information
              
                    function displayEmployee(name,age,department,role,salary){

                        console.log("name: ", name);
                        console.log("Age: ", age);
                        console.log("Department: ", department);
                        console.log("Role: ", role);
                        console.log("Salary: ", salary);
                    }

        // 4. Function parameters
        // Pass employee information to the function.
                      
                     for(let employee of employees){

                        displayEmployee(
                            employee.name,
                            employee.age,
                            employee.department,
                            employee.role,
                            employee.salary
                        );
                        console.log("--------------")
                     }

        //  5. Return
        //  Create a function that returns an employee's salary.

                    function getEmployeeSalary(employee){
                        return employee.salary;
                    }
                    
        /*  6. Condition
            Check:
            Salary >= 40000 */
         
       
                    for(let emp of employees){
                    
                        if(emp.Salary >=40000){
                            console.log(employee.name + "  earns 40000 or more." );
                         }else{
                            console.log(employee.name + "  earns less than 40000.");
                         }
                    }        
       // 7. Arrow function
      // Create an arrow function for another simple calculation.
                     
                       const calculateAnnualSalary=(monthlySalary)=>monthlySalary*12;
                          for(let employee of employees){
                            let priyaAnnual=calculateAnnualSalary(employees[1].salary);
                            console.log(`Priya's Annual Salary:${priyaAnnual}`);
                          }  
                    

        // 8. Generator
        // Create a generator that produces employee benefits:
            

                    function* benefitsGenerator(){
                        yield "Medical Insurence";
                        yield "Transport";
                        yield "Food Allowance";
                        yield "Bonus";
                    }
                    const benefits= benefitsGenerator();
                    console.log(benefits.next().value);
                    console.log(benefits.next().value);
                    console.log(benefits.next().value);
                    console.log(benefits.next().value);



