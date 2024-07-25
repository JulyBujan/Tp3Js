let arreglo = [];
let ciudad;

do {
    ciudad = prompt("Ingrese una ciudad:");
    if (ciudad != null){
        arreglo.push(ciudad);
    }
} while (ciudad != null);

document.write("La longitud del arreglo es: " + arreglo.length );
document.write(`<ul>`);
document.write("<li>La primer posiciòn es :" + arreglo[0] + "</li>");

if (arreglo.length >= 3) {
    document.write("<li>La tercer posiciòn es :" + arreglo[2] + "</li>");
}

document.write("<li>La última posiciòn es :" + arreglo[arreglo.length - 1] + "</li>");
arreglo.push("París");
document.write("<li>La última posiciòn es :" + arreglo[arreglo.length - 1] + "</li>");
document.write("<li>La segunda posiciòn es :" + arreglo[1] + "</li>");
document.write(`</ul>`);

if (arreglo.length >= 2) {
    arreglo[1]="Barcelona";
}

document.write(`<h2>Lista de ciudades</h2>`);
document.write(`<ul>`);
for (let i = 0; i < arreglo.length; i++) {
  document.write(`<li> ${arreglo[i]}</li>`);
}
document.write(`</ul>`);
