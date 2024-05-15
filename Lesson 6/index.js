let mycanvas = document.getElementById("mycanvas");
let context = mycanvas.getContext("2d");

// let x= 50;
// let y= 50;

// function Drawer(){
//     if(x%5 == 0){
//         context.strokeStyle = '#00ff7f';
//         context.strokeRect(x,y,250,250);

//     }
//     context.clearRect(x+75, y+75,175,175);
//     if(x>=300){
//         context.fillStyle = '#ff0000';
//         context.fillRect(x,y, 250, 250);
//         x= 0;
//         y= 0;
//     }
//     else{
//         if(x%2==0){
//             context.fillStyle = '#00bfff';

//         }
//         else{
//             context.fillStyle = 'orange';
//         }
//         context.fillRect(x,y,250,250);
//     }
//     x+=1;
//     y+=1;
// }

// function main(){
//     // context.fillStyle = '#00bfff';
//     // context.fillRect(50, 70, 150, 100);

//     // context.fillStyle = '#ff0000';
//     // context.fillRect(80, 100,150,100);

//     // context.strokeStyle = '#00ff7f';
//     // context.strokeRect(50, 50, 300, 300);

//     setInterval(() => {
//         Drawer();
//     }, 20);
// }

// main();

const centerX = mycanvas.width / 2;
const centerY = mycanvas.height / 2;
const radius = centerY;

let x = centerX;
let y = 20;
var counter = 0;

function Draw(){
    context.moveTo(centerX,centerY);
    context.lineTo(x,y);

    if(counter>=0 && counter <=14){
        x+=20;
        y+=20;
    }
    else if(counter >=14 && counter<=28){
        y+=20;
        x-=20;
    }
    else if(counter >=29 && counter<=43){
        x-=20;
        y-=20;
    }
    else if(counter >=44 && counter<=59){
        x+=20;
        y-=20;
    }

    context.lineWidth = 5;
    context.strokeStyle = 'red';
    context.stroke();
}


function main() {
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  context.fillStyle = "springgreen";
  context.fill();

  context.moveTo(centerX, centerY);
  context.lineTo(x, y);
  context.lineWidth = 5;
  context.strokeStyle = "red";
  context.stroke();

  setInterval(() => {
    Draw();
    if (counter >= 60) {
      counter = 0;
    }
    counter++;
  },100);
}

main();
