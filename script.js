const apiKey = '36320234c3bc44508e841755251301';
const weatherUrl = 'https://api.weatherapi.com/v1/current.json';

async function getWeather(city) {
    const response = await fetch(`${weatherUrl}?key=${apiKey}&q=${city}`);
    const data = await response.json();
    console.log(data);
    updateWeather(data);
}

function updateWeather(data) {
    document.querySelector('.temp').textContent = `${data.current.temp_c}°C`;
    document.querySelector('.city').textContent = data.location.name;
    document.querySelector('.humidity').textContent = `${data.current.humidity}%`;
    document.querySelector('.wind').textContent = `${data.current.wind_kph} km/h`;
    document.querySelector('.weather-icon').src = `https:${data.current.condition.icon}`;
}

document.querySelector('.search button').addEventListener('click', () => {
    const city = document.querySelector('.search input').value;
    getWeather(city);
});
