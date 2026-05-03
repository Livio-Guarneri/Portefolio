const root = document.documentElement;
const toogleThemeBtn = document.querySelectorAll(".theme-toogle");
const sunBtn = document.querySelector(".sun");
const moonBtn = document.querySelector(".moon");
const burgerBtn = document.querySelector(".burger");
const navLink = document.querySelector(".nav-link");

const theme = localStorage.getItem("theme");
if (theme === "light") {
            root.setAttribute("data-theme", "light");
            sunBtn.style.display = "none"
            moonBtn.style.display = "block";
        } else {
            root.setAttribute("data-theme", "dark");
            sunBtn.style.display = "block";
            moonBtn.style.display = "none";
        }


toogleThemeBtn.forEach(btn => {
    btn.addEventListener("click", ()=> {
        const current = root.getAttribute("data-theme");
        if (current === "dark") {
            root.setAttribute("data-theme", "light");
            sunBtn.style.display = "none"
            moonBtn.style.display = "block";
            localStorage.setItem("theme", "light");
        } else {
            root.setAttribute("data-theme", "dark");
            sunBtn.style.display = "block";
            moonBtn.style.display = "none";
            localStorage.setItem("theme", "dark");
        }
    })
});


burgerBtn.addEventListener("click", ()=> {
    navLink.classList.toggle("open");
})
