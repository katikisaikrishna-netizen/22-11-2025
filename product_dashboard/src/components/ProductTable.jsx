function ProductTable() {  
    const products = [
        { id: 1, name: "Laptop", price: 1000, stock: 5 },
        { id: 2, name: "Mobile", price: 500, stock: 10 },
        { id: 3, name: "Tablet", price: 300, stock: 7 }
    ];
    return (
        <div className="container mt-4">
            <div className="table-responsive">  
        <table className="table table-bordered  table-striped   table-hover">
            <thead className="table-dark">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.stock > 0 ? "In Stock" : "Out of Stock"}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>  
 </div>    
    );
}
export default ProductTable;