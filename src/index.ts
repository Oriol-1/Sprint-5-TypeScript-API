

interface jokeArray {
  id: string;
  joke: string;
  status: number;
}
const jokes: jokeArray = {
  id: '',
  joke: "Click to get a jokes",
  status: 0,
};

const jokeEl: HTMLElement | null = document.getElementById('joke');
const geTjoke: HTMLElement | null = document.getElementById('geTjoke');


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
async function generateJoke(joke: string) {
  const setHeader = {
    headers: {
      Accept: 'application/json',
    },
  };
  const response = await fetch('https://icanhazdadjoke.com', setHeader);
  const data = await response.json();
  jokes.joke = data.joke;
  jokeEl!.innerHTML = jokes.joke;
  // console.log('jokes:', jokes);
}

// puntúa los chistes y almacena las calificaciones en reportJokes
let reportJokes: Array<{ date: string; score: number; joke: string }> = [];

function scoreJokes(score: number) {
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
let unFondos:number = 1;
function fondo(){
let fondoo = document.getElementById('fondo');
fondoo!.classList.remove('fondo' + unFondos)
unFondos++
fondoo!.classList.add('fondo'+ unFondos);
if(unFondos == 7){
  fondoo!.classList.remove('fondo'+unFondos)
  unFondos=1
  fondoo!.classList.add('fondo'+ unFondos);
}
  
}

function elTiempo(cityID: number){


let key = "a38ed1a9973efc1459ebe37151897669"
  fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key + '&units=metric')
  .then(function(resp){
    return resp.json()
   
  })
  .then(function(data){
    console.log(data)

    let city = document.getElementById('city');
    const icono:any = document.getElementById('icono-animado');
    let temp = document.getElementById('temp');
    city!.innerHTML = data.name;
    temp!.innerHTML = data.main.temp + '°c';
 
    const currentWeather = data.weather[0].main;
   
  
    console.log('icon tiempo',currentWeather)
    console.log(`Temperatura actual en ${data.name}: ${data.main.temp}`);

   icono.src = '../animated/'+currentWeather+'.svg'

// Thunderstorm (Tormenta)
// Drizzle (Llovizna)---
// Rain (Lluvia)--
// Snow (Nieve)--
// Atmosphere (Atmósfera)--
// Clear (Despejado) --
// Clouds (Nubes)--
    
})


}
// ID  barcelona
elTiempo(3128760)

