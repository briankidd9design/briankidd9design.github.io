document.querySelector("#copyright-year").innerText = new Date().getFullYear();
// modal code
let modal = document.getElementById("myModal");

let btn = document.getElementById("banner__modalButton");

let closeModal = document.querySelector(".close");

btn.addEventListener("click", function(){
    modal.style.display = "flex";
});

closeModal.addEventListener("click", function(){
    modal.style.display = "none";
});

window.addEventListener("click", function(e){
    if (e.target == modal) {
        modal.style.display = "none";
      }
});

// mobile slide nav
const menuIcon = document.querySelector(".nav__trigger");
const mobileNavbar = document.querySelector(".mobile-navbar");
const mobileCloseIcon = document.querySelector(".mobile-close-icon");
const rightMobileArrow01 = document.querySelector(".arrow-right01");
const rightMobileArrow02 = document.querySelector(".arrow-right02");
const mobileOne = document.querySelector(".mobile-navbar-option01");
const mobileTwo = document.querySelector(".mobile-navbar-option02");

const leftMobileArrow01 = document.querySelector(".inverted-arrow01");
const leftMobileArrow02 = document.querySelector(".inverted-arrow02");


menuIcon.addEventListener("click", () => {
    mobileNavbar.classList.toggle("change-left");
});
rightMobileArrow01.addEventListener("click", () => {
    mobileOne.classList.toggle("change-right");
});
rightMobileArrow02.addEventListener("click", () => {
    mobileTwo.classList.toggle("change-right");
});
leftMobileArrow01.addEventListener("click", function(){
    mobileOne.classList.toggle("change-right");
});
leftMobileArrow02.addEventListener("click", function(){
    mobileTwo.classList.toggle("change-right");
})
mobileCloseIcon.addEventListener("click", function() {
    mobileNavbar.classList.remove("change-left");
});