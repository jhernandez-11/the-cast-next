import React, { Component } from "react";
import Link from "next/link";

class HeaderAnimation extends Component {
  componentDidMount() {
    const anime = require("../../utils/anime.min.js");

    anime({
      targets: "h1.anime1 div",
      translateY: -9,
      delay: anime.stagger(100, { start: 500 }),
      direction: "alternate",
    });
  }

  animationHandler = () => {
    const anime = require("../../utils/anime.min.js");

    anime({
        targets: "h1.anime1 div",
        keyframes: [
            {translateY: -9},
            {translateX: 9},
            {translateY: 9},
            {translateX: -9},
            {translateX: 0},
            {translateY: 0}
          ],
        delay: anime.stagger(100),
        duration: 2100
      })
  }
  
  render() {
    return (
      <Link href="/">
        <h1 className="anime1 text-4xl sm:text-5xl font-bold text-blue-500 cursor-pointer flex" onClick={this.animationHandler}>
          <div>T</div>
          <div>H</div>
          <div>E</div>
          <div>/</div>
          <div>|</div>
          <div>\</div>
          <div>C</div>
          <div>A</div>
          <div>S</div>
          <div>T</div>
        </h1>
      </Link>
    );
  }
}

export default HeaderAnimation;
