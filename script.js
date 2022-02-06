//
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (x) => {
    x.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    
    
    
    
    if (username === "User1" && password === "password1") {
        alert("You have successfully logged in.");
        location.reload();
    } if (username === "User2" && password === "password2") {
        alert("You have successfully logged in.");
        location.reload();
    } if (username === "User3" && password === "password3") {
        alert("You have successfully logged in.");
        location.reload();
    } if (username === "Admin" && password === "AdminPass99") {
        alert("You have successfully logged in.");
        location.reload();
    } 
    else {
        loginErrorMsg.style.opacity = 1;
    }
})