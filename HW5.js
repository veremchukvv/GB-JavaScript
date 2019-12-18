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
for (j = 1; j <= 8; j++) {
        tr.insertCell();
}
}

document.body.append(table);

//var myTable = document.getElementsByTagName("table")[0];
//myTable.style.borderStyle = "solid";

var whiteElem = document.querySelectorAll('.whitelines td');

for (var i = 0; i < whiteElem.length; i++){
        if (i%2 == 0) {
            whiteElem[i].style.backgroundColor = "white";
        }
        else {
            whiteElem[i].style.backgroundColor = "black";
        }
        whiteElem[i].style.paddingTop = 15;
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
        blackElem[i].style.paddingTop = 15;
        blackElem[i].style.width = 15;
}

/*var leftSign = document.querySelectorAll('td');
leftSign.forEach;

console.log(leftSign);
*/
var botSign = document.querySelectorAll('.botsign td');
console.log(botSign);

j = "A";
for (var i = 0; i < botSign.length; i++) {  
    botSign[i].innerText = j;
    j = String.fromCharCode(j.charCodeAt(0) + 1);
    
}

var topSign = document.querySelectorAll('.topsign td');
console.log(topSign);

j = "A";
for (var i = 0; i < topSign.length; i++) {  
    topSign[i].style.transform = "rotate(180deg)";
    topSign[i].innerText = j;
    j = String.fromCharCode(j.charCodeAt(0) + 1);
}


