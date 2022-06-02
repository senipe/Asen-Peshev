let slidesIndex = 1
showSlides()

function specificSlide(y) {
    slidesIndex = y
    showSlides()
}

function plusSlides(n) {
    slidesIndex += n
    showSlides();
}

function showSlides() {
    let i
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides.length);
    console.log(slidesIndex);

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