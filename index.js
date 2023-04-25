let parEl=document.getElementById("par2")

parEl.addEventListener("mouseover",function (){
    parEl.style.textDecoration="none";
    
});
parEl.addEventListener("mouseout",function (){
    parEl.style.textDecoration="underline";
    parEl.style.textDecorationColor="rgb(30, 206, 133)";
});

// let butt=document.getElementById("whole")

// butt.addEventListener("onclick",function (){
//     butt.style.display="none";
//     butt.style.backgroundColor="none";
//     });

let learnEl=document.querySelector("#whole");
let image=document.querySelector("#img");
let btn=document.querySelector("#but")
function learn(){
    learnEl.style.display="block";
    image.style.display="block";
    but.style.backgroundColor="rgb(37, 5, 58) "; 
    but.style.border="thin solid rgb(30, 206, 133)";
    but.style.color=" rgb(30, 206, 133) ";
    but.style.marginRight="40px";
    but.style.width="100px";
}

// let img=document.getElementById("imag")

// img.addEventListener("mouseover",function (){
//     img.style.display="block";
    
// });


   
function two(){
    this.setAttribute("src","./pexels-photo-6593577-removebg-preview-removebg-preview.png");
}
function one(){
    this.setAttribute("src","https://azganoth.github.io/workit-landing-page/assets/images/image-founder.webp")
}