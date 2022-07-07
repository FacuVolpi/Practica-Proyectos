//Guardando los lugares donde tengo que renderizar cada cosa individualmente + el boton
const stanceElemento = document.querySelector('.postura');
const direccionElemento = document.querySelector('.direccion');
const gradosRotacionElemento = document.querySelector('.rotacion');
const trickElemento = document.querySelector('.prueba');
const btnElemento = document.querySelector('.fa4-butt');

//Listas de pruebas, posición, dirección de giro, grados de rotación
const stance = ['Normal', 'Switch', 'Fakie', 'Nollie'];
const direcciones = ['Backside', 'Frontside', '-'];
const rotacion = ['0°', '180°', '360°'];
const tricksFlat = [
    'Kickflip', 'Heelflip', 'Shove-It', '360 Flip', 'Varial Flip',
    'Varial Heel', 'Lazer Flip', 'Inward Heelflip', 'Hardflip',
    'Impossible', 'Ollie', 'Foward Flip'
];

//Haciendo la funcion para randomizar los numeros
function random(array) {
    return Math.floor(Math.random() * array.length);
}

//Implementando todo
btnElemento.addEventListener('click', () => {
    stanceElemento.textContent = stance[random(stance)];
    direccionElemento.textContent = direcciones[random(direcciones)];
    gradosRotacionElemento.textContent = rotacion[random(rotacion)];
    trickElemento.textContent = tricksFlat[random(tricksFlat)];
})