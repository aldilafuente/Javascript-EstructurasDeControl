//EJERCICIOS CON STRINGS Y NÚMEROS

//EJERCICIO 39
// var name, surname;
// name = 'Aldana';
// surname = 'Lafuente';
// console.log('Mi nombre es', name, 'y tiene', name.length, 'letras.');
// console.log('Y mi apellido es', surname, 'y tiene', surname.length, 'letras.');


//EJERCICIO 40
// var text = 'Here, using... ';
// var method = 'EL ~ M É T O D O  C O N C A T ~';
// console.log(text.concat(method));


//EJERCICIO 41 Y 42
// var text = 'BLACKEN THE CURSED SUN';
// console.log(text.toLowerCase());

// var texto = 'lamb of god';
// console.log(texto.toUpperCase());


//EJERCICIO 48
// var piString = '3.14';
// var constanteString = '42';
// var pi = parseFloat(piString);
// var constante = parseInt(constanteString);
// var resultado = pi + constante;
// console.log(resultado);
// console.log('45.14 es el resultado de sumar las variables', pi.toString(), 'y', constante.toString());





//ESTRUCTURAS DE CONTROL
//EJERCICIO 49
// var number1 = 10;
// var number2 = 5;
// if (number1 > number2) {
//     console.log('La variable NUMBER1 (10) es mayor que la variable NUMBER2 (5)');
// }


//EJERCICIO 50
// var number = 10;
// if (number % 2 == 0) {
//     console.log('El número 10 es par');
// }


//EJERCICIO 51
// var user = 'hannaldi';
// var password = 'ahrecontraseña';
// if (user==='hannaldi' && password ==='ahrecontraseña') {
//     console.log('El usuario y contraseña son correctos');
// }


//EJERCICIO 52
// var number1 = 10;
// var number2 = 15;
// if (number1 > number2) {
//     console.log('La variable NUMBER1 es mayor que la variable NUMBER2');
// } else {
//     console.log('La variable NUMBER1 NO es mayor que la variable NUMBER2');
// }


//EJERCICIO 53
// var number = 13;
// if (number % 2 == 0) {
//     console.log('El número es par');
// } else {
//     console.log('El número es impar');
// }


//EJERCICIO 54
// var user = 'hannaldi';
// var password = 'ahrecontrasenia';
// if (user==='hannaldi' && password ==='ahrecontraseña') {
//     console.log('El usuario y contraseña son correctos');
// } else {
//     console.log('El usuario y contraseña no pudieron ser verificados, vuelva a intentar');
// }


//EJERCICIO 55 CON MÉTODO TERNARIO
// var number1 = 10;
// var number2 = 15;
// number1>number2 ? console.log('El número 10 es mayor que 15') : console.log('El número 10 es menor que 15');


//EJERCICIO 56
// var number = 13;
// number % 2 === 0 ? console.log('El número es par') : console.log('El número es impar');


//EJERCICIO 57
// var user = 'hannaldi';
// var password = 'ahrecontrasenia';
// user === 'hannaldi' && password === 'ahrecontraseña' ? console.log('El usuario y contraseña son correctos') : console.log('El usuario o contraseña no son válidos, vuelva a intentar');


//EJERCICIO 58
// var hora = 9;
// if (hora <= 12 && hora > 5) {
//     console.log('¡Buen día!');
// } else if (hora > 12 && hora < 20) {
//     console.log('¡Buenas tardes!');
// } else {  
//     console.log('¡Buenas noches!');
// }


//EJERCICIO 59
// var number1 = '21';
// var number2 = '18';
// if (number1 > number2) {
//     console.log('La variable NUMBER1 es más grande que NUMBER2.');
// } else {
//     console.log('La variable NUMBER2 es más grande que NUMBER1.');
// }


//EJERCICIO 60
// var nota = 10;
// if (nota >= 8) {
//     console.log('Alumna con nota excelente.');
// } else if (nota < 9 && nota >= 6) {
//     console.log('Alumna aprobada.');
// } else {
//     console.log('Alumna desaprobada, debe hacer los ejercicios de nuevo.');
// }


//EJERCICIO 61

//CON SWITCH
// var dia = prompt('¿Qué número de la semana es?');
// var nombreDia = null;
// switch (dia) {
//     case '1':
//         nombreDia = 'lunes';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '2':
//         nombreDia = 'martes';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '3':
//         nombreDia = 'miércoles';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '4':
//         nombreDia = 'jueves';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '5':
//         nombreDia = 'viernes';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '6':
//         nombreDia = 'sábado';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;
//     case '7':
//         nombreDia = 'domingo';
//         console.log('El número ingresado corresponde al día', nombreDia);
//         break;    
//     default: 
//         console.log('El número de día ingresado no es correcto.');
//         break;
// }


