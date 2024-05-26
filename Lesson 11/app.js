
let index = 0;
$(document).ready(function(){   
    setInterval(() => {

        if(index === 4){
            $('#first-li').css("margin-top", 0);
            $('#second-li').css("margin-top", 0);
            $('#third-li').css("margin-top", 0);
            // index = 0;
        }
        $('#first-li').css("margin-top", -(index*50)+"px")
        $('#second-li').css("margin-top", -(index*50)+"px")
        $('#third-li').css("margin-top", -(index*50)+"px")
        index++;
    }, 1500);
    
   



})