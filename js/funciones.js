function saludarAlumno() {    

    let nombreDeAlumno = prompt("Buenas! es un placer tenerte con nosotros. Por favor ingresa tu nombre.")
        alert("A continuacion podras seguir con la entrega. Muchas gracias por ser responsable " + nombreDeAlumno);
        return;
      }
    
saludarAlumno();

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
    const nombreDelAlumno = prompt("Nuevamente escriba su nombre para que se guarde en el registro muchas gracias.");

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

function verProfesoresMasEntregas() {
    const profesoresDeCatedra = [ " Marcelo: Profesor adjunto ", " Lucas: Profesor adjunto ", " Enri: Tutor "];
    const alumnosQueEntregaronEnClase = [" Alumno: Enrique Alegre ", " Alumno: Marcelo Caliz ", " Alumno: Pepe Mujica"];
    const verProfesoresMasEntregas = profesoresDeCatedra.concat(alumnosQueEntregaronEnClase)
    alert(verProfesoresMasEntregas);    

    let mensaje = "Nombres de los profesores de catedra y alumnos que entregaron en clase. Sera redireccionado para seguir con la entega muchas gracias. \n\n";
    alert(mensaje);

}