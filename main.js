// 1. Realizar un programa que dado 2 números imprima por consola si el primer numero es
// mayor que el segundo.


let primerNumero = 5

let segundoNumero = 50

if (primerNumero > segundoNumero) {
    console.log('el primer numero es mayor que el segundo');
    
}

// 2. Realizar un programa que dado 2 números imprima por consola si los numeros son
// iguales o si son diferentes.



if (primerNumero===segundoNumero) {

    console.log('los numero son iguales');
    
} else {
    console.log('los numeros son diferentes');
}

// 3. Realizar un programa que dado 2 números imprima por consola cual de los 2 numeros
// es el mas grande o si son iguales.

if (primerNumero>segundoNumero) {
    console.log('el primer numero es mayor');
    
} else if(primerNumero<segundoNumero) {
    console.log('el segundo numero es mayor');
}else{
    console.log('los numero son iguales ');
}

// 4. Realizar un programa que dado 3 números imprima por pantalla cual de los 3 es el más
// chico.

let tercerNumero= 25

let numeroChico = primerNumero;

if (segundoNumero < numeroChico) {
  numeroChico = segundoNumero;
}

if (tercerNumero < numeroChico) {
  numeroChico = tercerNumero;
}

console.log("El valor mas chico es:", numeroChico);

// 5. Realizar un programa que dado 2 objetos representando personas con las propiedades
// nombre, edad y altura imprima por pantalla cual de las 2 personas es la mas alta y cual
// es la de mayor edad.

let persona1 = {
    nombre : 'javier',
    edad : 33,
    altura : 160
}

let persona2= {
    nombre : 'mauricio',
    edad : 27,
    altura : 190
}

if (persona1.altura>persona2.altura){
    console.log('las persona '+persona1.nombre+' es mas alta');
}else{
    console.log('Las persona '+ persona2.nombre+ ' es mas alta');
}

if (persona1.edad>persona2.edad){
    console.log(persona1.nombre+' es mayor que '+persona2.nombre);
}else{
    console.log(persona2.nombre+' es mayor que '+persona1.nombre);
}

// 6. Realizar un programa que permita ingresar por pantalla tu nombre, edad, altura, visión
// y permita determinar si estas capacitado para conducir. La persona deberá cumplir con
// una edad mínima de 18 años, medir mas de 150cm y tener una visión de 8 de 10 como
// mínimo.

// let nombre = prompt('escriba su nombre')
// let edad = parseInt (prompt('escriba su edad'))
// let altura = parseInt(prompt('escribe tu altura'))
// let vision = parseInt(prompt('escribe tu niver de vision'))

// if (edad>=18 && altura>150 && vision>7) {
//     console.log(nombre+' Felicidades cumples con los requisitos aqui esta tu PASE ya puedes conducir');
// } else {
//     console.log('lamento informarle que no cumples con los requisitos minimos para conducir');
    
// }

// 7. Realizar un programa que permita el ingreso de los siguientes datos: Nombre, pase
// (vip o normal), si posee entrada (si o no, s o n, true o false). Las personas que posean
// tu mismo nombre tienen ingreso libre así como también los que posean un pase vip,
// mostrar un mensaje de bienvenida. Si posee entrada preguntar si desea utilizarla, en
// caso afirmativo mostrar mismo mensaje de bienvenida. Y por último de no tener el
// mismo nombre o poseer un pase vip o entrada, preguntar si desea comprar, caso
// afirmativo solicitar dinero disponible, si posee $1000 o más, mostrar mensaje de venta
// de entrada y bienvenida, caso contrario mostrar mensaje de rechazo de venta, y en
// caso contrario a no querer comprar, mostrar mensaje de despedida.

// respuesta 1
// let nombre =prompt('cual es su nombre')
// let pase = prompt('pase por favor')
// let dinDis = parseInt (prompt('cuanto dinero tiene'))



// if (nombre=== 'javier') {
//     console.log('bienvenido señor Javier puede ingresar');
    
