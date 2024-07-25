let numero = parseInt(prompt("Ingrese un numero:"));

document.write(tablaMultiplicar(numero));

function tablaMultiplicar(parametro) {
    let producto = "<ul>"
    for (let i=1; i <= 10; i++){
        producto = producto + "<li>"+ parametro + "x" + i +"="+ parametro*i +"</li>";
    }
    producto = producto + "</ul>"
    return producto;
}