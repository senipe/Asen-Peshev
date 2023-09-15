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
let i8 = "Gallery/Illustration8"
let i9 = "Gallery/Illustration9"
let i10 = "Gallery/Illustration10"

let b1 = "Gallery/Blender1"

let s1 = "Gallery/Study1"
let s2 = "Gallery/Study2"
let s3 = "Gallery/Study3"
let s4 = "Gallery/Study4"

let ca1 = "Gallery/CA1"
let ca2 = "Gallery/CA2"
let ca3 = "Gallery/CA3"
let ca4 = "Gallery/CA4"
let ca5 = "Gallery/CA5"
let ca6 = "Gallery/CA6"
let ca7 = "Gallery/CA7"
let ca8 = "Gallery/CA8"
let ca9 = "Gallery/CA9"

let ca_2_1 = "Gallery/CA[2]1"

function specificSlide(n, y, z) {
    slidesIndex = 1

    slidesLenght = n
    tempName = y
    type = z

    hideNavButtons()
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

function hideNavButtons() {
    if (window.matchMedia('(min-width: 920px)').matches) {
        if (slidesLenght == 1) {
            console.log("hide")
            document.getElementsByClassName("prevButton")[0].style.display = "none"
            document.getElementsByClassName("nextButton")[0].style.display = "none"
        } else {
            console.log("show")
            document.getElementsByClassName("prevButton")[0].style.display = "block"
            document.getElementsByClassName("nextButton")[0].style.display = "block"
        }
    }
}