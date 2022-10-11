window.addEventListener("resize", function() {
    if (window.matchMedia("(min-width: 800px)").matches
    && document.getElementById("smallMenu").style.display === "flex") {
        document.getElementById("smallMenu").style.display = "none";
    }
})

function menu() {
    document.getElementById("smallMenu").classList.toggle("menu");

    if (document.getElementById("smallMenu").style.display === "none") {
        document.getElementById("smallMenu").style.display = "flex";
    }
    else if (document.getElementById("smallMenu").style.display === "flex") {
        document.getElementById("smallMenu").style.display = "none";
    }
}

function redirect() {
    document.getElementById("menuButton").click();
}

function imgBorder() {
    document.getElementById("juan").classList.toggle("img-clicked");
}