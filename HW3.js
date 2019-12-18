//Первое задание

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

//Второе и третье задание

function basket(prices) {
sum = 0;
var text = "";
for(var i in prices){
    text+="<h1>Цена товара №"+parseInt(i+1)+" = "+prices[i]+"</h1>";
    sum = sum + prices[i];
}
document.write(text);
return sum;
}

total = basket([100, 500, 300, 700, 1000]);
document.write("Итоговая сумма всех товаров в корзине = "+total+" рублей");

/*

вывод выглядит следующим образом
не понимаю, почему parseInt срабатывает только для первого элемента
а потом номер элемента в массиве и "1" складываются как строки

Цена товара №1 = 100
Цена товара №11 = 500
Цена товара №21 = 300
Цена товара №31 = 700
Цена товара №41 = 1000
Итоговая сумма всех товаров в корзине = 2600 рублей

*/

//Четвёртое задание

for (i=0;i<=9;console.log(i++)){};

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