import "../styles/input.css";
import * as model from "./model";
import forecastView from "./views/forecastView";
import weatherView from "./views/weatherView";
import highlightView from "./views/highlightView";

const controlCurrentLocationWeather = function () {
  if (navigator.geolocation) {
    weatherView.renderSpinner();
    forecastView.renderSkeleton();
    navigator.geolocation.getCurrentPosition(
      async (position: GeolocationPosition) => {
        try {
          weatherView.renderSpinner();
          // highlightView.renderSpinner();
          forecastView.renderSkeleton();
          await model.loadCurrentLocationWeather(position);
          weatherView.renderWeather(model.state);
          forecastView.renderForecast(model.state);
          highlightView.renderHighlight(model.state);
          console.log(model.state.weatherData);
        } catch (err: any) {
          weatherView.renderError(err.message);
        }
      },
      (error: GeolocationPositionError) => {
        weatherView.renderError(
          "Could not get your position: " + error.message
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  } else
    return weatherView.renderError(
      "Geolocation is not supported by your browser."
    );
};

controlCurrentLocationWeather();

const controlSearchResult = async function () {
  try {
  } catch (err) {
    console.error(err);
  }
};

const controlForecast = async function () {
  try {
  } catch (err) {
    console.error(err);
  }
};
