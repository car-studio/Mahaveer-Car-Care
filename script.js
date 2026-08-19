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
/* ==================================================
   CINEMATIC GALLERY EXPANSION
   ================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const galleryGrid = document.querySelector(".gallery-grid");

    if (!galleryGrid) return;

    const galleryItems =
        galleryGrid.querySelectorAll(".gallery-item");

    galleryItems.forEach(function (item) {

        item.addEventListener("mouseenter", function () {

            if (window.innerWidth <= 1000) return;

            const gridRect =
                galleryGrid.getBoundingClientRect();

            const itemRect =
                item.getBoundingClientRect();

            const left =
                itemRect.left - gridRect.left;

            const top =
                itemRect.top - gridRect.top;

            const width =
                itemRect.width;

            const height =
                itemRect.height;

            item.style.setProperty(
                "--gallery-left",
                left + "px"
            );

            item.style.setProperty(
                "--gallery-top",
                top + "px"
            );

            item.style.setProperty(
                "--gallery-width",
                width + "px"
            );

            item.style.setProperty(
                "--gallery-height",
                height + "px"
            );

            item.style.left = left + "px";
            item.style.top = top + "px";
            item.style.width = width + "px";
            item.style.height = height + "px";

            item.offsetHeight;

            galleryGrid.classList.add(
                "gallery-has-expanded"
            );

            item.classList.add(
                "gallery-expanding"
            );

            requestAnimationFrame(function () {

                item.style.left = "0px";
                item.style.top = "0px";

                item.style.width =
                    galleryGrid.clientWidth + "px";

                item.style.height =
                    galleryGrid.clientHeight + "px";

            });

        });


        item.addEventListener("mouseleave", function () {

            if (window.innerWidth <= 1000) return;

            const left =
                item.style.getPropertyValue(
                    "--gallery-left"
                );

            const top =
                item.style.getPropertyValue(
                    "--gallery-top"
                );

            const width =
                item.style.getPropertyValue(
                    "--gallery-width"
                );

            const height =
                item.style.getPropertyValue(
                    "--gallery-height"
                );

            item.style.left = left;
            item.style.top = top;
            item.style.width = width;
            item.style.height = height;

            item.classList.remove(
                "gallery-expanding"
            );

            setTimeout(function () {

                galleryGrid.classList.remove(
                    "gallery-has-expanded"
                );

                item.style.left = "";
                item.style.top = "";
                item.style.width = "";
                item.style.height = "";

            }, 600);

        });

    });

});
