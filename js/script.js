// ============================
// Smooth Fade Animation
// ============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

const hiddenElements = document.querySelectorAll(".hidden");

hiddenElements.forEach((el) => observer.observe(el));


// ============================
// Sticky Navbar
// ============================

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.background = "rgba(15,15,15,0.85)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.borderRadius = "15px";
        navbar.style.padding = "15px 25px";

    } else {

        navbar.style.background = "transparent";
        navbar.style.padding = "20px 0";

    }

});
// =====================
// Typing Effect
// =====================

const words = [
    "Web Developer",
    "AI Enthusiast",
    "Future Medical Professional"
];

let wordIndex = 0;
let letterIndex = 0;
let currentWord = "";
let isDeleting = false;

function type() {

    currentWord = words[wordIndex];

    if (!isDeleting) {
        document.getElementById("typing").textContent =
            currentWord.substring(0, letterIndex++);

        if (letterIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(type, 1500);
            return;
        }

    } else {

        document.getElementById("typing").textContent =
            currentWord.substring(0, letterIndex--);

        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }

    }

    setTimeout(type, isDeleting ? 50 : 100);
}

type();
// =====================
// Scroll Progress
// =====================

window.addEventListener("scroll",()=>{

let scrollTop=document.documentElement.scrollTop;

let height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

let scrolled=(scrollTop/height)*100;

document.getElementById("progress-bar").style.width=scrolled+"%";

});
// =====================
// Back To Top
// =====================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (document.documentElement.scrollTop > 400) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}
window.addEventListener("load",function(){

setTimeout(()=>{

document.getElementById("loader").style.opacity="0";

document.getElementById("loader").style.visibility="hidden";

},1500);

});
const year = document.getElementById("year");

if(year){
    year.textContent = new Date().getFullYear();
}