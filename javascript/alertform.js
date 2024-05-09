function displaydata(){

    var emailid =  document.getElementById('emailid');
    var password = document.getElementById('password1');
    var age = document.getElementById('age');
    
    var displayerror = document.getElementById('displayerror')
    if(emailid.value == ''){
        displayerror.innerHTML= "Please enter your email id";
        return false;
    }else if(password.value == ''){
        displayerror.innerHTML ="please enter your password";
        return false;
    }else if(age.value == ''){
        displayerror.innerHTML ="please enter your age";
        return false;
    }else{
        console.log("form is correct");
        return true;
    }
    
    
    
    }