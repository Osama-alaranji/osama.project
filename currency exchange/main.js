let exchange = document.querySelector("h1");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let selectdiv = document.querySelector("#select");



// 1- calling names 
// 2- create for loop for put names in select in html page
fetch("https://api.exchangerate.host/latest").then((getandconvert) => 
 getandconvert.json()).then((final) => {



//  calling names
    let names = Object.keys(final.rates);
    // end calling names 


    // put names in select //mission 2
    let select = "<select>";
 for (let i = 0 ; i < 170 ; i++ ){
    select += "<option value='"   + names[i] + "'>"  + names[i] + "</option>";

 }
  select += "</select>";
  selectdiv.innerHTML = select ;

 // end mission 2

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
} // end arrow function
 ); //end then
 

