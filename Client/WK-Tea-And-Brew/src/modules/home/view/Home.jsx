import CatPanel from "../components/CatPanel";
import "../style/home.css";

function Home(){
    return(
        <>  
            <div className="page-container">

                <CatPanel></CatPanel>

                <section className="home-content-section">
                    <h1>The Story of WK Tea & Brew</h1>
                    <p>Established in 2025, WK Tea & Brew was founded with a vision to blend tradition and technology, creating a modern yet authentic tea and coffee experience. We believe that great brews are more than just drinks—they are moments of connection, creativity, and comfort.</p>
                    <p>From hand-picked tea leaves to expertly roasted coffee beans, we source only the finest ingredients. Our innovative brewing methods and high-tech ordering system ensure precision and quality in every cup. Designed with a sleek, futuristic ambiance, our café offers a space where customers can relax, work, and socialize while enjoying premium handcrafted beverages.</p>
                    <p>At WK Tea & Brew, we are not just serving drinks—we are crafting experiences. Join us on our journey as we redefine the future of tea and coffee culture.</p>
                </section>

            </div>
            
        </>
    )
}

export default Home;