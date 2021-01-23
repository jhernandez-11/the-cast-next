import Head from "next/head";
import React, { Component } from "react";
import Header from "../src/layout/Header";
import HomeContent from "../src/containers/HomeContent/HomeContent";
import Footer from "../src/layout/Footer";

class Home extends Component {
  render() {
    return (
      <div className="global-container">
        <Head>
          <title>HOME</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <HomeContent />
        <Footer />
      </div>
    );
  }
}

export default Home;
