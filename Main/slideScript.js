let slidesIndex = 1
let slidesLenght
let tempName = ""
let type = ""

let png = ".png"
let jpg = ".jpg"

let s1 = "Gallery/Illustration2"
let s2 = "Gallery/Illustration3"
let s3 = "Gallery/Illustration4"
let s4 = "Gallery/Illustration5"

let btn = document.querySelector('.midArrowDown');
let el = document.querySelector('.secondBlock');

btn.addEventListener('click', function() {
    el.scrollIntoView({ behavior: "smooth" });
});

function specificSlide(n, y, z) {
    slidesIndex = 1

    slidesLenght = n
    tempName = y
    type = z

    showSlides(slidesLenght)
}

function plusSlides(n) {
    slidesIndex += n
    showSlides(slidesLenght);
}

function showSlides(slidesLenght) {
    let i
    let slides = document.getElementsByClassName("mySlides");

    for (i = 0; i < slidesLenght; i++) {
        let iPlus = i + 1
        let source = tempName + "-" + iPlus.toString() + type;
        console.log(source)

        className = "element" + iPlus.toString();
        document.getElementById(className).src = source;
    }

    if (slidesIndex > slidesLenght) {
        slidesIndex = 1;
    } /* Resets variable */

    if (slidesIndex < 1) {
        slidesIndex = slidesLenght;
    } /* Resets variable */

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } /* Removes all objects of class */

    slides[slidesIndex - 1].style.display = "block"; /* Shows the object */
}