import Head from "next/head";
import React, { Component } from "react";
import Header from "../src/layout/Header";
import HomeContent from "../src/containers/homeContent";
import Footer from "../src/layout/Footer";
import styled from "styled-components";
import Packages from "../src/utils/Packages";

class Home extends Component {
  render() {
    const Title = styled.h1`
      color: blue;
    `;    

    return (
      <div className="global-container">
        <Head>
          <title>HOME</title>
          <link rel="icon" href="/favicon.png" />
          <Packages />
        </Head>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    );
  }
}

export default Home;
