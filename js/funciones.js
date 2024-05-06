function mostrarEntrega() {
    let mensaje = "Entregas de trabajos hasta el momento: \n\n";

    entregas.forEach(el => {
        if (el.aTiempo) {
            mensaje += el.nombre + " Entrego el TP2 " + el.horaDeEntrega + "\n"
        } else {
            mensaje += el.nombre + " Entrega fuera de tiempo. La hora establecida era " + el.horaDeEntrega + "\n"
        }
    });

    alert(mensaje);
};

function registrarEntrega() {
    const nombreDelAlumno = prompt("Identifique su legajo a partir de su nombre");

    if (entregas.some(el => el.nombre === nombreDelAlumno)) {
        alert("El alumno " + nombreDelAlumno + " ya se encuentra en linea ")
    } else {
        const fechaDeEntrega = new Date();

        const fechaFormateada = fechaDeEntrega.getHours() + " y " + fechaDeEntrega.getMinutes();

        const cierreEntrega = new Date(2024, 4, 6, 22, 55, 0);

        const tiempoLimite = cierreEntrega - fechaDeEntrega;

        let responsabilidad;

        if (tiempoLimite > 0) {
            responsabilidad = true;
        } else {
            responsabilidad = false;
        };

        const nuevaEntrega = new Entrega (entregas.length + 1, nombreDelAlumno, fechaFormateada, responsabilidad);

        entregas.push(nuevaEntrega);

        if (responsabilidad) {
            alert("El alumno " + nuevaEntrega.nombre + " ha realizado la entrega de forma responsable.");
        } else {
            alert("El alumno " + nuevaEntrega.nombre + " ha realizado la entrega fuera de la fecha establecida");
        };
    };
};