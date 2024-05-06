const entregas = [
    {
        id: 1,
        nombre: "Enri",
        horaDeEntrega: "22 y 30",
        aTiempo: true,
    },
    {
        id: 2,
        nombre: "Marcelo",
        horaDeEntrega: "23 y 55",
        aTiempo: false,
    },
    {
        id: 3,
        nombre: "Pepe",
        horaDeEntrega: "09 y 15",
        aTiempo: true,
    },
];

class Entrega {
    constructor(id, nombre, horaDeEntrega, aTiempo) {
        this.id = id;
        this.nombre = nombre;
        this.horaDeEntrega = horaDeEntrega;
        this.aTiempo = aTiempo;
    };
};




let opcion;

do {

    opcion = parseInt(prompt("Bienvenido al sistema de entrega de trabajos practicos a continuacion elija la opcion segun la accion a realizar\n\n1. Para ver la responsabilidad de los alumnos.\n2. Para registrar una nueva entrega.\n\nPara salir, ingrese 0"));

    switch (opcion) {
        case 0:
            alert("Se agradece la visita al intento de trabajo!")
            break;
        case 1:
            mostrarEntrega();
            break;
        case 2:
            registrarEntrega();
            break;
        default:
            alert("Opción ingresada no válida. Ingrese una opción de las mencionadas.");
            break;
    };

} while (opcion !== 0);