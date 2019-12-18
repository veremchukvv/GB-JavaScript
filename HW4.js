/// первое задание

function convert(inputNum) {

    var numToObj= {
        ones: 0,
        decimals: 0,
        hundreds: 0};

    if (isNaN(inputNum)) {
        alert("Введено не число");
    }
    else {
        if ((parseInt(inputNum)<0) || (parseInt(inputNum)>999)) {
            alert("Число не в диапазоне от 0 до 999")
        }
        else {
            var numParse=inputNum.split('');
			if (numParse[2]) {
				numToObj.ones=numParse[2];
			}
			if (numParse[1]) {
				numToObj.decimals=numParse[1];
			}
			if (numParse[0]) {
				numToObj.hundreds=numParse[0];
			}
			return numToObj;
        }
    }
}

var x = prompt("Введите число в диапазоне от 0 до 999");
console.log(convert(x));