// FINAL JAVASCRIPT TASK

// Employee Management Dashboard Project Goal

let api = "https://dummyjson.com/users";


let employees = [];
let currentSearch = "";
let currentDepartment = "All";
let currentSort = "name-asc";

let employeeCard =
    document.getElementById("employeeCard");

let searchInput =
    document.getElementById("searchInput");

let searchBtn =
    document.getElementById("searchBtn");

let filterButtons =
    document.querySelectorAll(".filter-btn");

let sortSelect =
    document.getElementById("sortSelect");

let employeeCount =
    document.getElementById("employeeCount");

let totalSalaryElement =
    document.getElementById("totalSalary");

let averageSalaryElement =
    document.getElementById("averageSalary");

let highestEmployeeName =
    document.getElementById("highestEmployeeName");

let highestEmployeeSalary =
    document.getElementById("highestEmployeeSalary");

let statusMessage =
    document.getElementById("statusMessage");

let employeeForm =
    document.getElementById("employeeForm");

let nameInput =
    document.getElementById("employeeName");

let ageInput =
    document.getElementById("employeeAge");

let emailInput =
    document.getElementById("employeeEmail");

let departmentInput =
    document.getElementById("employeeDepartment");

let salaryInput =
    document.getElementById("employeeSalary");


function normalizeDepartment(department) {

    let value =
        department.toLowerCase();

    
       if ( value.includes("employees") || value.includes("hr")){
        return "HR";
        }

       if ( value.includes("finance") || value.includes("account")){
        return "Finance";
        }

       if ( value.includes("marketing") || value.includes("sales") || value.includes("business")) {
        return "Marketing";
        }

        return "IT";
        }


     function generateSalary(id) {

     return 35000 +  (id % 10) * 5000;

      }


      function fetchEmployees() {

          statusMessage.innerHTML = "Loading employees...";

      fetch(api)
          .then((response) =>{
            return response.json();
        })
      
        .then((data) => {
            employees = data.users.map((user) => {
            return {
                       id:user.id,
                       name: `${user.firstName} ${user.lastName}`,
                       age: user.age,
                       email:user.email,
                       phone:user.phone,
                       company:user.company?.name || "Not Available",
                       department:normalizeDepartment( user.company?.department || ""),
                       image: user.image,
                       salary:generateSalary(user.id )
                      }
                    }
                );

          statusMessage.innerHTML ="Employee data loaded successfully.";
          statusMessage.style.color ="#eb0909";
          statusMessage.style.backgroundColor = "rgb(166, 236, 27)";

        refreshDashboard();

            setTimeout(
                () => {statusMessage.innerHTML ="";

             statusMessage.style.backgroundColor ="transparent";
              },3000);
             })

        .catch((error) => {

            console.error(error);

            statusMessage.innerHTML ="Loading...Unable to open employee data......try again after few minutes";
            statusMessage.style.color = "#04040a";
            statusMessage.style.backgroundColor = "#eff6f9";
             })

        .finally(() => {

            console.log("Employee API runs sucessfully");
            });
           }

