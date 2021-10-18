let exchange = document.querySelector("h1");
let one = document.querySelector("#one");
let two = document.querySelector("#two");
let curone = document.querySelector("#curone");
let curtwo = document.querySelector("#curtwo");
let sub = document.querySelector("#sub");
let form = document.querySelector("form") ;  




// 1- calling names 
// 2- create for loop for put names in select in html page
// 3- get values from inputs and link it with currencys





fetch("https://api.exchangerate.host/latest").then((getandconvert) => 
 getandconvert.json()).then((final) => {

    


//  calling names
let names = Object.keys(final.rates);
// end calling names 


    




    
    let selecti = "<select  id='selectii'><option value='0'>none</option>";
 for (let i = 0 ; i < 170 ; i++ ){
    selecti += "<option value='"   + names[i] + "' >"  + names[i] + "</option>";

 }

  selecti += "</select>";
  //  end for


// start for
  let selecto = "<select id='selectoo'><option value='0'>none</option>";
  for (let o = 0 ; o < 170 ; o++ ){
    selecto += "<option value='"   + names[o] + "' >"  + names[o] + "</option>";

 }

  selecto += "</select>";
  //  end for


  let selectdiv1 = document.querySelector("#select1");
  let selectdiv2 = document.querySelector("#select2");
  
  selectdiv1.innerHTML = selecti ;
  selectdiv2.innerHTML = selecto ;
let selectii = document.querySelector("#selectii");
let selectoo = document.querySelector("#selectoo");



   selectoo.onchange = function(){
     opt2 = this.value
   ;}
   selectii.onchange = function(){
    opt1 = this.value
   ;}

 
 
 
 curone.onchange = function(){
    curtwo.value = null ;
    
    let exchange1 = (curone.value / final.rates[opt1]) * final.rates[opt2];
    curtwo.value = exchange1.toFixed(2) ;
    
   
  
    
 }
 curtwo.onchange = function(){
   
     curone.value = null ;
    let exchange2 = (curtwo.value / final.rates[opt2]) * final.rates[opt1];
    curone.value = exchange2.toFixed(2);
    
    
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 

} // end arrow function
); //end then