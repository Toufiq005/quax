"use client";

import React, { useState } from "react";
import "./DarkMode.css";

export default function DarkMode() {

    const [isLightMode, setIsLightMode] = useState(true)

    const setDarkMode = () =>{
       document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    const setLightMode = () =>{
       document.querySelector('body').setAttribute('data-theme', 'light')
    }


  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={() => {
            if(isLightMode){
                setDarkMode()
                setIsLightMode(false)
            }else{
                setLightMode()
                setIsLightMode(true)
            }
        }}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
      </label>
    </div>
  );
}
