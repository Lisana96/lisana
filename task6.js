//   Task 1-Student Result Analyzer

// Calculate total marks and Average

       function calculateResult(name,dept,m1,m2,m3,m4,m5){

        let totalMarks=m1+m2+m3+m4+m5;
        let average1=totalMarks/5;
        
    

// pass/fail
    
       let status;
       if(average1>=50){
        status="Pass";

       }else{
        status="Fail";
       }
       

 //Grade
        let grade;

        if(average1>=90){
            grade="A";
        }else if(average1>=75){
            grade="B";
        }else if(average1>=60){
             grade="C";
        }else if(average1>=50){
            grade="D";
        }else{
            grade="fail";
        }

        console.log("Name:"+ name);
        console.log("TotalMarks:" + totalMarks)
        console.log("Average:" + average1);
        console.log("Status:" + status);
        console.log("Grade:" + grade);
    }
    calculateResult("lisana","IT",90,79,80,95,80);


//   Task 2 — Employee Salary Calculator

        let emplyoee={
             name: "Arun",
             role: "Developer",
             salary: 45000,
             experience: 2
             };

//   calculate salary:
              
            function calculateSalary(emp){
                let basic=emp.salary;
                let bonus=0;
            

  //bonus percentage 

               if(emp.experience>=2){
                 bonus=basic * 0.10;

               }if(emp.experience>=5){
                 bonus= basic * 0.15;
               }

               let total=basic + bonus;

               console.log("basic salary: ",basic);
               console.log("Bonus: ",bonus);
               console.log("Total salary:" ,total);
            
            }
            calculateSalary(emplyoee);
       

  //  Task 3 — Product Filter System  
  
            
                     let products = [

                  { name: "Laptop", price: 55000, category: "electronics" },
                  { name: "Mouse", price: 800, category: "electronics" },
                  { name: "Shirt", price: 1200, category: "fashion" },
                  { name: "Shoes", price: 2500, category: "fashion" },
                  { name: "Phone", price: 30000, category: "electronics" }
                  ];

     // 1.	Get products above ₹2,000 

                  let str1=products.filter((c,i,t)=>{
                    return c.price>=2000;
                  })
                  console.log("Above2000: " ,str1);

     // 2.	Get only electronics 

                   let str2=products.filter((c,i,t)=>{

                    return c.category == "electronics";

                   })
                   console.log("Electronics: " ,str2);

     // 3.	Find the first product below ₹1,000 

                   let str3=products.find((c,i,t)=>{

                    return c.price<1000;
                   })
                   console.log("First Below 1000: " ,str3);

     // 4.	Calculate total price of all products
     
                   let str4=products.reduce((acceleration,c,i,t)=>{

                    return acceleration + c.price;
                   },0)
                   console.log("TotalPrice: " ,str4);
                
     // 5.	Check whether any product costs more than ₹50,000 
                  
                    let str5=products.some((c,i,t)=>{

                       return c.price>50000;
                    })
                    console.log("Above50000: " ,str5);

     // 6.	Check whether every product has a price above ₹500 

                    let str6=products.every((c,i,t)=>{
                        return c.price<500;

                    })
                    console.log("All Above 500?: " ,str6);


     //    Task 4 — Employee Management

                        
        let emplyoees=[
        
            { id: 101, name: "Kavin", role: "Frontend Developer", salary:40000},
            { id: 102, name: "lisana", role: "Python Developer", salary:50000},
            { id: 103, name: "Jai", role: "Backend Developer", salary:37000},
            { id: 104, name: "Prabha", role: "Software Development", salary:62000},
            { id: 105, name: "Suppiah", role: "HR", salary:38000},
            { id: 106, name: "Chandran", role: "Project Manager", salary:57000},
        ];

// 	Display all employee names 

            let val1 =emplyoees.map((c,i,t)=>{
                return c.name;
                
            })
            console.log("Name :" ,val1);

//  earning above ₹40,000  
          
             let val2=emplyoees.filter((c,i,t)=>{

                  return c.salary>40000;
             })
             console.log("Above 40000: ",val2);

