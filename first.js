// let a = prompt('Input temperature centigrade');
// let b = 9 * a / 5 + 32;
// alert('Fahrenheit = ' + b);

// let name = 'Василий';
// let admin;
// admin = name;
// alert(admin);
// let test = 1000 + "108";
// alert(test);

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


