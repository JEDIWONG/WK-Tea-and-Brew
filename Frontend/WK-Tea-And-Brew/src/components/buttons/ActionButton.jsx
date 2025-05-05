import { Link } from "react-router-dom";
import "../../style/action_button.css"

function ActionButton(props){
    return(
        <>
            
            <button className="action-button">{props.btn_name}</button>
            
        </>
    );
}

export default ActionButton;