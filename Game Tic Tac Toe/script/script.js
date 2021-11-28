(()=>{
    let field = document.querySelector('.wrapper-field');
    let typeUserCell = '';
    let freeCell = 9;
    let cell_list = new Array(9).fill(0); // Пока все ячейки нейтральные
    for(let i=0; i<9;i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = "cell"+(i+1);
        field.appendChild(cell);
        cell.addEventListener("click", ()=>{           // Добавить событие для клика по ячейке
            setTimeout(()=>{
                if(typeUserCell=="krestik"){
                    cell.style.backgroundImage = "url('images/krestik.png')";
                    ChangeStateCellList(cell.id, typeUserCell);
                }
                else{
                    cell.style.backgroundImage = "url('images/nolik.png')";
                    ChangeStateCellList(cell.id, typeUserCell);
                }
                cell.style.pointerEvents = 'none'; // Сделать некликабельным выбранную ячейку
                freeCell = freeCell - 1;
                CheckGameStatus();
                if(freeCell <= 0){ 
                    alert('Игра закончена!');
                }
                else{
                    setTimeout(()=>{
                        ChooseCellBot();  
                    },50) 
                }
            },50)
        })
    }

    let chooseButton = document.querySelector('.chooseSideButton');
    chooseButton.addEventListener('click',()=>{         // Добавляем функционал для кнопки подтверждения
        let radio_group = document.getElementsByName('chooseSide');
        if(radio_group[0].checked || radio_group[1].checked){
            document.querySelector('.chooseSidePanel').style.display = "none";
            document.querySelector('.wrapper').style.display = "block";
            if(radio_group[0].checked){
                typeUserCell = 'krestik';
            }
            else{
                typeUserCell = 'nolik';
                ChooseCellBot();
            }
        }
        else{
            alert("Выберите Крестик или Нолик!");
        }
    })

    function ChooseCellBot(){  // Выбор ячейки ботом
        let n = Math.ceil(Math.random()*9);
        if(document.getElementById("cell"+n).style.backgroundImage ==''){
            document.getElementById("cell"+n).style.pointerEvents = 'none';
            document.getElementById("cell"+n).style.backgroundImage = typeUserCell == 'krestik' ? "url('images/nolik.png')":"url('images/krestik.png')";
            ChangeStateCellList("cell"+n, typeUserCell == 'krestik' ? "nolik":"krestik");
            freeCell = freeCell - 1;
            setTimeout(()=>{
                CheckGameStatus();
            },50);
        }
        else{
            ChooseCellBot();
        }
        return;
    }

    function CheckGameStatus(){  // Проверка статуса игры
        if((cell_list[0] + cell_list[1]+cell_list[2])==3){
            PrintVictory(typeUserCell == "krestik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[0] + cell_list[4]+cell_list[8])== 3){
            PrintVictory(typeUserCell == "krestik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[0] + cell_list[3]+cell_list[6])== 3){
            PrintVictory(typeUserCell == "krestik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[1] + cell_list[4]+cell_list[7])== 3){
            PrintVictory(typeUserCell == "krestik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[2] + cell_list[5]+cell_list[8])== 3){
            PrintVictory(typeUserCell == "krestik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[3] + cell_list[4]+cell_list[5])== 3){
            PrintVictory(typeUserCell == "krestik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[6] + cell_list[4]+cell_list[2])== 3){
            PrintVictory(typeUserCell == "krestik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[0] + cell_list[1]+cell_list[2])== -3){
            PrintVictory(typeUserCell == "nolik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[0] + cell_list[4]+cell_list[8])== -3){
            PrintVictory(typeUserCell == "nolik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[0] + cell_list[3]+cell_list[6])== -3){
            PrintVictory(typeUserCell == "nolik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[1] + cell_list[4]+cell_list[7])== -3){
            PrintVictory(typeUserCell == "nolik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[2] + cell_list[5]+cell_list[8])== -3){
            PrintVictory(typeUserCell == "nolik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[3] + cell_list[4]+cell_list[5])== -3){
            PrintVictory(typeUserCell == "nolik" ? "Пользователь":"Компьютер");
        }
        else if((cell_list[6] + cell_list[4]+cell_list[2])== -3){
            PrintVictory(typeUserCell == "nolik" ? "Пользователь":"Компьютер");
        }
        if(freeCell<=0){
            alert("Ничья!");
            window.location.reload();
        }
    }
    
    function ChangeStateCellList(id, CellType){     // Функция вносит изменения в список состояния ячеек
        let cell_num = parseInt(id[id.length-1]);
        if(CellType=="krestik"){
            cell_list[cell_num - 1] = 1;
        }
        else{
            cell_list[cell_num - 1] = -1;
        }
    }

    function PrintVictory(typeVictoryPlayer){
        alert("Выиграл: " + typeVictoryPlayer);
        window.location.reload();
    }
})()