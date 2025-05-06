import "../../style/nav_button.css";
import { Link } from "react-router-dom";

function NavButton(props){

    return(
        <>  

            <Link className="link" to={props.url}>
                <button className='nav-button'>{props.btn_name}</button>
            </Link>
            
        </>
    )   
}

export default NavButton;