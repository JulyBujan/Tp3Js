let ladoA = parseInt(prompt("Ingrese un lado del rectangulo:"));
let ladoB = parseInt(prompt("Ingrese el otro lado del rectangulo:"));
document.write("El perimetro del rectangulo es: " + perimetro(ladoA,ladoB));

function perimetro(ladoA, ladoB) {
    return 2*(ladoA+ladoB);    
}