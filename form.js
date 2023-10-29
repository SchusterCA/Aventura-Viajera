document.getElementById("miFormulario").addEventListener("submit", function (event) {
    event.preventDefault();
    var emailAddress = document.getElementById("email").value;
    window.location.href = "mailto:" + emailAddress;