//CON IF ANIDADO
// var dia = prompt('¿Qué número de la semana es?');
// var nombreDia = null;
// if (dia == 1) {
//     nombreDia = 'lunes';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 2) {
//     nombreDia = 'martes';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 3) {
//     nombreDia = 'miércoles';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 4) {
//     nombreDia = 'jueves';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 5) {
//     nombreDia = 'viernes';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 6) {
//     nombreDia = 'sábado';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else if (dia == 7) {
//     nombreDia = 'domingo';
//     console.log('El número ingresado corresponde al día', nombreDia);
// } else {
//     console.log('El número de día ingresado no es correcto.');
// }



//EJERCICIO 62
// var numeroMes = prompt('Ingrese un número del 1 al 12');
// var nombreMes;
// var cantidadDias;
// if (numeroMes == 1) {
//     nombreMes = 'enero';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 2) {
//     nombreMes = 'febrero';
//     cantidadDias = '28/29';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 3) {
//     nombreMes = 'marzo';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 4) {
//     nombreMes = 'abril';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 5) {
//     nombreMes = 'mayo';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 6) {
//     nombreMes = 'junio';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 7) {
//     nombreMes = 'julio';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 8) {
//     nombreMes = 'agosto';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 9) {
//     nombreMes = 'septiembre';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// }  else if (numeroMes == 10) {
//     nombreMes = 'octubre';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 11) {
//     nombreMes = 'noviembre';
//     cantidadDias = '30';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else if (numeroMes == 11) {
//     nombreMes = 'diciembre';
//     cantidadDias = '31';
//     console.log('El número seleccionado corresponde al mes de', nombreMes, 'y tiene', cantidadDias, 'días.');
// } else {
//     console.log('El número ingresado no es correcto. Vuelva a intentar con un valor del 1 al 12.');
// }



//EJERCICIO 64
// var nombre;
// if (nombre) {
//     console.log('Mi nombre es', nombre);
// } else {
//     console.log('Por favor ingrese su nombre');
// }


//EJERCICIO 65
// var saldo = 0;
// if (saldo > 0) {
//     console.log('El usuario tiene', saldo, 'pesos a favor');
// } else {
//     console.log('El usuario no tiene saldo a favor');
// }


//EJERCICIO 66
// var number = 0;
// while (number <= 10) {
//     console.log('Número:', number);
//     number++;
// }


//EJERCICIO 67
// var number = 100;
// while (number >= 0) {
//     console.log('Número:', number);
//     number--;
// }


//EJERCICIO 68
// var numeroPar = 0;
// while (numeroPar <= 1000) {
//     console.log('Número par:', numeroPar);
//     numeroPar += 2; // también puede ser numeroPar += 1 y le agrego el numeroPar++
// }


//EJERCICIO 69
// var a = 0;
// var b = 1;
// while (b <= 1000) {
//     console.log('A:', a, 'MÁS B:', b, 'DA COMO RESULTADO...', a+b);
//     a = a+b;
//     b++;
// }


//EJERCICIO 70
// var a = 0;
// var b = 1;
// while (b <= 1000) {
//     console.log('A:', a, 'MÁS B:', b, 'DA COMO RESULTADO...', a+b);
//     a = a+b;
//     b += 2;
// }


//EJERCICIO 71
// var multiplicador = 1;
// while (multiplicador <= 10) {
//     var resultado = 9 * multiplicador;
//     console.log('9 multiplicado por', multiplicador, 'da como resultado:', resultado);
//     multiplicador++;
// }


//EJERCICIO 72
// var star = '*';
// while (star.length <= 15) {
//     console.log(star);
//     star += '*';
// }


//EJERCICIO 73
// var contador = 15;
// var recorte = '';
// var star = '***************';
// while (contador > 0) {
//     recorte = star.slice(0, contador);
//     console.log(recorte);
//     contador--;
// }


//EJERCICIO 74
// var star = '*';
// while (star.length <= 15) {
//     console.log(star);
//     star += '**';
// }


//EJERCICIO 75 - te odio fibonacci
// var fibo = 0;
// var a = 0;
// var b = 1;
// var vuelta = 0;
// console.log(a);
// console.log(b);
// while (vuelta < 8) {
//     fibo = a + b;
//     console.log(fibo);
//     a = b;
//     b = fibo;
//     vuelta++;
// }


//---------------------------------------------------------

//EJERCICIOS CON DO WHILE (76 al 85)

//EJERCICIO 76 (66 con do while)
// var number = 0;
// do {
//     console.log('Número:', number);
//     number++;
// } while (number <= 10);


//EJERCICIO 77 (67 con do while)
// var number = 100;
// do {
//     console.log('Número:', number);
//     number--
// } while (number >= 0);


