async function result() {
    const city = document.querySelector("#city").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    try {
        const apiKey = '93f26e3c57081a6210de53b8dcfdfea4';
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("City not found or API error.");
        }

        const data = await response.json();

        const description = data.weather[0].description;
        const icon = data.weather[0].icon;
        const temperature = (data.main.temp - 273.15).toFixed(2);


        document.getElementById("weather").innerText = description;
        document.getElementById("temper").innerText = `${temperature}°C`;
        document.getElementById("location").innerText = capitalize(city);

    } catch (error) {
        console.error(error);
        alert("An error occurred while fetching the weather. Please try again.");
    }
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
