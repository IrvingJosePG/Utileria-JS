# Utilería JS - Librería de Validaciones Web

## 1. Portada
* **Autor:** Irving Jose Perez Gris 
* **Materia / Curso:** Programación Web
* **Problema que resuelve:** Esta librería independiente resuelve el problema de la captura de datos erróneos o maliciosos en formularios web. Proporciona funciones puras para validar formatos de correo, contraseñas seguras, nombres con acentos, límites numéricos y cálculos exactos de edad. Al evitar que datos inválidos se procesen, mejora significativamente la seguridad y la experiencia de usuario (UX) mediante alertas dinámicas.

## 2. Instalación
Para utilizar esta librería en cualquier proyecto, incluye el archivo JavaScript justo antes del cierre de la etiqueta `` en tu documento HTML:

```html
    <script src="js/utileria.js"></script>
```

## 3. Documentación y Uso de Funciones

A continuación se muestra la implementación de las funciones principales de la librería.

### Funciones de Login y Credenciales

**`validarCorreo(correo)`**

Valida que la cadena cumpla con el formato estándar de un correo electrónico.

```javascript
let correoValido = validarCorreo("usuario@gmail.com"); // true
```

**`validarPassword(password)`**

Verifica que la contraseña contenga al menos 8 caracteres, mayúsculas, minúsculas, números y un carácter especial.

```javascript
let passSegura = validarPassword("Admin123$"); // true
```

### Funciones de Formato y Limpieza (Registro)

**`soloLetras(texto)`**

Asegura que el campo solo contenga letras (incluyendo acentos y 'ñ') y espacios.

```javascript
let nombreCorrecto = soloLetras("María Pérez"); // true
```

**`esSoloNumeros(texto)`** *(Función Extra 1)*

Bloquea cualquier carácter que no sea un dígito numérico (ideal para validar teléfonos).

```javascript
let esTelefono = esSoloNumeros("5512345678"); // true
```

**`formatearNombre(nombre)`** *(Función Extra 2)*

Capitaliza automáticamente la primera letra de cada palabra en una cadena de texto.

```javascript
let nombreBonito = formatearNombre("juan perez"); // "Juan Perez"
```

### Funciones de Fechas y Cálculos

**`calcularEdad(fechaNacimiento)`**

Calcula la edad exacta en años contemplando el mes y día actual. Retorna `-1` si la fecha es futura.

```javascript
let edad = calcularEdad("2000-05-15"); // Retorna edad en formato numérico
```

**`esMayorDeEdad(fechaNacimiento)`**

Valida si, a partir de una fecha de nacimiento, la persona tiene 18 años o más.

```javascript
let esMayor = esMayorDeEdad("2000-05-15"); // true
```

## 4. Capturas de Pantalla

**Validaciones en Login (Bordes rojos y mensajes dinámicos):**
![Login con Errores](img/Login.png)

**Ventana Modal de Login**
![Modal de Login](img/SweetAlert-Login.png)

**Validaciones en Formulario (Bordes rojos y mensajes dinámicos)**
![Formulario con Errores](img/Error-Campos-Form.png)

**Ventana Modal de Registro (Cálculo de Edad):**
![Modal de Edad](img/SweetAlert-Form.png)

## 5. Demo Promocional

**Enlace al video:**


## 6. Enlaces del Proyecto

* **Repositorio del código:** 
* **Proyecto en vivo (GitHub Pages):**