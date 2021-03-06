import Head from "next/head";
import React, { Component } from "react";
import Header from "../src/layout/Header";
import InfoContent from "../src/components/infoContent";
import Footer from "../src/layout/Footer";

class Home extends Component {
  render() {
    return (
      <div className="global-container">
        <Head>
          <title>INFO</title>
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
