let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
console.log(navbar);

menu.addEventListener("click", function(){
    navbar.classList.toggle("active");
    console.log("clicked");
});

window.onscroll = () =>{
    navbar.classList.remove("active");

}