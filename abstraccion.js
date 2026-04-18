class LearningPath {
  constructor({ name, courses = [] }) {
    this.name = name;
    this.courses = courses;
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this._name = name; // Usamos un guion bajo para indicar que es una propiedad "privada" - Encapsulación
    this.classes = classes;
  }

  //Getter para controlar el acceso a la propiedad name.
  get name() {
    return this._name;
  }
}

// Crear instancias de LearningPath
const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, "Cursos Práctico de HTML y CSS"],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, cursoDataBusiness, "Curso de Data Visualization"],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Videojuegos",
  courses: [
    cursoProgBasica,
    CursoDesarrolloVideojuegos,
    "Curso de Unreal Engine",
  ],
});

// Crear instancias de Course
const cursoProgBasica = new Course({
  name: "Curso de Programación Básica",
  classes: ["Variables", "Funciones", "Estructuras de Control"],
});

const cursoDataBusiness = new Course({
  name: "Curso de Data Business",
  classes: ["Análisis de Datos", "Toma de Decisiones Basada en Datos"],
});

const CursoDesarrolloVideojuegos = new Course({
  name: "Curso de Desarrollo de Videojuegos",
  classes: ["Diseño de Juegos", "Programación de Juegos", "Arte para Juegos"],
});
