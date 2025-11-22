import { useState } from 'react';

export default function Products(){
    const [products] = useState([
        { name: "Laptop", price: 1000 },
        { name: "Mobile", price: 500 }
    ]);
    const [visibleIndexes, setVisibleIndexes] = useState([]);

    const handleViewDetails = (index) => {
        setVisibleIndexes((prev) => [...prev, index]);
    };

    return (
        <div>
            <h2>Products List</h2>
            <div className="row">
                {products.map((value, index) => (
                    <div key={index} className="col-md-4">
                        <div className="card mb-4 shadow-sm">
                            <div className="card-body">
                                {visibleIndexes.includes(index) ? (
                                    <>
                                        <h5 className="card-title">{value.name}</h5>
                                        <p className="card-text">Price: ${value.price}</p>
                                    </>
                                ) : null}
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleViewDetails(index)}
                                    disabled={visibleIndexes.includes(index)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}