/**
 * =====================================================
 * COMPARACIÓN: OBJETOS LITERALES vs CLASES EN JAVASCRIPT
 * =====================================================
 *
 * Objetivo de este archivo:
 * - Entender cuándo usar objetos literales.
 * - Entender cuándo usar clases para crear estructuras escalables.
 * - Practicar composición de objetos (Student + LearningPath).
 *
 * Recomendación para estudiar:
 * 1. Lee cada sección.
 * 2. Ejecuta el archivo.
 * 3. Modifica valores y observa qué cambia.
 */

"use strict";

// =====================================================
// 1) OBJETOS LITERALES
// =====================================================
// Un objeto literal es la forma más simple de crear un objeto en JavaScript.
// Es útil para datos estáticos o ejemplos simples.

// ⚠️ Limitaciones importantes:
// - No escala bien cuando necesitas muchos objetos.
// - No reutiliza lógica fácilmente.
// - Duplicas estructura si creas más usuarios.

const sebastian = {
  name: "Sebastian",
  username: "CHEVY",
  points: 100,

  socialMedia: {
    twitter: "sebastian_twitter",
    instagram: "sebastian_insta",
    facebook: "sebastian_facebook",
  },

  approvedCourses: [
    "Curso de HTML y CSS",
    "Curso de JavaScript",
    "Curso de React",
  ],

  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: ["Curso de HTML y CSS", "Curso de JavaScript", "Curso de React"],
    },
    {
      name: "Escuela de Videojuegos",
      courses: ["Curso de Unity", "Curso de Unreal Engine"],
    },
  ],
};

const brenda = {
  name: "Brenda",
  username: "Vicky",
  points: 100,

  socialMedia: {
    twitter: "brenda_twitter",
    instagram: "brenda_insta",
    facebook: "brenda_facebook",
  },

  approvedCourses: [
    "Curso de HTML y CSS",
    "Curso de JavaScript",
    "Curso de React",
  ],

  learningPaths: [
    {
      name: "Escuela de Desarrollo Web",
      courses: ["Curso de HTML y CSS", "Curso de JavaScript", "Curso de React"],
    },
  ],
};

console.log("Objeto literal - Sebastian:", sebastian);
console.log("Objeto literal - Brenda:", brenda);

// =====================================================
// 2) CLASES (FORMA ESCALABLE)
// =====================================================
// Las clases permiten crear "plantillas" para generar múltiples objetos.
// Internamente siguen utilizando "prototype".

class StudentSupreme {
  /**
   * @param {string} name
   * @param {string} username
   * @param {number} points
   * @param {Object} social
   * @param {Array} approvedCourses
   * @param {Array} learningPaths
   */

  constructor(
    name,
    username,
    points,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  ) {
    this.name = name;
    this.username = username;
    this.points = points;

    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };

    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  // Método para aprobar un curso
  approveCourse(course) {
    this.approvedCourses.push(course);
  }
}

// Crear una instancia (objeto basado en la clase)
const paco = new StudentSupreme("Paco", "Pacool84", 1500, "@paco_twitter");

console.log("Estudiante creado con clase:", paco);

// =====================================================
// 3) COMPOSICIÓN DE OBJETOS
// =====================================================
// Aquí creamos otra clase que luego será utilizada dentro de Student.

class LearningPath {
  constructor(name, courses = []) {
    this.name = name;
    this.courses = courses;
  }

  // Agregar curso
  addCourse(course) {
    this.courses.push(course);
  }

  // Eliminar curso
  removeCourse(course) {
    const index = this.courses.indexOf(course);

    if (index > -1) {
      this.courses.splice(index, 1);
    }
  }
}

// Crear instancia de LearningPath
const webDevelopmentPath = new LearningPath("Desarrollo Web", [
  "Curso de HTML y CSS",
  "Curso de JavaScript",
  "Curso de React",
]);

// Crear estudiante que contiene un LearningPath
const maria = new StudentSupreme(
  "Maria",
  "MariaGomez",
  1200,
  "@maria_twitter",
  "@maria_insta",
  "@maria_facebook",
  ["Curso de HTML y CSS"],
  [webDevelopmentPath],
);

// Modificar el learning path
maria.learningPaths[0].addCourse("Curso de Node.js");

maria.learningPaths[0].removeCourse("Curso de JavaScript");

console.log("Maria con LearningPath actualizado:", maria);

// =====================================================
// MINI RETOS PARA PRACTICAR
// =====================================================

// 1️⃣ Crear otro LearningPath llamado "Backend".
// 2️⃣ Crear un estudiante nuevo llamado "Carlos".
// 3️⃣ Agregar ambos learningPaths a Carlos.
// 4️⃣ Crear un método que imprima cuántos cursos tiene un estudiante.

// BONUS:
// Investiga qué pasa si ejecutas:
// console.log(paco.approveCourse === maria.approveCourse);
// Esto demuestra cómo los métodos se comparten a través del prototype.
