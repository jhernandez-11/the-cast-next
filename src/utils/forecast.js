const axios = require("axios");

const forecast = (latitude, longitude, callback) => {
  // const url =
  //   "http://api.weatherstack.com/current?access_key=7f52f87871bb95a8a0a2cac4d02a088f&query=" +
  //   longitude +
  //   "," +
  //   latitude +
  //   "&units=f";

  const url2 = `https://api.stormglass.io/v2/weather/point?lat=${longitude}&lng=${latitude}&params=airTemperature,humidity,cloudCover&start=${Math.floor(
    Date.now() / 1000
  )}`;

  axios
    .get(url2, {
      headers: {
        Authorization:
          "9a56ee7e-5b6d-11eb-9009-0242ac130002-9a56ef1e-5b6d-11eb-9009-0242ac130002",
      },
    })
    .then((res) => {
      const temperature = (
          (res.data.hours[0].airTemperature.noaa * 9) / 5 +
          32
        ).toFixed(0),
        humidity = (res.data.hours[0].humidity.noaa).toFixed(0) + "%";

      const weatherDescription = () => {
        const clouds = res.data.hours[0].cloudCover.noaa.toFixed(0);

        if (clouds == 0) {
          return "Sunny; at night perfect for stargazing";
        } else if (clouds == 1 || clouds == 2) {
          return "Fair, one or two clouds";
        } else if (clouds == 3 || clouds == 4 || clouds == 5) {
          return "Mostly sunny, few clouds";
        } else if (clouds == 6 || clouds == 7) {
          return "Partly sunny, partly cloudy";
        } else if (clouds == 8) {
          return "Broken, you'll be lucky to see the sun";
        } else {
          return "Cloudy, overcast so don't expect the sun";
        }
      };

      if (temperature >= 100) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, in other words, it's like being inside an oven outside!!! I wonder if anyone is wearing a sweater in this area. The humidity is ${humidity}, does a higher humidty help with heat, or make it worse?`
        );
      } else if (temperature >= 90 && temperature <= 99) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, remember to stay hydrated with this heat, a Starbucks iced tea sounds nice, right? The humidity is ${humidity}, interesting.`
        );
      } else if (temperature >= 80 && temperature <= 89) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, not to bad, can probably still go out for a walk. How do meteorologists know this? The humidity is ${humidity}, not to bad.`
        );
      } else if (temperature >= 70 && temperature <= 79) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, perfect weather, like Bay Area weather. Wear anything but a jacket. The humidity is ${humidity}, nor does it here.`
        );
      } else if (temperature >= 60 && temperature <= 69) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, a little cold, should probably wear a sweater, or maybe a hoodie. The humidity is ${humidity}, as expected.`
        );
      } else if (temperature >= 50 && temperature <= 59) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, it's cold, should probably wear a jacket, and thick socks. The humidity is ${humidity}, in case you were wondering.`
        );
      } else if (temperature >= 40 && temperature <= 49) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, it's pretty cold, turn the heater on. Don't go out for too long. The humidity is ${humidity}, probably not needed.`
        );
      } else if (temperature >= 30 && temperature <= 39) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, it's really cold, if you go out, take a Canada Goose jacket. Be careful. The humidity is ${humidity}, can you tell?`
        );
      } else if (temperature >= 20 && temperature <= 29) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, how can it be this cold, where do you live? Try not to go out. The humidity is ${humidity}, nice right?`
        );
      } else if (temperature >= 10 && temperature <= 19) {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, stay home! Turn heater to full capacity! The humidity is ${humidity}, doesn't matter though.`
        );
      } else {
        callback(
          undefined,
          `${weatherDescription()}. It is currently ${temperature + ' F'}, are you in the artic??? Turn heater to full capacity, and wear a sweater!!! The humidity is ${humidity}, but you have bigger worries!!!`
        );
      }
    })
    .catch(
      (error) => callback("Something went wrong, please try again!"),
      undefined
    );
};

export default forecast;