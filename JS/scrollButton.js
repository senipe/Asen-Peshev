document.getElementById('menu-arrow-down').addEventListener("click", scrollToBody);

function scrollToBody() {
    document.getElementById("middle").scrollIntoView({ behavior: 'smooth' });
}