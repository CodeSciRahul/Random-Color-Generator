
let btn=document.querySelector(".container button");

btn.addEventListener("click",()=>{
    let ColorCode=document.querySelector(".container input").value;
    let bgColor=document.querySelector("body>div");
    let r= Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    bgColor.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.querySelector(".container input").value=`rgb(${r}, ${g}, ${b})`;
})
function ComeOnDisplay(){
    let bgColor=document.querySelector("body>div");
    bgColor.className="bgColor";
   
}