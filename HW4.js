function convert(inputNum) {
    //var inputNum = prompt("Введите число в диапазоне от 0 до 999");
    if (isNaN(inputNum)) {
        alert("Введено не число");
    }
    else {
        if ((parseInt(inputNum)<0) || (parseInt(inputNum)>999)) {
            alert("Число не в диапазоне от 0 до 999")
        }
        else {
            var numParse=inputNum.split('');
			if (arr[0]!=0) {
				obj.единицы=arr[0];
			}
			if (arr[1]!=0) {
				obj.десятки=arr[1];
			}
			if (arr[2]!=0) {
				obj.сотни=arr[2];
			}
			return obj;
        }
    }
}

var obj= {};
var inputNum = prompt("Введите число в диапазоне от 0 до 999");
console.log(convert());

