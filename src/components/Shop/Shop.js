import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';

import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useCart()
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);

    // products load 
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [page, size]);


    // count loaded 
    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages)
            })
    }, [])


    // localStorage  comment kora hooiyese useCart theke import korar jonno
    // useEffect(() => {
    //     const storedCart = getStoreCart();
    //     const saveCart = [];
    //     for (const id in storedCart) {
    //         const addedProduct = products.find(product => product._id === id)
    //         if (addedProduct) {

    //             const quantity = storedCart[id];
    //             addedProduct.quantity = quantity;
    //             saveCart.push(addedProduct)
    //         }
    //         setCart(saveCart)
    //     }
    // }, [products])


    const handleAddToCart = (selectedPro) => {
        const exists = cart.find(product => product._id === selectedPro._id)
        let newCart = [];
        if (!exists) {
            selectedPro.quantity = 1;
            newCart = [...cart, selectedPro]
        }
        else {
            const rest = cart.filter(product => product._id !== selectedPro._id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }

        setCart(newCart);
        addToDb(selectedPro._id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                            .map(number => <button
                                className={page === number ? 'selected' : ''}
                                onClick={() => setPage(number)}
                            >{number}</button>)
                        // >{number + 1}</button>) 1 theke dekhanor jonno
                    }

                    <select onChange={(e) => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;