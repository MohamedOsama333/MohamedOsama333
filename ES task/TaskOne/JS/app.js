const addbtn = document.querySelector("section .butt .btn");
const tbody = document.querySelector(".table tbody");

let results;
let finalResults;

let addUsersData = async () => {
    results = await fetch("https://jsonplaceholder.typicode.com/users");
    finalResults = await results.json();
    console.log(finalResults);
    for(let i = 0 ; i < finalResults.length ; i++) {
    tbody.innerHTML += `
    <tr class="bg-light">
    <td>${finalResults[i].id}</td>
    <td>${finalResults[i].name}</td>
    <td colspan="2">${finalResults[i].username}</td>
    <td colspan="2">${finalResults[i].email}</td>
    <td colspan="2">${finalResults[i].address.street}</td>
    <td colspan="2">${finalResults[i].address.city}</td>
    <td colspan="2">${finalResults[i].address.zipcode}</td>
    <td colspan="2">${finalResults[i].phone}</td>
    <td colspan="2">${finalResults[i].website}</td> 
    <td colspan="2">${finalResults[i].company.name}</td> 
    <td colspan="2"><button onclick='deleteUser(${finalResults[i].id})' class="btn btn-danger">Delete</button></td> 
    <td colspan="2"><button onclick='showUser(${finalResults[i].id})' class="btn btn-danger">Show</button></td> 
    <tr>`
}
// localStorage.setItem("users" , JSON.stringify(finalResults));
}

addbtn.addEventListener("click" , addUsersData);

let deleteUser = (idx) => {
    let deleted = finalResults.filter((el) => el.id !== idx);
    // let mapped = deleted.map((ele) => console.log(ele))
    console.log([...deleted]);
    // console.log(typeof mapped);
}
