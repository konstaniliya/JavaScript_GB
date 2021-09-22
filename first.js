let a = prompt('Input temperature centigrade');
let b = 9 * a / 5 + 32;
alert('Fahrenheit = ' + b);


let x = Number(prompt('Input x'));
let y = Number(prompt('Input y'));
x = x + y;
y = x - y;
x = x - y; 
alert("x = " + x + " y = " + y);


let name = 'Василий';
let admin;
admin = name;
alert(admin);


let test = 1000 + "108";
alert(test);

// Здесь получается 1000108 так как происходит склеивание "+" со строкой