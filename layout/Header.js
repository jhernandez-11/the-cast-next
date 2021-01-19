import React, { Component } from "react";
import InfoIcon from "../components/UI/InfoIcon";
import Link from "next/link";
import styled from "styled-components";

class Header extends Component {
  render() {
    const InformationIcon = styled.div`
      color: white;
      font-size: 2.4rem;
      display: flex;
      transition: all 150ms;
      cursor: pointer;

      &:hover {
        color: rgba(59, 130, 246, 0.75);
      }
    `;

    return (
      <nav className="flex justify-around place-items-center h-24 w-full bg-gray-900">
        <Link href="/">
          <h1 className="text-5xl font-bold text-blue-500 cursor-pointer">
            THE /|\ CAST
          </h1>
        </Link>
        <Link href="/info">
          <InformationIcon>
            <ion-icon name="information-circle-outline"></ion-icon>
          </InformationIcon>
        </Link>
      </nav>
    );
  }
}

export default Header;
