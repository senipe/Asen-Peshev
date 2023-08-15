let projects_interactive = document.getElementById("projects-interactive")

let tempTab_interactive = document.getElementById("sidebar-projects-list")
let defaultTab_interactive = document.getElementById("sidebar-default-list")

let projects_button_interactive = document.getElementById("sidebar-projects-button-img")

projects_button_interactive.style.display = "none"

if (window.matchMedia('(max-width: 900px)').matches) {
    projects_interactive.addEventListener("click", projectsMenu);
    projects_button_interactive.addEventListener("click", defaultMenu);
}

function projectsMenu() {
    tempTab_interactive.style.display = "block";
    defaultTab_interactive.style.display = "none";
    projects_button_interactive.style.display = "block"
}

function defaultMenu() {
    tempTab_interactive.style.display = "none";
    defaultTab_interactive.style.display = "block";
    projects_button_interactive.style.display = "none"
}

Illustrations = document.getElementById("Illustrations_href")
About = document.getElementById("About_href")
Project_1 = document.getElementById("Project_1_href")
Project_standalone = document.getElementById("Project_standalone_href")

// Illustrations.addEventListener("click", Illustrations_href_open);

function Illustrations_href_open() {
    location.href = "illustrations.html"
}

About.addEventListener("click", About_href_open);

function About_href_open() {
    location.href = "about.html"
}

Project_1.addEventListener("click", Project_1_href_open);

function Project_1_href_open() {
    location.href = "project_1.html"
}

Project_standalone.addEventListener("click", Project_standalone_href_open);

function Project_standalone_href_open() {
    location.href = "project_standalone.html"
}