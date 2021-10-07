const navs = document.querySelector(".selector");
const navs_btn = document.querySelectorAll(".btn");
const btn = document.querySelector(".nav-button");

for (let i = 0; i < navs_btn.length; i++) {

    if(window.screen.width <= 490){
        navs.classList.remove("showing")    
    }
    
    navs_btn[i].addEventListener("click", function() {
        navs.classList.toggle("showing");
    })    
}

