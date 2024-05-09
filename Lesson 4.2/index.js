var myimg = document.querySelector('#myimg');
var index = 1;
var max = 4;
var elements = document.querySelectorAll('.img');

var isEven = false;




setInterval(()=>{


    if(!isEven){
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.borderRadius =`50%`;
            
        }
    }

    else{
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            element.style.borderRadius =`0%`;
            
        }
    }

    isEven = !isEven;

    myimg.style.marginLeft = `-${index*100}%`;
    index++;
    if(index == max){
        index = 0;  
    }



}, 1500);