// FEATURES :
/**
 * 1. User will be able to select cities
 * 2. User will be able to see a city's weather information
 */


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
    console.log(cityPicker.value)
})