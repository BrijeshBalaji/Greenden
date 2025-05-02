var productcontainer = document.getElementById("productcontainer")
var productlist = productcontainer.querySelectorAll("div")
console.log(productlist)
var search = document.getElementById("search")

search.addEventListener("keyup", function (event) {
    var enteredvalue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count++) {
        var items = productlist[count].querySelector("p").textContent

        if(items.toUpperCase().indexOf(enteredvalue)<0){
            productlist[count].style.display="none"
        }
        else{
            productlist[count].style.display="block"
        }
    }
})
