// // const toggleButton = document.getElementsByClassName('toggle-button')[0]
// // const navBarLinks = document.getElementsByClassName('navbar-links')[0]

// // toggleButton.addEventListener ('click' , () => {
// //     navBarLinks.classList.toggle('active')
// // })


// const toggleButton = document.querySelector('.toggle-button')[0]

// toggleButton.addEventListener('click', navToggle);

// function navToggle(){
//     navBarLinks.classList.toggle('active')
// }

// document.addEventListener("DOMContentLoaded", () => {
// const menuBtn = document.querySelector(".toggle-button");
// const navLinks = document.querySelector(".navbar-links");

// menuBtn.addEventListener("click", () => {
//   navLinks.classList.toggle(".mobile-menu");
// });

// });


var menuBtn= document.querySelector("#menu-btn");
var navBarLinks  = document.querySelector ("#navbar-links")
// var icon = document.querySelector(".fa-solid fa-bars")
 
menuBtn.addEventListener('click', function(){
    navBarLinks.classList.toggle('showmenu')



}

)

// menuBtn.onclick = function (){
//     if(icon.classList.contains("fa-solid fa-bars")){
//         icon.classList.replace("fa-solid fa-bars", "fa-regular fa-square-xmark")
//     }
//     else{
//         icon.classList.replace( "fa-regular fa-square-xmark", "fa-solid fa-bars")
//     }

// }




