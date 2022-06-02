hideLightbox();

function showLightbox() {
    let lightbox = document.getElementsByClassName("lightbox");

    lightbox[0].style.display = "block";
    disableScroll()
}

function hideLightbox() {
    let lightbox = document.getElementsByClassName("lightbox");

    for (n = 0; n < lightbox.length; n++) {
        lightbox[n].style.display = "none";
    }
    enableScroll()
}