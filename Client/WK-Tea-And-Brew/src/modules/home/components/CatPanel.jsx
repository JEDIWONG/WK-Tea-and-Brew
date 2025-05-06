import coffee from "../../../assets/image/home/coffee.jpg";
import tea from "../../../assets/image/home/tea.jpg";
import wine from "../../../assets/image/home/wine.jpg";
import specialty from "../../../assets/image/home/specialty.jpg";
import "../style/catpanel.css";

function ChildPanel(props){

    return(
        <>
            <div className="child-panel-container" style={{backgroundImage:`url(${props.imgUrl})`}}>
                <div className="child-panel-label">{props.cat_name}</div>
            </div>
        </>
    );
};


function CatPanel(){
    return(
        <>
            <div className="cat-panel-container">
                <ChildPanel cat_name="Coffee" imgUrl={coffee}></ChildPanel>
                <ChildPanel cat_name="Tea" imgUrl={tea}></ChildPanel>
                <ChildPanel cat_name="Wine" imgUrl={wine}></ChildPanel>
                <ChildPanel cat_name="Specialty" imgUrl={specialty}></ChildPanel>
            </div>
        </>
    );
};

export default CatPanel; 