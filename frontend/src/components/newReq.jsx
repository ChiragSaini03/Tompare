import React from 'react'
import { useState } from 'react';
import imageEdit from './imageEdit';
import demo from "../utils/demo.png";

function NewReq() {
    const [image1, setImage1] = useState("https://www.acquia.com/sites/default/files/styles/content_grid/public/media/image/2022-11/On-Demand%20Demo%20Card%20Grphic_0.png?h=89a186e6&itok=0kQaKiVj");
    const [image2, setImage2] = useState("");
    const [image3, setImage3] = useState("");
    const [image4, setImage4] = useState("");
    // useEffect(() => {
      
    // }, image)
    const addImage = (url) => {
        if (image1 == "") {
            setImage1(url);
        } else if (image2 == "") {
            setImage2(url);
        } else if (image3 == "") {
            setImage3(url);
        } else if (image4 == "") {
            setImage1(url);
        }
    }
  return (
    <div>
        <h1>URate</h1>
        <div>
            <button className = "bg-slate-400 m-2 px-2 py-1 rounded-lg" onClick={addImage}>
            Upload Image
            </button>
            <div>
                <img
                    src = {demo}
                    alt = ""
                    className = "h-[300px]"
                ></img>
            </div>
        </div>

    </div>
  )
}

export default NewReq