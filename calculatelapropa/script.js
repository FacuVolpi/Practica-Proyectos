//DOM de la calculadora en si
const calculadoraGral = document.querySelector('#form-calc');
const ticketEl = document.querySelector('#ticket');
const propinaEl = document.querySelector('#propina');
const personasEl = document.querySelector('#nro-personas');

//DOM de los botones
const submitBtn = document.querySelector('#submit-btn');
const clearBtn = document.querySelector('#clear-btn');

//DOM de los resultados
const tTicket = document.querySelector('#t-ticket');
const soloPropina = document.querySelector('#solo-propina');
const porPersona = document.querySelector('#x-persona');

//Reseteando la form en reload
window.onload = clearFields();

//Eventos
calculadoraGral.addEventListener('submit', calcular);
clearBtn.addEventListener('click', clearFields);


//Funciones
//La matematica de la calculadora
function calcular(e) {
    e.preventDefault();
    //Convirtiendo strings en ints
    const ticket = parseInt(ticketEl.value, 10);
    const propina = parseInt(propinaEl.value, 10) / 100;
    const xPersona = parseInt(personasEl.value, 10);

    //Operaciones
    const ticketTotal = Math.floor(ticket * (1 + propina));
    const propinaTotal = Math.floor(ticket * propina);
    const xPersonaTotal = ticketTotal / xPersona;

    //Mostrando Resultados
    tTicket.textContent = ` $${ticketTotal.toFixed(2)}`;
    soloPropina.textContent = ` $${propinaTotal.toFixed(2)}`;
    porPersona.textContent = ` $${xPersonaTotal.toFixed(2)}`
    console.log('click');

}

//Limpiar campos
function clearFields() {
    //Input Fields Clear
    ticketEl.value = "";
    propinaEl.value = "";
    personasEl.value = 1;

    //Resultados Clear
    tTicket.textContent = "";
    soloPropina.textContent = "";
    porPersona.textContent = "";
}