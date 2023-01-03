const buttons = Array.from(document.getElementsByClassName('button'));
const display = document.getElementById('display');

const eval = function() {
    return new Function('return ' + display.innerHTML)();
}

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (button.innerHTML) {
            case 'DEL':
                display.innerHTML = display.innerHTML.slice(0, -1);
                break;
            case '.':
                display.innerHTML += '.';
                break;
            case 'AC':
                display.innerHTML = '';
                break;
            case '=':
                display.innerHTML = Math.round(eval() * 100) /100;
                break;
            default:
                display.innerHTML += e.target.innerHTML;
        }
    })
})