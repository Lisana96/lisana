//  Task 1  API  	
//  title ,Price,Category


         let api1="https://fakestoreapi.com/products";
        fetch(api1)
        .then(response=>response.json())
        .then(products=>{

          console.log("======= PRODUCTS ========");

          products.forEach(product=>{
               console.log("Title: ",product.title);
               console.log("Price: ",product.price);
                console.log("Category: ",product.category);
               
          });

//   Use map() 
//  title ,	price
                
            let productDetails1=products.map(product=>{
              return{
                title:product.title,
                price:product.price
             }
             })
             console.log(productDetails1);

 //  filter() - products with price greater than $100.  
          
           let expensiveProducts1=products.filter(product=>{
            return product.price > 100;
           })
           console.log(expensiveProducts1);

  //  find() - first product in the "electronics" 
  
             let electronicsProduct1=products.find(product=>{
              return  product.category==="electronics";
             })
             console.log(electronicsProduct1);

   //  reduce() - calculate the total price
           
              let totalPrice1=products.reduce((total,product)=>{
                    return total + product.price;

              },0);
              console.log("Total price: ",totalPrice1);

    // sort()- highest to lowest price

                  let sort1=products.sort(a,b=>{
                    return a.price-b.price;
                  })
                  console.log("highest to lowest: ",sort1);
        })

        .catch(error=>{
          console.log(error);
        })
        .finally(()=>{
          console.log("====API 1 operations completed====");
        })

    


// Task 2 — Product Category Dashboard
       
   // fetch()

          let api2="https://fakestoreapi.com/products";
          
           
  // total products
         
           function dashboard(products){

           
            let total2=products.length;

            console.log("Total Products: ",total2);

            let electronics2=products.filter(product=>{
               return product.category==="electronics";              
            });
            
            console.log("Jewelery: ",electronics2);

            let jewelery2=products.filter(product=>{
               return product.category==="jewelery";
            });

            console.log("Jewelery: ",jewelery2);

            let mensClothing2=products.filter(product=>{
               return product.category==="men's clothing";
           });

            console.log("Men's Clothing: ",mensClothing2);

            let womensClothing2=products.filter(product=>{
               return product.category==="women's clothing";
           });

            console.log("Women's Clothing: ",womensClothing2);

//  map()

            let prices=products.map(product=>{
              return product.price;
            });

// highest price to lowest    

            
            let sort2=[...prices].sort((a,b)=>{
              return a.price-b.price;
            });
            console.log("sort: ",sort2);

            let highPrice=sort2[sort2.length-1];
            let lowPrice=sort2[0];

   // reduce() 
   
             let totalPrice2=prices.reduce(sum,price=>{
              return sum + price;
             },0);
             console.log("Total Price: ",totalPrice2);

  // Average Price
       
            let averagePrice2=totalPrice2/total2;
            console.log("Average Price: ",averagePrice2);
           };

           fetch(api2)
           .then(response=>response.json())
           .then(products=>{
               dashboard(products);
           })
           
        
           .catch(error=>{
            console.log("API 2: ",error);
           });
          
            

//  Task 3 — User & Post API

  //   1.	Fetch users
  

       let api3="https://jsonplaceholder.typicode.com/users";

         fetch(api3)

             .then(response=>response.json())
             .then(users=>{

              console.log("======USER API DATA=======");

//   2.	user names
          
            users.forEach(user=>{
              console.log(user.name);
            })

 //  3. user name + email.  

            users.forEach(user=>{
              console.log(user.name + user.email);
            })
 
  //  4.user with ID 5. 
  
            let id5=users.find(user=>{ 
               return user.id===5
            })
              console.log(id5);
            

  // 5.	particular city  
           
              let city6="Gwenborough";
              let userCity=users.filter(user=>{
                return user.address.city===city6;
              })
                console.log(userCity);
               })
                .catch(error=>{
                console.log(error);
                
              
   //  6.	Fetch posts
   
             let postApi6="https://jsonplaceholder.typicode.com/posts";
             fetch(postApi6)

             .then(response=>response.json())
             .then(posts=>{
              console.log("======= POSTS API DATA ======")
             })
               
          
   //  7. posts written by user ID 1   
   
                 let userPost=posts.filter(post=>{
                  return post.userId===1;
                 });

                 userPost.forEach(post=>{

                  console.log(post.title); 

                 });
   //  8. how many posts user ID 1

              let length=users.find(user=>posts.length);
              console.log(length);


   //  9. first post with more than 50 characters in the title

              let titlePost=posts.find(post=>{
                return post.title.length > 50;
              })
                console.log(titlePost);  
            })     
            

            .catch(error=>{
              console.log("USER API: ",error);
            })
            .finally(()=>{
               console.log("=======USER API operations completed=====");
            }) 
          
        
