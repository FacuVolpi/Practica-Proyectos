//Iniciando la cuenta
let cuentaActual = 0;
//Seleccionando Elementos
const cuentaEl = document.querySelector('#cuenta');
const buttons = document.querySelectorAll('.btn');

//Agregando el evento.
buttons.forEach((btn) => {
    btn.addEventListener('click', (btnActual) => {
        clasesDelBoton = btnActual.currentTarget.classList;
        if (clasesDelBoton.contains('reducir')) {
            cuentaActual--;
            colorDeLaCuenta(cuentaActual);
            cuentaEl.textContent = cuentaActual;
        } else if (clasesDelBoton.contains('incrementar')) {
            cuentaActual++;
            colorDeLaCuenta(cuentaActual);
            cuentaEl.textContent = cuentaActual;
        } else {
            cuentaActual = 0;
            colorDeLaCuenta(cuentaActual);
            cuentaEl.textContent = 0;

        }
    })
});

//Cambiando color de la cuenta dependiendo del numero
let colorDeLaCuenta = (cuenta) => {
    if (cuenta < 0) {
        cuentaEl.style.color = "red";
    } else if (cuenta > 0) {
        cuentaEl.style.color = "green";
    } else {
        cuentaEl.style.color = "black";
    }
};