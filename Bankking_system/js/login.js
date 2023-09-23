document.getElementById('btn-submit').addEventListener('click',function()
{

    const emailField =document.getElementById('user-email');
    const email =emailField.value;
   

    const passwordField =document.getElementById('user-password')
    const password =passwordField.value;
   

    if(email =='moshiurmoon94@gmail.com' && password=='secret')
    {
        window.location.href='bank1.html'

    }
    else{

        console.log('invalid user')
    }

     


})