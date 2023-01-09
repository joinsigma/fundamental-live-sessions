// FEATURES :
/**
 * 1. User will be able to select cities
 * 2. User will be able to see a city's weather information
 */

const cities = ["Ipoh", "Johor Bahru", " Kuching"]

fetch("https://countriesnow.space/api/v0.1/countries/cities", {
    method: "POST",
    body: JSON.stringify({
        country: "malaysia"
    }),
    headers: {
        'Content-Type': 'application/json'
    },
}).then((response) => response.json()).then(data => {
    cities.length = 0

    // Add all cities into array
    cities.push(...data.data)
    console.log("List:", cities)
})