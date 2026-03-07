# Curso de POO en JavaScript

Guia de estudio practica para entender Programacion Orientada a Objetos en JavaScript con:
- objeto literal
- funcion constructora + `prototype`
- clases ES6
- composicion de objetos

---

## Mapa rapido del curso

| Archivo | Tema principal | Pregunta clave de estudio |
|---|---|---|
| `main.js` | Objeto literal y funcion constructora | Cuando deja de escalar un objeto literal |
| `classes.js` | Clases ES6 y tipos de constructor | Que gano con constructor por objeto |
| `comparativeOL&Classes.js` | Comparacion integral + composicion | Como modelar un dominio mas real |
| `index.html` | Ejecucion en navegador | Como observar resultados en consola |

---

## Objetivo de aprendizaje

Al terminar estos ejercicios deberias poder:
- explicar por que `class` sigue usando `prototype` internamente
- decidir entre constructor posicional y constructor por objeto
- modelar entidades que contienen otras entidades (composicion)
- modificar y extender metodos sin romper instancias existentes

---

## Ruta de estudio sugerida (en orden)

### 1) `main.js` - Fundamentos de modelado

**Enfocate en:**
- diferencia entre dato y comportamiento
- uso de `this` dentro de metodos
- metodos compartidos con `Student.prototype`

**Practica minima:**
1. Crea una nueva instancia `Student`.
2. Agrega 2 cursos.
3. Imprime `cantidadCursosAprobados()`.

### 2) `classes.js` - Escalabilidad con sintaxis ES6

**Enfocate en:**
- `class` como azucar sintactica
- constructor posicional (`StudentClass`)
- constructor por objeto (`StudentSocial`)

**Practica minima:**
1. Crea un estudiante sin `instagram` usando `StudentSocial`.
2. Ejecuta `removeCurso(curso)` y verifica resultado.
3. Compara legibilidad de ambos constructores.

### 3) `comparativeOL&Classes.js` - Integracion completa

**Enfocate en:**
- comparacion objeto literal vs clase
- clase `LearningPath` y composicion con `StudentSupreme`
- lectura de bloques JSDoc (`@param`) para documentar parametros

**Practica minima:**
1. Crea otro `LearningPath`.
2. Agregalo a un estudiante.
3. Agrega y elimina cursos del path.

---

## Comparativa visual: 3 formas de modelar

| Criterio | Objeto literal | Funcion constructora + prototype | Clase ES6 |
|---|---|---|---|
| Facilidad inicial | Alta | Media | Alta |
| Escalabilidad | Baja | Alta | Alta |
| Reuso de metodos | Bajo | Alto (prototype) | Alto (prototype interno) |
| Legibilidad al crecer | Media | Media | Alta |
| Mejor uso en este repo | ejemplos rapidos | entender base historica | modelado moderno |

---

## Como ejecutar

1. Abre `index.html` en el navegador.
2. Abre DevTools (`F12` o click derecho -> Inspeccionar).
3. Ve a la pestaña `Console`.
4. Recarga la pagina despues de cada cambio.

---

## Sistema de estudio activo (recomendado)

Usa este ciclo corto por archivo:

1. **Leer:** identifica conceptos nuevos.
2. **Explicar:** escribe con tus palabras que hace cada metodo.
3. **Modificar:** haz un cambio pequeno y predecir resultado.
4. **Verificar:** ejecuta y confirma si tu prediccion fue correcta.
5. **Reflexionar:** anota que te confundio y por que.

---

## Checklist de dominio

Marca cuando puedas hacerlo sin copiar:

- [ ] Explicar `this` en objeto literal, funcion constructora y clase.
- [ ] Crear una instancia con `new` y agregar comportamiento.
- [ ] Definir un metodo en `prototype` y usarlo en varias instancias.
- [ ] Implementar constructor por objeto con propiedades opcionales.
- [ ] Aplicar composicion (`Student` contiene `LearningPath`).
- [ ] Documentar un constructor con JSDoc y `@param`.

---

## Mini glosario

- **Instancia:** objeto creado desde una clase o funcion constructora.
- **Prototype:** objeto compartido donde viven metodos reutilizables.
- **Azucar sintactica:** forma mas legible de algo que ya existia.
- **Composicion:** un objeto contiene otros objetos para modelar mejor el dominio.
- **JSDoc:** comentarios estructurados para documentar tipos y parametros.

---

## Retos de consolidacion

1. Evitar cursos duplicados antes de hacer `push`.
2. Crear `renameCurso(viejo, nuevo)` para clases y constructor.
3. Validar que `learningPaths` solo acepte instancias de `LearningPath`.
4. Convertir `StudentSupreme` a constructor por objeto para mejorar legibilidad.
5. Actualizar JSDoc del constructor para que coincida 1:1 con los parametros reales.

---

## Notas personales

Anota aqui:
- errores que repetiste
- conceptos que ya dominas
- dudas para la siguiente sesion