function displayEmployees(employeeList) {

           employeeContainer.innerHTML = "";
  
       if( employeeList.length ===""){

        Container.innerHTML =
            `<div class="no-employees">  No employees found.</div>`;
         return;
        }

    employeeList.forEach(
        (employee) => {

      let {id, name,age,email,department,phone,company,image,salary} = employee;

       let card =document.createElement("div");

        card.setAttribute("class","employee-card");
        card.setAttribute("data-id",id);

        const employeeImage = document.createElement("img");

         employeeImage.setAttribute( "src",image);
         employeeImage.setAttribute("alt", name);
         employeeImage.setAttribute("class","employee-image");

         const employeeInfo = document.createElement("div");
          employeeInfo.innerHTML = `<h3>${name}</h3>

         <p>  <strong>Age:</strong> ${age} </p>
         <p>  <strong>Email:</strong> ${email} </p>
         <p>  <strong>Department:</strong> ${department} </p>
         <p>  <strong>Phone:</strong> ${phone || "Not Available"} </p>
         <p>  <strong>Company:</strong> ${company} </p>
         <p>  <strong>Salary:</strong> ₹${salary.toLocaleString("en-IN")} </p>`;

          const deleteButton =document.createElement("button");
          deleteButton.innerHTML ="Delete";
          deleteButton.setAttribute( "class","delete-btn");

           deleteButton.addEventListener("click",() => {
            deleteEmployee( id );
            }
            );

            card.appendChild(employeeImage);
            card.appendChild(employeeInfo);
            card.appendChild(deleteButton);
            employeeContainer.appendChild(card);
            });
          }

       function searchEmployees() {
              currentSearch = searchInput.value .trim() .toLowerCase();

       refreshDashboard();
       }

        function filterDepartment(department) {
               currentDepartment =department;
           for (const button of filterButtons) {
                 button.classList.remove( "active");

        
         if(button.dataset.department ===department) {

                button.classList.add("active");
               }
               }
          refreshDashboard();
              }
              
           function sortEmployees(employeeList) {
                  const sortedEmployees =[...employeeList];
              if (currentSort ==="name-asc") {
              sortedEmployees.sort((a, b) =>
                a.name.localeCompare(b.name));

            } else if (currentSort ==="name-desc") {

              sortedEmployees.sort((a, b) =>
              b.name.localeCompare(a.name));

             } else if (currentSort ==="age-asc") {

               sortedEmployees.sort((a, b) => a.age - b.age);

              } else if(currentSort ==="age-desc" ) {
                  sortedEmployees.sort((a, b) => b.age - a.age);

             } else if (currentSort ==="salary-asc") {
                     sortedEmployees.sort((a, b) => a.salary - b.salary);

             } else if (currentSort === "salary-desc" ) {
                    sortedEmployees.sort((a, b) =>b.salary - a.salary);
              }
               return sortedEmployees;
              }


            function updateEmployeeCount(employeeList) {
                  employeeCount.innerHTML =employeeList.length;
                }


       function calculateSalary(employeeList) {

            let totalSalary = employeeList.reduce( (total, employee) => {
             return total + employee.salary;
            },0);

             let averageSalary =employeeList.length > 0?
              totalSalary /employeeList.length: 0;

           totalSalaryElement.innerHTML =`${Math.round(totalSalary) .toLocaleString("en-IN")}`;

           averageSalaryElement.innerHTML =`${Math.round(averageSalary).toLocaleString("en-IN")}`;
           calculateHighestSalary( employeeList);
           }


        function calculateHighestSalary( employeeList) {
            if (employeeList.length === 0) {
                highestEmployeeName.innerHTML ="Name: ";
               highestEmployeeSalary.innerHTML ="Salary: ";
            return;
            }

         const highestPaidEmployee =employeeList.reduce((highest, employee) => {

                return employee.salary >highest.salary? employee : highest;
             },employeeList[0] );

       highestEmployeeName.innerHTML =`Name: ${highestPaidEmployee.name}`;

       highestEmployeeSalary.innerHTML =`Salary: ₹${highestPaidEmployee.salary.toLocaleString("en-IN")}`;
       }

        function validateEmployee(employee) {
               clearErrors();
               let isValid =true;

           let requiredFields = [employee.name, employee.email,employee.department];

            let allFieldsFilled =requiredFields.every((field) =>field.trim() !== "");

         if ( !allFieldsFilled) { isValid =false;
         }

         if (employee.name.trim() === "") {document.getElementById("nameError").innerHTML =
            "Name cannot be empty";
            isValid =false;
          }

       if(employee.age <= 18 || Number.isNaN( employee.age)){
               document.getElementById("ageError").innerHTML =
            "Age must be greater than 18";
            isValid = false;
          }

        if ( employee.email.trim() === "") {
              document.getElementById("emailError").innerHTML =
              "Email cannot be empty";
              isValid = false;
             }

        if (employee.department === "") {
               document.getElementById("departmentError").innerHTML =
                "Department must be selected";
               isValid =false;
             }

         if ( employee.salary <= 0 || Number.isNaN( employee.salary))
           {
             document.getElementById("salaryError").innerHTML =
             "Salary must be greater than 0";
             isValid =false;
             }

          let emailExists =employees.some((existingEmployee) => {
                 return existingEmployee.email .toLowerCase() ===
                    employee.email .toLowerCase();
              });

          if (employee.email.trim() !== "" && emailExists) {
                document.getElementById("emailError").innerHTML =
                "Employee email already exists";
                 isValid =false;
               }
              return isValid;
             }


        function addEmployee(event) {
            event.preventDefault();
             let employeeName = nameInput.value.trim();
             let employeeAge =Number(ageInput.value);
            const employeeEmail =emailInput.value.trim();
            const employeeDepartment =departmentInput.value;
            const employeeSalary = Number(salaryInput.value);
            const newEmployee = {

                      id:Date.now(),
                      name:employeeName,
                      age:employeeAge,
                      email:employeeEmail,
                      department: employeeDepartment,
                      salary: employeeSalary,
                      phone: "Not Available",
                      company: "Local Employee",
                      image:`https://ui-avatars.com/api/?name=${encodeURIComponent(
                      employeeName)}&size=128`
                      };

            if (!validateEmployee(newEmployee)) {
                 return;
              }

            employees = [...employees, newEmployee];
            clearForm();
            refreshDashboard();

             statusMessage.innerHTML ="Employee added successfully.";
             statusMessage.style.color ="#19d545";
             statusMessage.style.backgroundColor ="#3137a8";

      setTimeout(() => {
            statusMessage.innerHTML ="";
            statusMessage.style.backgroundColor ="transparent";
            },2000);
            }


      function deleteEmployee(id) {
              let employeeToDelete =employees.find( (employee) =>
                employee.id === id );

        if (!employeeToDelete) {
              return;
             }

        employees =employees.filter( (employee) =>
                employee.id !== id);

    refreshDashboard();

               statusMessage.innerHTML =`${employeeToDelete.name} deleted successfully.`;
             statusMessage.style.color = "#f3eeee";

               statusMessage.style.backgroundColor = "#b92e39";

    setTimeout(() => {
          statusMessage.innerHTML = "";
          statusMessage.style.backgroundColor = "transparent";
           }, 2000);
           }

         function clearForm() {
             employeeForm.reset();
             clearErrors();
           }


           function clearErrors() {
                let errorElements = document.querySelectorAll(".error");
               errorElements.forEach((error)=> {
                error.innerHTML ="";
               });
              }


            function refreshDashboard() {
                  let filteredEmployees = [...employees];

             if ( currentSearch !== "") {
                   filteredEmployees = filteredEmployees.filter((employee) => {
                   return employee.name .toLowerCase() .includes(currentSearch);
                });
                }

             if (currentDepartment !== "All") {
                   filteredEmployees = filteredEmployees.filter((employee) => {
                   return employee.department === currentDepartment;
                 });
                 }

        filteredEmployees =sortEmployees(filteredEmployees);
          displayEmployees(filteredEmployees);

           updateEmployeeCount(filteredEmployees);
           calculateSalary(filteredEmployees);
           }


function displayDateTime() {

         let today= new Date();
         let date = today.toLocaleDateString();

          let time=today.toLocaleTimeString();
          document.getElementById("currentDate").innerHTML=today;
          document.getElementById("currenttime").innerHTML=time;
         }

         filterButtons.forEach((button) => {
          button.addEventListener("click",() =>{
           filterDepartment(button.dataset.department);
           });
           });

        sortSelect.addEventListener("change",()=>{
              currentSort =sortSelect.value;
           refreshDashboard();
         });

        employeeForm.addEventListener("submit",addEmployee);

fetchEmployees(); 
displayDateTime();