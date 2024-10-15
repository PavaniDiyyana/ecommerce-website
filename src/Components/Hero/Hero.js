import React from "react"
import "./Hero.css"
import handicon from "../Assets/handicon.png"
import hero from "../Assets/hero.png"
import arrow from "../Assets/arrow.png"

const Hero=()=>{
    return(
        <div className="hero">
        <div className="hero-left">
            <p> New Arrivals Only!</p>
            <div className="hero-para">
                <div className="hero-hand-icon">
                <p>Trendy</p>
                <img src= {handicon} alt=""/>
                </div>
                <p>Collections</p>
                <p>for Everyone</p>
            </div>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero} alt=""/>


        </div>
          
            
        </div>
    )
}
export default Hero