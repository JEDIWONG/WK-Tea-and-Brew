import "../style/product_card.css"

function ProductCard(props){
    console.log(props.imgUrl);
    return(
        <>  
            <div className="product-card-container">
                <div className="product-card-img" style={{backgroundImage:`url(${props.imgUrl})`}}>
                    <p>category</p>  {/* for overlay effect*/}
                </div>
                <div className="product-card-details">
                    <p className="product-card-title">{props.title}</p>
                    <p className="product-card-desc">{props.desc}</p>
                    <p className="product-card-price">RM {props.price}</p>
                </div>
            </div>
        </>
    );
}

export default ProductCard;