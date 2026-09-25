# Utilería JS - Librería de Validaciones Web

## 1. Portada
* **Estudiante:** Irving Jose Perez Gris 
* **Materia / Curso:** Programación Web
* **¿Qué problema resuelve?** Esta librería independiente al codigo resuelve el problema de la captura de datos erroneos en formularios web. Proporciona funciones puras para validar formatos de correo, contraseñas seguras, nombres con acentos, límites numéricos y cálculos de edad exactos antes de procesar la información del usuario, mejorando la seguridad y la experiencia visual (UX).

## 2. Instalación
Para utilizar esta librería en cualquier proyecto web, solo debes incluir el archivo JavaScript al final del cuerpo (<body>) de tu documento HTML:

```html
<script src="js/utileria.js"></script>

// Valida formato de correo y seguridad de contraseña
let correoValido = validarCorreo("usuario@gmail.com"); // true
let passSegura = validarPassword("Admin123$"); // true

// Valida nombres limpios, números y calcula edades exactas
let nombreCorrecto = soloLetras("María Pérez"); // true
let esTelefono = esSoloNumeros("5512345678"); // true
let edad = calcularEdad("2000-05-15"); // Devuelve edad numérica
let esMayor = esMayorDeEdad("2000-05-15"); // true
let nombreBonito = formatearNombre("juan perez"); // "Juan Perez"


Validaciones en Login (Bordes rojos y mensajes dinámicos):
![Login con Errores](img/Login.png)

Ventana Modal de Login
![Modal de Login](img/SweetAlert-Login.png)

Validaciones en Formulario (Bordes rojos y mensajes dinámicos):
![Formulario con Errores](img/Error-Campos-Form.png)

Ventana Modal de Registro (Cálculo de Edad):

![Modal de Edad](img/SweetAlert-Form.png)