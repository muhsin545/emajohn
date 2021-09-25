import React from 'react';
import './Cart.css'
const Cart = (props) => {

    const { Cart } = props;
    const totalReducer = (priv, product) => priv + product.price;
    const total = Cart.reduce(totalReducer, 0);
    const { shipping } = props;
    const shippingReducer = (previous, product) => previous + product.shipping;
    const shippingCost = shipping.reduce(shippingReducer, 0)

    // let total = 0;
    // for (const product of Cart) {
    //     total = total + product.price
    // }
    const tax = (total + shippingCost) * .10;
    const costBeforeTax = total + shippingCost;
    const grandTotal = total + shippingCost + tax;
    return (
        <div>
            <h3> Order Summary</h3>
            <h4>Items Ordered:{props.Cart.length} </h4>
            <table>
                <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>${total.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Shipping & Handling:</td>
                        <td>${shippingCost.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Total before tax:	</td>
                        <td>${costBeforeTax.toFixed(2)}</td>
                    </tr>
                    <tr>
                        <td>Estimated Tax:	</td>
                        <td>${tax.toFixed(2)}</td>
                    </tr>
                    <tr style={{
                        color: '#b12704',
                        fontSize: '18px',
                        fontWeight: "700",
                        marginBottom: '10px'
                    }}>
                        <td>Order Total:</td>
                        <td>${grandTotal.toFixed(2)}</td>
                    </tr>
                </tbody>

            </table>
            <button>Review Your Order</button>
        </div>
    );
};

export default Cart;