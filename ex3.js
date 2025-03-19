const buttonRed = document.querySelector('#btn-red');
const buttonGreen = document.querySelector('#btn-green');
const buttonViolet = document.querySelector('#btn-violet');
const div = document.querySelector('div');

buttonRed.addEventListener('click', () => {
    div.style.backgroundColor = 'red';
});
buttonGreen.addEventListener('click', () => {
    div.style.backgroundColor = 'green';
});
buttonViolet.addEventListener('click', () => {
    div.style.backgroundColor = 'violet';
});