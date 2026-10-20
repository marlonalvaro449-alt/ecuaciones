function calcular() {
    
    // 1. Obtener los valores de las cajas de texto
    let a = parseFloat(document.getElementById("valA").value);
    let b = parseFloat(document.getElementById("valB").value);
    let c = parseFloat(document.getElementById("valC").value);
    let divRespuesta = document.getElementById("respuesta");

    // 2. Primera validación: Si (2 * a) es igual a 0
    if ((2 * a) == 0) {
        divRespuesta.innerHTML = "Error: El valor de 2 * a es igual a 0";
        return;
    }

    // 3. Calcular la parte de adentro de la raíz (b^2 - 4ac)
    let discriminante = (b * b) - (4 * a * c);

    // 4. Segunda validación: Si es menor a 0 no hay solución
    if (discriminante < 0) {
        divRespuesta.innerHTML = "no hay solución";
    } else {
        // Si no es menor a 0, calculamos la raíz usando Math.sqrt
        let raiz = Math.sqrt(discriminante);

        let x1 = (-b + raiz) / (2 * a);
        let x2 = (-b - raiz) / (2 * a);

        // Mostramos el resultado
        if (x1 == x2) {
            divRespuesta.innerHTML = "Única respuesta: x = " + x1;
        } else {
            divRespuesta.innerHTML = "x1 = " + x1 + "<br>x2 = " + x2;
        }
    }
}