const url = "https://jsonplaceholder.typicode.com";

const xhr = new XMLHttpRequest();

function takeNames() {
  const datos = JSON.parse(this.response);
  console.log(datos);
  const HTMLResponse = document.querySelector("#app");

  const lista = datos.map(
    (user) => `<li>Name: ${user.name}<br> Username:${user.username}</li>`
  );
  HTMLResponse.innerHTML = `<ul>${lista}</ul>`;
}

xhr.addEventListener("load", takeNames);
xhr.open("GET", `${url}/users`);
xhr.send();