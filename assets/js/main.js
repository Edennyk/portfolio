//menu show y hidden 
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

// show menu
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu'); // css .showmenu
    });
}
// hidden menu
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}
// remove menu - mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When clicked on each nav__link, removed the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// scroll sections active to nav link
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive)

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}

// change backgroud header
function scrollHeader(){
    const nav = document.getElementById('header');
    //when the scroll is >= 80 viewport add tha scroll header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// show up arrow scroll 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);


// change dark and light theme
const themeButton = document.getElementById('theme-button');

if(localStorage.getItem('theme') == null){
    localStorage.setItem('theme','dark');
}

localStorage.setItem('theme','dark');
let localData = localStorage.getItem('theme');
if(localData === 'dark'){
    themeButton.src = "assets/imgs/sun.png";
    document.body.classList.remove('light-theme');
}
else if(localData === 'light'){
    themeButton.src = "assets/imgs/moon.png";
    document.body.classList.add('light-theme');
}

themeButton.onclick = function(){
    document.body.classList.toggle('light-theme');
    if(document.body.classList.contains('light-theme')){
        themeButton.src = "assets/imgs/moon.png";
        localStorage.setItem('theme', 'light');
    }
    else{
        themeButton.src = "assets/imgs/sun.png";
        localStorage.setItem('theme', 'dark');
    }
}

// scroll down handler
function isElementUnderBottom(elem, triggerDiff) {
    const { top } = elem.getBoundingClientRect(); // check elements at bottom method
    const { innerHeight } = window;
    return top > innerHeight + (triggerDiff || 0);
  }
  
  function handleScroll() {
    const elems = document.querySelectorAll('.section__title');
    elems.forEach(elem => {
      if (isElementUnderBottom(elem, -20)) {
        elem.style.opacity = "0";
        elem.style.transform = 'translateY(-50px)';
      } 
      else {
        elem.style.opacity = "1";
        elem.style.transform = 'translateY(0px)';
        elem.style.transition = '1s ease-in-out';
      }
    })
  };
  
window.addEventListener('scroll', handleScroll);


