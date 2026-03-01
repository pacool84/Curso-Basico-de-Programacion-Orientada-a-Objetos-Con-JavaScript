# Curso de POO en JavaScript - Notas de estudio

Este repositorio contiene ejemplos y ejercicios para practicar Programacion
Orientada a Objetos (POO) en JavaScript usando tres estilos de modelado:
objeto literal, funcion constructora con prototype y clases ES6.

## Objetivo
- Entender como JavaScript modela objetos y comportamiento.
- Comparar tres estilos de POO y cuando conviene cada uno.
- Practicar metodos, propiedades, `this` y arreglos mutables.

## Estructura del repositorio
- `main.js`: objeto literal + funcion constructora + prototype.
- `classes.js`: clases ES6 con constructor posicional y por objeto.
- `index.html`: punto de entrada para ejecutar los ejemplos en navegador.

## Que ver en cada archivo

### `main.js`
**Conceptos**
- Objeto literal: rapido para un solo objeto.
- Funcion constructora: molde para crear instancias con `new`.
- `prototype`: metodos compartidos entre instancias.

**Elementos principales**
- Objeto `natalia` con atributos y metodo `aprobarCurso`.
- Funcion constructora `Student`.
- Metodos en `Student.prototype`:
  - `aprobarCurso(curso)`: agrega cursos.
  - `cantidadCursosAprobados()`: cuenta cursos.

**Ejercicios incluidos**
- Crear instancias nuevas.
- Agregar cursos y mostrar resultados en consola.

### `classes.js`
**Conceptos**
- `class` como azucar sintactica sobre prototype.
- Constructores posicionales vs por objeto (destructuring).

**Elementos principales**
- `StudentClass`:
  - `aprobarCurso(curso)`: agrega cursos.
  - `getCursosCount()`: cuenta cursos.
  - `removeCurso(curso)`: elimina un curso con `splice`.
- `StudentSocial`:
  - constructor por objeto con datos sociales opcionales.
  - `getPerfilSocial()`: devuelve un objeto con redes.

**Ejercicios incluidos**
- Crear estudiantes y agregar cursos.
- Comparar metodos compartidos en prototipos.

## Como ejecutar
1. Abre `index.html` en el navegador.
2. Abre la consola para ver los `console.log`.
3. Edita los archivos JS y recarga para ver cambios.

## Guia de estudio recomendada
1. Lee primero `main.js` y anota con tus palabras:
   - Que es un objeto literal.
   - Para que sirve `prototype`.
2. Revisa `classes.js` y compara:
   - Constructor posicional vs por objeto.
3. Haz cambios pequenos (por ejemplo cambiar un curso)
   y observa el resultado.

## Glosario rapido
- **Instancia**: objeto creado a partir de un constructor o clase.
- **prototype**: objeto donde viven metodos compartidos.
- **this**: referencia al objeto que ejecuta el metodo.
- **splice**: metodo para eliminar o insertar elementos en un arreglo.

## Ideas de practica extra
- Agrega validaciones (por ejemplo evitar cursos duplicados).
- Crea un metodo `renameCurso(viejo, nuevo)`.
- Implementa `removeCurso` tambien en `StudentSocial`.

## Notas personales
Usa esta seccion para escribir tus observaciones y dudas mientras estudias.
