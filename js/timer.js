function countDownTimer(){
    now = new Date().getTime();
    distance = countDownDate - now;
    if (distance > 0){
        d = Math.floor(distance / (1000 * 60 * 60 * 24));
        h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        s = Math.floor((distance % (1000 * 60)) / 1000);
        days.innerHTML = d;
        hours.innerHTML = h;
        minutes.innerHTML = m;
        seconds.innerHTML = s;
    }
    else{
        timer.innerHTML = `<h2 class="heading">Event is rolling now.</h2>`;
        registerForm.style.display = "none";
    }
    setTimeout(countDownTimer, 1000);
}

var now, distance, d, h, m, s;
var countDownDate = new Date("Mar 8, 2019 09:00:00").getTime();
var days = document.querySelector("#days h1");
var hours = document.querySelector("#hours h1");
var minutes = document.querySelector("#minutes h1");
var seconds = document.querySelector("#seconds h1");
var timer = document.querySelector(".main .timer");
var registerForm = document.querySelector("#register");
countDownTimer();