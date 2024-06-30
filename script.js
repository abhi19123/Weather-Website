const apiKey = 'f00c38e0279b7bc85480c3fe775d518c';
const url = `http://api.openweathermap.org/data/2.5/weather`;

document.getElementById('searchButton').addEventListener('click', async () => {
    const locationInput = document.getElementById('locationInput').value;
    const response = await fetch(`${url}?q=${locationInput}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    displayWeatherData(data);
});

function displayWeatherData(data) {
    const locationElement = document.getElementById('location');
    const temperatureElement = document.getElementById('temperature');
    const descriptionElement = document.getElementById('description');

    locationElement.textContent = data.name;
    temperatureElement.textContent = `Temperature: ${data.main.temp}°C`;
    descriptionElement.textContent = `Description: ${data.weather[0].description}`;
}