//  Task  4 — API + Search 

//  product category
         
            let category4=prompt("Enter product category:");
            let maximumPrice4=Number(prompt("Enter maximum price:"));


            fetch("https://fakestoreapi.com/products")
               .then(response=>response.json())
                 .then(products1=>{
    

             let result=products1.filter((c,i,t)=>{
               return c.category4===category4 && c.price <=maximumPrice4;
             });
             console.log("===========RESULTS==========");
             console.log("Category :",category4);
             console.log("maximumPrice :",maximumPrice4);

             if(result.length===0){
              console.log("NO Products Matching");

              }else{
                result.forEach((c,i,t)=>{
                  console.log(c.title,c.price);

                });
              }
            
         })
          
        .catch(error=>{
          console.log("ERROR: ",error);
        });

//    Task 5 — API Shopping Cart

              let cart=[];
// display products

              fetch("https://fakestoreapi.com/products")
              .then(response=>response.json())
              .then(products=>{

                  console.log("======PRODUCTS======");

                  products.forEach(product=>{
                    console.log(product.id+product.title+product.price);
                  });

  // 2.	Select products using their IDs. 
  
              let id1=Number(prompt("Enter 1st product ID:"));
              let id2=Number(prompt("Enter 2nd product ID:"));

   //  3.	Add products to an array.  
   
            let product1=products.find(p=>{
              return  p.id===id1 });

            let product2=products.find(p=>{
                return p.id===id2});

             if(product1){
            cart.push(product1);
             }

             if (product2){
             cart.push(product2);
             }

    //  4.	Calculate total using reduce
    
                let total=cart.reduce((sum,product)=>{
                  return sum+product.price;
                },0);

    //  5.	Apply discount:   Above $100 → 10%	 , Above $200 → 20
              
               let discount=0;
               if(total>200){
                  discount=20;
               }else if(total>100){
                  discount=10;
               }

     // 6.	final amount
             let discountAmount=total*discount/100;
     
             let finalAmount=total-discountAmount;
             console.log("=====FINAL AMOUNT=====")
             console.log("Total: ",total);
             console.log("Discount :", discount +"%");
             console.log("Final Amount :" ,finalAmount);
             })

             .catch(error=>{
                console.log("Error: ",error);
             });

// Task 6 — FakeStore Product Report

//  1. Fetch API

           let api6="https://fakestoreapi.com/products";
           fetch(api6)

// 2. Convert response        
            .then(response=>response.json())
            .then(products=>{

             console.log("=====PRODUCT REPORTS======");

// 3. Display all products 
              
             products.forEach(product=>{
              console.log(product.id+product.title+"$"+product.price);

             });

// 4. product names array

           let productNames=products.map(p=>{
             return p.title;
           })
           
           productNames.forEach(name=>{
            console.log(name);
           });

  //  5.  products price > 100
               
          let expensiveProducts6=products.filter(p=>{
            return p.price>100;
          });

          expensiveProducts6.forEach(p=>{
            console.log("Above 100: ",expensiveProducts6);
          });

  // 6.  Electronics product
  
           let electronicsProduct6=products.find(product=>{
            return product.category==="electronics";
           });
            
            
              console.log("ELECTRONIC PRODUCTS: ",electronicsProduct6);
            

   // 7. Calculate total price
       
               let totalPrice6=products.reduce((total,product)=>{
                return total +product.price;
               },0);

               console.log("=====products=====")

               console.log("Total products :" ,totalPrice6);

    // 8. Check products 
         // Above 500$
    
               let above500=products.some(product=>{
                return product.price>500;
               })

               console.log("Produt above 500$: ",above500);

         // product above 1$      

                  let above1=products.every(product=>{
                    return product.price>1;
                  });
                  console.log("product above 1$ :",above1);

     //  9. Sort Highest price → lowest price

                  let sort6=[...products].sort((a,b)=>{
                    return b.price-a.price;
                  });

                  console.log("====HIGHEST TO LOWEST=====")
                  console.log("Highest to lowest: ",sort6);

                  sort6.forEach(product=>{
                    console.log(product.title +product.price);
                  });
                })


     //  10. Error handling

               .catch(error=>{
                console.log(error);
               })

               .finally(()=>{
                console.log("======API 6 successfully works====");
               
               })

               
 