//set variables for all the DOM elements that will be used
const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const colorInput = document.getElementById('color-input');
const widthDisplay = document.getElementById('width-display');
const heightDisplay = document.getElementById('height-display');
const colorDisplay = document.getElementById('color-display');
const colorBox = document.getElementById('color-box');

//updates width in lower left display and the box
function updateWidth() {
  widthDisplay.innerHTML = `${widthInput.value}px`;
  colorBox.style.width = `${widthInput.value}px`;
}

//updates height in lower left display and the box
function updateHeight () {
  heightDisplay.innerHTML = `${heightInput.value}px`;
  colorBox.style.height = `${heightInput.value}px`;
}

//updates background color in lower left display and the box
function updateColor() {
  colorDisplay.innerHTML = `${colorInput.value}`;
  colorBox.style.backgroundColor = `${colorInput.value}`;
}

//add event listeners to each input to update them whenever input
//is changed
widthInput.addEventListener('input', updateWidth);
heightInput.addEventListener('input', updateHeight);
colorInput.addEventListener('input', updateColor);

//updates all fields once html is loaded
document.addEventListener('DOMContentLoaded', () => {
  updateColor();
  updateHeight();
  updateWidth();
})