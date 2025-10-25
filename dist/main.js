//este es el main
import promptSync from 'prompt-sync';
import { crearTareaConDatos } from './gestorTareas.js';
import { verTareaFiltro, verTodasLasTareas, agregarTareaALista, buscarTarea } from './gestorLista.js';
import { control } from './utils.js';
const prompt = promptSync({ sigint: true });
function main() {
    const tareas = [];
    let opcion;
    do {
        console.clear();
        console.log(`
    ██████╗░██╗███████╗███╗░░██╗██╗░░░██╗███████╗███╗░░██╗██╗██████╗░░█████╗░  ░█████╗░██╗░░░░░
    ██╔══██╗██║██╔════╝████╗░██║██║░░░██║██╔════╝████╗░██║██║██╔══██╗██╔══██╗  ██╔══██╗██║░░░░░
    ██████╦╝██║█████╗░░██╔██╗██║╚██╗░██╔╝█████╗░░██╔██╗██║██║██║░░██║██║░░██║  ███████║██║░░░░░
    ██╔══██╗██║██╔══╝░░██║╚████║░╚████╔╝░██╔══╝░░██║╚████║██║██║░░██║██║░░██║  ██╔══██║██║░░░░░
    ██████╦╝██║███████╗██║░╚███║░░╚██╔╝░░███████╗██║░╚███║██║██████╔╝╚█████╔╝  ██║░░██║███████╗
    ╚═════╝░╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚══╝╚═╝╚═════╝░░╚════╝░  ╚═╝░░╚═╝╚══════╝
    
    ███╗░░░███╗███████╗███╗░░██╗██╗░░░██╗  ██████╗░███████╗  ████████╗░█████╗░██████╗░███████╗░█████╗░░██████╗██╗
    ████╗░████║██╔════╝████╗░██║██║░░░██║  ██╔══██╗██╔════╝  ╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██╔══██╗██╔════╝██║
    ██╔████╔██║█████╗░░██╔██╗██║██║░░░██║  ██║░░██║█████╗░░  ░░░██║░░░███████║██████╔╝█████╗░░███████║╚█████╗░██║
    ██║╚██╔╝██║██╔══╝░░██║╚████║██║░░░██║  ██║░░██║██╔══╝░░  ░░░██║░░░██╔══██║██╔══██╗██╔══╝░░██╔══██║░╚═══██╗╚═╝
    ██║░╚═╝░██║███████╗██║░╚███║╚██████╔╝  ██████╔╝███████╗  ░░░██║░░░██║░░██║██║░░██║███████╗██║░░██║██████╔╝██╗
    ╚═╝░░░░░╚═╝╚══════╝╚═╝░░╚══╝░╚═════╝░  ╚═════╝░╚══════╝  ░░░╚═╝░░░╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚═════╝░╚═╝ `);
        console.log(`
╔══════════════════════════════╗
║   1. Ver tareas              ║
║   2. Buscar tarea            ║
║   3. Agregar tarea           ║
║   0. Salir                   ║
╚══════════════════════════════╝
    `);
        opcion = parseInt(prompt("Elija opción: "));
        switch (opcion) {
            case 1:
                console.clear();
                if (tareas.length === 0) {
                    console.log("No hay tareas para mostrar");
                    prompt("Presione enter para continuar...");
                }
                else {
                    console.log(`[1] Todas  [2] Pendientes  [3] En curso  [4] Terminadas`);
                    const op2 = parseInt(prompt("Seleccione: "));
                    if (op2 === 1) {
                        verTodasLasTareas(tareas);
                    }
                    else if (op2 >= 2 && op2 <= 4)
                        verTareaFiltro(tareas, (op2 - 1));
                    prompt("Enter para continuar...");
                }
                break;
            case 2:
                if (tareas.length === 0) {
                    console.log("No hay tareas para buscar");
                    prompt("Presione enter para continuar...");
                }
                else {
                    const texto = prompt("Ingrese parte del nombre: ");
                    buscarTarea(tareas, texto);
                    prompt("Enter para continuar...");
                }
                break;
            // En main.ts - dentro del switch (opcion)
            case 3:
                let nombre = prompt("Ingrese el nombre de la tarea (Al menos 4 caracteres):");
                while (nombre.length < 4) {
                    console.log("Nombre invalido o vacio, intentelo de nuevo");
                    nombre = prompt("Ingrese el nombre de la tarea (al menos 4 caracteres):");
                }
                let descripcion = prompt("Descripción: ");
                let dificultadStr = prompt("Dificultad [1] Fácil [2] Media [3] Difícil: ");
                dificultadStr = control(dificultadStr);
                let estadoStr = prompt("Estado [1] Pendiente [2] En curso [3] Terminada: ");
                estadoStr = control(estadoStr);
                let fechaStr = prompt("Fecha de vencimiento (aaaa-mm-dd): ") || "";
                let fechaVencimientoObj;
                if (fechaStr === "") {
                    fechaVencimientoObj = new Date("9999-12-31");
                }
                else {
                    // Dividir la fecha en partes para crear con hora local
                    const partes = fechaStr.split("-");
                    if (partes.length === 3) {
                        const anio = parseInt(partes[0]);
                        const mes = parseInt(partes[1]) - 1; // Los meses empiezan en 0
                        const dia = parseInt(partes[2]);
                        // Crear fecha con hora local
                        const tempDate = new Date(anio, mes, dia);
                        if (isNaN(tempDate.getTime())) {
                            console.log("Fecha inválida ingresada, se guardará como 'Sin datos'.");
                            fechaVencimientoObj = new Date(9999, 11, 31); // También con hora local
                        }
                        else {
                            fechaVencimientoObj = tempDate;
                        }
                    }
                    else {
                        console.log("Formato de fecha incorrecto, se guardará como 'Sin datos'.");
                        fechaVencimientoObj = new Date(9999, 11, 31);
                    }
                }
                const nueva = crearTareaConDatos(nombre, descripcion, parseInt(dificultadStr), parseInt(estadoStr), fechaVencimientoObj);
                agregarTareaALista(tareas, nueva);
                break;
            case 0:
                console.log("Hasta luego :)");
                break;
        }
    } while (opcion !== 0);
}
main();
//# sourceMappingURL=main.js.map