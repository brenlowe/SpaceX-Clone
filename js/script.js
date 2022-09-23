const hamburgerBtn = document.querySelector("#menu-btn");
const overlay = document.querySelector(".overlay");
const mobileMenu = document.querySelector("#mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

hamburgerBtn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage)

function scrollPage() {
    const scrollPos = window.scrollY;
    
    if (scrollPos > 100 && !scrollStarted) {
        countUp();
        scrollStarted = true;
    } else if (scrollPos < 100 && scrollStarted) {
        reset();
        scrollStarted = false;
    }
}

function navToggle() {
    hamburgerBtn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scroll');
    mobileMenu.classList.toggle('show-menu');
}

function countUp() {
    counters.forEach((counter) => {
        counter.innerText = '0';

        const updateCounter = () => {
            // get count target
            const target = +counter.getAttribute('data-target');
            // get current counter value
            const c = +counter.innerText;
            // create an increment
            const increment = target / 100;

            // if counter is less than target, add increment
            if (c < target) {
                // round up and set counter value
                counter.innerText = `${Math.ceil(c + increment)}`

                setTimeout(updateCounter, 12);
            } else {
                counter.innerText = target;
            }
        }

        updateCounter();
    })
}

function reset() {
    counters.forEach((counter) => {
        counter.innerHTML = '0';
    })
}