let milliseconds = 0
let seconds = 0;
let minutes = 0;
let hours = 0;

let dispmseconds =0;
let dispseconds =0;
let dispminutes =0;
let disphours = 0;

let interval = null;
let msg = "stopped"


function stopwatch(){  //to implement progression 
    milliseconds++

    if(milliseconds/60 == 1){
        milliseconds = 0;
        seconds ++;

        if(seconds/60 == 1){
            seconds = 0;
            minutes++;

            if(minutes/60 == 1){
                minutes = 0;
                hours++;
            }
        }
    }
    

    //to add an extra "0" before the hours, minutes and seconds
    if(milliseconds<10){
        dispmseconds = "0"+ milliseconds.toString();
    }
    else{
        dispmseconds = milliseconds;
    }
    if(seconds<10){
        dispseconds = "0" + seconds.toString();
    }
    else{
        dispseconds = seconds;
    }
    if(minutes<10){
        dispminutes = "0" + minutes.toString();
    }
    else{
        dispminutes = minutes;
    }
    if(hours<10){
        disphours = "0"+hours.toString();
    }
    else{
        disphours = hours;
    }

    document.getElementById("display").innerHTML = disphours+ ":" + dispminutes + ":" + dispseconds + ":" + dispmseconds;
}

// window.setInterval(stopwatch, 1000);

function startStop(){
    if(msg === "stopped"){
        interval = window.setInterval(stopwatch, 15);
        document.getElementById("startstop").innerHTML = "Stop";
        msg = "started";
    }
    else{
        window.clearInterval(interval);
        document.getElementById("startstop").innerHTML = "Start";
        msg = "stopped";
    }
}

function reset(){
    window.clearInterval(interval);
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0

    document.getElementById("display").innerHTML="00:00:00:00"
    document.getElementById("startstop").innerHTML = "Start"
}