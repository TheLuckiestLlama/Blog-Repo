// Use this to toggle between light and dark on both pages

const themeSwitcher = document.querySelector('.themeSwitcher');
const container = document.querySelector('.container');
const logo = document.querySelector('.Logo')

let mode = 'light';


themeSwitcher.addEventListener('click', function(){
    if (mode === `dark`){
        mode = `light`
        container.setAttribute('class', 'lightMode');
        logo.setAttribute('class', 'LogoLight');
        themeSwitcher.setAttribute('class', 'themeSwitchLight');
    } else {
        mode = `dark`
        container.setAttribute('class', 'darkMode');
        logo.setAttribute('class', 'LogoDark');
        themeSwitcher.setAttribute('class', 'themeSwitchDark');
    }



})