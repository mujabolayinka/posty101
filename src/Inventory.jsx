import Create from "./inventory_components/Create"
import Products from "./inventory_components/Products"

import { useContext, useState } from "react"
import { AppNameContext } from "./context/AppNameContext"
import { ProductContext } from "./context/ProductContext"


const Inventory = () => {
    //How to use context

   const {appName} = useContext(AppNameContext); //which cntext u wan use
   const {products} = useContext(ProductContext);


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center pt-5">
                    <h1>{appName}</h1>
                    <h4>Total Products: {products.length}</h4>
                </div>
            </div>

            {/* other components go here */}

            <Create  />
            <Products   />
            

        </div>
    )
}

export default Inventory