// }else if(pase==='vip'||pase==='normal'||pase==='entrada'){
//     console.log('Bienvenido Sr '+nombre+' Puede ingresar');

// }else if(dinDis>= 1000){
//     let comprar = prompt('desea comprar una entrada')
//     if (comprar==='si') {
//         console.log('Venta de entrada EXITOSA Bienvenido');
        
//     }
// }else {
//     console.log('disculpe no le alcanza para la compra de una entrada hasta luego');
// }

// respuesta 2
// let pers1= {
//     nombre:'javier',
//     pase :'vip',
//     dinDis:1500,
//     comprar:'no'
// }
// let pers2= {
//     nombre:'marta',
//     pase :'normal',
//     dinDis:2500,
//     comprar:'no'
// }
// let pers3= {
//     nombre:'diego',
//     pase :'entrada',
//     dinDis:1500,
//     comprar:'no'
// }
// let pers4= {
//     nombre:'esteban',
//     pase :'no',
//     dinDis:1500,
//     comprar:'si'
// }
// let pers5= {
//     nombre:'diego',
//     pase :'no',
//     dinDis:1500,
//     comprar:'no'
// }
// let pers6= {
//     nombre:'matias',
//     pase :'no',
//     dinDis:500,
//     comprar:'si'
// }

// function entrada (persona){
//     if (persona.nombre=== 'javier') {
//         console.log('bienvenido señor Javier puede ingresar');
        
//     }else if(persona.pase==='vip'||persona.pase==='normal'||persona.pase==='entrada'){
//         console.log('Bienvenido Sr '+persona.nombre+' Puede ingresar');

//     }else if(persona.pase==='no'&& persona.dinDis>1000 && persona.comprar==='si'){
//         console.log('Venta de entrada '+persona.comprar+' Bienvenido');
//     }else if (persona.pase==='no'&& persona.dinDis>1000 || persona.comprar==='no'){
//         console.log('rechazo venta de entrada hasta luego');
//     }else {
//         console.log('hasta luego');
//     }
//     return

// }

// entrada(pers4)

// 8. Realizar un juego de adivinanza estableciendo un valor entre 1 y 10 en una variable
// llamada numeroIncognita y que permita en 3 intentos adivinar el número. El usuario
// deberá ingresar un numero del 1 al 10 por pantalla en 3 intentos el cual se deberá
// guardar en una variable llamada numeroIngresado, y en cada intento deberás
// mostrarle un mensaje al usuario diciendo: “el numero ingresado es mayor, vuelve a
// intentarlo” o “el numero ingresado es menor, vuelve a intentarlo” o en caso de
// adivinar, un mensaje que diga: “Ganaste, haz adivinado el número.” No te preocupes si
// usas mucho código repetido, mas adelante veraz como realizar este juego de manera
// más eficiente.

// let numeroIncognita = 7
// let numeroIngresado =parseInt(prompt('escribe un numero del 1 al 10'))
// let intento = 3

// if (numeroIngresado===numeroIncognita){
//     console.log('Ganaste, haz adivinado el número.');

// }else if (numeroIngresado>numeroIncognita && intento!==0){
//     intento--
//     numeroIngresado =parseInt(prompt('ingresaste un numero mayor vuelve a intentar'))
//     console.log(intento);

//     if (numeroIngresado===numeroIncognita){
//         console.log('Ganaste, haz adivinado el número.');

//     }else if (numeroIngresado>numeroIncognita && intento!==0){
//         intento--
//         numeroIngresado =parseInt(prompt('ingresaste un numero mayor vuelve a intentar'))
//         console.log(intento);
//         if (numeroIngresado===numeroIncognita){
//             console.log('Ganaste, haz adivinado el número.');
//         }else if(numeroIngresado<numeroIncognita){
//             intento--
//             alert('has superado el numero de intentos');

//         }else{
//             alert('has superado el numero de intentos');
//         }


//     }else if(numeroIngresado<numeroIncognita && intento!==0){
//             numeroIngresado= parseInt(prompt('el numero ingresado es menor, vuelve a intentarlo'))
//             intento--
//             console.log(intento); 

