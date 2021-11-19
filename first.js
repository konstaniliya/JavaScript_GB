// let a = prompt('Input temperature centigrade');
// let b = 9 * a / 5 + 32;
// alert('Fahrenheit = ' + b);

// let name = 'Василий';
// let admin;
// admin = name;
// alert(admin);
// let test = 1000 + "108";
// alert(test);

// Домашнее задание ко второму уроку
// // Задание 1
// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2 префиксная инкрементация, а увеличивается на 1 сначала, и уже новое значение а присваивается c
// d = b++; alert(d);           // 1 постфиксная инкрементация, выполняется присваивание d единицы, только потом инкрементируется b
// c = (2+ ++a); alert(c);      // 5 сначала увеличивается а (а=3) далее прибавляется 2, в итоге 5
// d = (2+ b++); alert(d);      // 4 ранее b увеличили на 1, 2+2=4, b теперь равно 3
// alert(a);                    // 3 за последние операции a увеличилось на 2
// alert(b);                    // 3 аналогично а
// // Задание 2
// var a = 2;
// var x = 1 + (a *= 2);
//  alert('x = ' + x); // х = 5 так как сначала выполняется присваивание a потом слоджение с единицей

// // Задание 3
// var q = Number(prompt('Введите первое число'));
// var w = Number(prompt('Введите второе число'));
// var result;
// if (q>=0 && w>=0) {
//     result = q - w;
// }
// else if (q<0 && w<0) {
//     result = q*w;
//     }
// else {
//     result = q + w;
// }
// alert('result = ' + result);

// // Задание 4
// var z = Number(prompt('Введите число от 0 до 15'));
// switch (z) {
//     case 0:
//         alert('z = ' + z);
//         break;
//     case 1:
//         alert('z = ' + z);
//         break;
//     case 2:
//         alert('z = ' + z);
//         break;
//     case 3:
//         alert('z = ' + z);
//         break;
//     case 4:
//         alert('z = ' + z);
//         break;
//     case 5:
//         alert('z = ' + z);
//         break;
//     case 6:
//         alert('z = ' + z);
//         break;
//     case 7:
//         alert('z = ' + z);
//         break;
//     case 8:
//         alert('z = ' + z);
//         break;
//     case 9:
//         alert('z = ' + z);
//         break;
//     case 10:
//         alert('z = ' + z);
//         break;
//     case 11:
//         alert('z = ' + z);
//         break;
//     case 12:
//         alert('z = ' + z);
//         break;
//     case 13:
//         alert('z = ' + z);
//         break;
//     case 14:
//         alert('z = ' + z);
//         break;
//     case 15:
//         alert('z = ' + z);
//         break;
//     default:
//         alert('z = ' + z);
// }

// // Задание 5
// function addition (arg1,arg2) {
//     return arg1 + arg2;
// }
// function devision (arg1,arg2) {
//     return arg1/arg2;
// }
// function multiplication (arg1,arg2) {
//     return arg1 * arg2;
// }
// function subtraction (arg1,arg2) {
//     return arg1 - arg2;
// }
// var a = Number(prompt('Введите a'));
// var b = Number(prompt('Введите b'));
// var add, dev, multy, subt;
// add = addition(a,b);
// dev = devision(a,b);
// multy = multiplication(a,b);
// subt = subtraction(a,b);
// alert('add = ' + add + '\n' + 'dev = ' + dev +'\n' +  'multy = ' + multy + '\n' + 'subt = ' + subt);

// // Задание 6
// function addition (arg1,arg2) {
//     return arg1 + arg2;
// }
// function devision (arg1,arg2) {
//     return arg1/arg2;
// }
// function multiplication (arg1,arg2) {
//     return arg1 * arg2;
// }
// function subtraction (arg1,arg2) {
//     return arg1 - arg2;
// }
// function mathOperation(arg1, arg2, operation) {
// var result;
//     switch (operation) {
//         case 'addition':
//             result = addition(arg1,arg2);
//             break;
//         case 'subtraction':
//             result = subtraction(arg1,arg2);
//             break;
//         case 'multyplication':
//             result = multiplication(arg1,arg2);
//             break;
//         case 'devision':
//             result = devision(arg1,arg2);
//             break;
//         default:
//             result = null;
//     }
// return result;
// }
// var a = Number(prompt('Введите a'));
// var b = Number(prompt('Введите b'));
// var result;
// var operation = prompt('Введите название операции на английском языке');
// result = mathOperation(a,b,operation);
// alert('result = ' + result);

