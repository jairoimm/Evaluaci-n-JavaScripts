// Implementar login

document.getElementById('btnIngresar').addEventListener('click', () => {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    // Credenciales
    if (user === "jairo.munoz" && pass === "JS2026JI12") {
        localStorage.setItem('usuario', user);
        window.location.href = 'formulario.html';
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});