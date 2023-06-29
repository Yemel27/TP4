console.log(dbLibros);

const contenedor_cards = document.getElementById("contenedor_cards");

const checkboxes = document.querySelectorAll('input[type="checkbox"]');

const inputBusqueda = document.getElementById('lblbuscar');

let templateCard = "";

function crearTarjetas() {
    templateCard = ""
    dbLibros.forEach((libro) => {
        templateCard += `<div class="card">
        <img src="${libro.image}" alt="${libro.type} ${libro.id}">
        <p class="txtcardColor" >${libro.name}</p>
        <a class="botton" href="./info.html?id=${libro.id}">Ver más</a>
        </div>`;
    })
    contenedor_cards.innerHTML = templateCard;
}

// crearTarjetas()

let librosFiltrados = []

let checkboxesSeleccionados = [];

if (checkboxesSeleccionados.length === 0) {
    templateCard = ""
    crearTarjetas()
}


checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkboxesSeleccionados.push(checkbox.value);
            crearTarjetasCheck()
        } else {
            const index = checkboxesSeleccionados.indexOf(checkbox.value);
            checkboxesSeleccionados.splice(index, 1);

            crearTarjetasCheck()
            if (checkboxesSeleccionados.length === 0) {
                templateCard = ""
                crearTarjetas()
            }
        }
        console.log('Checkboxes seleccionados:', checkboxesSeleccionados);
    });
});


function crearTarjetasCheck() {

    librosFiltrados = dbLibros.filter(libro => checkboxesSeleccionados.includes(libro.type));
    console.log(librosFiltrados);

    templateCard = ""
    librosFiltrados.forEach((libro) => {
        templateCard += `<div class="card">
        <img src="${libro.image}" alt="${libro.type} ${libro.id}">
        <p>${libro.name}</p>
        <a class="btn btn-primary" href="./info.html?id=${libro.id}">Mas info</a>
        </div>`;
    })
    contenedor_cards.innerHTML = templateCard;

}

let librosFiltradosInput = []

inputBusqueda.addEventListener('input', () => {
    const inputValue = inputBusqueda.value;
    crearTarjetasInput()

    if (librosFiltradosInput.length === 0) {
        contenedor_cards.innerHTML = "<h2>Sin Resultados</h2>"
    }

    console.log(librosFiltradosInput);
    let labelBuscar = document.getElementById("labelBuscar")
    labelBuscar.innerHTML = inputValue
    console.log(inputValue);
  });

  function crearTarjetasInput() {

    const textoBusqueda = inputBusqueda.value.toLowerCase();
    librosFiltradosInput = dbLibros.filter(libro => libro.name.toLowerCase().includes(textoBusqueda));

    templateCard = ""
    librosFiltradosInput.forEach((libro) => {
        templateCard += `<div class="card">
        <img src="${libro.image}" alt="${libro.type} ${libro.id}">
        <p>${libro.name}</p>
        <a class="btn btn-primary" href="./info.html?id=${libro.id}">Mas info</a>
        </div>`;
    })
    contenedor_cards.innerHTML = templateCard;

}