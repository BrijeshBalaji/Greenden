var Sidenav=document.getElementById("Sidenav")
var menubar=document.getElementById("menubar")
var cross=document.getElementById("cross")

menubar.addEventListener("click",function(){
    Sidenav.style.right=0
})

cross.addEventListener("click",function(){
    Sidenav.style.right="-50%"
})