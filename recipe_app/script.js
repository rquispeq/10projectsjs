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

const btn_search = document.getElementById('search')
const img_logo = document.getElementById('logo')
const txt_search = document.getElementById('txt_search')
const close_search = document.getElementById('close_search')
btn_search.addEventListener("click", function(){
    img_logo.classList.add('hide')
    btn_search.classList.add('hide')
    txt_search.classList.remove('hide')
    close_search.classList.remove('hide')
})

close_search.addEventListener("click", function(){
    img_logo.classList.remove('hide')
    btn_search.classList.remove('hide')
    txt_search.classList.add('hide')
    close_search.classList.add('hide')
})