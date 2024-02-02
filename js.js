const buttonHeight = 50;
const buttonWidht = 150;

const maxWidth = window.innerWidth - buttonWidht;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('no');

    button.addEventListener('click', () => alert(''));

    button.addEventListener('mouseover', () => {
        button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
        button.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    });
});

window.addEventListener('DOMContentLoaded', () => {

    const button = document.getElementById('yes');

    button.addEventListener('click', () => alert('ulol haha asa tanga'));

});