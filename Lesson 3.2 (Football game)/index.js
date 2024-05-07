const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');

const area = document.getElementById('area');



area.addEventListener(`keydown`, e =>{
    switch(e.keyCode){
        case 65:
            player1.style.left = (Number(element.style.left) - 10) + 'px';
            break;
        case 68:
            player1.style.right = (Number(element.style.right) - 10) + 'px';
            break;
            case 87:
            player1.style.bottom = (Number(element.style.bottom) - 10) + 'px';
            break;
            case 83:
            player1.style.top = (Number(element.style.bottom) - 10) + 'px';
            
            break;
    }

}
)