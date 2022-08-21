function showLightbox() {
    let lightbox = document.getElementsByClassName("lightbox");

    lightbox[0].style.display = "block";
    disableScroll()
}

function hideLightbox() {
    let lightbox = document.getElementsByClassName("lightbox");
    console.log(lightbox.length);

    lightbox[0].style.display = "none";
    enableScroll()
}