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
    this.#fechaEdicion = new Date();
  }

  getDescripcion(): string {
    return this.#descripcion;
  }

  setDescripcion(d: string): void {
    this.#descripcion = d;
    this.#fechaEdicion = new Date();
  }

  getDificultad(): Dificultad {
    return this.#dificultad;
  }

  setDificultad(d: Dificultad): void {
    this.#dificultad = d;
    this.#fechaEdicion = new Date();
  }

  getEstado(): Estado {
    return this.#estado;
  }

  setEstado(e: Estado): void {
    this.#estado = e;
    this.#fechaEdicion = new Date();
  }

  getFechaCreacion(): string {
    return formatoFecha(this.#fechaCreacion);
  }

  getFechaEdicion(): string {
    return formatoFechaEdicion(this.#fechaEdicion);
  }

  getFechaVencimiento(): string {
    return formatoFecha(this.#fechaVencimiento);
  }

  setFechaVencimiento(f: Date): void {
    this.#fechaVencimiento = f;
    this.#fechaEdicion = new Date();
  }
}
