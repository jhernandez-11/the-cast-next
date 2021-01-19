import React from 'react'

const button = (props) => <button onClick={props.click ? props.click : null} className="text-blue-400 px-3 py-4 m-6 bg-white rounded-lg uppercase">{props.children}</button>

export default button