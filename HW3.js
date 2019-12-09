//Первое задание
/*
var i = 2;
outer: while (i<=100) {
        for (z=2;z<=i-1;z++) {
        simple = i % z;
        if (simple === 0) {
            alert(i+" Составное");
            i++;
            continue outer
        }
    }
    alert(i+" Простое");
    i++;
    }
*/
//Второе задание

//Четвёртое задание

//for (i=0;i<=9;i++){}

//Пятое задание

var text = "";
for (i=1;i<=20;i++){
    text+="<h1>";
    for (k=1;k<=i;k++){
    text+="*";
}
text+="</h1>";
document.write(text);
text = "";
}