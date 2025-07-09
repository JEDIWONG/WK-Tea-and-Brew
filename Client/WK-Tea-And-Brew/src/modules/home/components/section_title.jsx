import  "../style/section_title.css"
import logo  from "../../../assets/image/logo_wk.png"

function SectionTitle(props){
    return(
        <>
            <div className="section-title">
                <img src={logo}></img>
                <h1>
                    {props.title}
                </h1>
            </div>
        </>
    )
}

export default SectionTitle;