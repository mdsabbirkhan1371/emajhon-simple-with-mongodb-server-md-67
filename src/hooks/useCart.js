import { useEffect, useState } from "react"
import { getStoreCart } from "../utilities/fakedb";

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const storedCart = getStoreCart();
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product._id === id);
            if (addedProduct) {
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct)
            }
            setCart(saveCart)
        }

    }, [products])
    return [cart, setCart]
}
export default useCart;