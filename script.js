function saludo() {
    alert('hola!');
}

// en esta version si se hace clic en el boton, salen las dos alertas:

/* document.addEventListener("DOMContentLoaded", function() {
    const marco = document.getElementsByTagName('div')[0];

    marco.addEventListener("click", function saludoDiv() {
        alert("¡Hola! Soy el div");
    });
}); */

// en esta version si se hace clic en el boton, solo sale la alerta especifica del boton:

document.addEventListener("DOMContentLoaded", function() {
    const marco = document.getElementsByTagName('div')[0];

    marco.addEventListener("click", function(event) {
        if (!event.target.matches('button')) {
            // La función se ejecutará solo si el clic no fue en un botón dentro del div
            alert("¡Hola! Soy el div");
        }
    });
});
