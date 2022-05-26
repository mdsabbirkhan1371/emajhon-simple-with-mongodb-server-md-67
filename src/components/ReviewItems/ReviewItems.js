import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItems.css'
const ReviewItems = (props) => {
    const { handleRemoveProduct, product } = props;
    const { name, img, price, shipping, quantity } = product;


    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-details-container">
                <div className="review-item-details">
                    <h4 className='product-name' title={name}>Name: {name.length > 20 ? name.slice(0, 20) + '..' : name}</h4>
                    <p>Price: ${price}</p>
                    <p>Shipping: {shipping}</p>
                    <p><span>Quantity: {quantity}</span></p>
                </div>
                <div className="delete-button">
                    <button onClick={() => handleRemoveProduct(product)} className='button'>
                        <FontAwesomeIcon className='icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;