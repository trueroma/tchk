import { Cashbox } from './components/cashboxes.js';

customElements.define('cash-box', Cashbox);

let curScroll;

const scrollDown = () => {
    curScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (curScroll < document.documentElement.clientHeight) {
        window.scrollTo(0, curScroll + 25);
        setTimeout(scrollDown, 5);
    } else {
        window.scrollTo(0, document.documentElement.clientHeight);
    }
}

const shadower = header => {
    curScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (!curScroll) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
    }
}

const switchDat = lighter => {
    console.log(this);
}

const swipe = (switches, arrow) => {

    let
        directionLeft = 'true',
        swipeDir = 'swipe-left';

    // if (arrow.children[0].classList[1] === 'left-arr') console.log('Лево');
    if (arrow.children[0].classList[1] === 'right-arr') {
        directionLeft = false;
        swipeDir = 'swipe-right';
    }

    console.log(directionLeft);

    // console.log(arrow.children[0].classList[1] === 'right-arr');

    const slide = document.createElement('div');
    const cashBox = document.createElement('cash-box');
    slide.className = 'web-comp-slider';
    if (directionLeft) {
        switches.appendChild(slide);
        switches.lastChild.appendChild(cashBox);
    } else {
        switches.insertBefore(slide, switches.firstChild);
        switches.firstChild.appendChild(cashBox);
    }
    const slider = document.querySelectorAll('.web-comp-slider');
    for (let i = 0; i < slider.length; i++) {
        if (!directionLeft) {
            slider[i].style.transform = 'translateX(-100%)';
        }
        slider[i].style.animation = `${swipeDir} .3s ease-in-out`;
    }
    setTimeout(() => {
        console.log(switches.children.length);
        console.log('Ку-ку');
        if (directionLeft) while (switches.children.length > 1) switches.removeChild(switches.firstChild);
        if (!directionLeft) while (switches.children.length > 1) switches.removeChild(switches.lastChild);

        for (let i = 0; i < slider.length; i++) {
            slider[i].style.animation = '';
            slider[i].style.transform = 'translateX(0)';
        }
    }, 300);
}

const init = () => {
    const
        header = document.querySelector('.header'),
        lighter = document.querySelector('.lighter'),
        switcher = document.querySelector('.switcher'),
        switches = document.querySelector('.web-component-wrapper'),
        arrowLeft = document.querySelector('.left-arr'),
        arrow = document.querySelectorAll('.arrow-shadow');

    document.querySelector('.down-wrapper').addEventListener('click', scrollDown);
    document.addEventListener('scroll', () => shadower(header));
    switcher.addEventListener('click', () => switchDat(lighter));

    // arrowLeft.addEventListener('click', () => swipeLeft(switches));
    for (let i = 0; i < arrow.length; i++) arrow[i].addEventListener('click', () => swipe(switches, arrow[i]));
    console.log(document.documentElement.clientHeight, document.documentElement.clientWidth);
}
document.addEventListener('DOMContentLoaded', init);