// var myNumbers = [10,20,30, 123 ,111];
// console.log(myNumbers);


// myNumbers = myNumbers.filter(x=> x>25);


// function start(){
//     console.log('salaammmm');
// }
// console.log(myNumbers);

// start();


// var numbers1 = [1, 2, 3];
// var numbers2 = [4, 5, ...numbers1];
// console.log(numbers2);

 function main(){
//     const myList = document.getElementById("myList");
//     let count = Number(prompt('Enter list count: '));
//     //let isOkay = confirm("ARE U OVER THAN 18?")


//     let content = '';
//     for (let i = 0; i < count; i++) {
//         content += `
//             <li>
//                 ${i+1}
//             </li>
//         `;        
//     }

//     myList.innerHTML = content




    let myTable = document.getElementById("mytable");
    let content= " ";
    let id = 1;


    for (let i = 0; i < 3; i++) {
        content+="<tr>";

        for (let k = 0; k < 3; k++) {
            let number = getRandom(10);
            numbers.push(number);
            content+=`<td id = ${id} onclick='show(id)' >
                    ${number}
                    </td>
            `;
            ++id;
        }

        content+="</tr>";
        
    }

    myTable.innerHTML = content;






}


var numbers =[];


var comp_number = getRandom(10);


function getRandom(max){
    return Math.floor(Math.random()*max);
}

var counter = 0;

function show(id){
    ++counter;
    let element = document.getElementById(id);
    if(numbers[comp_number] == Number(element.innerHTML)){
        element.style.backgroundColor = "springgreen";
        alert("You winn");
        counter = 0;
        main();
    }
    else{
        element.style.backgroundColor = "red";
        
    }

    if(counter >=3){
        alert("You lost");
        counter = 0;
        main();
    }
}

main();

function MyTimer(){
    setTimeout(() => {

        let date = new Date();
        let myTitle = document.getElementById("myTitle");
        myTitle.innerHTML = date.toLocaleTimeString();
    },2000)
}

var clear;
function Start(){
    clear = setInterval(() =>{


        MyTimer();

    }, 1000
    )
}


function Stop(){
    clearTimeout(clear);
}