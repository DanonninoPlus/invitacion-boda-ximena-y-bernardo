const countdownDate = new Date("2026-12-19T16:30:00").getTime();

const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  const format = (num) => String(num).padStart(2, "0");

  document.getElementById("days").textContent = format(days);
  document.getElementById("hours").textContent = format(hours);
  document.getElementById("minutes").textContent = format(minutes);
  document.getElementById("seconds").textContent = format(seconds);

  if (distance < 0) {
    clearInterval(interval);
  }
}, 1000);
