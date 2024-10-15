import React from "react"
import "./Footer.css"
import logo from "../Assets/logo.png"

const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-logo">
             <img src={logo} alt=""/>
             <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src="https://cdn-icons-png.flaticon.com/128/717/717392.png" alt=""/>
                </div>
                
                <div className="footer-icons-container">
                    <img src="https://cdn-icons-png.flaticon.com/128/25/25698.png" alt=""/>
                </div>
                <div className="footer-icons-container">
                    <img src="https://cdn-icons-png.flaticon.com/128/1384/1384023.png" alt=""/>
                </div>
                </div>
                <div className="footer-copyright">
                    <hr/>
                    <p>Copyright @ 2024 - All Right-Reserved</p>
                </div>
            
        </div>
    )
}
export default Footer