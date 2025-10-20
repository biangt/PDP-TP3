import promptSync from 'prompt-sync';
import { Estado, Dificultad } from './types.js';
import { crearTareaConDatos } from './gestorTareas.js';
import { verTareaFiltro, verTodasLasTareas, agregarTareaALista, buscarTarea } from './gestorLista.js';

const prompt = promptSync({ sigint: true });

function main(): void {
  const tareas: any[] = [];
  let opcion: number;

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
        }else{
        console.log(`[1] Todas  [2] Pendientes  [3] En curso  [4] Terminadas`);
        const op2 = parseInt(prompt("Seleccione: "));
        if (op2 === 1) {
          verTodasLasTareas(tareas);
        }else if (op2 >= 2 && op2 <= 4) verTareaFiltro(tareas, op2 as Estado);
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

      case 3:

        const nueva = crearTareaConDatos(
          prompt("Nombre: "),
          prompt("Descripción: "),
          parseInt(prompt("Dificultad [1] Fácil [2] Media [3] Difícil: ")) as Dificultad,
          parseInt(prompt("Estado [1] Pendiente [2] En curso [3] Terminada: ")) as Estado,
          new Date(prompt("Fecha de vencimiento (aaaa/mm/dd): ")!)

        );
        agregarTareaALista(tareas, nueva);
        break;

      case 0:
        console.log("Hasta luego 👋");
        break;
    }
  } while (opcion !== 0);
}

main();
