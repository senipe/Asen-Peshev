let dropMenu = document.querySelector('.mobileDropMenuBlock');
let dropMenuProjects = document.querySelector('.dropMenuProjects');
let faBars = document.querySelector('.fa-bars');
let closeBars = document.querySelector('.close-bars')
let projectsMobile = document.querySelector('.projectsMobile');
let btn = document.querySelector('.midArrowDown');
let el = document.querySelector('.secondBlock');

console.log("hey")

function dropProjectsHide() {
    dropMenu.style.overflow = "scroll"
    dropMenuProjects.style.display = "none";
    closeBars.style.display = "none";
}

function dropProjectsShow() {
    dropMenu.style.overflow = "hidden"
    dropMenuProjects.style.display = "block";
    closeBars.style.display = "block";
}

faBars.addEventListener('click', function() {
    if (dropMenu.style.display == "none") {
        faBars.style.color = "#2a2a2a"
        dropMenu.style.display = "block";
    } else if (dropMenu.style.display == "") {
        faBars.style.color = "#2a2a2a"
        dropMenu.style.display = "block";
    } else {
        dropProjectsHide()
        faBars.style.color = "#DFE0E1"
        dropMenu.style.display = "none";
    }
});

projectsMobile.addEventListener('click', function() {
    dropProjectsShow()
});

closeBars.addEventListener('click', function() {
    dropProjectsHide()
});

btn.addEventListener('click', function() {
    el.scrollIntoView({ behavior: "smooth" });
});