//EJERCICIO 78 (68 con do while)
// var number = 0;
// do {
//     console.log('Número par:', number);
//     number+=2;
// } while (number<=1000);


//EJERCICIO 79 (69 con do while)
// var a = 0;
// var b = 1;
// do {
//     console.log('La suma de A,', a, 'más B,', b, 'da como resultado:', a+b);
//     a = a+b;
//     b++;
// } while (b <= 1000);


//EJERCICIO 80 (70 con do while)
// var a = 0;
// var b = 1;
// do {
//     console.log('La suma de A,', a, 'más B,', b, 'da como resultado:', a+b);
//     a = a+b;
//     b += 2;
// } while (b <= 1000);


//EJERCICIO 81 (71 con do while)
// var multiplicador = 1;
// do {
//     console.log('El número 9 por', multiplicador, 'da como resultado:', 9*multiplicador);
//     multiplicador++;
// } while (multiplicador <= 10);


//EJERCICIO 82 (72 con do while)
// var star = '*';
// do {
//     console.log(star);
//     star += '*';
// } while (star.length <= 15);


//EJERCICIO 83 (73 con do while)
// var star = '***************';
// var recorte = '';
// var contador = 15;
// do {
//     recorte = star.slice(0, contador);
//     console.log(recorte);
//     contador--;
// } while (contador > 0);


//EJERCICIO 84 (74 con do while)
// var star = '*';
// do {
//     console.log(star);
//     star += '**'
// } while (star.length <= 15);


//EJERCICIO 85 (fibo con do while)
// var a = 0;
// var b = 1;
// var fibo;
// var secuencia = 0;
// console.log(a);
// console.log(b);
// do {
//     fibo = a+b;
//     console.log(fibo);
//     a = b;
//     b = fibo;
//     secuencia++
// } while (secuencia < 8);



//---------------------------------------------------------

//EJERCICIOS CON FOR (86 al 99)

// EJERCICIO 86 (el 66 pero con for)
// for (var i = 0; i < 10; i++) {
//     console.log('Número:', i);
// }


//EJERCICIO 87 (67 pero con for)
// for (var i = 100; i >= 0; i--) {
//     console.log('Número:', i);
// }


//EJERCICIO 88 (68 pero con for)
// for (var i = 0; i <= 1000; i+=2) {
//     console.log(i);
// }


//EJERCICIO 89 (69 pero con for)
// var a = 0;
// var b = 1;
// for (var i = 0; i < 1000; i++) { 
//     console.log('A:', a, 'más B:', b, 'da como resultado...', a+b);
//     a = a+b;
//     b++;
// }


//EJERCICIO 90 (70 pero con for)
// var a = 0;
// var b = 1;
// for (var i = 0; i < 1000; i++) { 
//     console.log('A:', a, 'más B:', b, 'da como resultado...', a+b);
//     a = a+b;
//     b+=2;
// }


//EJERCICIO 91 (71 pero con for)
// var multiplicador = 1;
// var numero = 9;
// for (var i=0; i < 10; i++) {
//     console.log('El número', numero, 'multiplicado por', multiplicador, 'da como resultado:', numero*multiplicador);
//     multiplicador++;
// }


//EJERCICIO 92 (72 pero con for)
// var star = '*';
// for (var i = 0; i < 15; i++) {
//     console.log(star);
//     star += '*';
// }


//EJERCICIO 93 (73 pero con for)
// var recorte = '';
// var star = '***************'
// for (var i = 15; i > 0; i--) { //'i' es lo mismo que 'contador'
//     recorte = star.slice(0, i);
//     console.log(recorte);
// }


//EJERCICIO 94 (74 pero con for)
// var star = '*';
// for (var i = 0; i < 8; i ++) {
//     console.log(star);
//     star += '**';  
// }


//EJERCICIO 95 (75 pero con for)
// var fibo = 0;
// var a = 0;
// var b = 1;
// console.log(a);
// console.log(b);
// for (var i = 0; i < 8; i++) {
//     fibo = a+b;
//     console.log(fibo);
//     a = b;
//     b = fibo;
// }


//EJERCICIO 96
// Mostrar en consola los números de 10 en 10 desde el 0 hasta el 10000
// for (var i = 0; i <= 10000; i+=10) {
//     console.log(i);
// }


//EJERCICIO 97
// Mostrar en consola los números desde el 1000 hasta el 0
// Cada 10 números, los números se tienen que mostrar con el siguiente formato: **numero**
// for (var i = 1000; i > 0; i--) {
//     if (i != 1000 && i % 10 == 0) {
//         console.log('**', i, '**');
//     } else {
//         console.log(i);
//     }
// }


