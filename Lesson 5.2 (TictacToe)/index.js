let game = [];

let id = 1;



function DrawGame(){
    let content = '';
    for (let i = 0; i < game.length; i++) {
        const subgame = game[i];
        content+=`<tr>`;
        for (let k = 0; k < subgame.length; k++) {
            const data = subgame[k];
            let elements = '';
            if(data!=0){
                elements = data;
            }
            else if(data == 1){
                elements = 'X';

            }
            else if(data == 2){
                elements = 'O'
            }
            content+=`<td id='${id}' onclick = 'SelectItem(id,${i},${k})'> ${elements}</td>`
            ++id;
        }
        content+=`</tr>`;
    }
}


function SelectItem(id, i,k){
    let item = document.getElementById(id);
    if(item.innerHTML.trim()!=''){
        alert('cell is already selected');
    }
    if(isFirstPlayer){
        item.innerHTML = 'x';
        game[i][k] = 1;
        
    }
    else{
        item.innerHTML = 'o';
        game[i][k] = 2;
        
    }
    isFirstPlayer= !isFirstPlayer;
    Turn();
    
}


function gameArrayToString(){
    let content = '';
    for (let i = 0; i < game.length; i++) {
        const subgame = game[i];
        for (let k = 0; k < subgame.length; k++) {
            const element = subgame[k];
            content+=`${element}`
            if(k!=subgame.length-1){
                content+=``
            }

        }
        if(i!=game.length-1){
            content+='=';
        }
    }
    return content;
}


function FillGame(){
    for (let i = 0; i < 3; i++) {
        let subgame = [];
        for (let k = 0; k < 3; k++) {
            subgame.push(0);
            
        }
        game.push(subgame);
        
    }
}


let isFirstPlayer = true;
function Turn(){
    let element = document.querySelector('#turn');
    if(isFirstPlayer){
        element.innerHTML = 'x player';
        element.style.color = '#00bfff';
    }
    else{
        element.innerHTML = 'o player';
        
        element.style.color = '#00ff7f';
    }
}


function StartGame(){
    game=[];
    Turn();
    FillGame();
    DrawGame();
}

