let body = document.getElementById("middle")
let menu = document.getElementById("menu")
    // let invisibleMenuHover = document.getElementById("invisible-menu-hover")
let projects = document.getElementById("projects")

let tempTab = document.getElementsByClassName("menu-projects")
let defaultTab = document.getElementsByClassName("menu-default")

let btn_projects = document.getElementById("sidebar-projects-button-img")

var pc_menu_check
pc_menu_check = 0;

if (window.matchMedia('(min-width: 900px)').matches) {
    projects.addEventListener("click", projectsMenu);
    document.getElementsByTagName('body')[0].addEventListener("click", defaultMenu);
}

function projectsMenu() {
    if (pc_menu_check == 0) {
        tempTab[0].style.display = "block";
        defaultTab[0].style.display = "none";
        setTimeout(function() {
            pc_menu_check = 1;
        }, 0300);
    }
}

function defaultMenu() {
    if (pc_menu_check == 1) {
        tempTab[0].style.display = "none";
        defaultTab[0].style.display = "block";
        setTimeout(function() {
            pc_menu_check = 0;
        }, 0300);
    }
}