import { Tarea } from "./tareas.js";
import { Estado, Dificultad } from "./types.js";
import { formatoFecha, control} from "./utils.js";

import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });


/**
 * Crea una nueva tarea a partir de los datos proporcionados
 */
export function crearTareaConDatos(
  nombre: string,
  descripcion: string,
  dificultad: Dificultad,
  estado: Estado,
  fechaVencimiento: Date
): Tarea {    //devuelve un objeto Tarea
  const nuevaTarea = new Tarea(nombre, descripcion, dificultad, estado, fechaVencimiento);
  nuevaTarea.setDificultad(dificultad);
  nuevaTarea.setEstado(estado);
  nuevaTarea.setFechaVencimiento(fechaVencimiento);
  nuevaTarea.setDescripcion(descripcion);
  nuevaTarea.setNombre(nombre);
  return nuevaTarea;
}


export function editarTarea(indice: number, arrTareas: any[]): void {
    let entrada: string | null = "";
    let tempFecha: Date;

    console.log('Ingrese un espacio para vaciar el campo (o ir al valor por default), enter para conservar el valor o una nueva entrada para modificarlo: ');
    entrada = prompt("Ingrese la nueva descripcion de la tarea: ");

    if (entrada === " ") { 
        arrTareas[indice - 1].setDescripcion(""); 
    } else if (entrada !== "") { 
        arrTareas[indice - 1].setDescripcion(entrada!);
    }

    entrada = prompt("Ingrese la nueva dificultad de la tarea [1] Fácil [2] Media [3] Dificil: ");
    if (entrada === " ") { 
        arrTareas[indice - 1].setDificultad(Dificultad.FACIL); 
    } else if (entrada !== "") { 
        entrada = control(entrada);
        arrTareas[indice - 1].setDificultad(parseInt(entrada) as Dificultad);
    }

    entrada = prompt("Ingrese el nuevo estado de la tarea [1] Pendiente [2] En curso [3] Terminada: ");
    if (entrada === " ") { 
        arrTareas[indice - 1].setEstado(Estado.PENDIENTE); 
    } else if (entrada !== "") { 
        entrada = control(entrada);
        arrTareas[indice - 1].setEstado(parseInt(entrada) as Estado);
    }

    entrada = prompt(`Ingrese nueva fecha de vencimiento: (formato: aaaa/mm/dd): `);
    tempFecha = new Date(entrada!);

    if (entrada === " ") { 
        arrTareas[indice - 1].setFechaVencimiento("Sin datos"); 
    } else if (isNaN(tempFecha.getTime())) { 
        console.log("Fecha inválida, se guardará como 'Sin Datos'");
        arrTareas[indice - 1].setFechaVencimiento("Sin datos");
    } else { 
        arrTareas[indice - 1].setFechaVencimiento(formatoFecha(tempFecha)); 
    }

    console.log("Tarea editada con éxito!");
    console.log("Presione enter para continuar");
    prompt("");
}


