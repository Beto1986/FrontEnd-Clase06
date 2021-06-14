// 0- Agregar en el ejercicio de home banking la posibilidad de seguir operando hasta que el usuario decida salir.

const usuario = "usuario";
let saldo = 1000; //Asumimos un saldo de $1000
let pass = 1234; //Asumimos contraseña numérica por ser cajero automático.
let usuarioIngresado = prompt("Ingrese su usuario");
let respuesta = "si";

if (usuarioIngresado !== usuario) {
    alert("Usuario incorrecto, el programa se cerrará.");
} else {
    let passIngresado = parseInt(prompt("Ingrese su contraseña"));
    if (passIngresado !== pass) {
        alert("Contraseña incorrecta, el programa se cerrará.");
    } else {
        while (respuesta === "si") { // para realizar mas de una acción.
            let opcion = parseInt(prompt("Elija una de las siguientes opciones:  1- Ver saldo actual  |  2-     Retirar dinero | 3- Depositar dinero en su cuenta | 4- Cambiar su clave."));
            switch (opcion) {
                case 1:
                    alert("Tu saldo actual es de $" + saldo);
                    break;
                case 2:
                    let retiro = parseInt(prompt("Ingrese el monto a retirar"));
                    if (retiro > saldo) {
                        alert("El monto ingresado es mayor a su saldo actual. Su saldo actual es de $" + saldo);
                    } else {
                        saldo = saldo - retiro;
                        alert("Usted retiró $" + retiro + ". Su saldo actual es de $" + saldo);
                    }
                    break;
                case 3:
                    let deposito = parseInt(prompt("Ingrese el monto a depositar"));
                    saldo = saldo + deposito;
                    alert("Usted ingresó $" + deposito + ". Su nuevo saldo es de $" + saldo);
                    break;
                case 4:
                    let nuevoPass = parseInt(prompt("Ingrese su nueva clave"));
                    let nuevoPassBis = parseInt(prompt("Reingrese su clave"));
                    if (nuevoPass === nuevoPassBis) {
                        pass = nuevoPass;
                        alert("Su nueva clave es: " + pass);
                    } else {
                        alert("Las claves ingresadas no coinciden. El programa se cerrará");
                    }
                    break;
                default:
                    alert("Opción no válida. El programa se cerrará.")
            } // fin switch

            respuesta = prompt("Desea realizar otra operación? - (si/no)");
            while (respuesta !== "si" && respuesta !== "no") { // valido hasta que ingrese si o no
                alert("Debe ingresar por 'si' o por 'no'");
                respuesta = prompt("Desea realizar otra operación? - (si/no)");
            }

        } // fin while para realizar más acciones
    } // fin validación pass
} // fin validación usuario

// 1- Mostrar los primeros 10 números naturales. (1,2,3,4,5,6,7,8,9,10). 
​
for (let i = 1; i <= 10; i++) {
    console.log(i);
}​
// 2- Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.
​
let suma = 0;
let numero;​
for (let i = 0; i < 5; i++) {
    numero = parseInt(prompt("Ingrese un numero"));
    console.log("Iteracion n " + i + "Valor de numero: " + numero);
    suma = suma + numero;
    console.log("Iteracion n " + i + "Valor de suma: " + suma);
}​
alert(suma);

// 3- Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
​
let suma = 0;
let numero;
let cantidad = parseInt(prompt("Ingrese cantidad de numeros"));
console.log(cantidad);​
for (let i = 0; i < cantidad; i++) {
    numero = parseInt(prompt("Ingrese un numero"));
    console.log("Iteracion n " + i + "Valor de numero: " + numero);
    suma = suma + numero;
    console.log("Iteracion n " + i + "Valor de suma: " + suma);
}​
alert(suma);​
// 4- Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.

let suma = 0;
let input;​
while (input !== 0) {
    input = parseInt(prompt("Ingrese un numero, si quiere finalizar ingrese 0."));
    console.log(input);
    suma = suma + input;
}
alert(suma);​
// 5- Solicitar al usuario que ingrese tantos números como desee y luego mostrar el promedio de ellos.

let suma = 0;
let input = true;
let contador = 0;​
while (input !== 0) {
    input = parseInt(prompt("Ingrese un numero, si quiere finalizar ingrese 0."));
    suma = suma + input;
    contador = contador + 1;
}
alert(suma / (contador - 1));​
// 6- Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido.

let numero = parseInt(prompt("Ingrese un número"));
contador = 0;

while (contador !== numero) {
    contador = contador + 1;
    alert(contador);
}

// 7- Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. //(Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros.

let num1 = parseInt(prompt("Ingrese primer número"));
let num2 = parseInt(prompt("Ingrese segundo número"));

for (let i = num1 + 1; i < num2; i++) {
    console.log(i);
}

