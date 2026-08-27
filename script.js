// 1.What is a variable in JavaScript? 
        // Javascript variable is a  Container used to store data values.
        // you can store many different types of data values inside your variables.

//  2.What are the three keywords used to create variables?   
        //  var,let,const

//  3.Write the syntax to create a variable using var.
            
           var b=20;

//  4. Write the syntax to create a variable using let. 
            let d=40;
        
// 5.Write the syntax to create a variable using const. 
             const prices=25;  

//  6. What is declaration?
//       creating an empty box,creating variable name for first time.

// 7. What is initialization?
//      It gives that variables its very first value.

// 8.	What is reassignment?
//           It is changing the value inside an existing variable.

// 9.	What is redeclaration?
//            It is creating the exact same variable name all over again

// 10.	Which keyword allows redeclaration?
 //           only "var" allows it.

// 11.	Which keyword allows reassignment?
//           let and var both allow you to reassign a value.

// 12.Which keyword requires initialization when declared?
//           the const keyword requires initialization at the exact moment is declared.

/*13.Identify the declaration and initialization:
           let age = 25;
           let age is an declaration.
           25 is an initialization        */

//14.	What is the value of a?
         var a = 100;
         console.log(a);

// 15.	Change the value of this variable to 200:
            let number = 100;
            number= 200;
            console.log(number);
        
// var

/* 16. What will be the output?
         var a = 10;
         console.log(a);      */
         output=10 

//  17.What will be the output?
         var a = 10;
          a = 20;
          console.log(a);  

 //18.	What will be the output?
         var a = 10;
         var a = 30;
         console.log(a); 

//19. Write a var variable named name with the value "John".
         var name ="John";  

// 20.  Create a var variable named price with the value 500.
          var price=500;

//  21  Reassign price from 500 to 1000.
          var price=500;
          price=1000;
         
//22.What will be the output?
        var x = 50;
        x = 100;
       console.log(x);

//  23.	Can a var variable be reassigned?
      //       yes

//  24.	Can a var variable be redeclared?
       //      yes

//  25.	Write an example of var redeclaration
            var age1=20;
            var age1=30;
        
 //let
            
// 26.	Create a let variable named age with the value 25.
        //    let age=25;
            
/* 27.	What will be the output?
           let age = 20;
          age = 30;
          console.log(age); */
            output=30

/* 28.	Can a let variable be reassigned?
             YES     */

/* 29.	Can a let variable be redeclared?
             NO      */

/* 30.	Find the error:

          let name = "John";
          let name = "David";
          error: let variable name is redeclared on second line  */

// 31.	Create a let variable called city and assign "Chennai".
             let city="chennai";
             console.log(city);

// 32.	Change the value of city to "Salem".
              city="salem";
              console.log(city);

// 33.	What will be the output?
          let x1= 10;
          x1 = 50;
         console.log(x1);

// 34.	Write a let variable called salary with the value 25000.
           let salary=25000;
           console.log(salary);

// 35.	Reassign salary to 30000.
             salary=30000;
             console.log(salary);

// const
// 36.	Create a const variable called pi with the value 3.14.
                      const pi=3.14;
                      console.log(pi);

/* 37.	Can a const variable be reassigned?
         answer: no    */
                     
/* 38.	Can a const variable be redeclared?
         answer: no    */

/*39.	What is wrong with this code?
          const age;
          age = 25;   
          when you use const, you must set the value right away.you cannot leave it blank.
          answer: const age=25;   */

/* 40.	What happens here?
          const price = 500;
          price = 1000;
        answer:the code is an error.the  const value never change.
        const value cannot be reassigned.         */

// 41.	Create a const variable called country with the value "India".
             const country="india";
             console.log(country);
            
/* 42.	What will be the output?
              const x = 100;
              console.log(x); 
              output:100             */
              
/* 43.	Which keyword should you use if the value should not be reassigned?
           answer: you should use const keyword.    */

/* 44.	What is the difference between let and const?
             answer: let variables can be changed (reassigned) later in the code.
                     const variables are locked and never be changed after you create them.*/

/* 45.	What is the difference between var and const?
              answer:var can be reassigned and redeclared.
                     const cannot be reassigned and redeclared. */

  // Printing & Console  

//46.	Write JavaScript code to print Hello World using console.log().
                 console.log("Hello World");

// 47.	Write JavaScript code to print the number 500 using console.log().
                 console.log(500);
                 
/*48.	What is the purpose of console.warn()?
             answer:  it prints warning message with yellow background or small warning symbol
                      doesn't stop code execution,it shows that something might be wrong.*/

/*49.	What is the purpose of console.error()?
              answer: it prints a red error message to the console.
              it doesnot stop execution,it shows the which line of the code exactly caused trouble. */

/*50.	What is the purpose of each?

      alert(): 
              it shows a simple pop-up message to the user with an "ok" button.

      prompt(): 
              to open a pop-up box that asks the user to type in an answer.
               
      confirm()
               to pop up a box that asks the user a "yes" or "no" question.

      document.writeln()
                to write text directly onto the actual webpage.

       console.log()           
                to send hidden messages to the browser's developer console.        
       
       */

      /* Practical Questions

        Create a variable for student name, age, and mark and print all three. */

                let studentName ="lisana";
                let age  =28;
                let mark =95;

                console.log(studentName);
                console.log(age);
                console.log(mark);
       
//	Ask the user's name using prompt() and display it using alert().
                     let userName= prompt("What is you name?");
                     alert(userName);

//	Ask the user's age using prompt() and print it using console.log().
                   let userAge= prompt("How old are you?");
                   console.log(userAge);

//	Ask the user a question using confirm().
                   let userchoice= confirm("Do you like javascript?");
                   console.log(userchoice);

//	Ask the user's name and display it on the webpage using document.writeln().
                     let webName= prompt("what is your webname?");
                     document.writeln("welcome to  my website");  

         










        

        
