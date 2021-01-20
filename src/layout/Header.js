import React, { Component } from "react";
import Link from "next/link";
import styled from "styled-components";
import HeaderAnimation from "../components/UI/headerAnimation";

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

      @media(max-width: 640px) {
        font-size: 2.1rem;
      }
    `;

    return (
      <nav className="flex justify-around place-items-center h-24 w-full bg-gray-900">
        <HeaderAnimation />
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
