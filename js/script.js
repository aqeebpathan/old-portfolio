"use strict";

// Model loader
const modelViewer = document.getElementById("model");
const loader = document.querySelector(".preloader");
const scrollAnimation = document.querySelector("#scroll-animation");

modelViewer.addEventListener("load", () => {
  loader.style.display = "none";
  scrollAnimation.style.display = "block";
});

// Scroll animation
const srcollAnimation = document.getElementById("scroll-animation");

// Load the Lottie animation
const animation = lottie.loadAnimation({
  container: srcollAnimation,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./Scroll.json",
});

// Footer time

const date = new Date();

const options = {
  timeZone: "Asia/Kolkata",
  hour12: true,
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

const indiaTime = date.toLocaleTimeString("en-IN", options);

function displayIndiaTime() {
  // Create a new Date object
  const date = new Date();

  // Set the options for formatting the time
  const options = {
    timeZone: "Asia/Kolkata",
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  };

  // Get the current time in India
  const indiaTime = date.toLocaleTimeString("en-IN", options);

  // Update the time in the HTML element with id 'india-time'
  document.getElementById("timeSpan").textContent = indiaTime;
}

// Refresh the time every second (1000 milliseconds)
setInterval(displayIndiaTime, 1000);

