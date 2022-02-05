const button = document.getElementById("switch");
const moon = document.querySelector(".fa-moon");
const sun = document.querySelector(".fa-sun");
const botones = document.querySelectorAll(".button");
const footer = document.querySelector(".footer");
const homeImg = document.querySelector(".home__img");
const input = document.querySelectorAll(".input--contact");


button.addEventListener('click', (e)=>{
    if(e.target === button || e.target === sun || e.target === moon){
        button.classList.toggle("active");
        document.body.classList.toggle("sparkly");
        botones.forEach((e)=>{
            e.classList.toggle("button--sparkly");
        })
        footer.classList.toggle("footer--sparkly");
        homeImg.classList.toggle("sparkly--img");
        input.forEach((e)=>{
            e.classList.toggle("sparkly--input");
        })
    }
})