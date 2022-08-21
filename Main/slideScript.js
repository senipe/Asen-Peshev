let slidesIndex = 1
let memoryVar
let s1 = "mySlides1"
let s2 = "mySlides2"

function specificSlide(y) {
    slidesIndex = 1
    memoryVar = y
    showSlides(y)
}

function plusSlides(n) {
    slidesIndex += n
    showSlides(memoryVar);
}

function showSlides(y) {
    let i
    let slides = document.getElementsByClassName(y);
    console.log(slides.length);

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