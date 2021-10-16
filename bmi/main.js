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
//6-Add diet Suggestion
//7-profile photo


// profile photo 
let femaleimg = document.querySelector("#femalephoto");
let maleimg = document.querySelector("#malephoto");
female.onchange = function(){
  img = femaleimg;
  noimg = maleimg;

}
male.onchange = function(){
  img = maleimg ;
  noimg = femaleimg;
 
}
// profile photo end
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
        // diet
        diet = "You must follow a diet to gain weight" +  " <a href='https://mawdoo3.com/%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%B2%D9%8A%D8%A7%D8%AF%D8%A9_%D8%A7%D9%84%D9%88%D8%B2%D9%86_%D9%81%D9%8A_%D8%B4%D9%87%D8%B1'>Go</a>";
        // end diet 
    }

    else if (bminumb >= 40 ){
        bmi = "<span style='color :rgb(255, 0, 0);'>Obesity 3 </span>" ;
        // animation 
       item = "<div class='obes3'></div>";
        // end animation
          // diet
          diet = "You should follow a diet" + " <a href='https://mawdoo3.com/%D8%A3%D8%B3%D8%B1%D8%B9_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86'>Go</a>";
        // end diet 
    }

    else if (bminumb >= 35){
        bmi = "<span style='color :rgb(252, 31, 31);'>Obesity 2 </span>" ;
        // animation 
        item = "<div class='obes2'></div>";
        // end animation
          // diet
          diet = "You should follow a diet " + " <a href='https://mawdoo3.com/%D8%A3%D8%B3%D8%B1%D8%B9_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86'>Go</a>";
        // end diet 
    }

     else if( bminumb >= 30){
        bmi = "<span style='color :rgb(252, 72, 72);'>Obesity 1</span>";
        // animation 
        item = "<div class='obes1'></div>";
        // end animation
          // diet
          diet = "You should follow a diet " + " <a href='https://mawdoo3.com/%D8%A3%D8%B3%D8%B1%D8%B9_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86'>Go</a>";
        // end diet 
    }

     else if (bminumb >= 25){
        bmi = "<span style='color :rgb(250, 101, 101);'>Overweight </span>";
        // animation 
         item = '<div class="over"></div>';
        // end animation
          // diet
          diet = "You should follow a diet " + " <a href='https://mawdoo3.com/%D8%A3%D9%81%D8%B6%D9%84_%D9%86%D8%B8%D8%A7%D9%85_%D8%BA%D8%B0%D8%A7%D8%A6%D9%8A_%D9%84%D8%AA%D8%AE%D9%81%D9%8A%D9%81_%D8%A7%D9%84%D9%88%D8%B2%D9%86'>Go</a>";
        // end diet 
    }

   
    else if( bminumb >= 18.5){
        bmi = "<span style='color :rgb(28, 230, 9);'>Normal weight</span>";
        // animation 
         item = '<div class="normal"></div>';
        // end animation
          // diet
          diet = "You have a healthy body keep it up " + "<a href='https://mawdoo3.com/%D9%83%D9%8A%D9%81_%D8%A3%D8%AD%D8%A7%D9%81%D8%B8_%D8%B9%D9%84%D9%89_%D8%B1%D8%B4%D8%A7%D9%82%D8%AA%D9%8A'>Go</a>";
        // end diet 
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

    pcontent.innerHTML = "<b>Weight : </b>" + weight.value +"kg" + "<br><br> <b>Height :</b> " + height.value + "cm <br>" 
+ "<br><b>Bmi :</b> " + bmi  + "<br><br><b>Diet : </b>" +  diet ;
    weight.value = null;
    height.value = null;
    name.value = "";
   img.style.display = "block";
   noimg.style.display = "none";
    return false;
}