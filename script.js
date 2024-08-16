const formtwo = document.querySelector("#formtwo");
const usernametwo = document.querySelector("#usernametwo");
var passwordtwo = document.querySelector("#passwordtwo");
var eyeicon = document.querySelector("#eyeicon");
var eyeicontwo = document.querySelector("#eyeicontwo");



formtwo.addEventListener('submit', (a) => {
    
    if(!validate()){
        a.preventDefault();
    }
    

} )



function validate(){
    const usernametwoVal = usernametwo.value.trim()
    const passwordtwoVal = passwordtwo.value.trim();
    let success = true;

    if(usernametwoVal===''){
        success = false
        putError(usernametwo, 'Username is required')
    }
    else{
        putSuccess(usernametwo)
    }
    
    if(passwordtwoVal===''){
        success = false
        putError(passwordtwo, 'Password is required')
    }
    else if(passwordtwoVal.length<8){
        success = false
        putError(passwordtwo,'Password must be 8 characters long')
    }

    else{
        putSuccess(passwordtwo)
    }

    return success;
        
}

function putError(inputelement,errortext){
    const inputgroup = inputelement.parentElement;
    const errorElement = inputgroup.querySelector(".errortwo");

    errorElement.innerText = errortext;

}

function putSuccess(inputelement){
    const inputgroup = inputelement.parentElement;
    const errorElement = inputgroup.querySelector(".errortwo");

    errorElement.innerText = '';

}



function signupform(){
    form.classList.add('open');
}
function backToSignin(){
    form.classList.remove('open');
}




const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
var password = document.querySelector("#password");
const cpassword = document.querySelector("#cpassword");

form.addEventListener('submit', (e) => {
    
    if(!validateInputs())
        {
        e.preventDefault();
        
    }
    
})



function validateInputs(){
    const usernameVal = username.value.trim()
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;

    if(usernameVal===''){
        success = false
        setError(username, 'Username is required')
    }
    else{
        setSuccess(username)
    }
    
    if(emailVal===''){
        success = false
        setError(email,'Email is required')
    }
    else if(!validateEmail(emailVal)){
        success = false
        setError(email, 'Enter a valid email')
    }
    else{
        setSuccess(email)
    }
    
    if(passwordVal===''){
        success = false
        setError(password, 'Password is required')
    }
    else if(passwordVal.length<8){
        success = false
        setError(password,'Password must be 8 characters long')
    }

    else{
        setSuccess(password)
    }

    if(cpasswordVal===''){
        success = false
        setError(cpassword, 'Confirm Password is required')
    }
    else if(cpasswordVal!== passwordVal){
        success = false
        setError(cpassword, "Password does not match")
    }
    else{
        setSuccess(cpassword)
    }

    return success;
    
        
}

function setError(element,message){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector(".error");

    errorElement.innerText = message;

}

function setSuccess(element){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector(".error");

    errorElement.innerText = '';

}

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    );
}
function show() {
   
    if(passwordtwo.type === "password",
        password.type === "password"
    ){
        passwordtwo.type = "text";
        password.type = "text";
        eyeicontwo.classList.replace("ri-eye-off-line", "ri-eye-line");
        eyeicon.classList.replace("ri-eye-off-line", "ri-eye-line");
    }
    else{
        passwordtwo.type = "password";
        password.type = "password";
        eyeicontwo.classList.replace("ri-eye-line", "ri-eye-off-line");
        eyeicon.classList.replace("ri-eye-line", "ri-eye-off-line");
    }
}