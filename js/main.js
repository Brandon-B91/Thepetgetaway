function modal() {
    let modal = document.querySelector('.modal');
    let modalBox = document.querySelector('.modal-box');
    let close = document.querySelector('#close-btn');
    let policies = document.querySelector('.policies');
    let accomodations = document.querySelector('.accomodations');
    let policiesBox = document.querySelector('.policies-box');
    let accomodationsBox = document.querySelector('.accomodations-box');

    policies.addEventListener('click', () => {
        modal.style.display = 'block';
        policiesBox.style.display = 'block';
    })

    accomodations.addEventListener('click', () => {
        modal.style.display = 'block';
        accomodationsBox.style.display = 'block';
    })

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        accomodationsBox.style.display = 'none';
        policiesBox.style.display = 'none';
    })

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            accomodationsBox.style.display = 'none';
            policiesBox.style.display = 'none';
        }
    })


}

modal();







const slides = document.querySelectorAll('.card');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const auto = true; // Auto scroll
const intervalTime = 5000;
let slideInterval;
let current = document.querySelector('.current')

const nextSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for next slide
    if (current.nextElementSibling) {
        // Add current to next sibling
        current.nextElementSibling.classList.add('current');
    } else {
        // Add current to start
        slides[0].classList.add('current');
    }
    // setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
    // Get current class
    const current = document.querySelector('.current');
    // Remove current class
    current.classList.remove('current');
    // Check for prev slide
    if (current.previousElementSibling) {
        // Add current to prev sibling
        current.previousElementSibling.classList.add('current');
    } else {
        // Add current to last
        slides[slides.length - 1].classList.add('current');
    }
    // setTimeout(() => current.classList.remove('current'));
};


// Button events
next.addEventListener('click', e => {
    nextSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

prev.addEventListener('click', e => {
    prevSlide();
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
});

// Auto slide
if (auto) {
    // Run next slide at interval time
    slideInterval = setInterval(nextSlide, intervalTime);
}

function moveSlide() {
    var min_horizontal_move = 30;
    var max_vertical_move = 30;
    var within_ms = 1000;

    var start_xPos;
    var start_yPos;
    var start_time;

    function touch_start(event) {
        start_xPos = event.touches[0].pageX;
        start_yPos = event.touches[0].pageY;
        start_time = new Date();
    }


    function touch_end(event) {
        var end_xPos = event.changedTouches[0].pageX;
        var end_yPos = event.changedTouches[0].pageY;
        var end_time = new Date();
        let move_x = end_xPos - start_xPos;
        let move_y = end_yPos - start_yPos;
        let elapsed_time = end_time - start_time;
        if (Math.abs(move_x) > min_horizontal_move && Math.abs(move_y) < max_vertical_move && elapsed_time < within_ms) {
            if (move_x < 0) {
                nextSlide(slides + 1)
                clearInterval(slideInterval)
                slideInterval = setInterval(nextSlide, intervalTime);
            } else {
                prevSlide(slides - 1)
                clearInterval(slideInterval)
                slideInterval = setInterval(nextSlide, intervalTime);
            }
        }
    }

    var content = document.querySelector('.card-holder');
    content.addEventListener('touchstart', touch_start);
    content.addEventListener('touchend', touch_end);

};

moveSlide();