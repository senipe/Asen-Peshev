let btn = document.getElementsByClassName("toggle-btn")[0]
let sidebar = document.getElementById("sidebar")

btn.addEventListener("click", showSideBar);

var srcCheck
srcCheck = 0;

var projectsbtnCheck
projectsbtnCheck = 0;

sidebar.style.display = "none"

function showSideBar() {
    if (sidebar.style.display == "none") {
        sidebar.style.display = "block"
    } else {
        sidebar.style.display = "none"
    }

    setTimeout(function() {
        document.getElementById("sidebar").classList.toggle('active');
        if (srcCheck !== 0) {
            setTimeout(function() {
                document.getElementsByClassName("toggle-btn")[0].src = "Gallery/Graphics/menuIconWhite.png";
                enableScroll()
                if (projects_button_interactive.style.display == "block") {
                    projects_button_interactive.style.display = "none";
                    projectsbtnCheck = 1;
                }
                srcCheck = 0;
            }, 0000);
        } else {
            setTimeout(function() {
                if (projectsbtnCheck == 1) {
                    projects_button_interactive.style.display = "block";
                    projectsbtnCheck = 0;
                }
                document.getElementsByClassName("toggle-btn")[0].src = "Gallery/Graphics/menuIconBlack.png";
                disableScroll()
                srcCheck = 1;
            }, 0400);
        }
    }, 0001);
}