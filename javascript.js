const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    
    select.addEventListener('click', () => {
        menu.classList.toggle('menu-open');
        caret.classList.toggle('caret-up');
    });
    
    menu.querySelectorAll('li').forEach(item => {
        item.addEventListener('click', () => {
            select.textContent = item.textContent;
            menu.classList.remove('menu-open');
            caret.classList.remove('caret-up');
        });
    });
    
    // Close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            menu.classList.remove('menu-open');
            caret.classList.remove('caret-up');
        }
    });
});

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const track = document.querySelector(".next-slick-track");
const slides = Array.from(track.children); // ดึงรายการสไลด์ทั้งหมด
const slideWidth = slides[0].getBoundingClientRect().width; // ความกว้างของแต่ละสไลด์

// จัดเรียงตำแหน่งเริ่มต้นของสไลด์
slides.forEach((slide, index) => {
    slide.style.left = `${slideWidth * index}px`;
});

let currentIndex = 0;

nextButton.addEventListener("click", () => {
    if (currentIndex < slides.length - 1) {
        currentIndex += 1;
        moveSlide();
        toggleSlideImages();
    }
});

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex -= 1;
        moveSlide();
        toggleSlideImages();
    }
});


function moveSlide() {
    track.style.transform = `translateX(-${slides[currentIndex].style.left})`;
}

