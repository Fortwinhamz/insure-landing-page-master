const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click' , mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
}


//For the hamburger menu to close when we click on a link

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach (n => n.addEventListener('click' , closeMenu))


function closeMenu() {
    hamburger.classList.remove('active')
    navMenu.classList.remove('active')
}