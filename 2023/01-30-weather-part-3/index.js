// FEATURES :
/**
 * 1. User will be able to select cities
 * 2. User will be able to see a city's weather information
 */
const WEATHERAPI_KEY = "25457bf6cf4f491a8af21307230601"
const WEATHERAPI_BASE_URL = "http://api.weatherapi.com/v1/current.json"

const time = document.getElementById("time")
const weatherIcon = document.getElementById("icon")
const realFeelTemp = document.getElementById("realfeel-temp")
const condition = document.getElementById("condition-data")
const gusts = document.getElementById("gusts-data")
const humidity = document.getElementById("humidity-data")
const precipitation = document.getElementById("precipitation-data")
const windDirection = document.getElementById("wind-dir-data")
const pressure = document.getElementById("pressure-data")
const wind = document.getElementById("wind-data")
const visibility = document.getElementById("visibility-data")
const uv = document.getElementById("uv-data")

// Get the select element
const cityPicker = document.getElementById("city")

// Fetch all cities in Malaysia
fetch("https://countriesnow.space/api/v0.1/countries/cities", {
    method: "POST",
    body: JSON.stringify({
        country: "malaysia"
    }),
    headers: {
        'Content-Type': 'application/json'
    },
}).then((response) => response.json()).then(data => {
    // Loop though every cities
    for (let i = 0; i < data.data.length; i++) {

        // Create option
        const option = document.createElement('option')
        option.setAttribute('value', data.data[i])
        option.innerHTML = data.data[i]

        // Append a new option to the cityPicker
        cityPicker.appendChild(option)
    }
})

// Add an event listener
cityPicker.addEventListener('change', (ev) => {
    // Fetch the current weather of the selected city
    fetch(`${WEATHERAPI_BASE_URL}?key=${WEATHERAPI_KEY}&q=${cityPicker.value}&aqi=no`).then(response => {
        response.json().then(data => {
            const current = data.current

            console.log(data)
            // Display/Update the page with the data
            time.innerText = new Date(Date.now()).toLocaleTimeString()
            weatherIcon.src = current.condition.icon
            realFeelTemp.innerText = `RealFeel® ${current.feelslike_c}°`
            condition.innerText = current.condition.text
            gusts.innerText = current.gust_kph
            humidity.innerText = current.humidity
            precipitation.innerText = current.precip_mm
            windDirection.innerText = current.wind_degree
            pressure.innerText = current.pressure_mb
            wind.innerText = current.wind_kph
            visibility.innerText = current.vis_km
            uv.innerText = current.uv
        })
    })
    // console.log(cityPicker.value)
})