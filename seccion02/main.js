function hiddenHamburguer() {
    const menu = document.querySelector(".nav-links");
    const btn = document.getElementById("btn-show");

    menu.classList.toggle("active");

    if(menu.classList.contains("active")){
        btn.innerText = "✖";
    } else {
        btn.innerText = "☰";
    }
}

