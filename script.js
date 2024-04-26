const functionsMenu = [
    function openMenu() {
        const sideMenu = document.querySelector("#side-menu");
        sideMenu.style.display = "block";
    },

    function closeMenu() {
        const sideMenu = document.querySelector("#side-menu");
        sideMenu.style.display = "none";
    }
]

const btnOpenSideMmenu = document.querySelector("#btn-open-side-menu");

const btnCloseSideMenu = document.querySelector("#btn-close-side-menu");

btnOpenSideMmenu.addEventListener("click", functionsMenu[0]);
btnCloseSideMenu.addEventListener("click", functionsMenu[1]);