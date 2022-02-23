
//   DARK MODE LOGIC

let theme = localStorage.getItem("grand-data-theme");
const toggleThemeButton = document.querySelector("#toggle-theme");
const logo = document.querySelector(".nav-logo img");

const toggleTheme = ()=>{
    theme = localStorage.getItem("grand-data-theme")
    if(theme === "dark"){
        document.documentElement.setAttribute("data-theme","light")
        localStorage.setItem("grand-data-theme","light")
        toggleThemeButton.querySelector("span").innerHTML = "dark_mode"
        logo.src = "/assets/landing/grand-logo.png"
    }else{
        document.documentElement.setAttribute("data-theme","dark")
        localStorage.setItem("grand-data-theme","dark")
        toggleThemeButton.querySelector("span").innerHTML = "light_mode"
        logo.src = "/assets/landing/grand-logo-dark.png"
    }
}

if(theme === "dark"){
    document.documentElement.setAttribute("data-theme","dark")
    toggleThemeButton.querySelector("span").innerHTML = "light_mode"
    logo.src = "/assets/landing/grand-logo-dark.png"
}else{
    document.documentElement.setAttribute("data-theme","light")
    toggleThemeButton.querySelector("span").innerHTML = "dark_mode"
    logo.src = "/assets/landing/grand-logo.png"
}

toggleThemeButton.addEventListener("click",toggleTheme)
