const toggleBtn=  document.getElementById("theme-toggle");
const calcDiv = document.getElementById("calculator");
const userInput = document.getElementById("user-input")
const calcKeys = document.getElementById("calc-keys")


var hasTurnedOn = true;

function themeSwitch(){
    if(hasTurnedOn){
        calcDiv.classList.remove("light-theme");
        calcDiv.classList.add("dark-theme");
        userInput.style.color = "white";
        calcKeys.style.color = "white";
    }
    else{
        calcDiv.classList.remove("dark-theme");
        calcDiv.classList.add("light-theme");
        userInput.style.color = "black";
        calcKeys.style.color = "black";
      
    }

    hasTurnedOn = !hasTurnedOn;
}


