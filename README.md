# Weather-and-News
# Weather & News App

This project is a simple web application that allows users to fetch the current weather and top news articles for a specified city. It uses the OpenWeatherMap API to get weather data and the GNews API to fetch news articles.

## Deployment
The website is deployed and can be accessed [here][(https://revanthmahindra.github.io/Weather-and-News/)].

## Features

- Fetches and displays current weather information for a specified city.
- Displays top news articles related to the specified city.

## Technologies Used

- HTML
- CSS
- JavaScript
- [OpenWeatherMap API](https://openweathermap.org/api)
- [GNews API](https://gnews.io/docs/)

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/revanthmahindra/Weather-and-News.git
    ```

2. **Open the project directory:**

    ```bash
    cd Weather-and-News
    ```

3. **Open `index.html` in your preferred web browser.**

## Usage

1. Enter the name of the city in the input field.
2. Click the "Get Weather" button.
3. The weather information for the specified city will be displayed.
4. The top news articles related to the specified city will also be displayed below the weather information.


## API Keys

This project requires API keys from OpenWeatherMap and GNews. 

1. **Get your API keys:**
    - [OpenWeatherMap API](https://home.openweathermap.org/users/sign_up)
    - [GNews API](https://gnews.io/register/)

2. **Replace the placeholder keys in `script.js` with your own API keys:**

    ```javascript
    var weatherApiKey = "YOUR_OPENWEATHERMAP_API_KEY";
    var newsApiKey = "YOUR_GNEWS_API_KEY";
    ```



