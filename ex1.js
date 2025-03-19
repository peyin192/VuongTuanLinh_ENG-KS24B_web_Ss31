const showBtn = document.querySelector('#show-btn');
const hideBtn = document.querySelector('#hide-btn');
const div = document.querySelector('div');
 showBtn.addEventListener('click', () => {
    div.style.display = 'block';
 });
 hideBtn.addEventListener('click', () => {
    div.style.display = 'none';
 });
