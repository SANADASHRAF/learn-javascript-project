//header select and go to the choice
const selectheader=document.querySelectorAll(".headerr .link a");
selectheader.forEach(a=>{
    a.addEventListener("click",(e)=>{
        e.preventDefault();
 
       document.querySelector( e.target.dataset.section).current. scrollIntoView({
            behavior: 'smooth'
       });
    });
});












// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////random backgrounnd
const rand=(min,max)=>{
    return Math.floor(Math.random() *(max-min+1)+min);
}


let landingpage=document.querySelector( ".landing_page");
let arrimg=["/img/p2.jpg","/img/p3.jpg","/img/p1.jpg","/img/p4.jpg","/img/p5.jpg","/img/p6.jpg","/img/p7.jpg","/img/p8.jpg","/img/p9.jpg" ];
setInterval(()=>
{
    // let x= Math.floor( Math.random()* arrimg.length-1);
    landingpage.style.backgroundImage= `uRL(${arrimg[rand(0,arrimg.length-1)]})`;
    
},1000);



/////////////////////setting-box الللاى فى الجنب وبتدوس علية يفتحلك اوبشن
document.querySelector(".togle-setting .fa-gear").onclick=function(){
    /////ع يلف الاوبشن من برة 
    this.classList.toggle("fa-spin");

    document.querySelector(".setting-box").classList.toggle("open");
}




// /////////////////////دى ع لما تضغط على اللون اللى فى setting box يتغير زى ما موجود فى data-color
// const x=document.querySelectorAll(".setting-container .color-box li");

// x.forEach(li => {
//     li.addEventListener("click", (e)=>{document.documentElement.style.setProperty('red',e.target.dataset.color);});
    
// });



/////create popup with the image
//لما اضغط عالصورة يفتحهالى فى overlay 
let gallary=document.querySelectorAll(".gallary .img-list img");
gallary.forEach(img=>{

    img.addEventListener("click",(e)=>{
        let overlay=document.createElement("div");
        overlay.className="popup-overlay";
        document.body.appendChild(overlay);
 

        let popupbox=document.createElement("div");
        popupbox.className="popup-box";


         //ع اضيف نص فى الصورة)(ع احط اسم الصورة اللى انا حاطة فى altلو ملهاش هكريت اسم)
         if(img.alt!==null)
         {
             let t=document.createTextNode(img.alt);
             let teext=document.createElement("h2");
             teext.appendChild(t);
             popupbox.appendChild(teext);
         }
         //error!!
         if(img.alt===null)
         {
            
             let rr=document.createTextNode("eeeeeeee");
             let reext=document.createElement("h2");
             reext.appendChild(rr);
             popupbox.appendChild(reext);
            
         }


        let popupimg=document.createElement("img");
        //set img source
        popupimg.src=img.src;

        //add img to popup box
        popupbox.appendChild(popupimg);

        //append popoupbox to bady
         
        document.body.appendChild(popupbox);


        
       
        ////close span

         let closebuttom=document.createElement("span");
         let closebuttomtext=document.createTextNode("x");
         closebuttom.appendChild(closebuttomtext);
         closebuttom.className="sanad";
         popupbox.appendChild(closebuttom);

        



         //close popbox
         document.addEventListener("click",function(e){
             if(e.target.className==='sanad')
             {
                 //delete overlay
                 document.querySelector(".popup-overlay").remove();

                //  delet popbox
                document.querySelector(".popup-box").remove();

                 
             }

         });
          

    });
})

///// end create popup with the image


