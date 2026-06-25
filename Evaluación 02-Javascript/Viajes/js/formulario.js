// Implementar formulario

document.getElementById('btnEnviar').addEventListener('click', () => {
    const nombre = document.getElementById('nombre').value;
    const cant = parseInt(document.getElementById('cantidad').value);
    const listaErrores = document.getElementById('listaErrores');
    let errores = [];

    // Validaciones 
    if (nombre.length < 3 || nombre.length > 100) errores.push("Nombre debe tener entre 3 y 100 caracteres.");
    if (isNaN(cant) || cant < 1 || cant > 8) errores.push("Cantidad de pasajeros debe ser entre 1 y 8.");

    if (errores.length > 0) {
        
        listaErrores.innerHTML = `<ul>${errores.map(e => `<li>${e}</li>`).join('')}</ul>`;
    } else {
        localStorage.setItem('datosViaje', JSON.stringify({ nombre, cant }));
        window.location.href = 'exito.html';
    }
});