function loadingOver(){
    html.style.overflowY = "auto";
    loader.classList.add("flipOutX");
}
var html = document.getElementsByTagName("html")[0];
var loader = document.querySelector(".loader");
window.addEventListener("DOMContentLoaded", loadingOver, false);