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

///// Cookily
// Load the Dailymotion Player API asynchronously
var script = document.createElement("script");
script.src = "https://api.dmcdn.net/all.js";
script.onload = function () {
  // Create a new Dailymotion player
  var player = DM.player("cookily", {
    video: "x8lla3j",
    width: "inherit",
    height: "inherit",
    params: {
      autoplay: false,
      "ui-start-screen-info": false,
      "sharing-enable": false,
    },
  });

  // Listen for 'end' event
  player.addEventListener("end", function () {
    // Seek to the beginning of the video and play again
    player.seek(0).play();
  });
};

// Append the Dailymotion Player API script to the document
document.body.appendChild(script);

///// Bankist
var script = document.createElement("script");
script.src = "https://api.dmcdn.net/all.js";
script.onload = function () {
  // Create a new Dailymotion player
  var player = DM.player("bankist", {
    video: "x8llauh",
    width: "inherit",
    height: "inherit",
    params: {
      autoplay: false,
      "ui-start-screen-info": false,
      "sharing-enable": false,
    },
  });

  // Listen for 'end' event
  player.addEventListener("end", function () {
    // Seek to the beginning of the video and play again
    player.seek(0).play();
  });
};
//
// Append the Dailymotion Player API script to the document
document.body.appendChild(script);

///// Sendpal
var script = document.createElement("script");
script.src = "https://api.dmcdn.net/all.js";
script.onload = function () {
  // Create a new Dailymotion player
  var player = DM.player("sendpal", {
    video: "x8llbc5",
    width: "inherit",
    height: "inherit",
    params: {
      autoplay: false,
      "ui-start-screen-info": false,
      "sharing-enable": false,
    },
  });

  // Listen for 'end' event
  player.addEventListener("end", function () {
    // Seek to the beginning of the video and play again
    player.seek(0).play();
  });
};
//
// Append the Dailymotion Player API script to the document
document.body.appendChild(script);

///// Mapty
var script = document.createElement("script");
script.src = "https://api.dmcdn.net/all.js";
script.onload = function () {
  // Create a new Dailymotion player
  var player = DM.player("mapty", {
    video: "x8llc0q",
    width: "inherit",
    height: "inherit",
    params: {
      autoplay: false,
      "ui-start-screen-info": false,
      "sharing-enable": false,
    },
  });

  // Listen for 'end' event
  player.addEventListener("end", function () {
    // Seek to the beginning of the video and play again
    player.seek(0).play();
  });
};
//
// Append the Dailymotion Player API script to the document
document.body.appendChild(script);
