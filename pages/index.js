import Head from "next/head";
import React, { Component } from "react";
import Header from "../layout/Header";
import HomeContent from "../containers/homeContent";
import Footer from "../layout/Footer";
import styled from "styled-components";
import Ionicons from "../components/UI/Ionicons";

class Home extends Component {
  render() {
    const Title = styled.h1`
      color: blue;
    `;    

    return (
      <div className="global-container">
        <Head>
          <title>The Cast</title>
          <link rel="icon" href="/favicon.png" />
          <Ionicons />
        </Head>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    );
  }
}

export default Home;
