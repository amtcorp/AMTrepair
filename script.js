// Functions
function wait(duration) {
    setTimeout(() => { }, duration)
}

function hide(element) {
    element.style.display = "none"
}

function show(element) {
    element.style.display = "flex"
}

function popup(h1Text, mainText) {
    let body = document.querySelector("body")
    let popup = document.querySelector("#popup")
    let bg = document.querySelector("#background")
    let h1 = document.querySelector("#popup h1")
    let p = document.querySelector("#popup p")
    let ok = document.querySelector("#popup button")

    body.style.overflow = "hidden";
    popup.style.display = "flex";
    popup.classList.add("active")
    bg.style.display = "block"
    bg.classList.add("active")
    h1.innerHTML = h1Text;
    p.innerHTML = mainText;
    ok.addEventListener("click", () => {
        popup.style.display = "none"
        body.style.overflow = "auto"
        bg.style.display = "none"
    })
}

// Popups

let phoneRepair = document.querySelector("#phoneRepair")
phoneRepair.addEventListener("click", () => {
    popup("Réparation de téléphone", "Si vous rencontrez des soucis avec votre téléphone, ne cherchez pas plus loin ! Chez AMT Repair, nous sommes là pour résoudre tous les problèmes liés à votre appareil.")
})

let passwordReset = document.querySelector("#icloudReset")
passwordReset.addEventListener("click", () => {
    popup("Icloud reset", "Vous avez oublié le mot de passe de votre Iphone ? <p>contactez moi pour voir si je peux faire quelque chose ! </p>")
})

// Discover button
let discover = document.querySelector("#main button")
discover.addEventListener("click", () => {
    window.scrollTo(0, 651)
})

// Navbar underline effect

    let hr = document.querySelector('hr')
    let navElements = document.querySelectorAll('a')

    navElements.forEach(navElement => {
        navElement.onmouseover = () => {
            hr.style.width = navElement.dataset.width;
            hr.style.marginLeft = navElement.dataset.ml;
        }
    })

// Ability to return to main menu by clicking on the logo

    let logo = document.querySelector('.logo')
    logo.addEventListener("click", () => {
        document.location = "./index.html"
    })

// Progress bar

function updateProgressbar () {
    document.documentElement
}

window.addEventListener("scroll", updateProgressbar)

// Cookies

let DOMcookies = document.querySelector("#cookies")
let bg = document.querySelector("#background")
let body = document.querySelector("body")
let registered = localStorage.getItem("cookies")

cookies.style.display = "none"

if ( registered === "true" ) {
    DOMcookies.style.display = "none"
} else {
    DOMcookies.style.display = "flex"
    bg.style.display = "block"
    body.style.overflow = "hidden"
}

let accept = document.querySelector("#accept")
let refuse = document.querySelector("#refuse")

accept.addEventListener("click", () => {
    registered = localStorage.setItem("cookies", true)
    DOMcookies.style.display = "none"
    bg.style.display = "none"
    body.style.overflow = "auto"
})

refuse.addEventListener("click", () => {
    DOMcookies.style.display = "none"
    bg.style.display = "none"
    body.style.overflow = "auto"
})

function aboutselect(){
let services = document.querySelector("#nosServices")
let about = document.querySelector("section#about")

nosServices.style.display="none"
about.style.display="flex"
}

function homeselect(){
let services = document.querySelector("#nosServices")
let about = document.querySelector("section#about")

nosServices.style.display="flex"
if (about.style.display === "flex"){
window.scrollTo(0, 0)
}else {
window.scrollTo(0, 651)
}
about.style.display="none"
}

function phonenumber(){
popup("mon numéro !", "<a href='tel:0750048992'>cliquez ici pour m'appeler</a>")
}