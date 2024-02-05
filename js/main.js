const checkBox = document.getElementById("check");
const menu = document.querySelector(".navButtons");
const menuLinks = document.querySelectorAll('.navButtons a[href^="#"');

menuLinks.forEach(menuLink =>{
    menuLink.addEventListener('click', function(){
        checkBox.checked = false;
    })
})

const btnAbrirModal = document.querySelector("#btnAbrirModal");
const btnCerrarModal =  document.querySelector('#btnCerrarModal');
const modal = document.querySelector('#carritoModal');


btnAbrirModal.addEventListener("click", ()=>{
    modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
    modal.close();
})
