const button = document.querySelector('#btn');
const div = document.querySelector('div');

button.addEventListener('click', () => {
    if (div.style.backgroundColor === 'black' && div.style.color === 'white') {
        div.style.backgroundColor = 'white';
        div.style.color = 'black';
    } else {
        div.style.backgroundColor = 'black';
        div.style.color = 'white';
    }

});
