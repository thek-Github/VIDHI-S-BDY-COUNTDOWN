// Set your countdown target date/time here
const countdownDate = new Date("June 15, 2026 00:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const giftButton = document.getElementById("giftButton");
const birthdayMessage = document.getElementById("birthdayMessage");
const typingText = document.getElementById("typingText");

function enableBirthdayMode() {
  giftButton.disabled = false;
  giftButton.classList.add("enabled");
  birthdayMessage.classList.remove("hidden");  // Show birthday message
}

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = countdownDate - now;

  if (distance <= 0) {
    clearInterval(countdownInterval);
    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";
    enableBirthdayMode();

    birthdayMessage.classList.remove("hidden");
    typingText.classList.add("done"); // If you have blink animation
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, "0");
    hoursEl.textContent = String(hours).padStart(2, "0");
    minutesEl.textContent = String(minutes).padStart(2, "0");
    secondsEl.textContent = String(seconds).padStart(2, "0");
  }
}, 1000);

giftButton.addEventListener("click", () => {
  // Optionally hide countdown & button, or keep them visible before redirect
  document.getElementById("countdownTitle").style.display = "none";
  document.getElementById("countdown").style.display = "none";
  giftButton.style.display = "none";
  birthdayMessage.style.display = "none";

  // Redirect immediately to second site
  window.location.href = "https://louisse-bdy.vercel.app/";
});
