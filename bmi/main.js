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
let profile = document.querySelector("#profile");




// 1-get name and put him in the profile 
// 2-get weight and height and put them in profile 
// 3-calculate bminumber 
// 4_show bmi as string in profile by if statement 
//5-animatiom :( 

//animation 
let basicanim = document.querySelector("#basicanim");
let adddiv  = document.querySelector("#adddiv");




form.onsubmit = function(){
    boldname.innerHTML = "welcome" + " " + name.value ;
    // bmi beginning
    let  heightv = height.value;
    let  weightv = weight.value ;
    let  mheight =  heightv / 100;
    let  mheightm = mheight * mheight ;
    let  bminumb  = weightv / mheightm;


    if (bminumb < 18.5){
        bmi = "<span style='color :rgb(119, 209, 240);'>Underweight </span>";
        // animation 
        item = "<div class='under'></div>";
        // end animation
    }

    else if (bminumb >= 40 ){
        bmi = "<span style='color :rgb(255, 0, 0);'>Obesity 3 </span>" ;
        // animation 
       item = "<div class='obes3'></div>";
        // end animation
    }

    else if (bminumb >= 35){
        bmi = "<span style='color :rgb(252, 31, 31);'>Obesity 2 </span>" ;
        // animation 
        item = "<div class='obes2'></div>";
        // end animation
    }

     else if( bminumb >= 30){
        bmi = "<span style='color :rgb(252, 72, 72);'>Obesity 1</span>";
        // animation 
        item = "<div class='obes1'></div>";
        // end animation
    }

     else if (bminumb >= 25){
        bmi = "<span style='color :rgb(250, 101, 101);'>Overweight </span>";
        // animation 
         item = "<div class='over'></div>";
        // end animation
    }

   
    else if( bminumb >= 18.5){
        bmi = "<span style='color :rgb(28, 230, 9);'>Normal weight</span>";
        // animation 
         item = '<div class="normal">rr</div>';
        // end animation
    }

   
    else {
        bmi = "";
    }
    
    // bmi ending 


    // animation 
    adddiv.style.display = "block";
    profile.style.display = "block";
    adddiv.innerHTML = item ;

    //end animation

    pcontent.innerHTML = "<b>weight : </b>" + weight.value +"kg" + "<br><br> <b>height :</b> " + height.value + "cm <br>" 
+ "<br><b>bmi :</b> " + bmi ;
    return false;
}