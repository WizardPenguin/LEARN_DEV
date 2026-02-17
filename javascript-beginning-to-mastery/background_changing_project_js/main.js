color = document.querySelector(".color");

button = document.querySelector(".change-color");

body = document.querySelector("body");

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function ChangeColor() {
    let newColor = randomColor();
    body.style.backgroundColor = newColor;
    color.textContent = newColor;
}

button.addEventListener("click", ChangeColor);