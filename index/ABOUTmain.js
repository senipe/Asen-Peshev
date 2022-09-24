let dropMenu = document.querySelector('div.mobileDropMenuBlock');
let dropMenuProjects = document.querySelector('div.dropMenuProjects');
let faBars = document.querySelector('#faBars');
let closeBars = document.querySelector('.closeBars')
let dropMenuDefault = document.querySelector('.dropMenuDefault')
let projectsMobile = document.querySelector('.projectsMobile');
let closeField = document.querySelector('div.closeBarsField')

function dropProjectsHide() {
    dropMenuProjects.style.display = "none";
    closeBars.style.display = "none";
    dropMenuDefault.style.display = "block";
}

function dropProjectsShow() {
    dropMenuProjects.style.display = "block";
    closeBars.style.display = "block";
    dropMenuDefault.style.display = "none";
}

faBars.addEventListener('click', function() {
    if (dropMenu.style.display == "none") {
        faBars.src = "Gallery/Graphics/menuIconWhite.png"
        dropMenu.style.display = "inline-block";
        closeField.style.display = "block";
    } else if (dropMenu.style.display == "") {
        faBars.src = "Gallery/Graphics/menuIconWhite.png"
        dropMenu.style.display = "inline-block";
        closeField.style.display = "block";
    } else {
        dropProjectsHide()
        faBars.src = "Gallery/Graphics/menuIconBlack.png"
        dropMenu.style.display = "none";
        closeField.style.display = "none";
    }
});

projectsMobile.addEventListener('click', function() {
    dropProjectsShow()
});

closeBars.addEventListener('click', function() {
    dropProjectsHide()
});

closeField.addEventListener('click', function() {
    dropProjectsHide()
    faBars.src = "Gallery/Graphics/menuIconBlack.png"
    dropMenu.style.display = "none";
    closeField.style.display = "none";
});