const mobileBtn = document.getElementById("mobile-open");
const nav = document.querySelector("nav");
const mobileBtnExit = document.getElementById("mobile-exit");

mobileBtn.addEventListener("click", () => {
    nav.classList.add("menu-btn");
});

mobileBtnExit.addEventListener("click", () => {
    nav.classList.remove("menu-btn");
});

const up = document.getElementById("switch-up");
const down = document.getElementById("switch-down");
const para = document.getElementById("para");

down.addEventListener("click", () => {
    para.classList.add("dis");
});
up.addEventListener("click", () => {
    para.remove("dis");
});