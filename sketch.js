function setup() {
  createCanvas(0, 0);
}

function draw() {
  background(220);
}

const popup = document.getElementById("Popup-advertisment");
const closePopupButton = document.getElementById("close-popup");

function showPopup() {
  if (popup) {
    popup.style.display = "block";
  }
}

function closePopup() {
  if (popup) {
    popup.style.display = "none";
  }
}


setTimeout(showPopup, 5000);

if (closePopupButton) {
  closePopupButton.addEventListener("click", closePopup);
}
