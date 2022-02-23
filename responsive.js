
const menuButton = document.querySelector("#menu");
const filterButton = document.querySelector("#filter");
const sidebar = document.querySelector(".grand-filter");

filterButton.addEventListener("click",()=>{
    sidebar.classList.contains("sidebar-hidden")
    ? sidebar.classList.remove("sidebar-hidden") 
    :sidebar.classList.add("sidebar-hidden")
})
