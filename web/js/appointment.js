let booknow = document.querySelectorAll(".booknow")
booknow.forEach(appoint=>{
    appoint.addEventListener("click",()=>{
        location.href="appointment.html"
    })
})