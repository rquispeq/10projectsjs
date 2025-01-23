const btn_close_sidebar = document.getElementsByClassName("close_sidebar_menu")[0];
const btn_open_sidebar = document.getElementsByClassName("btn_menu")[0];

const sidebar_menu = document.getElementsByClassName("sidebar_menu")[0];
btn_open_sidebar.addEventListener("click", function(){
    console.log("abriendo menu")
    sidebar_menu.classList.add("active");
})

btn_close_sidebar.addEventListener("click", function(){
    sidebar_menu.classList.remove("active");
})