function makeBubble(){
    var clutter = "";


for(var i=1; i<=324; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`
}
document.querySelector('#pbtm').innerHTML = clutter;
}

var timer = 60;
function runTimer(){
    var timeint = setInterval(function () {
        if(timer > 0){
            timer--;
            document.querySelector('#timeval').textContent = timer;
        }
        else{
            clearInterval(timeint);
            document.querySelector("pbtm").innerHTML = `<h1>Game Over</h1>`;
                }
        
    },1000);
}
var score = 0;
function getScore(){
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}
var hitrn = 0;
function getNewHit(){
    hitrn = Math.floor(Math.random()* 10);
    document.querySelector("#hitval").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click" ,function(dets){

     var clickednum = Number(dets.target.textContent);
     if(hitrn == clickednum){
        getScore();
        makeBubble();
        getNewHit();
     }

  
})
runTimer();

makeBubble();
getNewHit();
