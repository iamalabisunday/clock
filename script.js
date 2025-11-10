"use strict";

function updateClock() {
  const time = new Date();
  const hr = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();
  console.log(`${hr}:${min}:${sec}`);

  // Convert time into degrees
  const hourDeg = (hr % 12) * 30 + min * 0.5;
  const minDeg = min * 6 + sec * 0.1;
  const secDeg = sec * 6;

  // Apply rotation to clock hands
  document.querySelector(
    ".hour-hand"
  ).style.transform = `rotate(${hourDeg}deg)`;
  document.querySelector(".min-hand").style.transform = `rotate(${minDeg}deg)`;
  document.querySelector(".sec-hand").style.transform = `rotate(${secDeg}deg)`;
}

// Update every second
setInterval(updateClock, 1000);
updateClock();
