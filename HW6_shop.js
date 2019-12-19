var a1 = document.getElementById('lot_1_buy');
var a2 = document.getElementById('lot_2_buy');
var a3 = document.getElementById('lot_3_buy');

a1.onclick = buyIt;
a2.onclick = buyIt;
a3.onclick = buyIt;

function buyIt(eventObj){
    curSum = document.getElementById('sum');
    sumVal = parseInt(curSum.innerText);
    console.log(sumVal);
    eventElement = eventObj.target;
    idPart = eventElement.id.split("_");
    lot = idPart[1];
    lotPriceElem = document.getElementById("lot_"+lot+"_price");
    lotPrice = lotPriceElem.innerText;
    lotPricePart = lotPrice.split(" ");
    lotPricePartInt = parseInt(lotPricePart[1]);
    sum = sumVal+lotPricePartInt;
    curSum.innerHTML = sum;
    console.log(sum);
}