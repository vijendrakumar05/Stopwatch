let isStop = true;
let second = 0;
let minute = 0;
let hour = 0;

function start() {
    if (isStop == true){
    isStop = false;
    timer();
  }
}

function timer() {
    if (isStop == false){
        second = parseInt(second);
        minute = parseInt(minute);
        hour = parseInt(hour);

        second++;
        if (second == 60){
            second = 0;
            minute++;
        }
        if (minute == 60){
            minute = 0;
            hour++;
        }

        
        if (hour < 10){
            hour = "0" + hour;
        }
        if (minute < 10){
            minute = "0" + minute;
        }
        if (second < 10){
            second = "0" + second;
        }
     stopwatch.innerHTML = hour + ":" + minute + ":" + second;
     setTimeout("timer()", 1000);
    }
}

function stop() {
    isStop = true;
}

function reset() {
    isStop = true;
    second = 0;
    minute = 0;
    hour = 0;
    stopwatch.innerHTML = "00:00:00";
}

