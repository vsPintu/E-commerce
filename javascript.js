var header=document.querySelector("header");
window.addEventListener("scroll" , function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
})

var menu =document.querySelector('#menu-icon');
var navmenu =document.querySelector(".navmenu");
menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navmenu.classList.toggle('open');
}