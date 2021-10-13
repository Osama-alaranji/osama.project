//     document.addEventListener("DOMContentLoaded", function(){
// document.querySelector("form").onsubmit = function(){
//    let taskname = document.querySelector("#task").value;
   
//    document.querySelector("ul").innerHTML = "<li>"  + taskname +   " </li>" ;
//    return false ;
// }

//         return false ;
//     }   )

document.addEventListener("DOMContentLoaded" , function(){
    document.querySelector("form").onsubmit = function(){
let task = document.querySelector("#task").value ;
let addtask = document.createElement("li")  ;
addtask.innerHTML = task;
let add = document.querySelector("ul").appendChild(addtask) ;


return false;

}
})

