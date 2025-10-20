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
    return entrada;
}
//# sourceMappingURL=utils.js.map