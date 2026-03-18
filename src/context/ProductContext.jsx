import { createContext, useState } from "react";

//stage1: create the context
export const ProductContext = createContext();


//stage2: create the provider: a super compnent: all components must return something
export const ProductProvider = ({children}) => {
    const defaultProducts = [
        {
            id: 197656,
            name: "product1",
            price: 1200
        },
        {
            id: 127666,
            name: "product2",
            price: 1000
        }
    ]
    const [products, setProducts] = useState(defaultProducts); 

    function delete_product(idToDelete){
        //delete a product with id of id parameter: filter our state: products and exclude a product with id of id parameter
        const filteredProducts = products.filter((prod)=>{
           return prod.id != idToDelete
        });
        setProducts(filteredProducts)
    }

    return <ProductContext.Provider value={{products, setProducts, delete_product}}>
    
     {children}
    
    </ProductContext.Provider>

}