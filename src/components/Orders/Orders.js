import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProduct from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Orders.css';

const Orders = () => {
    const [products, setProducts] = useProduct();
    const [cart, setCart] = useCart();




    const handleRemoveProduct = (product) => {
        const rest = cart.filter(pd => pd._id !== product._id);
        setCart(rest);
        removeFromDb(product._id)
    }

    return (
        <div className='shop-container'>
            <div className='review-products-container'>
                {
                    cart.map(product => <ReviewItems
                        key={product._id}
                        product={product}
                        handleRemoveProduct={handleRemoveProduct}
                    ></ReviewItems>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}

                >
                    <Link to='/shiping'>
                        <button>
                            Proceed Shiping
                        </button>
                    </Link>
                </Cart>
            </div>
        </div >
    );
};

export default Orders;