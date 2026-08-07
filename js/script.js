// Alumni Testimonial Carousel

const track = document.querySelector(".testimonial-track");
const cards = document.querySelectorAll(".testimonial-card");
const slider = document.querySelector(".testimonial-slider");

let currentSlide = 0;
let autoSlide;


function moveSlide(){

    currentSlide++;

    if(currentSlide >= cards.length){
        currentSlide = 0;
    }

    track.style.transform =
    `translateX(-${currentSlide * 100}%)`;
}


function startSlider(){
    autoSlide = setInterval(moveSlide,3000);
}


function stopSlider(){
    clearInterval(autoSlide);
}


slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", startSlider);


startSlider();
/* ==========================
   Upcoming Batch Slider
========================== */

const batchTrack = document.querySelector(".batch-track");
const batchCards = document.querySelectorAll(".batch-card");
const batchPrev = document.querySelector(".batch-btn.prev");
const batchNext = document.querySelector(".batch-btn.next");
const batchDots = document.querySelector(".batch-dots");

let batchIndex = 0;
let batchAuto;

// Create dots
batchCards.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.classList.add("dot");

    if(i===0) dot.classList.add("active");

 dot.addEventListener("click", () => {

    batchIndex = i;

    updateBatchSlider();

    startBatchSlider();

});

    batchDots.appendChild(dot);
});

const dots = document.querySelectorAll(".batch-dots .dot");

function updateBatchSlider(){

    batchTrack.style.transform =
        `translateX(-${batchIndex*100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[batchIndex].classList.add("active");
}

function nextBatch(){

    batchIndex++;

    if(batchIndex >= batchCards.length){
        batchIndex = 0;
    }

    updateBatchSlider();
    startBatchSlider();
}

function prevBatch(){

    batchIndex--;

    if(batchIndex < 0){
        batchIndex = batchCards.length - 1;
    }

    updateBatchSlider();
    startBatchSlider();
}

if (batchNext) {
    batchNext.addEventListener("click", nextBatch);
}

if (batchPrev) {
    batchPrev.addEventListener("click", prevBatch);
}

function startBatchSlider(){

    clearTimeout(batchAuto);

    let delay = (batchIndex === 0) ? 4000 : 3000;

    batchAuto = setTimeout(() => {
        nextBatch();
    }, delay);

}

function stopBatchSlider(){

    clearTimeout(batchAuto);

}

// document.querySelector(".batch-slider")
// .addEventListener("mouseenter", stopBatchSlider);

// document.querySelector(".batch-slider")
// .addEventListener("mouseleave", startBatchSlider);

startBatchSlider();