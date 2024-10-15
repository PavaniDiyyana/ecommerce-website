import React from "react"
import "./NewCollections.css"
import NewCollection_data from "../Assets/NewCollection_data"
import Item from "../Item/Item"

const NewCollections=()=>{
    return(
        <div className="new-collections">
          <h1>NEW COLLECTIONS</h1>
          <hr/>
          <div className="collections">
            {
                NewCollection_data.map((item,i)=>{
                    return <Item key={i}  id={item.id} name={item.name} image={item.image} newprice={item.newprice} oldprice={item.oldprice}/>
                    
                })
            }


          </div>


        </div>
    )
}
export default NewCollections