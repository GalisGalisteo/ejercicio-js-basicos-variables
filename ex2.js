/**
 * Que sucede aquí?
 */

 let variable1 = 1;
 let variable2 = 2;
 let variable3 = 3;
 let variable4 = 4;
 variable2= 2;
 varialbe3= 4;
 variable4= 1;
 variable1= -7;

 console.log("ejercicio 1", variable4)

 /**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  *
  * 1, porque es el último valor que le hemos asignado
  * 
  * se puede comprobar con un console.log(vaariable4) debajo de variable1= -7;
  * 
  */

  variable2 = variable1;
  variable4 = variable2 * 2;

  console.log("ejercicio 2", variable4)

/**
  * En este punto, que valor tendrá 'variable4'. ¿Por qué? ¿Cómo podrías comprobarlo?
  * 
  * -14, porque el valor de la variable2 en este punto es -7 y se multiplica por 2.
  * 
  * con un console.log(variable4) debajo de variable4 = variable2 * 2;
  * 
  */