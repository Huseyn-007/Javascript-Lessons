function Start(){
    // console.log("Hello World!");

    // alert('hello world');

    // const myHeader = document.getElementById("header");

    // myHeader.innerHTML = "Salam Alekum,";


    // let age = 16;
    // let name = "Huseyn"
    // let isSucceed = false;
    // let data = mull;
    // let data2 = NaN;
    // let data3 = undefined;


    // const a = 10;
    // const b = "10";
    // console.log(a === b);




}


// Start();



var header = document.getElementById("header");



// function appleCall(){
//     header.innerHTML = "I'm Apple";
//     header.style = "color:blue;";
// }

// function mangoCall(){
//     header.innerHTML = "I'm Mango";
//     header.style = "color:red;";

// }

// function pineAppleCall(){
//     header.innerHTML = "I'm pineApple";
//     header.style = "color:green;";

// }



// function CallFruit(id){
//     const fruitElem = document.getElementById(id);
//     header.innerHTML = `I am ${fruitElem.innerHTML} fruit`;

// }



var hasTurnedOff = true;

const myImg = document.getElementById("myImg");

function Switch(){
    if(hasTurnedOff){
        myImg.src = "assets/pic_bulbon.gif";
        myImg.style = "border: 4px solid yellow";
        myImg.classList.remove("light-mode");
        myImg.classList.add("dark-mode");
        myImg.style.borderRadius = '80%';
    }
    else{
        myImg.src = "assets/pic_bulboff.gif";
        myImg.style = "border: 4px solid black";
        myImg.classList.remove("dark-mode");
        myImg.classList.add("light-mode");
        myImg.style.borderRadius = '0';
    }


    hasTurnedOff = !hasTurnedOff;
}