//             if (numeroIngresado===numeroIncognita){
//                 console.log('Ganaste, haz adivinado el número.');
//             }else if(numeroIngresado<numeroIncognita){
//                 intento--
//                 alert('has superado el numero de intentos') 
    
//             }else{
//                 alert('has superado el numero de intentos') 
//             }
//         }

// }else if (numeroIngresado<numeroIncognita && intento!==0){
//     numeroIngresado= parseInt(prompt('el numero ingresado es menor, vuelve a intentarlo'))
//     intento--
//     console.log(intento); 

//     if (numeroIngresado===numeroIncognita){
//         console.log('Ganaste, haz adivinado el número.');

//     }else if (numeroIngresado>numeroIncognita && intento!==0){
//         intento--
//         numeroIngresado =parseInt(prompt('ingresaste un numero mayor vuelve a intentar'))
//         console.log(intento);

//         if (numeroIngresado===numeroIncognita){
//             console.log('Ganaste, haz adivinado el número.');
//         }else if(numeroIngresado<numeroIncognita){
//             intento--
//             alert('has superado el numero de intentos') 

//         }else{
//             alert('has superado el numero de intentos') 
//         }


//     }else if(numeroIngresado<numeroIncognita && intento!==0){
//         numeroIngresado= parseInt(prompt('el numero ingresado es menor, vuelve a intentarlo'))
//         intento--
//         console.log(intento); 

//         if (numeroIngresado===numeroIncognita){
//             console.log('Ganaste, haz adivinado el número.');
//         }else if(numeroIngresado<numeroIncognita){
//             intento--
//             alert('has superado el numero de intentos') 

//         }else{
//             alert('has superado el numero de intentos') 
//         }
//     }
  
// }

// 9. Crear un programa que permita ingresar tu edad y decir si eres un infante (0 a 12
//     años), adolescente (13 a 18 años), un mayor joven (19 a 45 años) o un anciano (mas de
//     45 años), y en caso de ingresar una edad mayor a 100 mostrar un mensaje
//     preguntando si en realidad tiene esa edad.

// let edad = parseInt(prompt('Ingresa tu edad'))

// if (edad<=12) {
//     alert('Hola segun tu edad eres Infante')
// } else if (edad>100){
//     alert('En realidad tienes esa edad?.')
    
// }else if (edad>=45){
//     alert('Hola segun tu edad eres Anciano')
// }else if (edad>=19){
//     alert('Hola segun tu edad eres un Joven Mayor')
// }else{
//     alert('Hola segun tu edad eres un Adolecente')
// }

// 10. Crear un programa que permita el ingreso de “PIEDRA”, “PAPEL” o “TIJERAS” a 2
// jugadores y muestre en pantalla cual de los 2 ha ganado o si han empatado. En caso de
// algún ingreso incorrecto mostrar por pantalla que uno de los jugadores ha hecho
// trampa

// let jugador1 = parseInt(prompt('Jugador1 Ingresa una Opcion: (1):Piedra, (2):Papel, (3):Tijera'))
// let jugador2 = parseInt(prompt('Jugador2 Ingresa una Opcion: (1):Piedra, (2):Papel, (3):Tijera'))

// if (jugador1==1 && jugador2==1) {
//     alert('empate')
    
// }else if (jugador1==2 && jugador2==1) {
//     alert('Jugador1 ha GANADO')
// }else if (jugador1==3 && jugador2==1) {
//     alert('Jugador2 ha GANADO')
// }else if (jugador1==1 && jugador2==2) {
//     alert('Jugador2 ha GANADO')
// }else if (jugador1==1 && jugador2==3) {
//     alert('Jugador1 ha GANADO')
// }else if (jugador1==3 && jugador2==2) {
//     alert('Jugador1 ha GANADO')
// }else if (jugador1==2 && jugador2==3) {
//     alert('Jugador2 ha GANADO')
// }else if (jugador1==3 && jugador2==3) {
//     alert('empate')
// }else if (jugador1==2 && jugador2==2) {
//     alert('empate')
// }else {
//     alert('Uno de los jugadores ha hecho trampa')
// }

