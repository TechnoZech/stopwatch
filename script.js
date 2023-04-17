//selectors

let start = document.querySelector(".start");
let stopp = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let displayTime = document.querySelector(".timer");
let timer = null;

//Event Listeners

start.addEventListener("click", startTime);
stopp.addEventListener("click", stopTime);
reset.addEventListener("click", resetTime);

//Functions
let[minutes, seconds, miliSeconds] = [0, 0, 0];

function startTime(){
    if(timer != null){
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}


function stopWatch(e){
    miliSeconds++;
    if(miliSeconds == 60){
        miliSeconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;
        }
    }

    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliSeconds < 10 ? "0" + miliSeconds : miliSeconds;

    displayTime.innerHTML = m + ":" + s + ":" + ms;
}

function stopTime(e){
    clearInterval(timer);
}

function resetTime(e){
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    miliSeconds = 0;
    displayTime.innerHTML = "00:00:00";
}