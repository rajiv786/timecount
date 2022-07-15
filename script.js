var seconds =00;
var tens = 00;
var appendT =document.getElementById("tens");
var appends=document.getElementById("seconds");
var buttonS = document.getElementById("start");
var buttonr=document.getElementById("Reset");
var buttons=document.getElementById("stop");
var interval;// to store timer value

//this function runs the timer
function start(){
    tens++;
    if(tens<9){
        appendT.innerHTML ="0" + tens;
    }
    if(tens>9){
        appendT.innerHTML=tens;
    }
    if(tens>99){
        seconds++;
        appends.innerHTML="0" + seconds;
        tens = 0;
        appendT.innerHTML="0"+ 0;
    }
    if(seconds>9){
        appends.innerHTML=seconds;
    }
}
buttonS.onclick = function(){
    interval=setInterval(start); 
};
buttons.onclick= function() {
    clearInterval(interval);
};
buttonr.onclick = () => {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    appends.innerHTML = seconds;
    appendT.innerHTML = tens;
};
console.log("hello");