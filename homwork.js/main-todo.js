//     document.addEventListener("DOMContentLoaded", function(){
// document.querySelector("form").onsubmit = function(){
//    let taskname = document.querySelector("#task").value;
   
//    document.querySelector("ul").innerHTML = "<li>"  + taskname +   " </li>" ;
//    return false ;
// }

//         return false ;
//     }   )

document.addEventListener("DOMContentLoaded" , function(){
    let nmrtasks = 0 ;
    document.querySelector("form").onsubmit = function(){
let task = document.querySelector("#task").value ;
let addtask = document.createElement("li")  ;
addtask.innerHTML = task; 
let add = document.querySelector("ul").appendChild(addtask) ;
let par = document.querySelector("p");
par.innerHTML = nmrtasks++ + "has been added";



return false;

}
})

