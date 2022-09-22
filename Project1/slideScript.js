let slidesIndex = 1

let btn = document.querySelector('.midArrowDown');
let el = document.querySelector('.secondBlock');

btn.addEventListener('click', function() {
    el.scrollIntoView({ behavior: "smooth" });
});

function specificSlide(x) {
    slidesIndex = x
    showSlides()
}

function plusSlides(n) {
    slidesIndex += n
    showSlides();
}

function showSlides() {
    let i
    let slides = document.getElementsByClassName("mySlides");

    if (slidesIndex > slides.length) {
        slidesIndex = 1;
    } /* Resets variable */

    if (slidesIndex < 1) {
        slidesIndex = slides.length;
    } /* Resets variable */

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } /* Removes all objects of class */

    slides[slidesIndex - 1].style.display = "block"; /* Shows the object */
}