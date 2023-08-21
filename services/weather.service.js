import axios from "axios";

const weatherApiBaseUrl = "http://api.openweathermap.org/data/2.5/forecast";
const XRapidAPIKeyHeaderValue = "6986bb019a116fb2b8ba32cc0c1e2024";

export const getWeatherData = async (lat, long, callback) => {
  const params = {
    lat: lat,
    lon: long,
    appid: XRapidAPIKeyHeaderValue,
  };

  //   return axios.get(weatherApiBaseUrl, { params })
  //     .then(response => response.data)
  //     .catch(error => {
  //       console.error('Error fetching weather data:', error);
  //       throw error;
  //     });
  try {
    const { data } = await axios.get(weatherApiBaseUrl, { params });
    // console.log(data);
    callback(data);
  } catch (error) {
    console.log(error);
  }
};
