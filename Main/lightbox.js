function showLightbox() {
    let lightbox = document.getElementsByClassName("lightbox");

    lightbox[0].style.display = "block";
    disableScroll()
}

function hideLightbox() {
    let lightbox = document.getElementsByClassName("lightbox");
    let slides = document.getElementsByClassName("allSlides");

    console.log(slides.length + " Slides length at close");

    lightbox[0].style.display = "none";

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } /* Removes all objects of slides1 */

    enableScroll()
}