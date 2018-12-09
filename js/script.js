const box = document.createElement("div");
box.classList.add("sqaure");
document.body.appendChild(box);

let size = 50;
box.style.width = size + "px";
box.style.height = size + "px";
let change = true; // flaga

const scrollBox = () => {

    if (size >= window.innerWidth / 2) {
        change = !change;
    } else if (size <= 0) {
        change = !change;
    }

    if (change) {
        size++;
        box.style.width = size + "px";
        box.style.height = size + "px";
    } else {
        size--;
        box.style.width = size + "px";
        box.style.height = size + "px";
    }
}

window.addEventListener('scroll', scrollBox);