const checkBox = document.getElementById("check");
const menu = document.querySelector(".navButtons");
const menuLinks = document.querySelectorAll('.navButtons a[href^="#"');

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener('click', function(){
        // menu.style.opacity = 0;
        checkBox.checked = false;
    })
})