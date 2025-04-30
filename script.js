const time = document.getElementById('time');
const hourHand = document.querySelector('.hourHand');
const minuteHand = document.querySelector('.minuteHand');
const secondHand = document.querySelector('.secondHand');

function setDate() {
  const now = new Date();

  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();

  // Add leading zeros
  seconds = String(seconds).padStart(2, '0');
  minutes = String(minutes).padStart(2, '0');
  hours = String(hours).padStart(2, '0');

  const secondsDeg = (parseInt(seconds) / 60) * 360;
  const minutesDeg = (parseInt(minutes) / 60) * 360;
  const hoursDeg = (parseInt(hours) / 12) * 360;

  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

  time.innerHTML = `<span><strong>${hours}</strong> : ${minutes} : <small>${seconds}</small></span>`;
}


setInterval(setDate, 1000);
setDate(); 
