import React,{useState,useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext'
import './Navbar.css'
import  logo from "../Assets/logo.png"
import {Link} from "react-router-dom"



const Navbar=()=>{
  const {getTotalCartItems} = useContext(ShopContext);
  const [menu,setMenu] = useState("shop")
    return(
        <div className='navbar'>
            <div className='nav-logo'>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
          </div>
          <ul className='nav-menu'>
            <li onClick={()=>{setMenu("shop")}}><Link to="/" style={{textDecoration:'none'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/mens" style={{textDecoration:'none'}}>Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}><Link to = "/womens" style={{textDecoration:'none'}}>Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}><Link to= "/kids" style={{textDecoration:'none'}}>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
          </ul>
          <div className='nav-login-cart'>
           <Link to="/login" style={{textDecoration:'none'}}> <button>Login</button></Link> 
           <Link to= "/cart" style={{textDecoration:'none'}}> <img src="https://t4.ftcdn.net/jpg/01/63/42/79/240_F_163427943_W56xtj7YydS4YujdUqQot94IINtt91FV.jpg" alt=""/>
           </Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
          </div>
        </div>
    )
}
export default Navbar