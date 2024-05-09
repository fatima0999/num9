// Solicita al usuario que ingrese el número de la tabla de multiplicar
var tabla = prompt("Ingrese el número para generar la tabla de multiplicar:");

// Bucle for para generar la tabla de multiplicar del número ingresado
for (var i = 1; i < 10; i++) {
    // Multiplica el número de la tabla por el número del ciclo actual e imprime el resultado
    document.write(tabla + "x" + i + "=" + (tabla * i) + "<br>");
}