//EJERCICIO 98
// Sumar los números del 0 al 1000
// Cortar la ejecución si la suma es superior a 100
// Mostrar el resultado final en consola
// var a = 0;
// var b = 1;
// for (var i = 0; i <= 1000; i++) {
//     if (a+b <= 100) {
//         console.log('El resultado de A más B da como resultado:', a+b);
//         a = a+b;
//         b++;
//     } else {
//         console.log('El resultado de A más B da como resultado:', a+b, 'por lo tanto, al ser mayor que 100, se corta la ejecución.');
//         break;
//     }
// }


//EJERCICIO 99
// Sumar los números pares del 0 al 10000
// Cortar la ejecución al encontrar 10 números pares
// Mostrar en consola el resultado de los números hasta el momento del corte
// var a = 0;
// var b = 0;
// for (var i = 0; i < 10000; i++) {
//     if (b < 20) {
//         console.log('El resultado de A más B da como resultado:', a+b);
//         a = a+b;
//         b += 2;
//     } else {
//         break;
//     }
// } console.log('La ejecución se corta tras haber encontrado 10 números pares.');


//EJERCICIO 100
// Mostrar en consola el siguiente dibujo de un cuadro lleno:
// *****
// *****
// *****
// *****
// *****
// var star = '*****';
// for (var i=0; i < 5; i++) {
//     console.log(star);
//     document.write(star, '<br>');
// }


//EJERCICIO 101
// Mostrar en consola el siguiente dibujo de un cuadrado hueco:
// *****
// *   *
// *   *
// *   *
// *****
// var star = '*****';
// var spaceStar = '*aaa*';

// MANERA FÁCIL
// for (var i = 0; i < 5; i++) {
//     if (i === 0) {
//         console.log(star);
//     } else if (i <= 3) {
//         console.log(spaceStar);
//     } else {
//         console.log(star);
//     }
// }

// MANERA DIFÍCIL
// for (var i = 0; i < 5; i++) { //el for de afuera marca la cantidad de veces que todo el ciclo se repite, en este caso son 5 vueltas
//     if (i > 0 && i < 4) { // SI 'i' es MAYOR que 0 y MENOR que 4 (todo esto sabiendo en qué líneas se van a repetir los asteriscos con espacio)
//         for (i=0; i<3; i++) { // segundo ciclo, menor que 3 porque se va a repetir desde 0, 1 y 2 (3 líneas en total), 3 vueltas
//             document.write(spaceStar, '<br>'); // imprimimos las 3 líneas de asteriscos con espacios
//         }
//     } else { // si nada de todo eso se cumple, imprimimos las otras dos, tanto al comienzo como al final
//         document.write(star, '<br>');
//     }
// }




//EJERCICIO 102
//Mostrar en consola el siguiente dibujo de un tablero de ajedrez:
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// * * * * * * * *
//  * * * * * * *
// var ocho = '* * * * * * * *';
// var siete = ' * * * * * * * ';
// for (var i = 0; i < 8; i++) {
//     if (i%2 == 0) {
//         console.log(ocho);
//     } else {
//         console.log(siete);
//     }
// } 


//EJERCICIO 103
//Mostrar en consola el siguiente dibujo de un diamante:
// *
// ***
// *****
// *******
// *********
// *******
// *****
// ***
// *
// var star = '*';
// var starReverse = '*********'
// var recorte = '';
// var contador = 7;
// for (var i = 0; i < 9; i++) {
//     if (i >= 0 && i < 5) {
//         console.log(star);
//         star += '**';
//     } else {
//         recorte = starReverse.slice(0, contador);
//         console.log(recorte);
//         contador-=2;
//     }
//  }   


//EJERCICIO 104 damn you 
// Partiendo del siguiente código, realizar la suma de todos los números pares que hay entre el valor guardado en la variable 'n' 
// y el valor guardado en 'm' (incluyéndolo).
// var n = 10;    
// var m = 26;
// var resultado = 0;
// for (var i=0; i < 9; i++) {
//     resultado = n+resultado;
//     n+=2;
// } console.log('El resultado de todos los valores que adopta N, sumados entre sí, dan un total de:', resultado);


// EJERCICIO DE MALE:
// con un for y googleando algún método, pedirle que me imprima todos los nombres con la primer letra en mayúscula...

// var alumnas = ['Maria', 'esther', 'consuelo', 'Barbara', 'Luisana', 'pancracia', 'luzbelita', 'Jimena'];
// var iniciales = '';
// var nombres = '';

// for (var i = 0; i < alumnas.length; i++) {
//     iniciales = alumnas[i].slice(0,1);
//     iniciales = iniciales.toUpperCase();
//     nombres = alumnas[i].slice(1);
//     console.log(iniciales+nombres);
// } 


//------------------------------------------------------







