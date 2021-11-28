function changeImagePush(){
    let src = this.src;
    for(let i=0; i<buttons_clicked.length; i++){
        if(this.src.includes(buttons_unclicked[i])){
            this.src = buttons_clicked[i];
            break;
        }
    }
}
function rotateBoard(){  // Поворот основы
    board_rotated = !board_rotated;
    console.log(board_rotated);
    for(let i = 0; i<img_class.childNodes.length; i++){   // Поменять изображения на противоположные
        for(let j=0; j<buttons_unclicked.length; j++){
            if(img_class.children[i].src.includes(buttons_unclicked[j])){
                img_class.children[i].src = buttons_clicked[j];
            }
            else if(img_class.children[i].src.includes(buttons_clicked[j])){
                img_class.children[i].src = buttons_unclicked[j];
            }
        }
    }
}
function soundClick(){
    let sound1 = new Audio("sounds/1.mp3");
    let sound2 = new Audio("sounds/2.mp3");
    let src = this.src;
    if(board_rotated && (src.includes("noclick")) ){
        sound2.play();
    }
    else if(board_rotated==false && (src.includes("noclick")==true)){
        sound1.play();
    }
}
let buttons_clicked = ["images/buttons/red_click.png", "images/buttons/orange_click.png", "images/buttons/yellow_click.png", "images/buttons/green_click.png", "images/buttons/blue_click.png", "images/buttons/pink_click.png"];
let buttons_unclicked = ["images/buttons/red_noclick.png", "images/buttons/orange_noclick.png", "images/buttons/yellow_noclick.png", "images/buttons/green_noclick.png", "images/buttons/blue_noclick.png", "images/buttons/pink_noclick.png"];
body = document.body;
let img_class = document.getElementById('class_pop_buttons');
let board_rotated = false;
for(let i=0; i<6; i++){
    for(let j=0; j<6; j++){
        let img = document.createElement('img');
        img.src = buttons_unclicked[i];
        img.addEventListener("click", soundClick, false);
        img.addEventListener("click", changeImagePush, false);
        img_class.appendChild(img);
    }
}

