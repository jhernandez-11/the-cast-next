import React, { Component } from "react";
import Link from "next/link";
import HeaderAnimation from "../components/UI/animations/HeaderAnimation";
import InfoIcon from "../components/UI/icons/InfoIcon";

const header = (props) => (
  <nav className="flex justify-around place-items-center h-24 w-full bg-gray-900 sm:shadow-lg">
    <HeaderAnimation /> 
    <InfoIcon />
  </nav>
);

export default header;
