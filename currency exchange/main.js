let exchange = document.querySelector("h1");






fetch("https://api.exchangerate.host/latest").then((getandconvert) => 
 getandconvert.json()).then((final) => {
     exchange.innerHTML = final.rates.AED ;
 })

