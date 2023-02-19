var nombre;
var email = document.getElementById('email');
var clave = document.getElementById('clave');
var confirmeClave = document.getElementById('confirmeclave');



// ---------  EXPRESIONES REGULARES ---------------
const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // AQUI ACEPTARA LETRAS CON O SIN ACENTO Y ESPACIOS
    clave: /^.{8,16}$/, // SÓLO ACEPTARA UN MINIMO DE 4 DIGITOS Y UN MÁXIMO DE 8 DIGITOS
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, // ACEPTA DE TODO MENOS CARACTERES ESPECIALES
}

// window.onload = function () {
//     crearVariables()
//     validateName();
//     validateEmail();
//     validatePassword();
//     validatePasswordMatch();
// };
// Alert 

function enviarFormulario() {
    var isFormValid = false;
    isFormValid = validateName();
    isFormValid = validateEmail();
    isFormValid = validatePassword();
    isFormValid = validatePasswordMatch();
    if (isFormValid){
        alert('Formulario enviado correctamente');
    }
    
    
}

function crearVariables(){
    window.esNombreValido = false;
}

function validateName() {
    let inputElement = document.getElementById('nombre');
    let iconSuccess = document.getElementById('success-icon-name');
    let iconError = document.getElementById('error-icon-name');
    let mensajeError = document.getElementById('formulario__input-error-nombre');
    let sololetras = document.getElementById('formulario__input-error1');

    if (expresiones.nombre.test(inputElement.value)) {
        //            inputElement.style.borderColor = 'red';
        inputElement.classList.remove("formulario__input-invalid");
        inputElement.classList.add("formulario__input-valid");

        iconError.style.display = 'none';
        iconSuccess.style.display = 'block'; 
        mensajeError.style.display = 'none';
        sololetras.style.display = 'none';

        return true;

    } else if(inputElement.value <= 0) {
        //          inputElement.style.borderColor = 'green';
        inputElement.classList.remove("formulario__input-valid");
        inputElement.classList.add("formulario__input-invalid");
                  
        iconError.style.display = 'block';
        iconSuccess.style.display = 'none';
        mensajeError.style.display = 'block';
        sololetras.style.display = 'none';

            
    } else {
        inputElement.classList.remove("formulario__input-valid");
        inputElement.classList.add("formulario__input-invalid");
                  
        iconError.style.display = 'block';
        iconSuccess.style.display = 'none'; 
        mensajeError.style.display = 'none';
        sololetras.style.display = 'block';

    }
    return false;

}

function validateEmail() {
    let inputElement = document.getElementById("email");
    let iconSuccess = document.getElementById('success-icon-mail');
    let iconError = document.getElementById('error-icon-mail');
    let mensajeError = document.getElementById('formulario__input-error-mail');
    let mensajeErrorValido = document.getElementById('formulario__input-error3');
    
    if (expresiones.email.test(inputElement.value)) {
        //            inputElement.style.borderColor = 'red';
        inputElement.classList.remove("formulario__input-invalid");
        inputElement.classList.add("formulario__input-valid");
       
        iconError.style.display = 'none';
        iconSuccess.style.display = 'block';
        mensajeError.style.display = 'none';
        mensajeErrorValido.style.display = 'none';

        return true;

    } else if(inputElement.value <= 0) {
            //          inputElement.style.borderColor = 'green';
            inputElement.classList.remove("formulario__input-valid");
            inputElement.classList.add("formulario__input-invalid");
                      
            iconError.style.display = 'block';
            iconSuccess.style.display = 'none';
            mensajeError.style.display = 'block';
            mensajeErrorValido.style.display = 'none';
            
            
                
       
    } else {
        //          inputElement.style.borderColor = 'green';
        inputElement.classList.remove("formulario__input-valid");
        inputElement.classList.add("formulario__input-invalid");
       

        iconError.style.display = 'block';
        iconSuccess.style.display = 'none'; 
        mensajeError.style.display = 'none';
        mensajeErrorValido.style.display = 'block';
        
    }
    return false;
}

function validatePassword() {
    let inputElement = document.getElementById('clave');
    let iconSuccess = document.getElementById('success-icon-clave');
    let iconError = document.getElementById('error-icon-clave');
    let mensajeError = document.getElementById('formulario__input-error-clave');
    let claveError = document.getElementById('formulario__input-error4');
    
    if (expresiones.clave.test(inputElement.value)) {
        //            inputElement.style.borderColor = 'red';
        inputElement.classList.remove("formulario__input-invalid");
        inputElement.classList.add("formulario__input-valid");
        
        iconError.style.display = 'none';
        iconSuccess.style.display = 'block';
        mensajeError.style.display = 'none';
        claveError.style.display = 'none';

        return true;

     } else if(inputElement.value <= 0) {
            //          inputElement.style.borderColor = 'green';
            inputElement.classList.remove("formulario__input-valid");
            inputElement.classList.add("formulario__input-invalid");
                      
            iconError.style.display = 'block';
            iconSuccess.style.display = 'none';
            mensajeError.style.display = 'block';
            claveError.style.display = 'none';
            
    } else {
        //          inputElement.style.borderColor = 'green';
        inputElement.classList.remove("formulario__input-valid");
        inputElement.classList.add("formulario__input-invalid");
        
        iconError.style.display = 'block';
        iconSuccess.style.display = 'none'; 
        claveError.style.display = 'block';
        mensajeError.style.display = 'none';
        
    }
    return false;
}
function validatePasswordMatch() {
    let inputClave = document.getElementById('clave');
    let inputRepiteClave = document.getElementById('confirmeclave');
    let iconSuccess = document.getElementById('success-icon-confirme');
    let iconError = document.getElementById('error-icon-confirme');
    let mensajeError = document.getElementById('formulario__input-error-confirme');
    let errorNoCoincide = document.getElementById('formulario__input-error5');

    if(inputRepiteClave.value <= 0) {
        //          inputElement.style.borderColor = 'green';
        inputRepiteClave.classList.remove("formulario__input-valid");
        inputRepiteClave.classList.add("formulario__input-invalid");
                  
        iconError.style.display = 'block';
        iconSuccess.style.display = 'none';
        mensajeError.style.display = 'block';
        errorNoCoincide.style.display = 'none';
   
                 
    return false;

    } else if (inputClave.value == inputRepiteClave.value) {
        //            inputElement.style.borderColor = 'red';
        inputRepiteClave.classList.remove("formulario__input-invalid");
        inputRepiteClave.classList.add("formulario__input-valid");
        
        iconError.style.display = 'none';
        iconSuccess.style.display = 'block';
        mensajeError.style.display = 'none';
        errorNoCoincide.style.display = 'none';
        
        return true;


    } else {
        //          inputElement.style.borderColor = 'green';
        inputRepiteClave.classList.remove("formulario__input-valid");
        inputRepiteClave.classList.add("formulario__input-invalid");

        iconError.style.display = 'block';
        iconSuccess.style.display = 'none';
        errorNoCoincide.style.display = 'block';
        mensajeError.style.display = 'none';
        
        return false;
       
    }
}






