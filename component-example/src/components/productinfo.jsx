import { useState } from 'react';
function ProductInfo() {
     const [product, setProduct] = useState({
         name: 'Sample Product',
         price: 100,
         description: 'This is a sample product description.'
     });
     const [discountApplied, setDiscountApplied] = useState(false);
    const [showInfo, setShowInfo] = useState(false);
    return (
        <div>
            <button
                onClick={() => setShowInfo((prev) => !prev)}
            >
                View Details
            </button>
            {showInfo && (
                <div>
                    <h3>{product.name}</h3>
                    <p>Price: ${product.price}</p>
                    <p>{product.description}</p>
                    <button
                        onClick={() => {
                            if (!discountApplied) {
                                setProduct({ ...product, price: product.price - 10 });
                                setDiscountApplied(true);
                            }
                        }}
                        disabled={discountApplied}
                    >
                        Apply Discount
                    </button>
                </div>
            )}
        </div>
    );
}

export default ProductInfo;