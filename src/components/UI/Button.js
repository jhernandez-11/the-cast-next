import React from "react";

const button = (props) => (
  <button
    onClick={props.click ? props.click : null}
    className="text-blue-400 px-2 py-3 bg-white rounded-lg uppercase
        sm:px-3 sm:py-4 sm:m-6 sm:w-auto"
  >
    {props.children}
  </button>
);

export default button;
