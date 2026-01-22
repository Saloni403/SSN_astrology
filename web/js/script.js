 let menu = document.querySelector(".menu")
function showMenu(){
    menu.style.left="0"
   document.body.style.overflow="hidden"
}
function hideMenu(){
    menu.style.left="-350px"
   document.body.style.overflow="auto"
}