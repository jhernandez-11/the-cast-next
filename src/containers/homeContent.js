import React, { Component } from "react";
import EarthBackground from "../components/UI/EarthBackground";
import Button from "../components/UI/Button";
import geocode from "../utils/geocode";
import forecast from "../utils/forecast";
import WeatherReport from "../components/weatherReport";
import WeatherIcons from "../components/UI/weatherIcons";
import axios from "axios";

class HomeContent extends Component {
  state = {
    coords: null,
    manualCoords: null,
    location: null,
    currentForecast: null,
    loading: false,
    showContent: false,
    showPreview: true,
  };

  getCoordinatesHandler = () => {
    this.setState({ loading: true });
    this.setState({ showPreview: false });

    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by your browser!");
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
      try {
        const latitude = position.coords.latitude,
          longitude = position.coords.longitude,
          coords = longitude + "," + latitude;

        this.setState({ coords });
        this.setLocationHandler();
      } catch (error) {
        this.setState({ location: "Something went wrong!" });
      }
    });
  };

  getManualCoordinatesHandler = () => {
    this.setState({ loading: true });
    this.setState({ showPreview: false });

    try {
      this.setState({ coords: this.state.manualCoords });
      this.setLocationHandler();
    } catch (error) {
      this.setState({ location: "Something went wrong!" });
    }
  };

  setLocationHandler = () => {
    geocode(
      this.state.coords,
      (error, { latitude, longitude, location } = {}) => {
        if (error) {
          return;
        }

        this.setState({ location });
        axios
          .post(
            "https://the-cast-940b0-default-rtdb.firebaseio.com/location.json",
            {
              latitude,
              longitude,
              location,
            }
          )
          .catch((error) => console.log(error));

        forecast(longitude, latitude, (error, currentForecast) => {
          if (error) {
            return;
          }
          this.setState({ currentForecast, showContent: true, loading: false });
        });
      }
    );
  };

  render() {
    const preview = (
      <h1 className="w-full text-center sm:text-left sm:w-2/3">
        Need the current weather with some additional advice?
        <br /> Get started above!
      </h1>
    );

    const weatherIcons = <WeatherIcons />;

    const report = (
      <WeatherReport
        location={this.state.location}
        currentForecast={this.state.currentForecast}
      />
    );

    const content = () => {
      if (this.state.loading) {
        return weatherIcons;
      }

      if (this.state.showContent) {
        return report;
      }
    };

    return (
      <main className="flex justify-around place-items-center relative h-full w-full bg-blue-900 sm:bg-gray-900 overflow-scroll sm:overflow-hidden">
        <div className="absolute bg-black w-full h-full z-10 opacity-75"></div>
        <EarthBackground />
        <div
          className="w-full h-full z-10 rounded-xl
            sm:w-4/5 sm:h-4/5"
          style={{ background: "rgba(30, 58, 138, .75)" }}
        >
          <div className="grid place-items-center sm:place-items-start">
            <div
              className="grid mt-6 
                sm:mt-0 sm:grid-flow-col sm:place-items-center"
            >
              <Button click={this.getCoordinatesHandler}>
                GET MY LOCATION
              </Button>
              <input
                type="text"
                value={this.state.manualCoords}
                onChange={(event) =>
                  this.setState({
                    manualCoords: event.target.value,
                    coords: event.target.value,
                  })
                }
                className="px-2 py-3 w-full rounded-lg my-3 
                  sm:px-3 sm:py-4"
                placeholder="Ex. San Francisco"
              ></input>
              <Button click={this.getManualCoordinatesHandler}>SEARCH</Button>
            </div>
          </div>
          <div
            className="flex flex-col text-white text-2xl m-4
            sm:flex-row sm:justify-between sm:m-6"
          >
            {this.state.showPreview ? preview : content()}
          </div>
        </div>
      </main>
    );
  }
}

export default HomeContent;