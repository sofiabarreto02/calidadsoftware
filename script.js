
const content = document.getElementById("home");
const open = document.getElementById("open-menu");
const close = document.getElementById("close-menu");

open.addEventListener("click", () => {
    content.classList.add("visible");
})
close.addEventListener("click", () => {
    content.classList.remove("visible");
})
