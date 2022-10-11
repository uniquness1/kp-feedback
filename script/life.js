('use strict');

let btnCta = document.querySelector(".btn-cta")
let popUp = document.querySelector("#pop-up")
let closeBtn = document.querySelector(".close")

btnCta.addEventListener('click', () =>{
    popUp.style.display = 'block';
    overlay.style.display = 'block'
})
closeBtn.addEventListener('click', () =>{
    popUp.style.display = 'none'
    overlay.style.display = 'none'
})


