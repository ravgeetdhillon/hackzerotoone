//stick, show hide the navbar the navbar
function stickNavBar(){
    if (window.pageYOffset > showPoint){
        navbar.style.top = "0";
        navbar.classList.add("shadow");
        navbar.style.background = "var(--white)";
        dropdown.style.top = dropTop;
        logo.style.width = "40px";
    }
    else if (window.pageYOffset == 0){
        navbar.style.top = "0";
        navbar.classList.remove("shadow");
        navbar.style.background = "transparent";
        dropdown.style.top = dropTop;
        logo.style.width = "60px";
    }
    else{
        navbar.style.top = "-10rem";
        dropdown.style.top = "-10rem";
    }
}

//show or hide dropdown
function showHideDropDown(){
    adjustWindow();
    if (dropdown.style.display == ""){
        dropdown.style.top = dropTop + "px";
        dropdown.style.display = "flex";
        if (window.innerWidth <= 600){
            html.style.overflowY = "hidden";
        }
        icon.className = "icon fas fa-times";
    }
    else if (dropdown.style.display == "flex"){
        html.style.overflowY = "auto";
        dropdown.style.top = "-2rem";
        icon.className = "icon fas fa-bars";
        setTimeout(function(){
            dropdown.style.display = "";
        }, 50);
    }
}

//setting the top property of dropdown menu
function adjustWindow(){
    dropTop = navbar.offsetHeight - 1;
}

//behaviour of links
function toSection(anchor){
    window.location.href = anchor.href;
    showHideDropDown();
}

// timeline event's highlighter
var i, j = 1;
var boxes = document.querySelectorAll(".plan .box");
var l = boxes.length;
setInterval(function timelineHighlight(){
    for (i = 0; i < l; i++){
        boxes[i].classList.remove("hover");
    }
    boxes[j].classList.add("hover");
    j++;
    if (j > l-1){
        j = 0;
    }
}, 5500);

//social media links
function openSocial(name){
    if (name == "insta"){
        window.location.href = socLinks.insta;
    }
    if (name == "yt"){
        window.location.href = socLinks.yt;
    }
    if (name == "fb"){
        window.location.href = socLinks.fb;
    }
}

//variables
var html = document.getElementsByTagName("html")[0];
var body = document.getElementsByTagName("body")[0];
var dropdown = document.querySelector(".dropdown");
var icon = document.querySelector(".navbar .links .icon");
var dropTop = "";
var navbar = document.querySelector(".navbar");
var showPoint = 600;
var socLinks = {
    insta: "https://www.instagram.com/hackzerotoone/",
    yt: "https://www.youtube.com/channel/UC4vWMpbj0TEke-LI0XLI2vQ?sub_confirmation=1",
    fb: "https://www.facebook.com/hackzerotoone/"
};
var logo = document.querySelector(".navbar img");
//actions
window.addEventListener("scroll", stickNavBar, false);