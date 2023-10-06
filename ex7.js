/** Modifica la línea correspondiente para crear un string que use todas las variables */

/** Mi gato se llama Michi, tiene 3 años y pesa 4.5 kilos. Es de color blanco y negro y tiene una personalidad juguetón y curioso. 
Le encanta comer atún y tiene 5 juguetes diferentes. Necesita dormir al menos 16 horas al día. 
Ahora mismo está jugando con su pelota. ¡Es un gato muy feliz!
*/

let nombreGato = "Michi";
let edadGato = 3;
let pesoGato = 4.5;
let colorGato = "blanco y negro";
let personalidadGato = "juguetón y curioso";
let comidaFavorita = "atún";
let numJuguetes = 5;
let numHorasSueño = 16;
let jugandoAhora = "pelota";

let historiaGato = `Mi gato se llama ${nombreGato}, tiene ${edadGato} años y pesa ${pesoGato} kilos. Es de color ${colorGato} y tiene una personalidad ${personalidadGato}. 
Le encanta comer ${comidaFavorita} y tiene ${numJuguetes} juguetes diferentes. Necesita dormir al menos ${numHorasSueño} horas al día. 
Ahora mismo está jugando con su ${jugandoAhora}. ¡Es un gato muy feliz!`;

console.log(historiaGato);
