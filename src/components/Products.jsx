
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../features/productslice';

// import {
//     setImage,
//     setCategory,
//     setPrice,
//     setRating
// } from '../features/productslice'
import { addToCart } from '../features/cartslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Products() {
    
    const dispatch = useDispatch();

    const products = useSelector((state) => state.product.products);
    const image = useSelector((state) => state.product.image);
    const category = useSelector((state) => state.product.category);
    const price = useSelector((state) => state.product.price);
    const rating = useSelector((state) => state.product.rating);

    

    useEffect(() => {
        dispatch(fetchProduct())
    },[dispatch]);

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
        toast.success('Added to cart successfully!', {
            position: 'top-center',
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }


    return (
        
        <div className='container-fluid py-5'>
            <ToastContainer/>
        <div className='row row-cols-4 m-auto'>
            {products.map((product, index) => (
                <div className='my-3 text-center' key={index}>
                    <Card className='cart pt-3'>
                        <img
                             src={product.image} className='imglogo m-auto' />
                        <Card.Body>
                            <div>
                                <p className='fw-bold'>Rating: {product.rating.rate}</p>
                                <p className='fw-bold'> Category: {product.category}</p>
                                <p className='fw-bold'> Price: ${product.price}</p>
                            </div>
                            <div>
                                <Button className='btncart' onClick={() => handleAddToCart(product)}>
                                    Add to Cart
                                </Button>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    </div>
    
    )
}

    export default Products;

