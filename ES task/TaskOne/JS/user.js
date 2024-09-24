const user = document.querySelector('.user');
console.log(user)    
let show = async() => {
    results = await fetch("https://jsonplaceholder.typicode.com/users");
    finalResults = await results.json();
    console.log(finalResults);
    for(let i = 0 ; i < finalResults.length ; i++){
    user.innerHTML +=`
    <h1>${finalResults[i].id}</h1>`
    }
    
}

import {showUser}  from "./app";
showUser();