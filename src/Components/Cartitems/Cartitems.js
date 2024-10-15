import React, {useContext} from "react"
import { ShopContext } from "../../Context/ShopContext";
import "./Cartitems.css"

const CartItems=()=>{
    const {getTotalCartAmount, allproducts_data,cartItems,removeFromCart} = useContext(ShopContext);
    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            </div>
            <hr/>
           {
            allproducts_data.map((e)=>{
                if(cartItems[e.id]>0)
                {
                    return  <div key={e.id}>
                    <div className="cartitems-format cartitems-format-main" >
                        <img src={e.image} alt="" className="carticon-product-icon"/>
                        <p>{e.name}</p>
                        <p>${e.newprice}</p>
                        <button className="cartitems-quantity">{cartItems[e.id]}</button>
                        <p>${e.newprice*cartItems[e.id]}</p>
                        <img className="cartitems-remove-icon" src="https://cdn-icons-png.flaticon.com/128/2997/2997911.png" onClick={()=>{removeFromCart(e.id)}} alt=""/>
                    </div>
                    <hr/>
                </div>

                }
                return null;
            })
           
           }
           <div className="cartitems-down">
            <div className="cartitems-total">
                <h1>Cart Total</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>
                    <hr/>
                    <div className="cartitems-total-item">
                        <p>Total</p>
                        <p>${getTotalCartAmount()}</p>
                    </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            <div className="cartitems-promocode">
                <p>If you have a code, Enter it here</p>
                <div className="cartitems-promobox">
                    <input type="text" placeholder="promo code"/>
                    <button>Submit</button>
                </div>
            </div>
           </div>
        </div>
    )
}

export default CartItems;