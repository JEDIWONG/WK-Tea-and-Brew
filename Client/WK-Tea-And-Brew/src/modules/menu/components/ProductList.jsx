import ProductCard from "./ProductCard";
import Product from "../model/Product";
import Category from "../model/Category";
import "../style/product_list.css";

function CategoryProductMap(props){
    return(
        <>
            <div className="menu-sub-category">
                <h1>{props.title}</h1>

                <div className="product-list">
                    {
                        Product.map((p)=>{
                            
                            if(props.title == p.subcategory){
                                return (

                                    <ProductCard 
                                        route={`products/${p.id}`} 
                                        key={p.id} 
                                        type={p.category} 
                                        imgUrl={p.imgUrl} 
                                        desc={p.desc}
                                        title={p.title} 
                                        price={p.price}
                                    />
                                    
                                );
                            }
                            else{
                                return null;
                            }
                            
                        })
                    }
                </div>
                
            </div>
        </>
        
    );
}

function ProductList(props){
    return(
        <>
            <div className="menu-content-container">
                {   
                    Category.map((c)=>{
                         
                        if(props.category==""||props.category==c.title){
                            return(
                                c.sub.map((s)=>{
                                    return(
                                        <CategoryProductMap title={s}/>
                                    );
                                })
                            );
                            
                        }
                        return null;
                    })  
                }
            </div>
        </>
    );
}

export default ProductList;