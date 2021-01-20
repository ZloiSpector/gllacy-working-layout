"use strict";

const catalogLink = document.querySelector('.link-catalog'),
    catalogModal = document.querySelector('.modal-catalog'),
    searchLink = document.querySelector(".header-search-box"),
    searchModal = document.querySelector(".modal-search"),
    enterLink = document.querySelector(".header-enter-box"),
    enterModal = document.querySelector(".modal-enter"),
    busketLink = document.querySelector(".header-busket-box"),
    busketModal = document.querySelector(".modal-busket"),
    headerLink = document.querySelectorAll(".header-link"),
    headerSwiching = document.querySelector(".header-swiching"),
    headerSwichingBtns = document.querySelectorAll(".header-swiching-btn"),
    background = document.querySelector(".background"),
    shadow = document.querySelector(".shadow"),
    icecreamPrice = document.querySelectorAll(".icecream-price-box"),
    icecreamNew = document.getElementsByClassName("icecream-new");

//Callbacks

let opacityNum = 0;

function opacityUp(elem) {
    let id = setInterval(() => {
        if (opacityNum >= 1) {
            clearInterval(id);
            opacityNum = 0;
        } else {
            opacityNum += 0.05;
            elem.style.opacity = opacityNum;
        }
    }, 20);
}

function opacityDown(elem) {
    elem.style.display = "none";
    elem.style.opacity = 0;
}

function svgBlack(logo) {
    logo.style.fill = "#000";
}

function svgWhite(logo) {
    logo.style.fill = "#fff";
}

function clickedHeaderBtnTrue(modal, link, logo) {
    modal.style.display = "block";
    svgBlack(document.querySelector(logo));
    link.classList.remove("header-btn-link");
    link.classList.add("header-btn-link-active");
    opacityUp(modal);
}

function clickedHeaderBtnFalse(modal, link) {
    link.classList.add("header-btn-link");
    link.classList.remove("header-btn-link-active");
    opacityDown(modal);
}

//Modal

catalogLink.addEventListener('click', function (event) {
    event.preventDefault();
    if (catalogModal.style.display != "flex") {
        catalogModal.style.display = "flex";
        catalogLink.classList.remove("text-decor");
        catalogLink.classList.add("link-catalog-active");
        opacityUp(catalogModal);
    } else {
        catalogLink.classList.add("text-decor");
        catalogLink.classList.remove("link-catalog-active");
        opacityDown(catalogModal);
    }
});

headerLink.forEach(function (item, index) {
    item.addEventListener("mouseover", () => {
        if (index == 0 && searchModal.style.display != "block") {
            svgBlack(document.querySelector(".search-logo"));
        } else if (index == 1 && enterModal.style.display != "block") {
            svgBlack(document.querySelector(".enter-logo"));
        } else if (index == 2 && busketModal.style.display != "block") {
            svgBlack(document.querySelector(".busket-logo"));
        }
    });
    item.addEventListener("mouseout", () => {
        if (index == 0 && searchModal.style.display != "block") {
            svgWhite(document.querySelector(".search-logo"));
        } else if (index == 1 && enterModal.style.display != "block") {
            svgWhite(document.querySelector(".enter-logo"));
        } else if (index == 2 && busketModal.style.display != "block") {
            svgWhite(document.querySelector(".busket-logo"));
        }
    });
    item.addEventListener("click", (event) => {
        event.preventDefault();
        if (index == 0 && searchModal.style.display != "block") {
            clickedHeaderBtnTrue(searchModal, searchLink, ".search-logo");
        } else if (index == 1 && enterModal.style.display != "block") {
            clickedHeaderBtnTrue(enterModal, enterLink, ".enter-logo");
        } else if (index == 2 && busketModal.style.display != "block") {
            clickedHeaderBtnTrue(busketModal, busketLink, ".busket-logo");
        }
    });
});

//Click body

