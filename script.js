function saludo() {
    alert('hola!');
}

document.addEventListener("DOMContentLoaded", function() {
    const marco = document.getElementsByTagName('div')[0];

    marco.addEventListener("click", function saludoDiv() {
        alert("¡Hola! Soy el div");
    });
});