// 8- Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.
​
let mayor = 0;
let cantidad = parseInt(prompt("Ingrese la cantidad de numeros."));
let numero;​
for (i = 0; i < cantidad; i++) {
    numero = parseInt(prompt("Ingrese un numero."));
    if (numero > mayor) {
        mayor = numero;
    }
}​
alert(mayor);

// 9- Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.

let i = 1;
let numero_menor = 0;
let num = 0;
let total_nros = parseInt(prompt("Ingrese la cantidad de números en los que desea encontrar el menor: "));

while (i <= total_nros) {
    num = parseInt(prompt("Ingrese un número"));
    if (i == 1) { // corresponde al primer número con el que arranco, va a ser el menor en esta instancia
        numero_menor = num;
    } else if (num < numero_menor) { // si no es la primer vez, comparo num ingresado vs num menor anterior.
        numero_menor = num;
    }
    i = i + 1;
}

alert("El número menor es: " + numero_menor);

// 10- Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)

let num = parseInt(prompt("Ingrese un número"));
let cadena = "*";
let i = 1;

while (i < num) {
    cadena = cadena + "*"; // por cada vuelta, al string "cadena(*)", le agrego un "*
    i = i + 1;
}
alert("El número ingresado en asteriscos es: " + cadena);

// 11- Realizar un programa que pida la base y el exponente y calcule la potencia. 

i = 1;
potencia = 1;

let base = parseInt(prompt("Ingrese la base"));
let exponente = parseInt(prompt("Ingrese el exponente"));

while (i <= exponente) {
    potencia = (potencia * base);
    i = i + 1;
}

alert("La potencia es: " + potencia);

// 12- Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )

let factorial = 0;
let factorialusuario = 0;
let num = parseInt(prompt("Ingrese un número"));
factorial = num;
factorialusuario = num;

while (num > 1) { // como el factorial por 1 es lo mismo , lo uso para terminar el ciclo.
    num = num - 1; // al numero factorial ingresado le resto 1 para luego multiplicarlo por el acumulado
    factorial = factorial * num;
}

alert("El factorial de " + factorialusuario + "! es: " + factorial);

// 13- Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)

let num = parseInt(prompt("Ingrese un número"));
let divisor = 0;
let resto = 0;
let guardodivisor = "";
divisor = num;

while (num >= 1) {
    resto = (divisor % num);
    if (resto === 0) {
        if (num === 1) { // quiere decir que es el último de los divisibles, entonces le saco la ","
            guardodivisor = guardodivisor + num;
        } else {
            guardodivisor = guardodivisor + num + ",";
        }
    }
    num = num - 1;
}

alert("Los números divosores de " + divisor + " son los siguientes: " + guardodivisor);

// 14- Solicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
//H
//O
//L
//A

let num = parseInt(prompt("Ingrese un número"));
let texto = prompt("Ingrese un texto");
let textoseleccionado = "";

for (let i = 0; i < num; i++) {
    textoseleccionado = textoseleccionado + texto.charAt(i).toUpperCase() + "\n";
}

alert(textoseleccionado);

// 15- Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas. 

let producto = "";
let respuesta = "";
let guardoproducto = "";

producto = prompt("Ingrese un producto");
respuesta = prompt("Desea agregar más productos? - (si/no)");

while (respuesta !== "si" && respuesta !== "no") { // valido hasta que ingrese si o no
    alert("Debe ingresar por 'si' o por 'no'");
    respuesta = prompt("Desea agregar más productos? - (si/no)");
}
guardoproducto = guardoproducto + producto + ","

while (respuesta === "si") {
    producto = prompt("Ingrese un producto");
    respuesta = prompt("Desea agregar más productos? - (si/no)");
    while (respuesta !== "si" && respuesta !== "no") { // valido hasta que ingrese si o no
        alert("Debe ingresar por 'si' o por 'no'");
        respuesta = prompt("Desea agregar más productos? - (si/no)");
    }
    guardoproducto = guardoproducto + producto + ","
}

if (respuesta === "no") {
    alert("Los productos ingresados son: " + guardoproducto);
}

// 16- Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.

let guardonumeros = "";
let multiplo3 = 0;
let num = 0;
let multiploencontrado = false;

while (multiploencontrado === false) {

    num = parseFloat(prompt("Ingrese un número"));

    if (num % 3 == 0) {
        //alert("Es un numero entero");
        guardonumeros = guardonumeros + num; // quiere decir que encontró el multiplo de 3 porque es entero
        multiplo3 = num; // encuentra el multiplo de 3.
        multiploencontrado = "True"; // cambio el estado a encontrado
    } else {
        //alert("Es un numero decimal");
        guardonumeros = guardonumeros + num + ","; // quiere decir que no encontró el múltiplo de 3 porque es decimal
    }
}

alert("Los números ingresados fueron: " + guardonumeros + " y el multiplo de 3 encontrado es: " + multiplo3);