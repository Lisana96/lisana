/*     Variables & Data Types (Questions 1-8)

Q1:  difference between var, let, and const?

       Answer:

           let: let can be re reassigned
           var: var can be reassigned and redeclared.
           cont: const cannot be reassigned and redeclared. 

Q2: Can you re-declare a variable with var? What about let and const? 

       Answer:

            var: yes,you can re-declare variable
            let and cost: you cannot redeclare 

Q3:  output :                 */

                var x = 5;
                let y = 10;
                let z = 15;

                 x = 20;
                 y = 25;
                 z = 30;

                 console.log(x, y, z);

 /* Q4: difference between declaring and initializing a variable?

            answer:

              Declaring: reserving name in memory
              initializing:setting the starting value         
              
   Q5: Output: 
              undefined                           */
             let a;
             console.log(a);

/*   Q6:   hoisting
               
          lifting variable names to the top of the code.

             example:    console.log(name);
                         var name="lisana";
                         
     Q7:  null and undefined?  
     
                answer:

                      null: it is nothing or it is empty
                      undefined:variable with no values  

    Q8:  output:                                */


                    console.log(typeof null);
                    console.log(typeof undefined);
                    console.log(typeof []);
                    console.log(typeof {});

 /*  Operators (Questions 9-14)

     Q9:  == and ===?    

                answer:
                     ==  only checks values
                     === checks both values and data types 

    Q10:  ++i and i++?

                answer:
                 
                 ++i =pre increment ,increase the value first after returns new value
                 i++ =post increment ,return the value first after increase the value

    Q11:  output:

                     let x = 10;
                    let y = "5";
                
                    console.log(x + y);  
                    output: 15
                    console.log(x - y); 
                    output: 5 
                    console.log(x * y);
                    output: 50
                    console.log(x / y);
                    output: 2


    Q12: Logic operators:

            answer:

              AND operator (&&)- both must be true

                           example:
                           console.log(5=="5" && 3>=3)
                           output:true

              OR  operator (||)- at least one must be true
                            
                            example:
                            console.log(10>7 || 100>90)
                            output:true

              NOT operator (!)-opposite
                           
                           example:
                           console.log(!45>27)
                           output:false
                     
               

  Q13:  output:

                console.log(5 > 3 && 10 > 5);
                
                output: true && true
                         true

                console.log(5 > 10 || 10 > 5);

                 output: false || true
                         true

                console.log(!(5 > 3));

                     output: false


   Q14: ternary operator? 
                       
                it also called as condition operator
                if-else statement in a single line code
                example:

                5=="5"? console.log("condition true"):console.log("condition false");

                    
    Q16: output

              console.log(Number("123"));
              output:NAN

              console.log(Number("hello"));
              output:hello

              console.log(Number(true));
              output:1

              console.log(Number(false));
              output:0

              console.log(Boolean(0));
              output:false

              console.log(Boolean("hello"));
              output:true


    Q17: NaN 
            
               NAN-not a number
              
               example: console.log(number("fruit"));

             
 Conditional Statements 

    Q18: difference between if-else and switch?

                if-else: checks the condition one by one until condition get true

                switch:  evaluates an expression against constant values

    Q19:     output : Adult

    Q20:  nested if 
                       nested if is an if ststement placed inside another if ststement
                       examples:

                       let marks=90;
                       if(age>=50){
                       if (age>=80){
                       console.log("Grade A");
                       }else{
                       console.log("Grade B");
                       }
                       }else{
                        console.log("Fail");
                       }
                       
    Q21: ternary operator. check number odd or even            */

                   let number=28;
                   let result=(number%2===0)? "even":"odd";
                   console.log(result);

   /* Q22:  while and do-while

                 while: check the condition first,the condition false never executes

                 do-while: run the code first after checks the condition.
                           atleast the value executes one time

      Q23: output:

             for(let i = 1; i <= 5; i++) {
             console.log(i);
            }

            answer:1
                   2
                   3
                   4
                   5


    Q24:  for-of and for-in?
            
            answer:
            for-of :loops over the values of an iteration (arrays,string)

            for-in : loops over the keys


    Q25: Write a program to find sum of numbers from 1 to 100.     */

                   let sum=0;
                   for(let i=1; i<=100;i++){
                    sum +=i;
                   }
                    console.log(sum);

/*          Arrays 

   Q26: slice() and splice(?
        
           slice(): doesnot change the orginal array

           splice(): modifies the orginal array,it can remove,add the values or replace values
                                  
   Q27: output:

                let arr = [1, 2, 3];
                
                 arr.push(4);      //[1,2,3,4]
                 arr.pop();        //[1,2,3]
                 arr.unshift(0);    //[0,1,2,3]
                 arr.shift();       //[1,2,3]
                 console.log(arr);   //[1,2,3]

                  output: [1,2,3]

         Functions 

   Q28: function declaration and function expression?

            function declaration:
             
                      it is  fully hoisted,used before any execution code
                 

            function expression:

                      it is not hoisted, used only after the execution code

     Q29: arrow function

                arrow function is an function in javascripts using => function key word

                   examples: */
                    
                    let add=(a,b) =>a + b;
                    console.log(add(10,20));
/*
     Q30:  output

                   function greet() {
                   return "Hello";
                   }
                   let message = greet();
                   console.log(message);

            output:Hello

    
    */
            


                     
         
              



   
   
   
   
   
   
   
   
   
   
   
  



                  

                






 

  