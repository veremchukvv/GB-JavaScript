// Первое задание

var a = 1; var b = 1; var c; var d
c = ++a; alert(c) // 2 (потому что используется префиксный инкремент, который выполняется раньше алерта)
d = b++; alert(d) // 1 (постфиксный инкремент применяется уже после алерта)
c = (2 + ++a); alert(c) // 5 (к 2 прибавляется дважды инкрементированная переменная - a = 3)
d = (2 + b++); alert(d) // 4 (к 2 прибавляется хоть и дважды инкрементированная переменная, но второй раз инкремент постфиксный, поэтому получаем 4)
alert(a) // 3 (переменная a была инкрементирована дважды)
alert(b) // 3 (переменная b была инкрементирована дважды)

// Второе задание

var a = 2
var x = 1 + (a *= 2) // 1 + 2 * 2 = 5

// Третье задание

var a = parseInt(prompt('Введите первое число:'))
var b = parseInt(prompt('Введите второе число:'))

if (a >= 0 && b >= 0) {
  c = a - b
} else if (a < 0 && b < 0) {
  c = a * b
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
  c = a + b
}
alert(c)

// Четвёртое задание

var a = parseInt(prompt('Введите число в интервале от 0 до 15:'))

switch (a) {
  case 0:
    alert('0\n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 1:
    alert('1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 2:
    alert('2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 3:
    alert('3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 4:
    alert('4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 5:
    alert('5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 6:
    alert('6\n7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 7:
    alert('7\n8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 8:
    alert('8\n9\n10\n11\n12\n13\n14\n15')
    break
  case 9:
    alert('9\n10\n11\n12\n13\n14\n15')
    break
  case 10:
    alert('10\n11\n12\n13\n14\n15')
    break
  case 11:
    alert('11\n12\n13\n14\n15')
    break
  case 12:
    alert('12\n13\n14\n15')
    break
  case 13:
    alert('13\n14\n15')
    break
  case 14:
    alert('14\n15')
    break
  case 15:
    alert('15')
    break
  default:
    alert('Число ' + a + ' не входит в интервал от 0 до 15')
    break
}

// Пятое и шестое задания

function sum (x, y) {
  z = x + y
  return (z)
}

function sub (x, y) {
  z = x - y
  return (z)
}

function mul (x, y) {
  z = x * y
  return (z)
}

function div (x, y) {
  z = x / y
  return (z)
}

function calc (a, b, oper) {
  switch (oper) {
    case 'сложение':
      z = sum(a, b)
      return (z)
    case 'вычитание':
      z = sub(a, b)
      return (z)
    case 'умножение':
      z = mul(a, b)
      return (z)
    case 'деление':
      z = div(a, b)
      return (z)
  }
}

var a = parseInt(prompt('Введите первое число:'))
var b = parseInt(prompt('Введите второе число:'))
var oper = prompt('Введите название операции (сложение, вычитание, умножение, деление)')

z = calc(a, b, oper)
alert('Результат операции = ' + z)