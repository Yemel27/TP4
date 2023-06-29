const queryString = document.location.search

const params = new URLSearchParams(queryString)

const id = params.get("id")

const libroBuscado = dbLibros.find( libro => libro.id == id)

const contenedor = document.querySelector(".container_info")

contenedor.innerHTML = `<div class="">
<h2 class="text-light">${libroBuscado.name}</h2>
<img style="width: 350px; height: 350px;" src="${libroBuscado.image}" alt="Imagen del libro">
</div>
<div>
<h2 class="text-light">Información</h2>
<p class="text-light">${libroBuscado.informacion}</p>
<a href="./index.html" class="botton text-light">Volver al inicio</a>
</div>`