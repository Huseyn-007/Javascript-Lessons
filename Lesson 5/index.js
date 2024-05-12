
// // document.cookie = 'username=Vuqar Aslanov';
// console.log(document.cookie);



//Universal function for set cookie


function SetCookie(name, value, seconds){
    const d = new Date();
    d.setTime(d.getTime() + seconds*1000);
    let expires = 'expires='+d.toUTCString();
    document.cookie = name+'='+value+';'+expires+';path=/';
}


 SetCookie('fullname', 'Huseyn Huseynov', 15);
console.log(document.cookie);

function GetCookie(key){
    let name = key+'=';
    let decode = decodeURIComponent(document.cookie);
    let ca = decode.split(';');
    for (let i = 0; i < ca.length; i++) {
        let element = ca[i];
        while(element.charAt(0)==' '){
            element  = element.substring(1);
        }
        if(element.indexOf(name) == 0){
            return element.substring(name.length, element.length);
        }
       
    }
    return '';
}




console.log(document.cookie)
console.log(GetCookie('fullname'));


