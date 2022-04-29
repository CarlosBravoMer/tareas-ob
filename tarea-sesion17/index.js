function iniciar() {
  let elemento = document.getElementById("obtener");
  elemento.addEventListener("click", verLocalizacion);
}

function verLocalizacion() {
  navigator.geolocation.getCurrentPosition(verPosicion, verError);
}

function verPosicion(posicion) {
  let ubicacion = document.getElementById("ubicacion");
  let map = document.getElementById("map");
  let lat = posicion.coords.latitude;
  let long = posicion.coords.longitude;

  ubicacion.innerHTML = `<h2"><a href="https://www.google.com/maps/search/?api=1&query=${lat},${long}">Ver en Maps...</a></h2>`;
}

function verError() {
  alert("Error: " + error.code + " " + error.message);
}

window.addEventListener("load", iniciar);
