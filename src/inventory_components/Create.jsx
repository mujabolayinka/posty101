import { useState, useContext } from "react"
import { ProductContext } from "../context/ProductContext";

const Create = () => {
    //these data: products and setProducts are comign from our ProductContext
    const{products, setProducts} = useContext(ProductContext);

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [id, setId] = useState("");
    const [form, setForm] = useState({
        id: "",
        name: "",
        price: ""
    }); // a state to manage all form elements and id

    
    //a function that responds when the form is submitted
    function handle_submit(e){
        e.preventDefault();
        if (form.name == "" || form.price == ""){
            alert("Please fill all the fields")
        }else{

            //generate a random id
            let id = Date.now();
            setForm({...form, id: id});

            //combine everything to form an object
            const data = {
                id: id,
                name: name,
                price: price
            }
            // console.log(data)
            //send what we collected from the form to an api that will insert it into database. The api sends a response and we update our state 

            setProducts([...products, form]);
        }

    }

    function updateFormState(e){
        setForm({...form, [e.target.name] : e.target.value})
    }

    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <form className="mb-5" onSubmit={handle_submit}>
                   
                    <input type="text" name="name" className="form-control mb-2" placeholder="product name" value={form.name} onChange={updateFormState} />
                   
                    <input type="number" name="price" className="form-control mb-2" placeholder="product price" value={form.price} onChange={updateFormState} />
                   
                    <button className="btn btn-primary btn-sm">Add Product</button>
                </form>
            </div>
        </div>
    )
}

export default Create