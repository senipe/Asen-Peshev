let x = 400;
if (window.innerWidth > 900) {
    setTimeout(function() {
        document.querySelector('.heading0').style.display = "block";
    }, x - 300);
    setTimeout(function() {
        document.querySelector('.heading1').style.display = "block";
    }, x + 200);
    setTimeout(function() {
        document.querySelector('.heading2').style.display = "block";
    }, x + 400);
    setTimeout(function() {
        document.querySelector('.heading3').style.display = "block";
    }, x + 600);
    setTimeout(function() {
        document.querySelector('.heading4').style.display = "block";
    }, x + 800);
};