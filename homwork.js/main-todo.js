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
let task = document.querySelector("#task") ;
let addtask = document.createElement("li")  ;
addtask.innerHTML = task.value; 
let add = document.querySelector("ul").append(addtask) ;
let par = document.querySelector("p");
par.innerHTML = ++nmrtasks + " "  + "tasks have been added";
  task.value = null ;
  






return false;

}
})

