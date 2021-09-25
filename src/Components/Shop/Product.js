import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import Feature from './Feature';
import './Product.css'
import Rating from 'react-rating';
const Product = (props) => {
    console.log(props);
    const { name, img, price, seller, stock, features, star } = props.product;

    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className='single-product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4>
                <p>by {seller}</p>
                <p>$ {price}</p>
                <div className='Details'>
                    <div>
                        <p>only {stock} left in stock - order soon</p>
                        <button onClick={() => props.handleAddtoCart(props.product)}>{cartIcon} Add to cart</button>
                    </div>
                    <div>

                        <h3>
                            <Rating className='star'
                                initialRating={star}
                                emptySymbol=" far fa-star"
                                fullSymbol=" fas fa-star"
                                readonly></Rating>
                        </h3>
                        <h3>Features</h3>
                        {
                            features.map(feature => <Feature feature={feature}></Feature>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Product;