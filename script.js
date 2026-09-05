

console.log("Welcome to Patle Dairy Farm!");


const buttons = document.querySelectorAll(".btn");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Button clicked:", button.textContent);
    });
});

document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener("click", function(event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});



const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



const menuBtn = document.getElementById("menuBtn");
const navList = document.querySelector("nav ul");

menuBtn.addEventListener("click", function() {
    navList.classList.toggle("active");
});