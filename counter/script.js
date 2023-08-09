let second = 0;
let minute = 0;
let hour = 0;
let timer;

const counter = () => {
    timer = setInterval(function() {
        second++;
        if (second < 10) {
            document.getElementById("segundos").innerHTML = "0"+second;
        } else {document.getElementById("segundos").innerHTML = second;};

        const minuteCount = () => {
            if (second == 60) {second = 0; minute++;}}
            if (minute < 10) {
                document.getElementById("minutos").innerHTML = "0"+minute;
            } else {document.getElementById("minutos").innerHTML = minute;}
        minuteCount();

        const hourCount = () => {
            if (minute == 60) {minute = 0; hour++;}}
            if (hour < 10) {
                document.getElementById("horas").innerHTML = "0"+hour;
            } else {document.getElementById("horas").innerHTML = hour;}
        hourCount();
    },1000);
}
const resetCounter = () => {
    second = 0;
    minute = 0;
    hour = 0;
    document.getElementById("segundos").innerHTML = "0"+second;
    document.getElementById("minutos").innerHTML = "0"+minute;
    document.getElementById("horas").innerHTML = "0"+hour;
    clearInterval(timer);
}
const startOrStopCounter = () => {
    if (document.getElementById("buttonStartStop").value === "stop") {
        document.getElementById("buttonStartStop").innerHTML = "stop";
        document.getElementById("buttonStartStop").value = "start";
        counter();
    } else {
        document.getElementById("buttonStartStop").innerHTML = "start";
        document.getElementById("buttonStartStop").value = "stop";
        resetCounter();
    }
}

document.getElementById("segundos").innerHTML = "0"+second;
document.getElementById("minutos").innerHTML = "0"+minute;
document.getElementById("horas").innerHTML = "0"+hour;

document.getElementById("buttonStartStop").addEventListener("click", ()=>{startOrStopCounter()})