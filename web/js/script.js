 let menu = document.querySelector(".menu")
function showMenu(){
    menu.style.left="0"
   document.body.style.overflow="hidden"
}
function hideMenu(){
    menu.style.left="-350px"
   document.body.style.overflow="auto"
}

// menu dropdown
 let iconn =  document.querySelector(".menudropdown i")
      let sublistt =  document.querySelector(".menudropdown_sublist")
     function showMe(){
iconn.classList.toggle("active")
sublistt.classList.toggle("active")
     }

     // bi-whatsapp
     document.querySelector(".bi-whatsapp").addEventListener("click",()=>{
         
          window.open('//wa.me/9625325050','_blank')
     })
      // bi-facebook
     document.querySelector(".bi-facebook").addEventListener("click",()=>{
          window.open('https://www.facebook.com/sukhoodaya/','_blank')
     })
      // bi-whatsapp
     document.querySelector(".bi-whatsapp").addEventListener("click",()=>{
          window.open('https://www.instagram.com/sukhoodaya/','_blank')
     })