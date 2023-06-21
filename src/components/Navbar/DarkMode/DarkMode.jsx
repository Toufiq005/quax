"use client";

import React, { useState } from "react";
import "./DarkMode.css";
import Image from "next/image";

// const DarkMode = () => {

//     const [isLightMode, setIsLightMode] = useState(true)

//     const setDarkMode = () =>{
//        document.querySelector('body').setAttribute('data-theme', 'dark')
//     }
//     const setLightMode = () =>{
//        document.querySelector('body').setAttribute('data-theme', 'light')
//     }

//     const toggleTheme = () =>{
//         if(isLightMode){
//             setDarkMode()
//             setIsLightMode(false)
//         }else{
//             setLightMode()
//             setIsLightMode(true)
//         }
//     }

//     return (
//         <div className='dark_mode'>
//             <input
//                 className='dark_mode_input'
//                 type='checkbox'
//                 id='darkmode-toggle'
//                 onChange={toggleTheme}
//             />
//             <label className='dark_mode_label' for='darkmode-toggle'>
//                 <Sun />
//                 <Moon />
//             </label>
//         </div>
//     );
// };

// export default DarkMode;

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
      <label className="dark_mode_label" for="darkmode-toggle">
        {/* <Image src="/assets/navbar/Sun.svg" alt="icon" width="40" height="40"/>
        <Image src="/assets/navbar/Moon.svg" alt="icon" width="40" height="40"/> */}
      </label>
    </div>
  );
}
