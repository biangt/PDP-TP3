//este es archvo tareas
import { Dificultad, Estado } from "./types.js";
import { formatoFecha, formatoFechaEdicion } from "./utils.js";

// Interfaz que define los métodos que debe tener una tarea
export interface ITarea {
  getNombre(): string;
  setNombre(n: string): void;
  getDescripcion(): string;
  setDescripcion(d: string): void;
  getDificultad(): Dificultad;
  setDificultad(d: Dificultad): void;
  getEstado(): Estado;
  setEstado(e: Estado): void;
  getFechaCreacion(): string;
  getFechaEdicion(): string;
  getFechaVencimiento(): string;
  setFechaVencimiento(f: Date): void;
}

// Clase que implementa la interfaz ITarea
export class Tarea implements ITarea {
  // Campos privados (solo accesibles dentro de la clase)
  #nombre: string;
  #descripcion: string;
  #dificultad: Dificultad;
  #estado: Estado;
  #fechaCreacion: Date;
  #fechaEdicion: Date;
  #fechaVencimiento: Date ;

  constructor(nombre: string, descripcion = "Sin descripción", dificultad: Dificultad = Dificultad.FACIL, estado: Estado = Estado.PENDIENTE, fechaVencimiento: Date) {
    this.#nombre = nombre;
    this.#descripcion = descripcion;
    this.#dificultad = dificultad;
    this.#estado = estado;
    this.#fechaCreacion = new Date();
    this.#fechaEdicion = new Date();
  this.#fechaVencimiento = fechaVencimiento; // usa la que el usuario pasó
  }

  // Métodos de acceso y modificación

  getNombre(): string {
    return this.#nombre;
  }

  setNombre(n: string): void {
    this.#nombre = n;
  }

  getDescripcion(): string {
    return this.#descripcion;
  }

  setDescripcion(d: string): void {
    this.#descripcion = d;
  }

  getDificultad(): Dificultad {
    return this.#dificultad;
  }

  setDificultad(d: Dificultad): void {
    this.#dificultad = d;
  }

  getEstado(): Estado {
    return this.#estado;
  }

  setEstado(e: Estado): void {
    this.#estado = e;
  }

  getFechaCreacion(): string {
    return formatoFecha(this.#fechaCreacion);
  }

  setFechaEdicion(fecha: Date): void {
  this.#fechaEdicion = fecha;
  }


  getFechaEdicion(): string {
    return formatoFechaEdicion(this.#fechaEdicion);
  }

 getFechaVencimiento(): string {
    // Solo necesita chequear el año 9999, porque main.ts ya validó
    if (this.#fechaVencimiento.getFullYear() === 9999) {
        return "Sin datos";
    }
    // Si no es 9999, es una fecha válida
    return formatoFecha(this.#fechaVencimiento);
}


  setFechaVencimiento(f: Date): void {
    this.#fechaVencimiento = f;
  }
}
