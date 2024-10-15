import React,{useContext} from "react"
import {ShopContext} from "../Context/ShopContext"
import {useParams} from "react-router-dom"
import Breadcrum from "../Components/Breadcrums/Breadcrum"
import ProductDisplayed from "../Components/ProductDisplay/Productdisplay"
import Descriptionbox from "../Components/DescriptionBox/Description"
import Relatedproducts from "../Components/RelatedProducts/Relatedproducts"
const Product=()=>{
    const {allproducts_data} = useContext(ShopContext);
    const {productId} = useParams();
   
    const product = allproducts_data.find((e)=>e.id === Number(productId));
    return(
        <div>
            <Breadcrum product={product}/>
            <ProductDisplayed product={product}/>
            <Descriptionbox/>
            <Relatedproducts/>
        </div>
    )
}
export default Product