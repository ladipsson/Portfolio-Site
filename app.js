const menuBtn = document.querySelector('#open-btn-menu');
const menu = document.querySelector('.header-menu');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active'); 
})

