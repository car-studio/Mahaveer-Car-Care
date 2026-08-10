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

let bannerOpen = false;

aboutImage.addEventListener("mouseenter", () => {

    if (!bannerOpen) {

        bannerOpen = true;

        aboutContainer.classList.add("banner-open");

    }

});

aboutContainer.addEventListener("mouseleave", () => {

    bannerOpen = false;

    aboutContainer.classList.remove("banner-open");

});
/*==========================================
        FAQ ACCORDION
===========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (item) {

        const question = item.querySelector(".faq-question");

        question.addEventListener("click", function () {

            const isActive = item.classList.contains("active");

            /* Close all other FAQ items */
            faqItems.forEach(function (otherItem) {

                otherItem.classList.remove("active");

            });

            /* Open clicked item */
            if (!isActive) {

                item.classList.add("active");

            }

        });

    });

});
