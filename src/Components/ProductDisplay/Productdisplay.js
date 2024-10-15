import React, {useContext} from "react"
import "./Productdisplay.css"
import { ShopContext } from "../../Context/ShopContext";



const ProductDisplayed=(props)=>{
 
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
                <img src={product.image} alt=""/>
            </div>
            <div className="productdisplay-img">
                <img className= "productdisplay-main-img" src={product.image} alt=""/>
            </div>
            </div>
            <div className="productdisplay-right">
                <h1>{product.name}</h1>
                <div className="productdisplay-right-stars">
                    <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt=""/>
                    <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt=""/>
                    <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt=""/>
                    <img src="https://cdn-icons-png.flaticon.com/128/477/477406.png" alt=""/>
                    <img src="https://cdn-icons-png.flaticon.com/128/2902/2902475.png" alt=""/>
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${product.oldprice}</div>
                    <div className="productdisplay-right-price-new">${product.newprice}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight usually knitted, pullover shirt, close-fitting and with a round
                    neckline and the short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-rigt-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                    <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
                    <p className="productdisplay-right-category"> <span>Category: </span>{product.category} , T-Shirt, Crop Top</p>
                    <p className="productdisplay-right-category"> <span>Tags: </span>Modern, Latest</p>
                </div>

            </div>

        </div>
    )
}

export default ProductDisplayed