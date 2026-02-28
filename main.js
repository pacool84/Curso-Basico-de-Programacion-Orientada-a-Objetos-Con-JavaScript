/**
 * Curso de POO en JavaScript
 *
 * Objetivo:
 * - Entender 2 formas de modelar objetos y comportamiento:
 *   1) Objeto literal
 *   2) Función constructora + prototype
 *
 * Tips para estudiar:
 * - Lee cada sección y luego comenta/explica con tus palabras qué hace.
 * - Haz 1 cambio pequeño y ejecuta para ver el efecto (aprendizaje incremental).
 */

// =====================================================
// 1) OBJETO LITERAL (rápido y directo)
// =====================================================
// ✅ Ideal para: ejemplos simples, datos estáticos, prototipos rápidos.
// ⚠️ Limitación: si quieres crear muchos estudiantes, copiar/pegar no escala.

const natalia = {
  // Atributos
  name: "Natalia",
  age: 20,
  cursosAprobados: ["Curso Definitivo de HTML y CSS", "Curso Básico de Python"],

  // Métodos (comportamiento)
  // Nota: usamos function corta, pero internamente sigue siendo una función.
  aprobarCurso(curso) {
    // "this" apunta al objeto que ejecuta el método (natalia.aprobarCurso(...))
    this.cursosAprobados.push(curso);
  },
};

// --- Uso del objeto literal
natalia.cursosAprobados.push("Curso de POO con Java");
console.log("Natalia cursos (push directo):", natalia.cursosAprobados);

natalia.aprobarCurso("Curso Avanzado de Spring Boot");
console.log("Natalia cursos (método aprobarCurso):", natalia.cursosAprobados);

// =====================================================
// 2) FUNCIÓN CONSTRUCTORA + PROTOTYPE (patrón clásico)
// =====================================================
// ✅ Ideal para: crear múltiples instancias con la misma estructura.
// 💡 Idea clave: los métodos en prototype se comparten entre instancias.

function Student(name, age, cursosAprobados = []) {
  // Atributos
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;

  // ❌ Evita declarar métodos aquí si no es necesario.
  // Cada instancia crearía una nueva función en memoria.
  // this.aprobarCurso = function (curso) {
  //   this.cursosAprobados.push(curso);
  // };
}

// Método por fuera (se comparte en todas las instancias) ⭐️
Student.prototype.aprobarCurso = function (curso) {
  this.cursosAprobados.push(curso);
};

// Método para mostrar cantidad de cursos aprobados (reto extra)
Student.prototype.cantidadCursosAprobados = function () {
  return this.cursosAprobados.length;
};

// --- Crear instancias (new) a partir del "molde" Student, Instanciar un nuevo estudiante ⭐️
const sebastian = new Student("Sebastian", 23, [
  "Curso de HTML y CSS",
  "Curso de JavaScript",
  "Curso de React",
]);

// --- Uso de la instancia
sebastian.aprobarCurso("Curso de POO con JavaScript");
console.log("Sebastian cursos:", sebastian.cursosAprobados);

// =====================================================
// MINI-RETOS (para reforzar)
// =====================================================
// 1) Crea otra instancia: const maria = new Student("Maria", 28, []);
// 2) Agrégale 2 cursos con aprobarCurso.
// 3) Imprime: nombre + cantidad de cursos.
// 4) (Extra) Agrega un método en prototype: getCursosCount() que regrese un número.

// Ejemplo del reto extra (descomenta y prueba):
// Student.prototype.getCursosCount = function () {
//   return this.cursosAprobados.length;
// };
// console.log("Cursos de Sebastian:", sebastian.getCursosCount());

const brenda = new Student("Brenda", 35, []);
brenda.aprobarCurso("Curso basico de Java");
brenda.aprobarCurso("Curso basico de Springboot");
console.log(
  "Nombre del estudiante: " +
    brenda.name +
    " " +
    "Cantidad de cursos aprobados: " +
    brenda.cantidadCursosAprobados(),
);
