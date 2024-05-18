document.getElementById('btn-submit').addEventListener('click', function(){
    const emailfield = document.getElementById('user_email');
    const email =emailfield.value;
    const passwordfield = document.getElementById('user_password');
    const password = passwordfield.value;
    // console.log(email , password);
    if(email ==="admin@gmail.com" && password==="123"){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid user');
    }
})