document.querySelectorAll('.slider').forEach(slider => {

    let list = slider.querySelector('.list');
    let items = slider.querySelectorAll('.item');
    let dotsContainer = slider.querySelector('.dots');
    let nextBtn = slider.querySelector('.next');
    let prevBtn = slider.querySelector('.prev');

    let active = 0;

    items.forEach((item, index) => {
        let dot = document.createElement('li');
        if (index === 0) dot.classList.add('active');
        dotsContainer.appendChild(dot);

        dot.addEventListener('click', () => {
            active = index;
            reloadSlider();
        });
    });

    let dots = dotsContainer.querySelectorAll('li');

    function reloadSlider() {
        list.style.left = -items[active].offsetLeft + 'px';

        slider.querySelector('.dots li.active').classList.remove('active');
        dots[active].classList.add('active');
    }

    nextBtn.onclick = () => {
        active = (active + 1) % items.length;
        reloadSlider();
    };

    prevBtn.onclick = () => {
        active = (active - 1 + items.length) % items.length;
        reloadSlider();
    };
});

const typeText = document.querySelector(".typewriter-text");

const words = [
    "Computer Science Student",
    "Web Developer",
    "Android Apps Developer",
    "Programmer",
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    let currentWord = words[wordIndex];
    let currentText = currentWord.substring(0, charIndex);

    typeText.textContent = currentText;

    if (!isDeleting) {
        if (charIndex < currentWord.length) {
            charIndex++;
            setTimeout(typeWriter, 120);
        } else {

            setTimeout(() => { isDeleting = true; typeWriter(); }, 1000);
        }
    } else {
        if (charIndex > 0) {
            charIndex--;
            setTimeout(typeWriter, 80);
        } else {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWriter, 200);
        }
    }
}

typeWriter();
