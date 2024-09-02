const login=document.getElementById("login");
login.addEventListener("click", ()=>{
    const userName =document.querySelector('#user').value;
    const password = document.querySelector('#password').value;
    if (userName=="admin" && password =='12345')
     alert("Login valid");  
    else
    alert("Login Invalid");
}); 