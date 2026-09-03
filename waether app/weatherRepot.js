// API key for OpenWeatherMap
const apikey = "7a718844b52b90e99287bd9af888bb67"

// Base API URL for weather data with metric units
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

// Get search input element
const search = document.querySelector(".search input")

// Get search button element
const btn = document.querySelector(".search button")

// Get weather icon element
const weatherIcom = document.querySelector(".weather-icom")

// Async function to check weather for a given city
async function checkWeather(city){
    // Fetch weather data from API
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    
    // Check if city was not found (404 error)
    if(response.status == 404) {
        // Show error message and hide weather display
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        // Parse response data
        var data = await response.json();

        // Update DOM elements with weather data
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = data.main.temp+"°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
        document.querySelector(".wind").innerHTML = data.wind.speed+"km/h";

        // Set weather icon based on weather condition
        if(data.weather[0].main == "Clouds"){
            weatherIcom.src = "img/images/clouds.png"
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcom.src = "img/images/mist.png"
        }else if(data.weather[0].main == "Clear"){
            weatherIcom.src = "img/images/clear.png"
        }else if(data.weather[0].main == "Rain"){
            weatherIcom.src = "img/images/rain.png"
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcom.src = "img/images/drizzer.png"
        }

        // Show weather display
        document.querySelector(".weather").style.display = "block";

        // Hide error message
        document.querySelector(".error").style.display = "none";
    }
}
    
// Add click event listener to search button
btn.addEventListener("click", ()=>{
    // Call checkWeather with the value from search input
    checkWeather(search.value)
})

// Note: There's an empty checkWeather() call at the end which would cause an error
// since no city parameter is provided. You might want to either remove it or
// provide a default city like: checkWeather("dhaka")