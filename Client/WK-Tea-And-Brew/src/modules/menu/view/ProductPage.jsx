import { useParams } from "react-router-dom";
import Product from "../model/Product" 
import "../style/product_page.css"

function ProductPage(){

    const {id} = useParams();
    const product = Product[id-1];

    return(
        <>
            <div className="page-container">
                
            </div>
        </>
    )
}

export default ProductPage;