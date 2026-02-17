body = document.querySelector("body");
cancel_button = document.querySelector("button");


let id = setInterval(()=>{
    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;
    let rgb = `rgb(${r},${g},${b})`
    console.log(rgb)
    body.style.backgroundColor = rgb;
},1000);

cancel_button.addEventListener("click",()=>{
    console.log("clear interval")
    clearInterval(id);
    cancel_button.textContent = body.style.backgroundColor;
});