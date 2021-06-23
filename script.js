const form = document.querySelector('form');
const result = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    let heightMoveScroll = 0;
    e.preventDefault();
    result.style.display = 'block';
    heightMoveScroll = document.body.clientHeight - window.innerHeight + 400;
    window.scrollTo({ top: heightMoveScroll, left: 0, behavior: 'smooth'});
})





