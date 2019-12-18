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
            whiteElem[i].style.backgroundColor = "white";
        }
        else {
            whiteElem[i].style.backgroundColor = "black";
        }
        whiteElem[i].style.width = 15;
}

var blackElem = document.querySelectorAll('.blacklines td');

for (var i = 0; i < blackElem.length; i++){
        if (i%2 == 0) {
            blackElem[i].style.backgroundColor = "black";
        }
        else {
            blackElem[i].style.backgroundColor = "white";
        }
        blackElem[i].style.width = 15;
}

for (i = 1; i <= 8; i++) {
var cell=document.getElementsByTagName("tr")[i].getElementsByTagName("td")[0];
console.log(cell);
cell.style.backgroundColor = null;
cell.innerText = i;
}

for (i = 1; i <= 8; i++) {
    var cell=document.getElementsByTagName("tr")[i].getElementsByTagName("td")[9];
    console.log(cell);
    cell.style.backgroundColor = null;
    cell.style.transform = "rotate(180deg)";
    cell.innerText = i;
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