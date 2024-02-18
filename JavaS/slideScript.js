let slidesIndex = 1

let slidesLenght
let tempName = ""
let type = ""

let png = ".png"
let jpg = ".jpg"

let ca_1_1 = "Gallery/CA[1]1"
let ca_2_1 = "Gallery/CA[2]1"
let ca_3_1 = "Gallery/CA[3]1"
let ca_3_2 = "Gallery/CA[3]2"
let ca_4_1 = "Gallery/CA[4]1"

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