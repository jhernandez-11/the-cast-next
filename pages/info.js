import Head from "next/head";
import React, { Component } from "react";
import Header from "../src/layout/Header";
import InfoContent from "../src/components/infoContent";
import Footer from "../src/layout/Footer";
import Packages from "../src/utils/Packages";

class Home extends Component {
  render() {
    return (
      <div className="global-container">
        <Head>
          <title>INFO</title>
          <link rel="icon" href="/favicon.png" />
          <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>
          <Packages />
        </Head>
        <Header />
        <InfoContent />
        <Footer />
      </div>
    );
  }
}

export default Home;
