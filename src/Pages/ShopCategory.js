import React,{useContext} from "react"
import {ShopContext} from "../Context/ShopContext"
import dropdown_arrow from "../Components/Assets/dropdown_arrow.png"
import Item from "../Components/Item/Item"
import "./css/ShopCategory.css"

const ShopCategory=(props)=>{
    const {allproducts_data} = useContext(ShopContext);
    return(
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt=""/>
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                Sort by <img src = {dropdown_arrow} alt=""/>
                </div>
                </div>
                <div className="shopcategory-products">
                    {
                        allproducts_data.map((item, i)=>{
                            if(props.category === item.category){
                                return <Item key={i} id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice}/>
                            } else{
                                return null;
                            }
                        })
                    }
                </div>
                    <div className="shopcategory-loadmore">
                    Explore More
                    </div>
            
           


        </div>
    )
}
export default ShopCategory