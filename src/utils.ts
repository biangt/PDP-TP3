/**
 * Formatea una fecha para mostrarla como DD/MM/AAAA
 */
export function formatoFecha(fecha: Date): string {
  return fecha.toLocaleDateString("es-AR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}

/**
 * Formatea la fecha de edición como DD/MM/AAAA HH:MM:SS
 */
export function formatoFechaEdicion(fecha: Date): string {
  return fecha.toLocaleString("es-AR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}

export function control(entrada: string| null): string {
    while (entrada !== "1" && entrada !== "2" && entrada !== "3" && entrada !== "") {
        console.log("Opción inválida, inténtelo de nuevo");
        entrada = prompt("Ingrese la opción: ");
    }
    return entrada;
}