// 11. Realizar un programa que permita el ingreso de un color y utilizando “switch” mostrar
// por pantalla los siguientes mensajes según las opciones: Blanco o Negro: Falta de
// color, Verde: El color de la naturaleza, Azul: El color del agua, Amarillo: El color del sol,
// Rojo: El color del fuego, Marrón: el color de la tierra, y para cualquier otro valor:
// Excelente elección, no lo teníamos pensado.

// let color =prompt('Hola bienvenido escoja un color')

// switch (color) {
//     case 'blanco'||'negro':
//         alert('Flata de color')
//         break;
//     case 'verde':
//         alert('El color de la Naturaleza')
//         break;
//     case 'azul':
//         alert('El color del agua')
//         break;
//     case 'amarillo':
//         alert('El color del Sol')
//         break;
//     case 'rojo':
//         alert('El color del Fuego')
//         break;
//     case 'marron':
//         alert('El color de la tierra')
//         break;
//     default:
//         alert('Excelente eleccion no lo tenia pensado')
//         break;
// }

// 12. Realizar un programa que permita el ingreso de 2 valores numéricos y una operación.
// Según sea la operación ingresada (suma, resta, multiplicación, división) el programa
// deberá mostrar en pantalla un mensaje junto con el resultado. En caso de haber
// elegido división realizar la operación siempre que sea posible o mostrar un mensaje de
// ERROR si el divisor ingresado fue 0.

// let numero1 = parseInt(prompt('Ingrese un numero'))
// let numero2 = parseInt(prompt('Ingrese el segundo numero'))
// let operador= prompt('Ingrese un operador')

// switch (operador) {
//     case '+':
//         alert('El resultado de la operacion es '+ (numero1+numero2) )
        
//         break;
//     case '-':
//         alert('El resultado de la operacion es '+ (numero1-numero2) )
        
//         break;
//     case '*':
//         alert('El resultado de la operacion es '+ (numero1*numero2) )
        
//         break;
//     case '/':
//         alert('El resultado de la operacion es '+ (numero1/numero2) )
        
//         break;

//     default:
//         alert('Has ingresado mal un operador, los operadores permitidos son: +, -, * y /')
//         break;
// }

// 13. Crear un programa que permita ingresar todos los datos de tu documento nacional de
// identidad, mostrar por pantalla un mensaje que imprima todos los datos ingresados y
// pregunte si están correctos los mismos. En caso afirmativo, crear un objeto llamado
// dni con todos los datos ingresados y mostrarlos por consola con console.table() mas un
// mensaje de registro exitoso, en caso de que la persona rechace confirmar los datos,
// mostrar un mensaje que diga: vuelva a intentarlo en 1 mes.

// let primerNombre = prompt('Escriba su primer nombre')
// let segundoNombre = prompt('Escriba su segundo nombre')
// let primerApellido = prompt('Escriba su primer Apellido')
// let segundoApellido = prompt('Escriba su segundo Apellido')
// let tipoDeSangre = prompt('Escriba su tipo de sangre')
// let fechaDeNacimiento = prompt('Escriba su Fecha de Nacimiento')
// alert('nombre completo: '+primerNombre+' '+segundoNombre+' '+primerApellido+' '+segundoApellido+' tipo de sangre '+tipoDeSangre+' Fecha de Nacimiento '+fechaDeNacimiento
// )

// let pregunta = prompt('estan correcto los daton?')

// if (pregunta=='si'){
//     let dni ={
//         numeroDeIdentidad: 'xxxxxxxx',
//         apellidos: primerApellido, segundoApellido,
//         nombre: primerNombre, segundoNombre,
//         fechaDeNac: fechaDeNacimiento,
//         tipoDSangre: tipoDeSangre
//     }

//     console.table(dni)
//     alert('Registro Exitoso')

// }else{
//     alert('vuelva a intentarlo en 1 mes.')
// }