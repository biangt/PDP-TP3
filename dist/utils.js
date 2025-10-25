import { Estado } from "./types.js";
/**
 * Formatea una fecha para mostrarla como DD/MM/AAAA
 */
export function formatoFecha(fecha) {
    return fecha.toLocaleDateString("es-AR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    });
}
/**
 * Formatea la fecha de edición como DD/MM/AAAA HH:MM:SS
 */
export function formatoFechaEdicion(fecha) {
    return fecha.toLocaleString("es-AR", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    });
}
export function control(entrada) {
    while (entrada !== "1" && entrada !== "2" && entrada !== "3" && entrada !== "") {
        console.log("Opción inválida, inténtelo de nuevo");
        entrada = prompt("Ingrese la opción: ");
    }
    if (entrada === "") {
        entrada = "1"; // valor por defecto
    }
    return entrada;
}
export function estadoATexto(estado) {
    switch (estado) {
        case Estado.PENDIENTE:
            return "Pendiente";
        case Estado.EN_CURSO:
            return "En Curso";
        case Estado.TERMINADA:
            return "Terminada";
        default:
            return "Desconocido";
    }
}
//Funcion para mostrar la dificultad con emojis
export function mostrarDificultad(Dificultad) {
    switch (Dificultad) {
        case 1:
            return "😎🟡🟡"; // o 🌕🌑🌑//por si los emojis son confusos
        case 2:
            return "😐😐🟡"; // o 🌕🌕🌑
        case 3:
            return "😭😭😭"; // o 🌕🌕🌕
        default:
            return "???"; // si se cargó algo inválido (no deberia pasar)
    }
}
//# sourceMappingURL=utils.js.map