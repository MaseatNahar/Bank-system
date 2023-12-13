// step-1: add click event handler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
    // step-2: get email address inside the email input field
    // always remember to use (.value ) to text from input field

    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get password
    //3.1: set id into html element
    //3.2: get element
    //3.3: get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //(Danger: Do not verify email password on client side.)
    //step-4: verify email and password and check whether valid user or not

    if(email ==='alfatjahan@rony.com' && password === 'secret'){
        window.location.href ="bank2ndpage.html";  //connection of two html file.
    }
    else {
        console.log('user invalid try again')
    }

    



})