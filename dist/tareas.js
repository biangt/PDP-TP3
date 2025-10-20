import { Dificultad, Estado } from "./types.js";
import { formatoFecha, formatoFechaEdicion } from "./utils.js";
// Clase que implementa la interfaz ITarea
export class Tarea {
    // Campos privados (solo accesibles dentro de la clase)
    #nombre;
    #descripcion;
    #dificultad;
    #estado;
    #fechaCreacion;
    #fechaEdicion;
    #fechaVencimiento;
    constructor(nombre, descripcion = "Sin descripción", dificultad = Dificultad.FACIL, estado = Estado.PENDIENTE, fechaVencimiento) {
        this.#nombre = nombre;
        this.#descripcion = descripcion;
        this.#dificultad = dificultad;
        this.#estado = estado;
        this.#fechaCreacion = new Date();
        this.#fechaEdicion = new Date();
        this.#fechaVencimiento = fechaVencimiento; // usa la que el usuario pasó
    }
    // Métodos de acceso y modificación
    getNombre() {
        return this.#nombre;
    }
    setNombre(n) {
        this.#nombre = n;
        this.#fechaEdicion = new Date();
    }
    getDescripcion() {
        return this.#descripcion;
    }
    setDescripcion(d) {
        this.#descripcion = d;
        this.#fechaEdicion = new Date();
    }
    getDificultad() {
        return this.#dificultad;
    }
    setDificultad(d) {
        this.#dificultad = d;
        this.#fechaEdicion = new Date();
    }
    getEstado() {
        return this.#estado;
    }
    setEstado(e) {
        this.#estado = e;
        this.#fechaEdicion = new Date();
    }
    getFechaCreacion() {
        return formatoFecha(this.#fechaCreacion);
    }
    getFechaEdicion() {
        return formatoFechaEdicion(this.#fechaEdicion);
    }
    getFechaVencimiento() {
        return formatoFecha(this.#fechaVencimiento);
    }
    setFechaVencimiento(f) {
        this.#fechaVencimiento = f;
        this.#fechaEdicion = new Date();
    }
}
//# sourceMappingURL=tareas.js.map