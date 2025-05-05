import ProductPanel from "../components/ProductPanel";
import SearchBar from "../components/searchbar";
import "../style/menu.css"

function Menu(){
    return(
        <>
            <div className="page-container">
                <div className="menu-banner">
                    <h1>Browse Our Best Brew Crafted With Care</h1>
                    <SearchBar></SearchBar>
                </div>

                <ProductPanel></ProductPanel>
            </div>
        </>
    )
}

export default Menu;