import React, { Component } from "react";
import EarthBackground from "../../components/UI/EarthBackground";
import Button from "../../components/UI/Button";
import geocode from "../../utils/geocode";
import forecast from "../../utils/forecast";
import WeatherReport from "./weatherReport";
import WeatherIcons from "../../components/UI/icons/WeatherIcons";
import axios from "axios";

class HomeContent extends Component {
  state = {
    coords: "",
    manualCoords: "",
    location: "",
    currentForecast: null,
    loading: false,
    showContent: false,
    showPreview: true,
    error: null,
  };

  getCoordinatesHandler = () => {
    this.setState({
      loading: true,
      showPreview: false,
      showContent: false,
      error: null,
    });

    if (!navigator.geolocation) {
      return alert("Geolocation is not supported by your browser!");
    }

    const timeout = setTimeout(() => {
      this.setState({
        error: "Make sure your browser is allowed to access your location!",
        loading: false,
        showContent: true,
      });
    }, 9000);

    navigator.geolocation.getCurrentPosition((position) => {
      clearTimeout(timeout);
      try {
        const latitude = position.coords.latitude,
          longitude = position.coords.longitude,
          coords = longitude + "," + latitude;

        this.setState({ coords });
        this.setLocationHandler();
      } catch (error) {
        console.log(error);
        this.setState({ error: "Something went wrong!" });
      }
    });
  };

  getManualCoordinatesHandler = () => {
    this.setState({
      loading: true,
      showPreview: false,
      showContent: false,
      error: null,
    });

    try {
      this.setState({ coords: this.state.manualCoords });
      this.setLocationHandler();
    } catch (error) {
      console.log(error);
      this.setState({ error: "Something went wrong!" });
    }
  };

  setLocationHandler = () => {
    geocode(
      this.state.coords,
      (error, { latitude, longitude, location } = {}) => {
        if (error) {
          console.log(error);
          this.setState({ error });
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
          .catch((error) => {
            console.log(error);
            this.setState({ error });
          });

        forecast(longitude, latitude, (error, currentForecast) => {
          if (error) {
            console.log(error);
            this.setState({ error });
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

    const error = <p>{this.state.error}</p>;

    const content = () => {
      if (this.state.loading) {
        return weatherIcons;
      }

      if (this.state.showContent) {
        return this.state.error ? error : report;
      }
    };

    return (
      <main className="flex place-items-center justify-center relative h-max w-full bg-blue-900 overflow-hidden 
        sm:overflow-scroll sm:h-screen">
        <div className="absolute bg-black w-full h-full z-10 opacity-75"></div>
        <EarthBackground />
        <div
          className="w-2/3 h-5/6 z-10 rounded-xl min-md:max-h-120 md:w-5/6 
            sm:w-full sm:h-full sm:rounded-none"
          style={{ background: "rgba(30, 58, 138, .75)" }}
        >
          <div className="grid place-items-center">
            <div className="grid grid-flow-col place-items-center gap-9 
              sm:grid-flow-row md:gap-0">
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
                className="px-3 py-4 w-30 rounded-lg my-3 
                  sm:px-2 sm:py-3"
                placeholder="Ex. San Francisco"
              ></input>
              <Button click={this.getManualCoordinatesHandler}>SEARCH</Button>
            </div>
          </div>
          <div
            className="flex flex-row text-white text-2xl m-4
            sm:flex-col sm:justify-between sm:m-6"
          >
            {this.state.showPreview ? preview : content()}
          </div>
        </div>
      </main>
    );
  }
}

export default HomeContent;
