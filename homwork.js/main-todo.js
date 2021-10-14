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
    let subbtn = document.querySelector("#subbtn");
    let task = document.querySelector("#task")
    subbtn.disabled = true ;
    task.onkeyup = () => {
if (task.value.length > 0){
    subbtn.disabled = false ;
    
}
else{
    document.querySelector("#notask").innerHTML = "<b>please write a task to add</b>"
}


}
    document.querySelector("form").onsubmit = function(){
 ;
let addtask = document.createElement("li")  ;
addtask.innerHTML = task.value; 
let add = document.querySelector("ul").append(addtask) ;
let par = document.querySelector("p");
par.innerHTML = ++nmrtasks + " "  + "tasks have been added";
  task.value = null ;
subbtn.disabled = true ; 






return false;

}
})

