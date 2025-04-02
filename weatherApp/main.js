const APIKEY = 'c3f5b297bcff0511c69fee1e4109764c'
const APIURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
const SEARCHBOX = document.querySelector(".search input")
const SEARCHBTN = document.querySelector(".search button")
const WEATHERICON = document.querySelector(".weather-icon")

async function checkWeather(city) {

    const RESPONSE = await fetch(APIURL + city + `&appid=${APIKEY}`)

    if (RESPONSE.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await RESPONSE.json();
        var weatherState = data.weather[0].main.toLowerCase()

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°c';
        document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
        document.querySelector(".wind").innerHTML = data.wind.speed + ' km/h';
        WEATHERICON.src = `images/${weatherState}.png`
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

}

function onSearch(ev) {
    ev.preventDefault()
}

SEARCHBTN.addEventListener("click", () => {
    checkWeather(SEARCHBOX.value)
})