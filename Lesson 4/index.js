let myimg = document.querySelector("#myImg");

let l = document.querySelector("#left");
let r = document.querySelector("#right");

let index = 1;
let min = 1;
let max = 4;

left();

function left() {
  if (index > min) {
    index--;
    r.style.display = "inline-block";
  }
  if (index == min) {
    l.style.display = "none";
  } else {
    l.style.display = "inline-block";
  }

  myimg.src = `assets/${index}.jpg`;
}

function right() {
  if (index < max) {
    index++;

    l.style.display = "inline-block";
  }

  if (index == max) {
    r.style.display = "none";
    l.style.display = "inline-block";
  } else {
    r.style.display = "inline-block";
  }

  myimg.src = `assets/${index}.jpg`;
}
