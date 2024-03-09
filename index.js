$(document).ready(function () {
    let running = false;
    let startTime, elapsedTime = 0, interval, animateCircleInterval;
    let duration = {
        h: 0,
        m: 0,
        s: 0,
        ms: 0
    };

    function pad(num, size) {
        var s = "0000" + num;
        return s.substr(s.length - size);
    }

    function updateDisplay() {
        duration.h = Math.floor(elapsedTime / 3600000);
        duration.m = Math.floor((elapsedTime % 3600000) / 60000);
        duration.s = Math.floor((elapsedTime % 60000) / 1000);
        duration.ms = elapsedTime % 1000;

        $("#hours").text(pad(duration.h, 2));
        $("#minutes").text(pad(duration.m, 2));
        $("#seconds").text(pad(duration.s, 2));
        $("#milliseconds").text(pad(duration.ms, 3));
    }

    function startTimer() {
        startTime = new Date();
        interval = setInterval(function () {
            var currentTime = new Date();
            elapsedTime += currentTime - startTime;
            startTime = currentTime;
            updateDisplay();
            animateCircle();
        }, 10);
    }

    function stopTimer() {
        clearInterval(interval);
    }

    window.playPauseFunc = function () {
        if (running) {
            stopTimer();
        } else {
            startTimer();
        }
        running = !running;
    };

    window.resetFunc = function () {
        if (running) {
            stopTimer();
            running = false;
        }
        startTime = null;
        elapsedTime = 0;
        updateDisplay();
        animateCircle();
    };
});