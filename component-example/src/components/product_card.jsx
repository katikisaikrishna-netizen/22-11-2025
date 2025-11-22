function ProductCard(props) {
    return (
        <div className="card w-25">
        
            <div className="card-header">
                    <h1> {props.title} </h1>
            </div>

            <div className="card-body">
                <img src = {props.image} className="card-img-top"/>
                <p> Price: {props.price} </p>
                <p>Description: {props.description} </p>
            </div>

           <div className="card-footer">
                <button className="btn btn-primary"> AddToCart </button>
                <button className="btn btn-success"> BuyNow </button>
            </div>

        </div>
    );
}

export default ProductCard;