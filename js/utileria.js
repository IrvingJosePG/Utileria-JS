/* Funciones para validación y formateo de datos. */

// 1. Valida que un correo electrónico tenga el formato correcto (ejemplo: usuario@correo.com)
function validarCorreo(correo) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

// 2. Valida que un texto contenga solamente letras y espacios
function soloLetras(texto) {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

// 3. Valida que un número o texto no supere un límite de caracteres y no esté vacío
function validarLongitud(numero, maxLongitud) {
    var str = numero.toString();
    return str.length > 0 && str.length <= maxLongitud;
}

// 4. Calcula la edad exacta de una persona basándose en su fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    var hoy = new Date();
    var nacimiento = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - nacimiento.getFullYear();
    var mes = hoy.getMonth() - nacimiento.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    
    return edad < 0 ? -1 : edad;
}

// 5. Valida si una persona es mayor de edad (tiene 18 años o mas)
function esMayorDeEdad(fechaNacimiento) {
    var edad = calcularEdad(fechaNacimiento);
    return edad >= 18;
}

// 6. Valida que una contraseña sea segura (Minimo 8 caracteres, con mayusculas, minusculas, numeros y simbolos)
function validarPassword(password) {
    var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}


// 7. Valida que un texto esté compuesto estrictamente por números
function esSoloNumeros(texto) {
    var regex = /^\d+$/;
    return regex.test(texto);
}

// 8. Convierte la primera letra de cada palabra de un nombre en mayúscula (ejemplo: "juan perez" -> "Juan Perez")
function formatearNombre(nombre) {
    return nombre.toLowerCase().split(' ').map(function(palabra) {
        return palabra.charAt(0).toUpperCase() + palabra.slice(1);
    }).join(' ');
}