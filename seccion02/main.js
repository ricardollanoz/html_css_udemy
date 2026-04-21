
function hiddenHamburguer() {
    var btn = document.getElementById("btn-show");
    var menu = document.getElementsByClassName("nav-links");
    if (menu[0].classList.contains("active")){
        btn.innerText = "≡"
    }else{
        btn.innerText = "X"
    }
    menu[0].classList.toggle("active")
}


