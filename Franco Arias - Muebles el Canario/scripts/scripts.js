const contactoBtn = document.getElementById("contactoBtn");
const generarCaptchaBtn = document.getElementById("generarCaptchaBtn");
const ingresarCaptchaBtn = document.getElementById("ingresarCaptchaBtn");

let nombreContactoInput;
let emailContactoInput;
let asuntoContactoInput;
let mensajeContactoInput;
let captchaIngresadoInput;

let nombreContactoAlerta = document.getElementById("nombreContactoAlerta");
let emailContactoAlerta = document.getElementById("emailContactoAlerta");
let asuntoContactoAlerta = document.getElementById("asuntoContactoAlerta");
let mensajeContactoAlerta = document.getElementById("mensajeContactoAlerta");
let captchaAlerta = document.getElementById("captchaAlerta");
let captchaPrf = document.getElementById("captchaPrf");
let contactoAlerta = document.getElementById("contactoAlerta");

let captchaValidacion = false;
let camposValidados = 0;
const caracteres = ["0","1","2","3","4","5","6","7","8","9","q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

function comprobarInput(input, alerta){
    if(input !== ""){
        alerta.innerHTML = "";
        camposValidados = camposValidados + 1;
    }
    else{
        alerta.innerHTML = "Este campo es obligatorio."
    }
}

function generarCapcha(){
    let a = caracteres[Math.floor(Math.random()*(caracteres.length))];
    let b = caracteres[Math.floor(Math.random()*(caracteres.length))];
    let c = caracteres[Math.floor(Math.random()*(caracteres.length))];
    let d = caracteres[Math.floor(Math.random()*(caracteres.length))];
    let e = caracteres[Math.floor(Math.random()*(caracteres.length))];
    let f = caracteres[Math.floor(Math.random()*(caracteres.length))];
    return (a + b + c + d + e + f)
}
generarCaptchaBtn.addEventListener("click", () => {
    captchaPrf.innerHTML = `${generarCapcha()}`;
});

ingresarCaptchaBtn.addEventListener("click", () => {
    captchaIngresadoInput = (document.getElementById("captchaIngresadoInput").value);
    if(captchaIngresadoInput !== "" && captchaIngresadoInput === (captchaPrf.innerHTML)){
        captchaValidacion = true;
        captchaAlerta.innerHTML = "¡Captcha ingresado con exito!"
    }
    else{
        captchaValidacion = false;
        captchaAlerta.innerHTML = "¡Captcha fallido! Ingresar nuevamente"
    }
});

contactoBtn.addEventListener("click", () => {
    nombreContactoInput = (document.getElementById("nombreContactoInput")).value;
    emailContactoInput = (document.getElementById("emailContactoInput")).value;
    asuntoContactoInput = (document.getElementById("asuntoContactoInput")).value;
    mensajeContactoInput = (document.getElementById("mensajeContactoInput")).value;
    camposValidados = 0;
    comprobarInput(nombreContactoInput,nombreContactoAlerta);
    comprobarInput(emailContactoInput,emailContactoAlerta);
    comprobarInput(asuntoContactoInput,asuntoContactoAlerta);
    comprobarInput(mensajeContactoInput,mensajeContactoAlerta);
    if(camposValidados = 4 && captchaValidacion){
        contactoAlerta.innerHTML = "¡Mensaje enviado con exito!"
    }
    else{
        contactoAlerta.innerHTML = "¡Mensaje no enviado! Asegurate de completar todos los campos y valida el captcha."
    }
    captchaValidacion = false;
    captchaPrf.innerHTML = ""
    });