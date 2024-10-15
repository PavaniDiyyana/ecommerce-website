import React, {createContext,useState} from "react"
import allproducts_data from "../Components/Assets/allproducts_data"



export const ShopContext = createContext(null);
const getDefaultCart=()=>{
    let cart={};
    for(let index=0;index < allproducts_data.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const [cartItems,setcartItems] = useState(getDefaultCart())

    const addToCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems);
    }
    const removeFromCart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const  getTotalCartAmount=()=>{
        let totalAmount = 0;
        for(const item in cartItems)
            {
            if(cartItems[item]>0)
                {
                let itemInfo = allproducts_data.find((product)=>product.id===Number(item))
                totalAmount += itemInfo.newprice*cartItems[item];
            }
          
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    }

    const contextValue = {allproducts_data, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems}
    // console.log(cartItems);

   
    return (
        <ShopContext.Provider value={contextValue}>
{props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;