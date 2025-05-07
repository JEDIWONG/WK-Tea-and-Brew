import { Link } from "react-router-dom";
import "../style/product_card.css"

function renderprice(params){

    var len = 30-(""+params).length;
    var symbol=".";
    var priceStr="";
     
    for(let i=0;i<len;i++){
        priceStr+=symbol; 
    }
    
    priceStr+=" RM "+params;
    return priceStr; 
}

function ProductCard(props){
    return(
        <>  
            <Link className="product-link" to={props.route} key={props.id}>
                <div className="product-card-container">
                    <div className="product-card-img" style={{backgroundImage:`url(${props.imgUrl})`}}>
                        <p>category</p>  {/* for overlay effect*/}
                    </div>
                    <div className="product-card-details">
                        <p className="product-card-title">{props.title}</p>
                        <p className="product-card-desc">{props.desc}</p>
                        <p className="product-card-price">{renderprice(props.price)}</p>
                    </div>
                </div>              
            </Link>
        </>
    );
}

export default ProductCard;