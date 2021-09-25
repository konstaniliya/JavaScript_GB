// Домашнее задание к первому уроку

// let a = prompt('Input temperature centigrade');
// let b = 9 * a / 5 + 32;
// alert('Fahrenheit = ' + b);


// let x = Number(prompt('Input x'));
// let y = Number(prompt('Input y'));
// x = x + y;
// y = x - y;
// x = x - y; 
// alert("x = " + x + " y = " + y);


// let name = 'Василий';
// let admin;
// admin = name;
// alert(admin);


// let test = 1000 + "108";
// alert(test);

// Здесь получается 1000108 так как происходит склеивание "+" со строкой


// Домашнее задание ко второму уроку

// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 префиксная инкрементация, а увеличивается на 1 сначала, и уже новое значение а присваивается c
d = b++; alert(d);           // 1 постфиксная инкрементация, выполняется присваивание d единицы, только потом инкрементируется b
c = (2+ ++a); alert(c);      // 5 сначала увеличивается а (а=3) далее прибавляется 2, в итоге 5
d = (2+ b++); alert(d);      // 4 ранее b увеличили на 1, 2+2=4, b теперь равно 3
alert(a);                    // 3 за последние операции a увеличилось на 2
alert(b);                    // 3 аналогично а
// Задание 2
var a = 2;
var x = 1 + (a *= 2);
 alert('x = ' + x); // х = 5 так как сначала выполняется присваивание a потом слоджение с единицей

// Задание 3
var q = Number(prompt('Введите первое число'));
var w = Number(prompt('Введите второе число'));
var result;
if (q>=0 && w>=0) {
    result = q - w;
}
else if (q<0 && w<0) {
    result = q*w;
    }
else {
    result = q + w;
}
alert('result = ' + result);

// Задание 4
var z = Number(prompt('Введите число от 0 до 15'));
switch (z) {
    case 0:
        alert('z = ' + z);
        break;
    case 1:
        alert('z = ' + z);
        break;
    case 2:
        alert('z = ' + z);
        break;
    case 3:
        alert('z = ' + z);
        break;
    case 4:
        alert('z = ' + z);
        break;
    case 5:
        alert('z = ' + z);
        break;
    case 6:
        alert('z = ' + z);
        break;
    case 7:
        alert('z = ' + z);
        break;
    case 8:
        alert('z = ' + z);
        break;
    case 9:
        alert('z = ' + z);
        break;
    case 10:
        alert('z = ' + z);
        break;
    case 11:
        alert('z = ' + z);
        break;
    case 12:
        alert('z = ' + z);
        break;
    case 13:
        alert('z = ' + z);
        break;
    case 14:
        alert('z = ' + z);
        break;
    case 15:
        alert('z = ' + z);
        break;
    default:
        alert('z = ' + z);
}

// Задание 5
function addition (arg1,arg2) {
    return arg1 + arg2;
}
function devision (arg1,arg2) {
    return arg1/arg2;
}
function multiplication (arg1,arg2) {
    return arg1 * arg2;
}
function subtraction (arg1,arg2) {
    return arg1 - arg2;
}
var a = Number(prompt('Введите a'));
var b = Number(prompt('Введите b'));
var add, dev, multy, subt;
add = addition(a,b);
dev = devision(a,b);
multy = multiplication(a,b);
subt = subtraction(a,b);
alert('add = ' + add + '\n' + 'dev = ' + dev +'\n' +  'multy = ' + multy + '\n' + 'subt = ' + subt);

// Задание 6
function addition (arg1,arg2) {
    return arg1 + arg2;
}
function devision (arg1,arg2) {
    return arg1/arg2;
}
function multiplication (arg1,arg2) {
    return arg1 * arg2;
}
function subtraction (arg1,arg2) {
    return arg1 - arg2;
}
function mathOperation(arg1, arg2, operation) {
var result;
    switch (operation) {
        case 'addition':
            result = addition(arg1,arg2);
            break;
        case 'subtraction':
            result = subtraction(arg1,arg2);
            break;
        case 'multyplication':
            result = multiplication(arg1,arg2);
            break;
        case 'devision':
            result = devision(arg1,arg2);
            break;
        default:
            result = null;
    }
return result;
}
var a = Number(prompt('Введите a'));
var b = Number(prompt('Введите b'));
var result;
var operation = prompt('Введите название операции на английском языке');
result = mathOperation(a,b,operation);
alert('result = ' + result);

// Задание 7
var a = 0;
var b = null;
var state;
if(a>=b){
    state = 1;
}
else if (a<b) {
    state = 0;
}
else {
    state = -1;
}
alert('state = ' +state);
// 0 больше чем "ничто"

// Задание 8
function power(val, pow) {
var result;
    if (pow == 1) {
        result = val;
    }
    else {
        result = val*power(val,pow-1);
    }
return result;
}
var val = Number(prompt('Введите число'));
var pow = Number(prompt('Введите степень'));
var result;
result = power(val,pow);
alert('result = ' + result);




