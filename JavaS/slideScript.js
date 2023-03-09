let slidesIndex = 1

let slidesLenght
let tempName = ""
let type = ""

let png = ".png"
let jpg = ".jpg"

let i2 = "Gallery/Illustration2"
let i3 = "Gallery/Illustration3"
let i4 = "Gallery/Illustration4"
let i5 = "Gallery/Illustration5"
let i6 = "Gallery/Illustration6"
let i7 = "Gallery/Illustration7"

let b1 = "Gallery/Blender1"

let s1 = "Gallery/Study1"
let s2 = "Gallery/Study2"
let s3 = "Gallery/Study3"
let s4 = "Gallery/Study4"

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