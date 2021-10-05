let boton = document.querySelector('.btnAccion');
let usuario = document.querySelector('.text1');

boton.addEventListener('click',function(){
    
    if(usuario.value == "Si"){
        alert("Listo, tu respuesta ha sido enviada")
    }else{
        alert("Error, Lo ingresado no es lo correcto")
    }
});
