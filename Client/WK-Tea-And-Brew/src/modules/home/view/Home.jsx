import "../style/home.css";
import vid from "../../../assets/vid/WK.mp4"
import placeholder from "../../../assets/image/placeholder.png"
import SectionTitle from "../components/section_title";
import NavButton from "../../../components/buttons/NavButton";
import ImageGallery from "../components/ImageGallery";

function PointLabel(props){
    return(
        <>
            <div className="point-label">
                <img src={props.imgUrl}></img>
                <p>{props.title}</p>
            </div>
        </>
    )
}

function Home(){

    const imgUrlArr = [placeholder,placeholder,placeholder];

    return(
        <>  
            <div className="page-container">
                <div className="home-banner-container">
                    <div className="overlay">
                        <video className="banner-video" autoPlay muted loop>
                            <source src={vid} type="video/mp4"></source>
                        </video>
                    </div>
                    
                    <div className="home-banner-util">

                    </div>
                </div>

                <div className="home-section">
                    <SectionTitle title="WK TEA & BREW"></SectionTitle>
                    <q>Experience a hassle-free way to enjoy expertly crafted drinks</q>
                    <div className="home-section-row">
                        <ImageGallery imgUrl={imgUrlArr}></ImageGallery>
                        <hr></hr>
                        <div className="">
                            <p>From hand-picked tea leaves to expertly roasted coffee beans, we source only the finest ingredients. Our innovative brewing methods and high-tech ordering system ensure precision and quality in every cup. Designed with a sleek, futuristic ambiance, our café offers a space where customers can relax, work, and socialize while enjoying premium handcrafted beverages.</p>
                            <NavButton btn_name="Learn More" url="about"></NavButton>
                        </div>
                        
                    </div>
                </div>

                <div className="home-section">
                    <SectionTitle title="Why Choose Us"></SectionTitle>
                    <div className="point-container">
                        <PointLabel imgUrl= {placeholder} title="Expertly Brewed for Perfect Flavor"></PointLabel>
                        <PointLabel imgUrl= {placeholder} title="Expertly Brewed for Perfect Flavor"></PointLabel>
                        <PointLabel imgUrl= {placeholder} title="Expertly Brewed for Perfect Flavor"></PointLabel>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home;