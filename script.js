const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if(window.scrollY > 50){

        header.style.background="rgba(0,0,0,.95)";

    }else{

        header.style.background="rgba(0,0,0,.55)";

    }

});
/*==========================================
      ABOUT BANNER INTERACTION
==========================================*/

const aboutContainer = document.querySelector(".about-container");
const aboutImage = document.querySelector(".about-image-card");

if (aboutContainer && aboutImage) {

    aboutImage.addEventListener("mouseenter", () => {

        aboutContainer.classList.add("banner-open");

    });

    aboutContainer.addEventListener("mouseleave", () => {

        aboutContainer.classList.remove("banner-open");

    });

}
