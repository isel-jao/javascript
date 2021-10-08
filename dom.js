"use strict";

const white_bg = "#d8d8d8";
const dark_bg = "#001a33";

const dark = 1;
const light = 0;
let mode_status = light;

let mode_id = document.getElementById("mode");
let highlight = document.getElementsByClassName("highlight");

function switch_mode() {
  if (mode_status == dark) {
    document.body.style.backgroundColor = white_bg;
    document.body.style.color = dark_bg;
    mode_id.style.backgroundColor = dark_bg;
    mode_id.innerHTML = "Dark Mode";
    mode_id.style.color = white_bg;

    mode_status = light;
  } else {
    document.body.style.backgroundColor = dark_bg;
    document.body.style.color = white_bg;
    mode_status = dark;
    mode_id.style.backgroundColor = white_bg;
    mode_id.innerHTML = "Light Mode";
    mode_id.style.color = dark_bg;
  }
}

function event() {
  console.log("text selected");
}

switch_mode();

mode_id.addEventListener("click", switch_mode);

let btn = document.querySelector("#backToTop");

btn.classList.add("hide");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btn.classList.remove("hide");
  } else {
    btn.classList.add("hide");
  }
});

btn.addEventListener("click", function () {
	console.log("clicked")
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// backToTop.classList.remove("hide")

// document.getElementById(id)				Find an element by element id
// document.getElementsByTagName(name)		Find elements by tag name
// document.getElementsByClassName(name)	Find elements by class name
// document.querySelector()
// document.querySelectorAll()
