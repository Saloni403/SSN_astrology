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

     function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: "en",
        includedLanguages: "en,hi"
    }, "google_translate_element");
}

function translateLang(lang) {
    var select = document.querySelector(".goog-te-combo");
    if (select) {
        select.value = lang;
        select.dispatchEvent(new Event("change"));
    }
}