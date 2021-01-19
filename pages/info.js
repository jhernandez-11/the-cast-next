import Head from "next/head";
import React, { Component } from "react";
import Header from "../layout/Header";
import InfoContent from "../components/infoContent";
import Footer from "../layout/Footer";

class Home extends Component {
  render() {
    return (
      <div className="global-container">
        <Head>
          <title>The Cast</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Header />
        <InfoContent />
        <Footer />
      </div>
    );
  }
}

export default Home;
