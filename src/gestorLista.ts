import promptSync from 'prompt-sync';
import { Estado } from './types.js';
import { editarTarea } from './gestorTareas.js';

const prompt = promptSync({ sigint: true });

export function agregarTareaALista(arr: any[], tarea: any): void {
  arr.push(tarea);
  console.log("Tarea agregada con éxito!");
  prompt("Presione Enter para continuar...");
}

export function verTareaFiltro(arr: any[], estadoBuscado: Estado): void {
    let bandera = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].getEstado() === estadoBuscado + 1) {
          console.log(`Tarea N° [${i + 1}]: ${arr[i].getNombre()}`);
          bandera = true;
        }
    }
    if (bandera === false) {
        console.log("No hay tareas con ese estado");
        console.log("Presione enter para continuar");
        const entrada = prompt("");
    } else { 
        // Llama a la función del módulo gestionTareas
        detalleTarea(arr);
    }
}

export function verTodasLasTareas(arr: any[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(`Tarea N° [${i + 1}]: ${arr[i].getNombre()}`);
    }
    detalleTarea(arr);
}

export function buscarTarea(arr: any[], entrada: string): void {
    let bandera: boolean = false;
    entrada = entrada.toLowerCase();
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nombre.toLowerCase().indexOf(entrada) !== -1) {
            console.log(`Tarea N° [${i + 1}]: ${arr[i].nombre}`);
            bandera = true;
        }
    }
    if (bandera === false) {
        console.log("No se encontraron tareas con ese nombre");
    }
}

export function detalleTarea(arrTareas: any[]): void {
    let entrada: string | null= prompt("Ingrese el número de tarea para ver en detalle o '0' para volver al menu: ")?? "";
    //"Si el prompt retorna null, usa un string vacío como valor por defecto"
    let opMenuesAdentro: number = parseInt(entrada);
    while (isNaN(opMenuesAdentro) || opMenuesAdentro < 0 || opMenuesAdentro > arrTareas.length) {
        entrada = prompt("Opción invalida, intentelo de nuevo: ");
        opMenuesAdentro = parseInt(entrada);
    }

    if (opMenuesAdentro !== 0) {
        
        const tarea = arrTareas[opMenuesAdentro - 1];
        const fechaVto = tarea.getFechaVencimiento();
        console.log(`Nombre: ${tarea.getNombre()}`);
        console.log(`Descripción: ${tarea.getDescripcion()}`);
        if (isNaN(tarea.getFechaVencimiento())) {
          console.log(`Fecha de vencimiento: Sin datos`);
        } else {
         console.log(`Fecha de vencimiento: ${fechaVto.toLocaleDateString()}`);
        }
        console.log(`Fecha de edición: ${tarea.getFechaEdicion()}`);
        console.log(`Fecha de creación: ${tarea.getFechaCreacion()}`);
        console.log(`Dificultad: ${tarea.getDificultad()}`);
        console.log(`Estado: ${tarea.getEstado()}`);
        
        entrada = prompt("Presione enter para continuar o E para editar la tarea: ");

        while (entrada !== "e" && entrada !== "E" && entrada !== "") {
            console.log("Opción invalida, intentelo de nuevo");
            entrada = prompt("Ingrese la opción: ");
        }

        if (entrada === "e" || entrada === "E") {
            editarTarea(opMenuesAdentro, arrTareas);
        } else {
            console.log("Volviendo al menu...");
        }
    } else {
        console.log("Volviendo al menu...");
    }
}