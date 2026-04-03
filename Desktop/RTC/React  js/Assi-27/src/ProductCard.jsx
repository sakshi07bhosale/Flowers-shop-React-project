import "./ProductCard.css"
import { useState, useEffect } from "react";

function ProductCard({ title, price, imageUrl, description, turnOfDiscount }) {
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price);
    const [discount, setDiscount] = useState(0);

    useEffect(() => {
        setTotalPrice(price * quantity);
    }, [quantity, price]);

    useEffect(() => {
        if (turnOfDiscount) {
            setDiscount(0);
            return;
        }
        if (totalPrice > 500) {
            setDiscount((totalPrice / 100) * 5);
        } else {
            setDiscount(0);
        }
    }, [totalPrice,turnOfDiscount]);


    return (
        <div className="product-card">
            {discount > 0 ? <span className="discount-badge">5% OFF</span> : null}
            <img src={imageUrl} alt={title} className="product-image" />
            <h2 className="product-title">{title}</h2>
            <p className="product-description">{description}</p>
            <p className="product-price">₹{price}</p>

            <div>
                <button
                    onClick={() => {
                        setQuantity(quantity - 1);
                    }}
                >
                    -
                </button>
                {quantity}
                <button
                    onClick={() => {
                        setQuantity(quantity + 1);
                    }}
                >
                    +
                </button>
            </div>
            <p>
                Total Price: {discount > 0 ? <del>₹{totalPrice}</del> : null} ₹
                {totalPrice - discount}
            </p>

        </div>
    );

}

export default ProductCard;
