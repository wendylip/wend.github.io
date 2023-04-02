//const miTitulo = document.querySelector('h1');/* declarar una variable*/
//miTitulo.textContent = '¡Hola mundo!';
//let nombredelavariable = 'Bob';
//nombredelavariable = 'Hael';
/* condicional
 let helado = 'chocolate';
if (helado === 'fresa'){
    alert ('¡Si, amo el helado de chocolate!');
} else {
    alert ('Awwww, pero mi favorito es el de chocolate...');
    }*/
/* funcion multiplicar 
function multiplica(num1,num2){
    let resultado = num1 * num2;
    return resultado;
}*/
/***evento alert***
document.querySelector ('html').onclick = function()
{
    alert('¡Ouch!¡Deja de pincharme!');
}*/
/* cambiar imagenes haciendo click
let miimage = document.querySelector('img');
miimage.onclick = function (){
    let miSrc = miimage.getAttribute('src');
    if (miSrc === 'imagenes/paisaje.jpg'){
        miimage.setAttribute('src','imagenes/paisaje2.jpg');

    } else {
        miimage.setAttribute('src', 'imagenes/paisaje.jpg');
    }
}*/
/* introdcucir nombre en el textcontet y salgo el nombre mas un mensaje*/
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector ('h1');
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo.textContent = 'Mozilla es genial,'
    + miNombre;
    }
    if (!localStorage.getItem('nombre')){
        estableceNombreUsuario();
    }
    else{
        let nombreAlmacenado =
        localStorage.getItem('nombre');
        miTitulo.textContent = 'Mozilla es genial,'
        +nombreAlmacenado;
    }
    miBoton.onclick = function(){
        estableceNombreUsuario();
    }
 