function login() {
    var a = document.getElementById('usuario').value; // Cambié 'pre' por 'usuario'
    var b = document.getElementById('contraseña').value; // Cambié 'pre' por 'contraseña'
    if (a == "Ivan" && b == "nose") {
        alert("Usuario y contraseña correctos");
        window.open('menu.html','_self');
    } else {
        alert("Usuario o contraseña incorrecto");
    }
}
