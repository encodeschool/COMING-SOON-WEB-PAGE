let coundDownDate = new Date("Feb 16, 2025 00:00:00").getTime();
setInterval(function () {
  let now = new Date().getTime();
  let distance = coundDownDate - now;
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.querySelector("#days").innerHTML = days;
  document.querySelector("#hours").innerHTML = hours;
  document.querySelector("#minutes").innerHTML = minutes;
  document.querySelector("#seconds").innerHTML = seconds;

  if (distance < 0) {
    clearInterval(0);
    document.querySelector("#days").innerHTML = "00";
    document.querySelector("#hours").innerHTML = "00";
    document.querySelector("#minutes").innerHTML = "00";
    document.querySelector("#seconds").innerHTML = "00";
  }
}, 1000);
