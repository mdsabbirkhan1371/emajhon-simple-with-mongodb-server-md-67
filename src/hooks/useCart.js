import { useEffect, useState } from "react"
import { getStoreCart } from "../utilities/fakedb";

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoreCart();

        const saveCart = [];
        const keys = Object.keys(storedCart);
        fetch('http://localhost:5000/productBykeys', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(keys)

        })
            .then(res => res.json())
            .then(products => {

                for (const id in storedCart) {
                    const addedProduct = products.find(product => product._id === id);
                    if (addedProduct) {
                        const quantity = storedCart[id]
                        addedProduct.quantity = quantity;
                        saveCart.push(addedProduct)
                    }
                    setCart(saveCart)
                }
            })
    }, [])
    return [cart, setCart]
}
export default useCart;