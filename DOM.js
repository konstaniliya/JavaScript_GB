function blackBlock(position) {
    var black = document.createElement("div");
    black.setAttribute("class", "black");
    black.id = position;
    td.append(black);
}
function whiteBlock(position) {
    var white = document.createElement("div");
    white.setAttribute("class", "white");
    white.id = position;
    td.append(white);
}
function blackOrWhite(i, j) {
    if (((j % 2 == 0) && (i % 2 != 0)) || ((j % 2 != 0) && (i % 2 == 0))) {
        return 1;
    }
    else if (((j % 2 != 0) && (i % 2 != 0)) || ((j % 2 == 0) && (i % 2 == 0))) {
        return 0;
    }
}
var table = document.createElement("table");
var block;

for (var i = 0; i <= 7; i++) {
    var tr = document.createElement("tr")
    table.append(tr);
    for (var j = 1; j <= 8; j++) {
        var td = document.createElement("td");

        if (blackOrWhite(i, j) == 0) blackBlock(i * 8 + j);
        else if (blackOrWhite(i, j) == 1) whiteBlock(i * 8 + j);
        tr.append(td);
    }
}
var mainDiv = document.getElementById("main");
mainDiv.style = "padding-top: 50px;";
document.body.append(mainDiv);
mainDiv.append(table);

for (i = 1; i <= 64; i++) {
    block = document.getElementById(i);
    block.style.display = "flex";
    block.style.alignItems = "center";
    if ((i >= 9 && i <= 16) || (i >= 49 && i <= 56)) {
        block.innerHTML = "<h2> &#9817;</h2>";
    }
}

var test = document.getElementById(1);
test.innerHTML = "<h2> &#9814;</h2>";
test = document.getElementById(2);
test.innerHTML = "<h2> &#9816;</h2>";
test = document.getElementById(3);
test.innerHTML = "<h2> &#9815;</h2>";
test = document.getElementById(4);
test.innerHTML = "<h2> &#9813;</h2>";
test = document.getElementById(5);
test.innerHTML = "<h2> &#9812;</h2>";
test = document.getElementById(6);
test.innerHTML = "<h2> &#9815;</h2>";
test = document.getElementById(7);
test.innerHTML = "<h2> &#9816;</h2>";
test = document.getElementById(8);
test.innerHTML = "<h2> &#9814;</h2>";

test = document.getElementById(57);
test.innerHTML = "<h2> &#9814;</h2>";
test = document.getElementById(58);
test.innerHTML = "<h2> &#9816;</h2>";
test = document.getElementById(59);
test.innerHTML = "<h2> &#9815;</h2>";
test = document.getElementById(60);
test.innerHTML = "<h2> &#9813;</h2>";
test = document.getElementById(61);
test.innerHTML = "<h2> &#9812;</h2>";
test = document.getElementById(62);
test.innerHTML = "<h2> &#9815;</h2>";
test = document.getElementById(63);
test.innerHTML = "<h2> &#9816;</h2>";
test = document.getElementById(64);
test.innerHTML = "<h2> &#9814;</h2>";


var mass = document.getElementsByTagName("h2");
var count = 1;
for (k of mass) {
    k.style.fontSize = "93px";
    k.id = count;
    if (count <= 16) {
        k.style.color = "#888787"
    }
    else {
        k.style.color = "#ff9900"
    }
    count++;
}