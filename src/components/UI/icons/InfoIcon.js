import React from "react";
import Link from "next/link";

const infoIcon = (props) => (
  <Link href="/info">
    <svg
      className="w-9 h-9 cursor-pointer transform-gpu hover:scale-105 transition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <title>Information</title>
      <path
        d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z"
        fill="none"
        stroke="white"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M220 220h32v116"
      />
      <path
        fill="white"
        stroke="white"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M208 340h88"
      />
      <path fill="white" d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z" />
    </svg>
  </Link>
);

export default infoIcon;
