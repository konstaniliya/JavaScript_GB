var mainBlock = document.getElementsByClassName("imgBlock")[0];
var bigBlock = document.getElementsByClassName("bigBlock")[0];
mainBlock.style.cssText = "display: flex; justify-content: center; gap:50px; margin: 32px;";
bigBlock.style.cssText = "display: flex; justify-content: center;";
for (var i = 0; i <= 2; i++) {
    var img = document.createElement("img");
    img.src = "small/photo" + (i + 1) + ".png";
    img.onclick = f;
    img.classList.add("currentImg");
    mainBlock.append(img);
}
function f() {
    bigBlock.innerHTML = "";
    var img = document.createElement("img");
    var number = this.src.split('/');
    img.src = "big/group" + (35 + (+number[number.length - 1][5])) + ".jpg";
    img.onerror = function() {
        alert("Big picture wasn't found");
    }
    img.classList.add("bigImg");
    bigBlock.append(img);
}
