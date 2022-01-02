const btnEl = document.querySelector("#btn"); //Guardando el Boton a ponerle el evento
const textColorEl = document.querySelector("#textColor"); // Guardando el span donde se va a mostrar el color en Hex
const mainEl = document.querySelector(".background-display"); //Guardando el Main para cambiarle el color del fondo
const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]; //Valores para formar codigo hexadecimal de color.
const hexTabEl = document.querySelector("#hexTab");
//Agregando el evento al boton
btnEl.addEventListener('click', function () {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hexCode[randomNumber()];
    }
    textColorEl.textContent = hexColor;
    mainEl.style.background = hexColor;
})

function randomNumber() {
    return Math.floor(Math.random() * hexCode.length);
}

//Setting the hex tab as active when the page loads.
function settingTabActive() {
    hexTabEl.classList.add("test");
}

window.onload = settingTabActive();