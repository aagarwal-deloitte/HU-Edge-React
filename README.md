# HU-Edge-React

Assignment for HU-Edge-React Track.

The weather-app folder contains all the configurations file related to the project and the src folder contains the actual code logic.

The assets folder contains the background image for the application.

The components folder contains 2 components: CurrentWeather and ForecastDisplay. 

The CurrentWeather component displays the current weather details of the user based on their geolocation and the ForecastDisplay displays the hourly and 5 days forecas of the user provided location.

The hooks folder has a custom hook called useWeatherData which returns the forecast data based on the city provided.

The pages folder has two pages: HomePage.js and WeatherPage.js

The HomePage.js holds all the components of the HomePage and the WeatherPage.js holds the component of the provided city's page.


The url of the applications are:

Homepage: http://localhost:3000

Citypage: http://localhost:3000/{city}

To run the application, make sure you are inside the parent weather_app directory.

To run the application, use the command:
npm start
