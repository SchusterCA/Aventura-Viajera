function convertir() {
  var cantidadPesos = parseFloat(document.getElementById("pesos").value);


  fetch("https://dolarapi.com/v1/dolares/blue")
    .then(response => response.json())
    .then(data => {
      var valorDolarBlueCompra = parseFloat(data.compra);
      var valorDolarBlueVenta = parseFloat(data.venta);


      var valorDolarBlue = valorDolarBlueVenta;

      var resultadoDolares = cantidadPesos / valorDolarBlue;

      document.getElementById("resultado").textContent = "Cantidad en Dólares: $" + resultadoDolares.toFixed(2);
    })
    .catch(error => {
      console.error("Error al obtener datos de la API: ", error);
    });
}