//  employee with ID 103 

              let val3=emplyoees.find((c,i,t)=>{
                    return c.id==103;
              })
              console.log("ID 103: ",val3);

 //  total salary 
              
             let val4=emplyoees.reduce((accumulator,c,i,t)=>{
                return accumulator +c.salary;
             },0)
             console.log("Total Salary: ",val4);

//  highest-paid employee 

            let val5=emplyoees.find((c,i,t)=>{
                 return c.salary >60000;

            })
            console.log("Highest Salary: ",val5);

 //  Highest to lowest salary
             
            let val6=emplyoees.sort((a,b)=>{
                return a-b;
            })
            console.log("High to LOW: ",val6);

 //  Create a new array 

          let newArray11=emplyoees.map((c,i,t)=>{
              return c;

          })
          console.log("New array: ",newArray11);


//   Task 5 — Shopping Cart

             let cart = [
            { name: "Laptop", price: 50000, quantity: 1 },
            { name: "Mouse", price: 1000, quantity: 2 },
            { name: "Keyboard", price: 2000, quantity: 1 }
             ];

 //   calculate
              
             function calculateCart(cart){

                let value=cart.reduce((accumulator,item)=>{
                let total=item.price * item.quantity;
                return accumulator + total;
                },0)
            

     //  10% discount if total > ₹50,000      
                      
                   let discount =0;
                   if(value>50000){
                    discount = value * 0.10;
                    console.log("Discount: " ,discount);
                   }
      // Final amount
      
                let finalAmount=value - discount;
     
                 console.log("FinalAmount:" ,finalAmount);
                }
                calculateCart(cart);


//    Task 6 — Student Search System

         let students = [
         { name: "Arun", age: 21, mark: 85 },
         { name: "Priya", age: 22, mark: 92 },
         { name: "Karthi", age: 20, mark: 67 },
         { name: "Dinesh", age: 23, mark: 45 }
         ];

//  display student names

           let a1=students.map((c,i,t)=>{
            return c.name;
            })

            console.log("All Names:" , a1);

//   scored above 80    

            let a2=students.filter((c,i,t)=>{

                return c.mark>80;
            })

            console.log("Above 80: " , a2);

 //  find student name           

           let a3=students.find((c,i,t)=>{

                return c.name=="Priya";
           })

           console.log("Priya:" ,a3);

 // avaerage mark          

           let a4=students.reduce((accumulator,c,i,t)=>{
             
               return accumulator+ c.mark/4;
            },0)

            console.log("Average Mark:" ,a4);

 //  Anyone Failed ?          

            let a5=students.some((c,i,t)=>{
                 return c.mark<40;
            })

            console.log("Anyone Failed?: ", a5 );

            let a6=students.every((c,i,t)=>{
                 return c.mark>40;
            })
       
            console.log("Scored Above 40?:" ,a6);

 
 //   everyone scored above 40 ?            

             let a7=students.sort((a,b)=>{
                return b.mark -a.mark ;
             })

             console.log("students by mark:" , a7);


   //  Task 7 — Array Transformation Challenge 

              let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

              let newArray=numbers.map((c,i,t)=>{
                   return c* 2;
              })

              console.log("New Array : " + newArray);

    // Even Numbers          

              let newArray1=numbers.filter((c,i,t)=>{
                    return c % 2==0;
              })
               console.log("Even Numbers:" +newArray1 );

    // Greater than 50

               let newArray2=numbers.filter((c,i,t)=>{
                     return  c>15;
               })

               console.log("Greater than 15: " +newArray2);

     //  Greater than 20          

               let newArray3=numbers.find((c,i,t)=>{
                      return  c>20;
               })

               console.log("Greater than 20: " +newArray3);

     // Total of all numbers   
     
               let newArray4=numbers.reduce(( accumulator,c,i,t)=>{
                   return accumulator + c.numbers;
               },0)

               console.log("Total Numbers: " +newArray4);

      //   Greater than 40 

               let newArray5=numbers.filter((c,i,t)=>{
                   return c>40;
               })

               console.log("Greater than 40: " +newArray);
                
      //   Every number is positive 

               let newArray6=numbers.every((c,i,t)=>{
                   return c>0;
               })

               console.log("Number is Positive?: " +newArray6);

       //   Sort from highest to lowest    

             let newArray7=numbers.sort((a,b)=>{

                  return a-b;

             })

             console.log("Highest to lowest " +newArray7);


   //   Task 8 — String Analyzer  
   
              let sentence=prompt("Enter a Sentence:");

    //  Total characters
    
          //     console.log("Total Characters: " ,sentence.length);

    //  Uppercase Sentence

               console.log("Uppercase: " ,sentence.toUpperCase());


    //  Lowercase sentence

                console.log("Lower Case: " ,sentence.toLowerCase());

    //	Whether it contains "JavaScript" 

                 console.log("Contain Javascript? " , sentence.includes("Javascript"));
            

    //  First character 

                 console.log("First Character: ", sentence[0]);

    //	Last character 

                  console.log("Last Character: " ,sentence.slice(-1));

    //	Number of words 
                  
                      let words =sentence.split();
                      console.log("Number of Words?: ",words.length);

	//Replace "JavaScript" with "Python" 
           
                    console.log("Replaced: ",sentence.replace("Javascript","Python"));

	//Convert sentence into an array using split() 

                   console.log("Array: ",sentence.split(""));


