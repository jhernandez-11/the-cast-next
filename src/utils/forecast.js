const axios = require("axios");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=7f52f87871bb95a8a0a2cac4d02a088f&query=" +
    longitude +
    "," +
    latitude +
    "&units=f";

  axios
    .get(url)
    .then((res) => {
      const temperature = res.data.current.temperature,
        weatherDescription = res.data.current.weather_descriptions[0],
        feelsLike = res.data.current.feelslike,
        humidity = res.data.current.humidity;

      if (temperature >= 100) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, in other words, it's like being inside an oven outside!!! Feels like ${feelsLike}, I wonder if anyone is wearing a sweater in this area. The humidity is ${humidity}, does a higher humidty help with heat, or make it worse?`
        );
      } else if (temperature >= 90 && temperature <= 99) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, remember to stay hydrated with this heat, a Starbucks iced tea sounds nice, right? Feels like ${feelsLike}, but I doubt people can feel the difference, no pun intended. The humidity is ${humidity}, interesting.`
        );
      } else if (temperature >= 80 && temperature <= 89) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, not to bad, can probably still go out for a walk. Feels like ${feelsLike}, how do meteorologists know this? The humidity is ${humidity}, not to bad.`
        );
      } else if (temperature >= 70 && temperature <= 79) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, perfect weather, like Bay Area weather. Feels like ${feelsLike}, doesn't really make a difference. The humidity is ${humidity}, nor does it here.`
        );
      } else if (temperature >= 60 && temperature <= 69) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, a little cold, should probably wear a sweater. Feels like ${feelsLike}, or maybe a hoodie. The humidity is ${humidity}, as expected.`
        );
      } else if (temperature >= 50 && temperature <= 59) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, it's cold, should probably wear a jacket. Feels like ${feelsLike}, and with thick socks. The humidity is ${humidity}, in case you were wondering.`
        );
      } else if (temperature >= 40 && temperature <= 49) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, it's pretty cold, turn the heater on. Feels like ${feelsLike}, don't go out for too long. The humidity is ${humidity}, probably not needed.`
        );
      } else if (temperature >= 30 && temperature <= 39) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, it's really cold, if you go out, take a Canada Goose jacket. Feels like ${feelsLike}, be careful. The humidity is ${humidity}, can you tell?`
        );
      } else if (temperature >= 20 && temperature <= 29) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, how can it be this cold, where do you live? Feels like ${feelsLike}, try not to go out. The humidity is ${humidity}, nice right?`
        );
      } else if (temperature >= 10 && temperature <= 19) {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, stay home! Feels like ${feelsLike}, turn heater to full capacity! The humidity is ${humidity}, doesn't matter though.`
        );
      } else {
        callback(
          undefined,
          `${weatherDescription}. It is currently ${temperature}, are you in the artic??? Feels like ${feelsLike}, turn heater to full capacity, and wear a sweater!!! The humidity is ${humidity}, but you have bigger worries!!!`
        );
      }
    })
    .catch((error) => callback("Something went wrong, please try again!"), undefined);
};

export default forecast;
