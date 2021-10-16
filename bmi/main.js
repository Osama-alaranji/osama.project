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
// 1-get name and put him in the profile 
// 2-get weight and height and put them in profile 
// 3-calculate bminumber 
// 4_show bmi as string in profile by if statement 
form.onsubmit = function(){
    boldname.innerHTML = "welcome" + " " + name.value ;
    // bmi beginning
    let  heightv = height.value;
    let  weightv = weight.value ;
    let  mheight =  heightv / 100;
    let  mheightm = mheight * mheight ;
    let  bminumb  = weightv / mheightm;


    if (bminumb < 18.5){
        bmi = "Underweight";
    }
    else if (bminumb >= 40 ){
        bmi = "obesity 3 " ;
    }
    else if (bminumb >= 35){
        bmi = "obesity 2" ;
    }
     else if( bminumb >= 30){
        bmi = "Obesity 1";
    }
     else if (bminumb >= 25){
        bmi = "Overweight";
    }
   
    else if( bminumb >= 18.5){
        bmi = "Normal weight"
        ;
    }
   
    else {
        bmi = "";
    }
    
    // bmi ending 

    pcontent.innerHTML = "<b>weight : </b>" + weight.value +"kg" + "<br><br> <b>height :</b> " + height.value + "cm <br>" 
+ "<br><b>bmi :</b> " + bmi ;
    return false;
}