import React from 'react'
import demo from "../utils/demo.png";

function imageEdit({ props }) {
  return (
    <div>
        <img
            src = {demo}
            alt = ""
            className = "h-[300px]"
        ></img>
    </div>
  )
}

export default imageEdit