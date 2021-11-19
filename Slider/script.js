var imgArr = ["photo1.png","photo2.png","photo3.png"];
var i = 0;
var img = document.getElementById("currentImg")
var btmArr = document.getElementsByTagName("button");

function init(){
    
    for(var i = 0; i <= 1; i++){
        btmArr[i].style.cssText = "color: black; background-color: rgb(27, 190, 231); font-size: 28px; border: 3px solid forestgreen;"
    }
}

function f(direction) {
    if(direction == 0){
        (i == 0) ? i = imgArr.length-1 : i--;
        img.src = "img/" + imgArr[i];
    }
    else if(direction == 1){
        (i == imgArr.length-1) ? i = 0 : i++;
        img.src = "img/" + imgArr[i];
    }
}
window.onload = init();