document.body.addEventListener("mouseup", function (event) {
    let target = event.target;
    if (catalogModal.style.display == "flex" &&
        !target.classList.contains("modal-catalog") &&
        !target.closest('.modal-catalog') &&
        !target.classList.contains("link-catalog") &&
        !target.closest('.link-catalog')) {
        catalogLink.classList.add("text-decor");
        catalogLink.classList.remove("link-catalog-active");
        opacityDown(catalogModal);
    }
    if (searchModal.style.display == "block" &&
        !target.classList.contains("modal-search") &&
        !target.closest('.modal-search') &&
        !target.classList.contains("header-search-box") &&
        !target.closest('.header-search-box')) {
        svgWhite(document.querySelector(".search-logo"));
        clickedHeaderBtnFalse(searchModal, searchLink);
    }
    if (enterModal.style.display == "block" &&
        !target.classList.contains("modal-enter") &&
        !target.closest('.modal-enter-form') &&
        !target.classList.contains("header-enter-box") &&
        !target.closest('.header-enter-box')) {
        svgWhite(document.querySelector(".enter-logo"));
        clickedHeaderBtnFalse(enterModal, enterLink);
    }
    if (busketModal.style.display == "block" &&
        !target.classList.contains("modal-busket") &&
        !target.closest('.modal-busket-form') &&
        !target.classList.contains("header-busket-box") &&
        !target.closest('.header-busket-box')) {
        svgWhite(document.querySelector(".busket-logo"));
        clickedHeaderBtnFalse(busketModal, busketLink);
    }
});

//Swiching background

headerSwichingBtns.forEach(function (item, index) {
    item.addEventListener("click", function (event) {
        const body = document.body;
        event.preventDefault();
        if (!body.classList.contains(`website-color${index}`)) {
            body.classList.remove(`${body.className}`);
            body.classList.add(`website-color${index}`);
            background.style.opacity = 0;
            background.setAttribute("src", `./img/header-ice${index}.png`);
            setTimeout(() => {
                opacityUp(background);
            }, 100);
            for (let i = 0; i <= 2; i++) {
                if (i != index) {
                    headerSwichingBtns[i].classList.remove("swich-active");
                } else {
                    item.classList.add("swich-active");
                }
            }
        }
    });
});

//Feedback

document.querySelector(".window-btn").addEventListener("click", (event) => {
    event.preventDefault();
    shadow.style.display = "flex";
    opacityUp(shadow);
});

document.querySelector(".modal-feedback-exit")
    .addEventListener("click", (event) => {
        event.preventDefault();
        opacityDown(shadow);
    });

//Heart footer

document.querySelector(".footer-info-link-supplier")
    .addEventListener("mousemove", () => {
        document.querySelector(".heart-fill").style.fill = "#ffbc9e";
    });

document.querySelector(".footer-info-link-supplier")
    .addEventListener("mouseout", () => {
        document.querySelector(".heart-fill").style.fill = "#fff";
    });

// icecreamPrice.forEach(function (item, index) {
//     item.addEventListener("click", function(event) {
//         event.preventDefault();
//         let icecreamBackground = window.getComputedStyle(item).backgroundImage,
//             ice = document.querySelectorAll(".icecream-new"),
//             icecreamName = item.childNodes[5].innerHTML,
//             icecreamRub = parseInt(item.childNodes[3].innerHTML),
//             div = document.createElement("div");
//         div.className = "icecream-new";
//         div.setAttribute("name", `${index}`);
//         function addElem () {
//             div.innerHTML = 
//             `<div class="busket-icecream-logo" 
//             style="background-image: url(img/${index}.png)"></div>
//             <div class="busket-icecream-name">${icecreamName}</div>
//             <div class="busket-icecream-num">1</div>
//             <div class="busket-icecream-rub">${icecreamRub}</div>`;
//             document.querySelector(".busket-order").append(div);
//         }     
//         if(icecreamNew[0] == null && icecreamNew.length <=4) {
//             addElem();
//             console.log();
//         } 
//         else {
//             ice.forEach(function (it, ind) {
//                 if(it.getAttribute("name") == index) {
//                     it.childNodes[4].innerHTML = +(it.childNodes[4].innerHTML) + 1;

//                 } 
//                 else {
//                     addElem();
//                 }
//             });
//         }
//     });
// });