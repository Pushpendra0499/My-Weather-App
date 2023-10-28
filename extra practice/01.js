// Mock weather data
const mockWeatherData = {
    city: "New York",
    country: "US",
    temperature: "25°C",
    condition: "Sunny",
    forecast: [
        { day: "Monday", condition: "Sunny", temperature: "26°C" },
        { day: "Tuesday", condition: "Partly Cloudy", temperature: "24°C" },
        { day: "Wednesday", condition: "Cloudy", temperature: "23°C" },
    ],
};

// Function to update the UI with weather data
function updateWeatherUI(weatherData) {
    document.querySelector(".location h2").textContent = weatherData.city;
    document.querySelector(".location p").textContent = weatherData.country;
    document.querySelector(".temperature h2").textContent = weatherData.temperature;
    document.querySelector(".conditions img").src = `icons/${weatherData.condition.toLowerCase()}.png`;
    document.querySelector(".conditions p").textContent = weatherData.condition;

    // Update the forecast (for a more complex implementation)
    const forecastSection = document.querySelector(".forecast");
    forecastSection.innerHTML = ""; // Clear any existing data

    weatherData.forecast.forEach((forecastItem) => {
        const forecastItemElement = document.createElement("div");
        forecastItemElement.classList.add("forecast-item");
        forecastItemElement.innerHTML = `
            <h3>${forecastItem.day}</h3>
            <img src="icons/${forecastItem.condition.toLowerCase()}.png" alt="${forecastItem.condition}">
            <p>${forecastItem.condition}</p>
            <p>${forecastItem.temperature}</p>
        `;
        forecastSection.appendChild(forecastItemElement);
    });
}

// Simulate fetching weather data (replace this with a real API call)
function fetchWeatherData(city) {
    // In a real app, you would make an API request here to get weather data
    // For this example, we'll use the mock data
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockWeatherData);
        }, 1000); // Simulate a delay as if we're fetching data from an API
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector(".search button");
    searchButton.addEventListener("click", async () => {
        const cityInput = document.querySelector(".search input");
        const city = cityInput.value.trim();

        if (city) {
            const weatherData = await fetchWeatherData(city);
            updateWeatherUI(weatherData);
        }
    });
});
