import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { removeFromCart } from '../features/cartslice';

function Wishlist() {
    const items = useSelector((state) => state.whislist.items);
    const dispatch = useDispatch();

    const handleRemover = (index) => {
        dispatch(removeFromCart(index));
    }

    return (
        <div className='container-fluid py-5'>
            <h2 className='text-center'>Shopping Cart</h2>
            {items.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className='row row-cols-4 m-auto'>
                    {items.map((item, index) => (
                        <div className='my-3 text-center' key={index}>
                            <Card className='cart pt-3'>
                                <img src={item.image} className='imglogo m-auto' alt={item.title} />
                                <Card.Body>
                                    <div>
                                        <p className='fw-bold'>Rating: {item.rating.rate}</p>
                                        <p className='fw-bold'>Category: {item.category}</p>
                                        <p className='fw-bold'>Price: ${item.price}</p>
                                    </div>
                                </Card.Body>
                                <button className='w-50 m-auto btns rounded border border-info' onClick={() => handleRemover(index)}>
                                    Remove
                                </button>
                            </Card>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Wishlist;

