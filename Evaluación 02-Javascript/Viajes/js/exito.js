// Recuperar datos
const datos = JSON.parse(localStorage.getItem('datosViaje'));
if (datos) {
    document.getElementById('resumen').innerHTML = `
        <p>Pasajero: ${datos.nombre}</p>
        <p>Pasajeros: ${datos.cant}</p>
    `;
}

// Cerrar sesión
document.getElementById('btnCerrar').addEventListener('click', () => {
    localStorage.clear();
    window.location.href = 'login.html';
});