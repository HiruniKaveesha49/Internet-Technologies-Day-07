// function checkValue() {
//     let inputNumber = document.getElementById("inputNumber").value
//     console.log(inputNumber);

//     let num = Math.random() * 10 + 1

//     let randomNumber = Math.floor(num)
//     console.log(randomNumber);

//     if (inputNumber == randomNumber) {
//         Swal.fire({
//             title: "Congratulation!🤩...You are Win",
//             width: 600,
//             padding: "3em",
//             color: "#716add",
//             background: "#fff url(/images/trees.png)",
//             backdrop: `

//                         rgba(64, 0, 123, 0.4)
//                         url("images/win.gif\")
//                      `
//         });

//     } else {
//         Swal.fire({
//             title: "You are fail😪...Try again",
//             width: 600,
//             padding: "3em",
//             color: "#716add",
//             background: "#fff url(/images/trees.png)",
//             backdrop: `

//                         rgba(64, 0, 123, 0.4)
//                         url("images/nyan-cat.gif\")
//                         left center / 300px auto
//                         no-repeat
//                         `
//         });

//     }
// }

// function resetButton() {
//     document.getElementById("inputNumber").value = ""
// }

// const customerList = [];

// customerList.push(1);
// customerList.push(2);
// customerList.push(3);

// console.log(customerList);


// let revAr = customerList.reverse();

// console.log(revAr);

// const products = [
//     { name: "bun",    inStock: true },
//     { name: "rols",   inStock: false },
//     { name: "hopper", inStock: true },
//     { name: "rotti",  inStock: true }
// ];

// let inStockItems = products.filter(
//     function a2(product) {
//         return a1(product);
//     }
// )
// function a1(product) {
//     return product.inStock == true;
// }


// let inStockItem = products.filter(
//     function (product){
//         return a1(product)
//     }
// );
// function a1(product){
//     return product.inStock == true;
// }

// console.log(inStockItem);


// let inStockItems = products.filter( product => product.inStock==true);

// console.log(inStockItems);










// console.log(inStockItems);


// function sum(num1, num2){
//     return num1+num2
// }

// console.log(sum(10,20));

// let sum = function(num1, num2){
//     return num1+num2
// }

// console.log(sum(40,50));

// let sum = (num1,num2)=> num1+num2

// console.log(sum(60,50));

// let name1 = textName => textName

// console.log(name1("HIRUNI"));

// const products = [
//     { name: "bun",    inStock: true },
//     { name: "rols",   inStock: false },
//     { name: "hopper", inStock: true },
//     { name: "rotti",  inStock: true }
// ];

// for (product of products){
//     console.log(product);
// }

// products.forEach(product => console.log(product)
// )


// const letterList = ["C","B","D","A"];

// let sortAr = letterList.toSorted();

// console.log(sortAr);

// const employeeSalary = [30000, 40000, 50000, 60000];

// let employeeSalaryItem = employeeSalary.map(salary => salary*2)

// console.log(employeeSalaryItem);

// const studentList = [
//     {id:"001", name:"sunil"},
//     {id:"002", name:"wimal"},
//     {id:"003", name:"kamal"},
//     {id:"004", name:"ranil"}
// ]

// let students = studentList.find(student => student.id==="003")

// console.log(students.name);



// fetch("https://jsonplaceholder.typicode.com/todos/")
// .then(res=>res.json())
// .then(data=>{

//     console.log(data);

//     let tblTodoList = document.getElementById("tblTodoList")

//     let body = "";

//     data.forEach(element => {
//         body +=`
//             <tr>
//                 <td>${element.id}</td>
//                 <td>${element.title}</td>
//                 <td>${element.userId}</td>
//                 <td>${element.completed}</td>
//             </tr>

//         `
        
//     });
//     tblTodoList.innerHTML=body;
// });




fetch("https://fakestoreapi.com/products/")
.then(res=>res.json())
.then(data=>{
    console.log(data);
    

    let productContainner = document.getElementById("productContainner")
    
    let body=""

    data.forEach(element => {
        
        body+=
        `<div class="col">
                    <div class="card shadow-sm h-100"> 
                        <div><img src="${element.image}" alt="" class="card-img-top object-fit-cover"></div>
                            <div class="card-body">
                            <h1 class="card-title">${element.title}</h1>
                            <p class="card-text">${element.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class=""> 
                                    <button type="button"
                                        class="btn btn-sm btn-success">Buy Now LKR ${element.price}$</button>
                                    </div> 
                                    <small
                                        class="text-body-secondary">${element.rating.count}/${element.rating.rate}</small>
                            </div>
                        </div>
                    </div>
                </div>
                `
        });

        productContainner.innerHTML = body;
        

});