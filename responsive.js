
const menuButton = document.querySelector("#menu");
const filterButton = document.querySelector("#filter");
const sidebar = document.querySelector(".grand-filter");

filterButton.addEventListener("click",()=>{
    sidebar.classList.contains("sidebar-hidden")
    ? sidebar.classList.remove("sidebar-hidden") 
    :sidebar.classList.add("sidebar-hidden")
})

arrayOfListItems.forEach((element)=>{
    element.addEventListener("click",(e)=>sidebar.classList.add("sidebar-hidden"))
})