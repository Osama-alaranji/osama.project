let weight  = document.querySelector("#weight") ;
let height = document.querySelector("#height") ;
let subbtn = document.querySelector("#sub") ;
let name = document.querySelector("#name") ;
let pname = document.querySelector("#nameprofile");
let pcontent = document.querySelector("#content");
let male = document.querySelector("#male");
let female = document.querySelector("#female");
let boldname = document.querySelector("#profilename");
let form = document.querySelector("form");
let mheight = height.value /100;
let bmi = weight.value / mheight * mheight;



// 1-get name and put him in the profile 
// 2-get weight and height and put them in profile 
// 3-calculate bmi 
// 4-inner bmi in profile
form.onsubmit = function(){
    boldname.innerHTML = "welcome" + " " + name.value ;
    pcontent.innerHTML = "<b>weight :</b>" + weight.value +"kg" + "<br><br> <b>height :</b> " + height.value + "cm"
    + "<br><b>bmi :</b> " + bmi ;

    return false;


}


