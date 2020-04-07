// Select DOM Items: DOM means Document Object Model (the UI structure)
const menuBtn = document.querySelector('.menu-btn');    //will select whatever we put in querySelector. We create a variable menuBtn to store it. Will only grab the first one
const menu = document.querySelector('.menu');           //check definition querySelector: https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');   //We want to grab ALL .nav-items in DOM. Not just one. 

// Set Initial State of Menu
let showMenu = false; //we use let because we want to re-assign showMenu at certain times. Const is for Constant. 

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show')); //for each nav item we wanna add the show class

        //Set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        showMenu = false;
    }
}

