const btnEl = document.getElementById("btn"); //Boton para el evento.
const colorText = document.getElementById("textColor"); //El span para agregar el color randomizado.
const mainEl = document.querySelector(".background-display"); //Main section para cambiar el fondo de color.

//Escuchando por clicks en el boton.
btnEl.addEventListener('click', function () {
    //Asignando valores random a las variables para cada uno de los colores que representa RGB.
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    //Mostrando el color elegido en la caja.
    colorText.textContent = `RGB (${r}, ${g}, ${b})`;
    //Asignando el color al fondo.
    mainEl.style.background = `rgb(${r}, ${g}, ${b})`;
});