let numero = prompt("Ingrese un número:");
document.write(parImpar(numero));


function parImpar(parametro) {
    let entero = parseInt(parametro);   
    if (entero %2 == 0) {
        return "El número ingresado es par.";
    } else {
        return "El número ingresado es impar.";
    }
  }