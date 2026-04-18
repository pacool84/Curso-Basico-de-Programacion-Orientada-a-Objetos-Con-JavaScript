/**
 * Curso de POO en JavaScript — Sintaxis de clases (ES6+)
 *
 * Objetivo de este archivo:
 * - Practicar la sintaxis `class` y entender que POR DEBAJO sigue existiendo `prototype`.
 * - Ver 2 estilos de constructor:
 *   1) Parámetros posicionales (orden importa)
 *   2) Parámetros por objeto (destructuring) (orden NO importa, más escalable)
 *
 */

// =====================================================
// 1) CLASE BÁSICA: constructor con parámetros POSICIONALES
// =====================================================
// ✅ Útil cuando hay pocos parámetros y el orden es fácil de recordar.
// ⚠️ Si crecen los parámetros, es fácil equivocarse con el orden.

class StudentClass {
  constructor(name, age, cursosAprobados = []) {
    // Estado (propiedades)
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  // OJO: Los métodos declarados aquí se guardan en StudentClass.prototype
  // y se comparten entre TODAS las instancias.
  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
    return this.cursosAprobados; // devolver algo ayuda a testear más fácil
  }

  // (Extra) Método útil para estudiar: cantidad de cursos aprobados
  getCursosCount() {
    return this.cursosAprobados.length;
  }

  removeCurso(curso) {
    const index = this.cursosAprobados.indexOf(curso);
    if (index > -1) {
      this.cursosAprobados.splice(index, 1);
    }
  }
}

// --- Ejemplo de uso
const mateo = new StudentClass("Mateo", 20, [
  "Curso de Programación Básica",
  "Curso de HTML",
]);

mateo.aprobarCurso("Curso de JavaScript");
console.log("Mateo:", mateo);
console.log("Mateo cantidad de cursos aprobados:", mateo.getCursosCount());

// =====================================================
// 2) CLASE CON CONSTRUCTOR POR OBJETO (destructuring)
// =====================================================
// ✅ Útil cuando hay MUCHOS parámetros.
// ✅ Más claro al leer y más resistente a cambios.
// ✅ Permite enviar props en cualquier orden.

class StudentSocial {
  constructor({
    name,
    age,
    cursosAprobados = [],
    twitter,
    instagram,
    facebook,
  }) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;

    // Datos sociales (opcionales)
    this.twitter = twitter;
    this.instagram = instagram;
    this.facebook = facebook;
  }

  aprobarCurso(curso) {
    this.cursosAprobados.push(curso);
    return this.cursosAprobados;
  }

  getPerfilSocial() {
    // Retornamos un objeto para inspección clara
    return {
      twitter: this.twitter,
      instagram: this.instagram,
      facebook: this.facebook,
    };
  }

  removeCurso(curso) {
    const index = this.cursosAprobados.indexOf(curso);
    if (index > -1) {
      this.cursosAprobados.splice(index, 1);
    }
  }
}

// --- Ejemplo de uso (nota: puedes pasar en el orden que quieras)
const valentina = new StudentSocial({
  facebook: "valentina.facebook.com",
  name: "Valentina",
  twitter: "@valentina",
  age: 20,
  instagram: "@valentina_insta",
  cursosAprobados: ["Curso de Programación Básica", "Curso de HTML"],
});

valentina.aprobarCurso("Curso de POO con JavaScript");
console.log("Valentina:", valentina);
console.log("Valentina social:", valentina.getPerfilSocial());

// =====================================================
// NOTAS CLAVE (repaso rápido)
// =====================================================
// - `class` es azúcar sintáctica: los métodos viven en `prototype`.
// - `new` crea una instancia y vincula `this`.
// - Constructor posicional: rápido pero frágil si crece.
// - Constructor por objeto: más explícito y escalable.

// =====================================================
// MINI-RETOS (para reforzar)
// =====================================================
// 1) Crea un nuevo estudiante con StudentClass y agrega 3 cursos.
// 2) Crea un estudiante con StudentSocial pero SIN instagram.
// 3) Agrega un método `removeCurso(curso)` a ambas clases.
// 4) (Extra) Imprime si 2 instancias comparten el mismo método:
//    console.log(mateo.aprobarCurso === (new StudentClass("X", 1)).aprobarCurso);

// --- Solución al reto extra (descomenta y prueba)
//1.-
const juanito = new StudentClass("Juanito", 30, []);
juanito.aprobarCurso("Curso de Java");
juanito.aprobarCurso("Curso de Springboot");
juanito.aprobarCurso("Curso de POO con JavaScript");

//2.-
const sara = new StudentSocial({
  name: "Sara",
  age: 18,
  facebook: "sara.facebook.com",
  twitter: "@sara",
  cursosAprobados: ["Curso de Programación Básica"],
});