//    Final Mini Project — Employee Dashboard

          
                     let employees1 = [
                     {
                     id: 101,
                     name: "Arun",
                     department: "IT",
                     salary: 45000,
                     experience: 2
                    },
                     {
                    id: 102,
                    name: "Priya",
                    department: "HR",
                     salary: 50000,
                     experience: 4
                     },

                     {
                     id: 103,
                     name: "Karthi",
                    department: "IT",
                     salary: 65000,
                     experience: 6
                     }
                     ];

  //  1. Employee List

                 let emp=employees1.map((c,i,t)=>{
                    return c;
                 })
                 console.log("Employees list: " ,emp);

  // 2. Search    
  
                let emp1=employees1.find((c,i,t)=>{
                    return c.name;
                })
                 console.log("Employees Name: " , emp1);

   // 3. Department Filter  
   
                  let emp2=employees1.filter((c,i,t)=>{
                       return c.department=="IT";
                  })
                  console.log("Department:" ,emp2);

    // 4. Salary Filter     
                  
                 let emp3=employees1.filter((c,i,t)=>{
                       return c.salary>50000;
                 })

                 console.log("More than 50000 :" ,emp3);


    // 5. Salary Calculation    
    
                  let emp4=employees1.reduce((accumulator,c,i,t)=>{
                        return accumulator+c.salary;

                  },0)
                  console.log("Total Salary:" ,emp4);

     // 6. Highest Salary 
     
                   let emp5=employees1.find((c,i,t)=>{
                         return c.salary>55000;
                   })
                   console.log("Highest Paid Employee: ",emp5);

    //  7. Experience
    
                let emp6=employees1.filter((c,i,t)=>{
                    return c.experience>3;
                })
                console.log("Above 3 years: ",emp6);

    //  8. Sorting

         //	 Low → High 

              let emp7=employees1.sort((a,b)=>{
                  return  a-b;
              })
              console.log("Low to High: " ,emp7);

         //  High → Low    

               let emp8=employees1.sort((a,b)=>{
                return b-a;
               })
                console.log("High to Low: ",emp8);

     //  9. Statistics
                 
           let totalEmployees=employees1.length;
           console.log("Total Employees: " ,totalEmployees);

           let totalAmount=employees1.reduce((accumulator,c,i,t)=>{
            return accumulator +c.salary;

           },0)
           console.log("Total Salary:" ,totalAmount);

           let highestSalary=employees1.find((c,i,t)=>{

               return c.salary>55000
           })
           console.log("Highest Salary: ",highestSalary );

           let averageSalary=employees1.reduce((accumulator,C,i,t)=>{
                 return accumulator + C.salary/3;

           },0)
           console.log("Average Salary:" ,averageSalary);



            



            






