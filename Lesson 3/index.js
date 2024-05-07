// let person ={
//     firstName:'John',
//     lastName:'Johnlu',
//     age:50,
//     score:98.7,
//     cars:[
//         {
//             vendor:'Land Rover',
//             model:'Discovery',
//         },

//         {
//             vendor:'Hyundai',
//             model:'Sonata',
//         }
//     ],
//     Fullname:function(){
//         return this.firstName + " " +this.lastName;
//     }


// }


// console.log(person.Fullname());


// let content = '';

// for(let key in person){
//     if(key!='cars' && key!= 'Fullname'){
//         content +=`<li><h1> ${key + " : " + person[key]} </h1> </li>`
//     }
//     else if(key == 'cars')
//     {
//         content += `<li><h1> Cars: </h1></li>`

//         let mycars = person.cars;
//         mycars.forEach((car) => {
//             content += `
//                 <li>
//                     ${car.model}     -    ${car.vendor}
//                 </li>

//             `
//         });
//     }
// }



// const info = document.getElementById('info');

// info.innerHTML = content;









// class Student{
//     constructor(name, surname){
//         this.name = name;
//         this.surname = surname;
//     }

//     fullname(){
//         return this.name + " " + this.surname;
//     }

//     static hello(){
//         alert("Hi Guys");
//     }
// }


// let student = new Student('Mike', 'Mikeli');

// console.log(student.name);
// console.log(student.surname);
// console.log(student.fullname());
// Student.hello();



// function chabgeAllHeaders(){
//     // console.log(elements);
    
//     let elements = document.getElementsByTagName('h1');
    
//     for (let i = 0; i < elements.length; i++) {
//         const element = elements[i];
        
//         element.style.color = 'springgreen';
        
//     }

//     let elements2 = document.getElementsByClassName('myTitle');

//     for (let i = 0; i < elements2.length; i++) {
//         const element = elements2[i];

//         element.style.color = 'red';
        
//     }
// }



// chabgeAllHeaders();



// // const myHeader = document.querySelector('#header-1');

var id = 0;
let section  = document.querySelector("#s-1");

function ChangeUI(){

    let newElem = document.createElement('h1');
    newElem.innerHTML= "Salam dunya";
    newElem.id = `i-${id++}`;
    newElem.addEventListener("mousedown", MyRemove);
    section.appendChild(newElem);
}

function MyRemove(e){
    section.removeChild(e.target)
}

function RemoveEvents(){
    let elements = section.children;
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.removeEventListener("mousedown", MyRemove);
        
    }
}

function ChangeItems(){
    const item = document.querySelector("section");
    const first = item.firstElementChild;
    const last = item.lastElementChild;

    first.style.color = "red";
    last.style.color = "red";
    
}







