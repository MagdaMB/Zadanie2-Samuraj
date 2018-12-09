document.body.style.height = 10000 + 'px';
let size = 100;
let changeRed = true;

const line = document.createElement('div');
document.body.appendChild(line);

line.style.position = "fixed";
line.style.width = 100 + '%';
line.style.backgroundColor = 'green';
line.style.top = 0;
line.style.left = 0;
line.style.height = size + 'px';

const changeColorAndHeight = () => {
    if (size > window.innerHeight / 2) {
        changeRed = !changeRed; //false
        line.style.backgroundColor = 'red';
    } else if (size <= 0) {
        changeRed = !changeRed; //true
        line.style.backgroundColor = 'green';
    }

    if (changeRed) {
        size += 5;
        line.style.height = size + 'px';
    } else {
        size -= 5;
        line.style.height = size + 'px';
    }
}
window.addEventListener('scroll', changeColorAndHeight);