const button = document.querySelector("button");
const button2 = document.getElementById("resta-btn");
const input1 = document.getElementById("x")! as HTMLInputElement;
const input2 = document.getElementById("y")! as HTMLInputElement;
const input3 = document.getElementById("a") as HTMLInputElement;
const input4 = document.getElementById("b") as HTMLInputElement;
const resultado = document.getElementById("resultado")! as HTMLDivElement;
const resultado2 = document.getElementById("resta") as HTMLDivElement;
const input5 = document.getElementById("fruta")! as HTMLInputElement; 
const buttonFruta = document.getElementById("fruta-btn"); 
const frutas = document.getElementById("frutas") as HTMLDivElement;
const contadorBtn = document.getElementById("contador");
const contadorDiv = document.getElementById("contador-div") as HTMLDivElement;
var val = 0;

type Frutas =  Array<string>;
const array = [] as Frutas;

function sumar(x: number, y: number){
    return x + y ;
}

function restar(x: number, y: number) {
    return x - y;
}

function agregarFrutas(fruta: string) {
    array.push(fruta);
}

button.addEventListener("click", function() {
    let result = sumar(+input1.value, +input2.value);
    resultado.innerHTML = `El resultado es: ${result}`;
    console.log(result);
});

button2.addEventListener("click", function() {
    let result = restar(+input3.value, +input4.value);
    resultado2.innerHTML = `El resultado es: ${result}`;
    console.log(result);
})

buttonFruta.addEventListener("click", function() {
    let fruta = agregarFrutas(input5.value);
    frutas.innerHTML = `${fruta}`;
    console.log(fruta);
});

contadorBtn.addEventListener("click", function(){
    contadorDiv.innerHTML = `${++val}`;
});

//tuplas
let persona: [nombre: string, edad: number, 
     estatura: number, peso: number,
     nacionalidad: string, sexo: string, nacimiento: Date];

//objetos

interface Persona {  //Creamos las propiedades de una persona de tipo interfaz 
    nombre: string;
    edad: number;
    estatura: number;
    peso: number;
    nacionalidad: string;
    sexo: string;
    nacimineto: Date;
}

class Person implements Persona { //Creamos una clase person y le implementamos la interfaz persona
    //Inicializamos los datos de una persona como vacios;
    nombre = '';
    edad = 0;
    estatura = 0;
    peso = 0;
    nacionalidad = '';
    sexo = '';
    nacimineto = new Date()
} 


const personObject = new Person(); //Creamos una constante llamada personObject y le asignamos un objeto nuevo
personObject.nombre = 'Rodrigo'; // le decimos que la propiedad nombre de esa persona sera rodrigo
console.log(personObject);
const persona2 = new Person();
persona2.nombre = "Juan";
persona2.edad = 18;
persona2.estatura = 176;
persona2.peso = 155;
persona2.nacionalidad = "Aleman";
persona2.sexo = "masculino";
persona2.nacimineto = new Date("2000-05-24");
console.log(persona2);

const divObjeto = document.getElementById('objeto');
const divName = document.createElement("div") as HTMLDivElement;
const divEdad = document.createElement("div") as HTMLDivElement;

divName.innerHTML = persona2.nombre;
divEdad.innerHTML = `${persona2.edad}`;

divObjeto.appendChild(divName);
divObjeto.appendChild(divEdad);


//Obteniendo datos de una api


var next = 1;
const RickAndMortyApi: string = 'https://rickandmortyapi.com/api/character?page=1';
const newUl = document.createElement("ul") as HTMLUListElement;

fetch(RickAndMortyApi)
.then((response: Response) => response.json())
.then((data) => {
    console.log(data)
    let response = data.results;
    console.log(response);
    const showPersonajes = response.map((personajes) => `<li>Nombre:${personajes.name}</li><li>Especie: ${personajes.species}</li>`);
    divObjeto.appendChild(newUl);
    newUl.innerHTML = showPersonajes;
})
.catch((err) => console.log(err));


function getPage(page: number) {
 fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
.then((response: Response) => response.json())
.then((data) => {
    console.log(data)
    let response = data.results;
    console.log(response);
    const showPersonajes = response.map((personajes) => `<li>Nombre:${personajes.name}</li><li>Especie: ${personajes.species}</li>`);
    divObjeto.appendChild(newUl);
    newUl.innerHTML = showPersonajes;
})
.catch((err) => console.log(err));
    
}

const nextBtn = document.getElementById('next');

nextBtn.addEventListener("click", function(){
    let nextPage = ++next;
    getPage(nextPage);
})


const prevBtn = document.getElementById('prev');

prevBtn.addEventListener("click", function() {
    let prevPage = --next;
    if(prevPage < 0) {
        const divMessage = document.createElement("div");
        divObjeto.appendChild(divMessage);
        divMessage.innerHTML = "No hay paginas hacia atras";
        return 
    } else {
        getPage(prevPage);
    }
})
