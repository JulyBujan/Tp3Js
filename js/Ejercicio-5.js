let cadenaTexto = prompt("Ingrese una cadena de texto:");
document.write(mayMin(cadenaTexto));



function mayMin(parametro) {
    let mayusculas ="";
    let minusculas ="";
    for (let i=0; i < parametro.length; i++) {
        if (parametro.charAt(i) == parametro.charAt(i).toUpperCase()) {
            mayusculas = mayusculas + parametro.charAt(i);
        }
        if (parametro.charAt(i) == parametro.charAt(i).toLowerCase()) {
            minusculas = minusculas + parametro.charAt(i);
        }
    }    

    if (parametro == mayusculas) {
        return "La cadena está formada solo por mayúsculas.";
    } else if (parametro == minusculas) {
        return "La cadena está formada solo por minúsculas.";
    } else {
        return "La cadena está formada por una mezcla de ambas.";
    }
}

