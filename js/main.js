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


const btnCerrarModalObt =  document.querySelector('#btnCerrarModalObt');
const modalObt = document.querySelector('#obtenerModal');


document.querySelectorAll(".boton").forEach(function(botonObt){
    botonObt.addEventListener("click", function(){
        modalObt.showModal();
    })
})

btnCerrarModalObt.addEventListener("click", ()=>{
    modalObt.close();
})




  function cambiarImagen(galeriaId, nuevaImagen) {
    var imagenGrandeId = 'imagenGrande' + galeriaId;
    document.getElementById(imagenGrandeId).src = nuevaImagen;
  }

  document.querySelectorAll('.miniaturasImg').forEach(function(miniatura) {
    miniatura.addEventListener('click', function() {
      var galeriaId = this.closest('.containerImages').id;
      var nuevaImagen = this.getAttribute('src');
      cambiarImagen(galeriaId, nuevaImagen);
    });
  });