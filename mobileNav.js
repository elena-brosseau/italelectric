
// Mobile Nav

const menu = document.querySelector('header img'),
      header = document.querySelector('header'),
      body = document.querySelector('body'),
      navItems = Array.from(document.querySelectorAll('header a'));


function toggleNav() {
    header.classList.toggle('open')
    if (header.classList.contains('open')) {
        menu.src = '../assets/close.png'
        window.onresize = closeNav
        body.style.overflowY = 'hidden';
        navItems.forEach(item => {
            item.onclick = closeNav;
        })
    } else {
        menu.src = '../assets/menu.png'
        body.style.overflowY = 'auto';
    }
}

function closeNav() {
    header.classList.remove('open');
    menu.src = '../assets/menu.png'
    body.style.overflowY = 'auto';
}

menu.onclick = toggleNav;