// // Задание 7
// var a = 0;
// var b = null;
// var state;
// if(a>=b){
//     state = 1;
// }
// else if (a<b) {
//     state = 0;
// }
// else {
//     state = -1;
// }
// alert('state = ' +state);
// // 0 больше чем "ничто"

// // Задание 8
// function power(val, pow) {
// var result;
//     if (pow == 1) {
//         result = val;
//     }
//     else {
//         result = val*power(val,pow-1);
//     }
// return result;
// }
// var val = Number(prompt('Введите число'));
// var pow = Number(prompt('Введите степень'));
// var result;
// result = power(val,pow);
// alert('result = ' + result);


// var i = 0;
// var j = 2;
// var state = 0;
// while(i<=100)
// {
//     j = 2;
//     while(j<=i/2)
//     {
//         if(i % j == 0){
//             state++;
//         }
//         j++;
//     }
//     if(state == 0){
//         console.log(i);
//     }
//     i++;
//     state = 0;
// }

// var goods = [
//     {
//         title: "1 Good",
//         price: 100,
//         quantity: 2
//     },
//     {
//         title: "2 Good",
//         price: 500,
//         quantity: 3
//     },
//     {
//         title: "3 Good",
//         price: 1000,
//         quantity: 5
//     }
// ];
// var s = 0;
// for(var i = 0; i < goods.length; i++){
//     s += goods[i].price*goods[i].quantity; 
// }
// console.log('Total is ' + s);

// for(var i = -1; i < 9; i++,console.log(i)){

// }
// var arrX = [];
// for(var i = 0; i < 20; i++){
//     arrX.push('X');
//     console.log(arrX.join(''));
// }

//Homework 4 lesson
//Excercise 1
// var obj = {}
// function f(number){
//     obj.ed = number[2];
//     obj.des = number[1];
//     obj.sot = number[0];
// }
// var number = prompt("Input number min - 0, max - 999");
// if((number <= 999) && (number >= 0)){
//     f(number);
//     console.log('sot = ' + obj.sot + ' ' + 'des = ' + obj.des + ' ' +  'ed = ' + obj.ed);
// }
// else {
//     obj.ed = null;
//     obj.des = null;
//     obj.sot = null;
//     console.log('sot = ' + obj.sot + ' ' + 'des = ' + obj.des + ' ' +  'ed = ' + obj.ed);
// }

//Extra excercise 3
// var userAnswer;
// var userAmount;
// var i = 1;
// for(step of questions){

//     userAnswer = prompt(step.q + '\n' + step.a1+ '\n' + step.a2+ '\n' + step.a3 + '\n' + step.a4 + '\n' + 'Input your answer');
//     if(userAnswer == step.correct){
//         userAmount += i*1000;
//         alert('You answer is right');
//     }
//     else {
//         alert('Your answer is wrong, game over\n' + 'Your balance is ' + userAmount);
//         break;
//     }
// }

//Excercise 2
var event1, ok;
function isAnswer(q, event1) {
    if (isNaN(event1) || !isFinite(event1)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event1 < 1 || event1 > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}
function answerChecking(z00,z0,z1,z2){
    do {
        ok = false;
        event1 = Number(prompt(z00 + z1 + z2 + '-1 - Выход из игры'));
        if(event1 == 1){
            answers.push(z1);
        }
        else if(event1 == 2) {
            answers.push(z2)
        }
        if (event1 == -1) {
            break;
        }
        else {
            ok = isAnswer(z0, event1);
        }
    } while (!ok);
}
var answers = [];

answerChecking(works.a00, works.a0, works.a1,works.a2);
switch (event1) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answerChecking(works.b00, works.b0, works.b1,works.b2);
        switch (event1) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                answerChecking(works.d00, works.d0, works.d1,works.d2);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                answerChecking(works.d00, works.d0, works.d1,works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answerChecking(works.c00, works.c0, works.c1,works.c2);
        switch (event1) {
            case 1: // Второе действие
                answerChecking(works.d00, works.d0, works.d1,works.d2);
                break;
            case 2: // Второе действие
                answerChecking(works.d00, works.d0, works.d1,works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
var position = Number(prompt('Input window where you want to check your answer'));
alert('Your answer in window ' + position + ' is \n' + answers[position-1]);


