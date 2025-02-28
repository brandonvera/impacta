document.getElementById('enviarBtn').addEventListener('click', function() {
    var checkbox = document.getElementById('aceptar');
    if (checkbox.checked) {
        alert("¡Mensaje enviado correctamente!");
    } else {
        event.preventDefault();
        alert("Por favor, acepta los términos antes de enviar.");
    }
});