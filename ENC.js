let tituloMensaje = document.getElementById('titulo-mensaje');
let parrafo = document.getElementById('parrafo');
const textoReflejo = document.getElementById('mensaje');

tiempoReal();
ocultar();
condicionesIniciales();

function encriptar(){
    
    let textoOriginal = document.getElementById('texto').value;
    
 
                 
    let contieneMayusculas = /[A-Z]/.test(textoOriginal);
   
    let contieneEspeciales = /[^\w\s]/.test(textoOriginal);
     
   
    if(textoOriginal.length != 0){
        if((contieneMayusculas) || (contieneEspeciales)){
            
            alerta("Oh, no", "Solo se permiten minúsculas y sin caracteres especiales.");
        }else{
               
                let textoCifrado = textoOriginal 
                .replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g,"ai")
                .replace(/o/g,"ober")
                .replace(/u/g,"ufat");

                
                Reflejo(textoCifrado);
        }
    }else{
        
        alerta("Ooops!","Debes ingresar algún texto...");
        condicionesIniciales();      
    }
}

function desencriptar(){
    let textoDesencriptado = document.getElementById('texto').value;
    

                
    let contieneMayusculas = /[A-Z]/.test(textoDesencriptado);
    
    let contieneEspeciales = /[^\w\s]/.test(textoDesencriptado);

    
    if(textoDesencriptado.length != 0){
        if((contieneMayusculas) || (contieneEspeciales)){
            
            alerta("Oh, no!", "Solo se permiten minúsculas y sin caracteres especiales.");
        }else{
            let textoDesifrado = textoDesencriptado
                .replace(/ai/g, 'a')
                .replace(/enter/g, 'e')
                .replace(/imes/g, 'i')
                .replace(/ober/g, 'o')
                .replace(/ufat/g, 'u');
                
                Reflejo(textoDesifrado);
        }
    }else{
        
        alerta("Oh, no!","Debes ingresar algún texto...");
        condicionesIniciales();      
    }
}

function tiempoReal(){
    const textoInput = document.getElementById('texto');
   
    
    textoInput.addEventListener('input', function () {
        
            Reflejo(textoReflejo);    
            textoReflejo.value = this.value;  
    
        if(textoReflejo.value.length === 0){
               condicionesIniciales();
               encriptado = false;
            }
    });

        
        window.addEventListener('resize', function(){
            if(texto.value.length != 0){
                Reflejo(textoReflejo.value);
            }else{
                condicionesIniciales();
                mostrar();
                ocultar();
            }
           
        });
}

function condicionesIniciales(){
    
    const anchoPantalla = window.innerWidth;
    
    if (anchoPantalla > 923) {
        
        textoReflejo.style.backgroundImage = 'url(./img/av.png)';
    } else {
        
        textoReflejo.style.backgroundImage = 'none';
    } 
 
    tituloMensaje.textContent = 'No se ha encontrado ningún mensaje';
    parrafo.textContent = 'Ingresa el texto que deseas encriptar o desencriptar...';
}

function Reflejo(texto) {
    
    textoReflejo.style.backgroundImage = 'none';
    textoReflejo.style.color = 'rgb(194, 188, 188)';
    textoReflejo.value = texto;
    tituloMensaje.textContent = ''; 
    parrafo.textContent = '';
}

function borrar(){
    
    document.getElementById('texto').value = '';
    document.getElementById('mensaje').value = '';
    condicionesIniciales();
}

function copiar(){
    navigator.clipboard.writeText(textoReflejo.value)
    .then(() => {
    
    },() => {
      
    });
}
 
function alerta(titulo, texto) {
    Swal.fire({
        position: "center",
        icon: 'warning',
        title: titulo,
        text: texto,
        showConfirmButton: false,
        timer: 1300,
        
        customClass: {
            popup:'swa12-custom',
            title:'swa12-title',
            content:'my-custom-text',
            icon:'swal2-icon'
        }
    });
}