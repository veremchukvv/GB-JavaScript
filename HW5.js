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

var whiteElem = document.querySelectorAll('.whitelines td');

for (var i = 0; i < whiteElem.length; i++){
        if (i%2 == 0) {
            whiteElem[i].style.backgroundColor = "Silver";
        }
        else {
            whiteElem[i].style.backgroundColor = "grey";
        }
        whiteElem[i].style.width = 15;
}

var blackElem = document.querySelectorAll('.blacklines td');

for (var i = 0; i < blackElem.length; i++){
        if (i%2 == 0) {
            blackElem[i].style.backgroundColor = "grey";
        }
        else {
            blackElem[i].style.backgroundColor = "Silver";
        }
        blackElem[i].style.width = 15;
}

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

// Пешки

for (i = 1; i <= 8; i++) {
    var cell=document.getElementsByTagName("tr")[2].getElementsByTagName("td")[i];
    cell.style.fontWeight = 900;
    cell.style.color = "Black";
    cell.innerText = "П";
    }

for (i = 1; i <= 8; i++) {
        var cell=document.getElementsByTagName("tr")[7].getElementsByTagName("td")[i];
        cell.style.fontWeight = 900;
        cell.style.color = "White";
        cell.innerText = "П";
        }

// Остальные

figArr = ["Л", "К", "С", "кр", "кл", "С", "К", "Л"];

for (i = 1; i <= 8; i++) {
    var cell=document.getElementsByTagName("tr")[1].getElementsByTagName("td")[i];
    cell.style.fontWeight = 900;
    cell.style.color = "Black";
    cell.innerText = figArr[i-1];
    }

for (i = 1; i <= 8; i++) {
        var cell=document.getElementsByTagName("tr")[8].getElementsByTagName("td")[i];
        cell.style.fontWeight = 900;
        cell.style.color = "White";
        cell.innerText = figArr[i-1];
        }