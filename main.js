const btn=document.querySelector(".btn");
const user=document.querySelector(".username");  //get value later
const userPassword=document.querySelector(".password"); //get value later
const userName="Chrys";
const password="Viktorsexclusivedick123!";
btn.addEventListener("click",()=>{
    let userValue=user.value;
    let passValue=userPassword.value;
    console.log("You typed user:",""+userValue);
    console.log("Targes user is",""+userName+"");
    if(userValue.trim().toLowerCase()===userName.toLowerCase() && passValue.trim()===password.trim()){
    window.location.href="page.html";
    }
    else{
    user.style.border="2px solid red";
    userPassword.style.border="2px solid red";
    user.value="";
    userPassword.value="";
    }
}
);
