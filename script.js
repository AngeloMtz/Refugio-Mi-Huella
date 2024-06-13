document.addEventListener("DOMContentLoaded", function() {
    let signUp = document.getElementById('signUp');
    let signIn = document.getElementById('signIn');
    let nameInput = document.getElementById('nameInput');
    let title = document.getElementById('title');
    let newpass = document.getElementById('newpass');
    let confirmpass = document.getElementById('confirmpass');
    let btnName = document.getElementById('btnName');
    let btnconfirmpass = document.getElementById('btnconfirmpass');
    let form = document.querySelector("form");

    // Función para validar la confirmación de contraseña
    function validatePasswordConfirmation() {
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("btnconfirmpass").value;

        if (password !== confirmPassword) {
            document.getElementById("btnconfirmpass").setCustomValidity("Las contraseñas deben coincidir");
        } else {
            document.getElementById("btnconfirmpass").setCustomValidity("");
        }
    }

    // Evento para validar la confirmación de contraseña al cambiar el valor del campo
    document.getElementById("btnconfirmpass").addEventListener("input", validatePasswordConfirmation);

    // Eventos para cambiar entre Registro y Login
    signIn.onclick = function() {
        // Ajustar el título y botones
        title.innerHTML = "Login";
        signUp.classList.add("disable");
        signIn.classList.remove("disable");

        // Ocultar campos no necesarios
        nameInput.style.maxHeight = "0";
        nameInput.style.overflow = "hidden";
        confirmpass.style.maxHeight = "0";
        confirmpass.style.overflow = "hidden";
        newpass.style.maxHeight = "60px";
        newpass.style.overflow = "visible";

        // Quitar atributos 'required'
        btnName.removeAttribute("required");
        btnconfirmpass.removeAttribute("required");

        // Cambiar acción del formulario
        form.setAttribute("action", "/index.html");
    };

    signUp.onclick = function() {
        // Ajustar el título y botones
        title.innerHTML = "Registro";
        signUp.classList.remove("disable");
        signIn.classList.add("disable");

        // Mostrar campos necesarios
        nameInput.style.maxHeight = "60px";
        nameInput.style.overflow = "visible";
        confirmpass.style.maxHeight = "60px";
        confirmpass.style.overflow = "visible";
        newpass.style.maxHeight = "0";
        newpass.style.overflow = "hidden";

        // Agregar atributos 'required'
        btnName.setAttribute("required", "required");
        btnconfirmpass.setAttribute("required", "required");

        // Cambiar acción del formulario
        form.setAttribute("action", "/index.html");
    };


});
