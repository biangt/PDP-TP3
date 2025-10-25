//este es archvo tareas
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
    }
    getDescripcion() {
        return this.#descripcion;
    }
    setDescripcion(d) {
        this.#descripcion = d;
    }
    getDificultad() {
        return this.#dificultad;
    }
    setDificultad(d) {
        this.#dificultad = d;
    }
    getEstado() {
        return this.#estado;
    }
    setEstado(e) {
        this.#estado = e;
    }
    getFechaCreacion() {
        return formatoFecha(this.#fechaCreacion);
    }
    setFechaEdicion(fecha) {
        this.#fechaEdicion = fecha;
    }
    getFechaEdicion() {
        return formatoFechaEdicion(this.#fechaEdicion);
    }
    getFechaVencimiento() {
        // Solo necesita chequear el año 9999, porque main.ts ya validó
        if (this.#fechaVencimiento.getFullYear() === 9999) {
            return "Sin datos";
        }
        // Si no es 9999, es una fecha válida
        return formatoFecha(this.#fechaVencimiento);
    }
    setFechaVencimiento(f) {
        this.#fechaVencimiento = f;
    }
}
//# sourceMappingURL=tareas.js.map