let count = 0;
window.localStorage.setItem("waddlesClicker", count);

let homeButton = document.querySelector("#home")
homeButton.addEventListener("click", () => {
  alert("You are home");
});

let dButton = document.querySelector("#Waddles D.")
dButton.addEventListener("click", () => {
  /*take to page*/
});

let cButton = document.querySelector("#Waddles C.")
cButton.addEventListener("click", () => {
  /*take to page*/
});

let gButton = document.querySelector("#Waddles G.")
gButton.addEventListener("click", () => {
  /*take to page*/
});

let bButton = document.querySelector("#Waddles B.")
bButton.addEventListener("click", () => {
  /*take to page*/
});

let CjrButton = document.querySelector("#Waddles C. Jr.")
CjrButton.addEventListener("click", () => {
  /*take to page*/
});

let iButton = document.querySelector("#Icecube")
iButton.addEventListener("click", () => {
  /*take to page*/
});

let waddles = document.querySelector("#image")
waddles.addEventListener("click", () => {
  count++;
  window.localStorage.setItem("waddlesClicker", count);
  console.log(window.localStorage.getItem("waddlesClicker"));
  if (window.localStorage.getItem("waddlesClicker") >= "5") {
    console.log("Stop clicking on me");
  }
});

var myParagraph = document.getElementById('paragraph');
myParagraph.style.color = "green";
var myList = document.getElementById('firstList');
myList.classList.remove("list");