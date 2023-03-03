"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const jokes = {
    id: '',
    joke: "Click to get a jokes",
    status: 0,
};
const jokeEl = document.getElementById('joke');
const geTjoke = document.getElementById('geTjoke');
if (jokeEl && geTjoke) {
    jokeEl.innerHTML = jokes.joke;
    geTjoke.addEventListener('click', () => {
        // addEventListene() agrega un detector eventos
        generateJoke(jokes.joke);
    });
}
/**
 * Genera una broma aleatoria y la muestra en la página
 */
function generateJoke(joke) {
    return __awaiter(this, void 0, void 0, function* () {
        const setHeader = {
            headers: {
                Accept: 'application/json',
            },
        };
        const response = yield fetch('https://icanhazdadjoke.com', setHeader);
        const data = yield response.json();
        jokes.joke = data.joke;
        jokeEl.innerHTML = jokes.joke;
        // console.log('jokes:', jokes);
    });
}
// puntúa los chistes y almacena las calificaciones en reportJokes
let reportJokes = [];
function scoreJokes(score) {
    let currentTime = new Date();
    // Save the date in ISO format
    let currentTimeISO = currentTime.toISOString();
    // Devuelve una fecha como un valor de cadena en formato ISO
    let currentScore = {
        date: currentTimeISO,
        score: score,
        joke: jokes.joke,
    };
    reportJokes.push(currentScore);
    console.log("reportJokes: ", reportJokes);
}
//el fondo
let unFondos = 1;
function fondo() {
    let fondoo = document.getElementById('fondo');
    fondoo.classList.remove('fondo' + unFondos);
    unFondos++;
    fondoo.classList.add('fondo' + unFondos);
    if (unFondos == 7) {
        fondoo.classList.remove('fondo' + unFondos);
        unFondos = 1;
        fondoo.classList.add('fondo' + unFondos);
    }
}
function elTiempo(cityID) {
    let key = "a38ed1a9973efc1459ebe37151897669";
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key + '&units=metric')
        .then(function (resp) {
        return resp.json();
    })
        .then(function (data) {
        console.log(data);
        let city = document.getElementById('city');
        const icono = document.getElementById('icono-animado');
        let temp = document.getElementById('temp');
        city.innerHTML = data.name;
        temp.innerHTML = data.main.temp + '°c';
        const currentWeather = data.weather[0].main;
        console.log('icon tiempo', currentWeather);
        console.log(`Temperatura actual en ${data.name}: ${data.main.temp}`);
        icono.src = '../animated/' + currentWeather + '.svg';
        // Thunderstorm (Tormenta)
        // Drizzle (Llovizna)---
        // Rain (Lluvia)--
        // Snow (Nieve)--
        // Atmosphere (Atmósfera)--
        // Clear (Despejado) --
        // Clouds (Nubes)--
    });
}
// ID  barcelona
elTiempo(3128760);
