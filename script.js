// burger close 
// arrow rotate 
    // menu reveal

const burger = document.querySelector(".burger")
const closeIcon = document.querySelector(".close")
const navMenu = document.querySelector(".nav")

burger.addEventListener("click", revealMenu)
closeIcon.addEventListener("click", closeMenu)

const menuItems = document.querySelectorAll(".nav__menu-item")
menuItems.forEach(menu => {
    menu.addEventListener("click", openMenuItem)
})

function openMenuItem(e) {
    const menu = e.target.closest(".nav__menu-item")
    const item = menu.querySelector(".nav__menu-item-x")
    console.log(item.classList)
    if (!item.classList.contains("hidden")) return closeMenuItem(menu)
    
    menuItems.forEach(m => closeMenuItem(m))
    const arrows = menu.querySelectorAll(".arrow")
    arrows.forEach(arrow => arrow.classList.add("select"))
    item.classList.remove("hidden")
}

function closeMenuItem(menu) {
    const arrows = menu.querySelectorAll(".arrow")
    arrows.forEach(arrow => arrow.classList.remove("select"))
    menu.querySelector(".nav__menu-item-x").classList.add("hidden")
}

function revealMenu() {
    burger.classList.add("hidden")
    navMenu.classList.add("reveal")
    closeIcon.classList.remove("hidden")
}

function closeMenu() {
    burger.classList.remove("hidden")
    navMenu.classList.remove("reveal")
    closeIcon.classList.add("hidden")

}