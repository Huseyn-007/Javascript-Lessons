let myform = document.forms['myform'];


function OnSumbit(event){
    event.preventDefault();    


    let email = myform['email'].value;
    let password = myform['password'].value;

    alert(email+' '+password);
}