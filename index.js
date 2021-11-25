var button = document.querySelector("button");
var button2 = document.getElementById("resta-btn");
var input1 = document.getElementById("x");
var input2 = document.getElementById("y");
var input3 = document.getElementById("a");
var input4 = document.getElementById("b");
var resultado = document.getElementById("resultado");
var resultado2 = document.getElementById("resta");
var input5 = document.getElementById("fruta");
var buttonFruta = document.getElementById("fruta-btn");
var frutas = document.getElementById("frutas");
var contadorBtn = document.getElementById("contador");
var contadorDiv = document.getElementById("contador-div");
var val = 0;
var array = [];
function sumar(x, y) {
    return x + y;
}
function restar(x, y) {
    return x - y;
}
function agregarFrutas(fruta) {
    array.push(fruta);
}
button.addEventListener("click", function () {
    var result = sumar(+input1.value, +input2.value);
    resultado.innerHTML = "El resultado es: ".concat(result);
    console.log(result);
});
button2.addEventListener("click", function () {
    var result = restar(+input3.value, +input4.value);
    resultado2.innerHTML = "El resultado es: ".concat(result);
    console.log(result);
});
buttonFruta.addEventListener("click", function () {
    var fruta = agregarFrutas(input5.value);
    frutas.innerHTML = "".concat(fruta);
    console.log(fruta);
});
contadorBtn.addEventListener("click", function () {
    contadorDiv.innerHTML = "".concat(++val);
});
//tuplas
var persona;
var Person = /** @class */ (function () {
    function Person() {
        //Inicializamos los datos de una persona como vacios;
        this.nombre = '';
        this.edad = 0;
        this.estatura = 0;
        this.peso = 0;
        this.nacionalidad = '';
        this.sexo = '';
        this.nacimineto = new Date();
    }
    return Person;
}());
var personObject = new Person(); //Creamos una constante llamada personObject y le asignamos un objeto nuevo
personObject.nombre = 'Rodrigo'; // le decimos que la propiedad nombre de esa persona sera rodrigo
console.log(personObject);
var persona2 = new Person();
persona2.nombre = "Juan";
persona2.edad = 18;
persona2.estatura = 176;
persona2.peso = 155;
persona2.nacionalidad = "Aleman";
persona2.sexo = "masculino";
persona2.nacimineto = new Date("2000-05-24");
console.log(persona2);
var divObjeto = document.getElementById('objeto');
var divName = document.createElement("div");
var divEdad = document.createElement("div");
divName.innerHTML = persona2.nombre;
divEdad.innerHTML = "".concat(persona2.edad);
divObjeto.appendChild(divName);
divObjeto.appendChild(divEdad);
//Obteniendo datos de una api
var next = 1;
var RickAndMortyApi = 'https://rickandmortyapi.com/api/character?page=1';
var newUl = document.createElement("ul");
fetch(RickAndMortyApi)
    .then(function (response) { return response.json(); })
    .then(function (data) {
    console.log(data);
    var response = data.results;
    console.log(response);
    var showPersonajes = response.map(function (personajes) { return "<li>Nombre:".concat(personajes.name, "</li><li>Especie: ").concat(personajes.species, "</li>"); });
    divObjeto.appendChild(newUl);
    newUl.innerHTML = showPersonajes;
})["catch"](function (err) { return console.log(err); });
function getPage(page) {
    fetch("https://rickandmortyapi.com/api/character?page=".concat(page))
        .then(function (response) { return response.json(); })
        .then(function (data) {
        console.log(data);
        var response = data.results;
        console.log(response);
        var showPersonajes = response.map(function (personajes) { return "<li>Nombre:".concat(personajes.name, "</li><li>Especie: ").concat(personajes.species, "</li>"); });
        divObjeto.appendChild(newUl);
        newUl.innerHTML = showPersonajes;
    })["catch"](function (err) { return console.log(err); });
}
var nextBtn = document.getElementById('next');
nextBtn.addEventListener("click", function () {
    var nextPage = ++next;
    getPage(nextPage);
});
var prevBtn = document.getElementById('prev');
prevBtn.addEventListener("click", function () {
    var prevPage = --next;
    if (prevPage < 0) {
        var divMessage = document.createElement("div");
        divObjeto.appendChild(divMessage);
        divMessage.innerHTML = "No hay paginas hacia atras";
        return;
    }
    else {
        getPage(prevPage);
    }
});
