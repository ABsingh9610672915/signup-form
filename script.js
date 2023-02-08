let subtn=document.getElementById("signup")
let sibtn=document.getElementById("signin")
let namef =document.getElementById("namefild");
let title=document.getElementById("title");
sibtn.onclick=function(){
    namef.style.maxHeight='0';
    title.innerHTML="Sign In";
    subtn.classList.add("btn2")
    subtn.classList.remove("btn2")
}
subtn.onclick=function(){
    namef.style.maxHeight='60px';
    title.innerHTML="Sign up";
    subtn.classList.remove("btn2")
    subtn.classList.add("btn2")
}