import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import Product from './Product';
import './Shop.css'
const Shop = () => {
    const busket = <FontAwesomeIcon icon={faShoppingBasket} />
    const [cart, setCart] = useState([]);
    const [shipping, setShipping] = useState([])
    const [products, setProducts] = useState([])
    const [displayProduct, setDisplayProduct] = useState([])

    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setDisplayProduct(data);
            });
    }, [])
    const handleAddtoCart = product => {
        const newCart = [...cart, product];
        setCart(newCart);
        const newShipping = [...shipping, product];
        setShipping(newShipping)
    }
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProduct(matchedProducts)
    }
    return (
        <div>


            <div className='input-busket'>
                <input type="text" onChange={handleSearch} placeholder='Search By Product Name' /> <h1>{busket} {cart.length} </h1>
            </div>
            <div className="shop-container">
                <div className="product-container">
                    {
                        displayProduct.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddtoCart={handleAddtoCart}>
                        </Product>)}
                </div>
                <div className="cart-container">
                    <Cart Cart={cart} shipping={shipping}></Cart>
                </div>

            </div >
        </div>
    );
};

export default Shop;