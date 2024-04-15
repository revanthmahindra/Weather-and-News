function getWeather() {
    var city = document.getElementById("cityInput").value;
    var weatherApiKey = "04cda6124bcc6b85e40c873e8001f12b"; // Replace with your OpenWeatherMap API key
    var newsApiKey = "2d8618a564a66ff9ad77c689aaee9909"; // Replace with your GNews API key

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
            // Fetch news based on the city
            fetchNews(city, newsApiKey);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById("weatherInfo").innerHTML = error.message;
        });
}

function displayWeather(data) {
    var weatherInfo = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].main}</p>
        <p>Description: ${data.weather[0].description}</p>
    `;
    document.getElementById("weatherInfo").innerHTML = weatherInfo;
}

function fetchNews(city, apiKey) {
    fetch(`https://gnews.io/api/v4/search?q=${city}&token=${apiKey}&lang=en`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch news');
            }
            return response.json();
        })
        .then(data => {
            displayNews(data.articles);
        })
        .catch(error => {
            console.error('Error fetching news data:', error);
            document.getElementById("news").innerHTML = "<p class='error-message'>Failed to fetch news</p>";
        });
}

function displayNews(articles) {
    var newsContainer = document.getElementById("news");
    newsContainer.innerHTML = ""; // Clear previous news

    articles.forEach(article => {
        var newsItem = `
            <div class="news-item">
                <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                <p>${article.description}</p>
                <p>Source: ${article.source.name}</p>
            </div>
        `;
        newsContainer.innerHTML += newsItem;
    });
}
