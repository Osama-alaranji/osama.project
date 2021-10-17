let exchange = document.querySelector("h1");
let one = document.querySelector("#one");
let two = document.querySelector("#two");





fetch("https://api.exchangerate.host/latest").then((getandconvert) => 
 getandconvert.json()).then((final) => {
     exchange.innerHTML = final.rates.AED ;
 })

