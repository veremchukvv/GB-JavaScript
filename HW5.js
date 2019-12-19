 //рисуем доску
 
 var table = document.createElement('table');
 for (i = 1; i <= 10; i++) {
    if (i == 1) {
        tr = table.insertRow();
        tr.className = "topsign";
    }
    else if (i == 10) {
        tr = table.insertRow();
        tr.className = "botsign";
    }
     else if (i%2 == 0) {
        tr = table.insertRow();
        tr.className = "whitelines";
     }
     else if (i%2 != 0) {
        tr = table.insertRow();
        tr.className = "blacklines";
     }
for (j = 1; j <= 10; j++) {
        tr.insertCell();
}
}

document.body.append(table);

//раскрашиваем доску

var whiteElem = document.querySelectorAll('.whitelines td');

for (var i = 0; i < whiteElem.length; i++){
        if (i%2 == 0) {
            whiteElem[i].style.backgroundColor = "grey";
        }
        else {
            whiteElem[i].style.backgroundColor = "silver";
        }
        whiteElem[i].style.width = 15;
}

var blackElem = document.querySelectorAll('.blacklines td');

for (var i = 0; i < blackElem.length; i++){
        if (i%2 == 0) {
            blackElem[i].style.backgroundColor = "Silver";
        }
        else {
            blackElem[i].style.backgroundColor = "grey";
        }
        blackElem[i].style.width = 15;
}

//подписываем линии

for (i = 1; i <= 8; i++) {
var cell=document.getElementsByTagName("tr")[i].getElementsByTagName("td")[0];
cell.style.backgroundColor = null;
cell.innerText = 9 - i;
}

for (i = 1; i <= 8; i++) {
    var cell=document.getElementsByTagName("tr")[i].getElementsByTagName("td")[9];
    cell.style.backgroundColor = null;
    cell.style.transform = "rotate(180deg)";
    cell.innerText = 9 - i;
    }

var botSign = document.querySelectorAll('.botsign td');

j = "A";
for (var i = 1; i < (botSign.length-1); i++) {  
    botSign[i].innerText = j;
    j = String.fromCharCode(j.charCodeAt(0) + 1);
}

var topSign = document.querySelectorAll('.topsign td');

j = "A";
for (var i = 1; i < (topSign.length-1); i++) {  
    topSign[i].style.transform = "rotate(180deg)";
    topSign[i].innerText = j;
    j = String.fromCharCode(j.charCodeAt(0) + 1);
}

//Расставляем фигуры

for (i = 1; i <= 8; i++) {
    var cell=document.getElementsByTagName("tr")[2].getElementsByTagName("td")[i];
    cell.style.fontWeight = 900;
    cell.style.color = "Black";
    cell.innerText = "♟";
    }

for (i = 1; i <= 8; i++) {
        var cell=document.getElementsByTagName("tr")[7].getElementsByTagName("td")[i];
        cell.style.fontWeight = 900;
        cell.style.color = "White";
        cell.innerText = '♙';
        }

figArrW = ["♖", "♞", "♗", "♛", "♔", "♗", "♞", "♖"];
figArrB = ["♜", "♘", "♝", "♕", "♔", "♝", "♘", "♜"];

for (i = 1; i <= 8; i++) {
    var cell=document.getElementsByTagName("tr")[1].getElementsByTagName("td")[i];
    cell.style.fontWeight = 900;
    cell.style.color = "Black";
    cell.innerText = figArrB[i-1];
    }

for (i = 1; i <= 8; i++) {
        var cell=document.getElementsByTagName("tr")[8].getElementsByTagName("td")[i];
        cell.style.fontWeight = 900;
        cell.style.color = "White";
        cell.innerText = figArrW[i-1];
        }