import { Link } from "react-router-dom";
import "../style/footer.css";
import logo from "../assets/image/logo_wk_2.png"
import  fbIcon  from "../assets/icons/facebook-svgrepo-com.svg";
import  igIcon  from "../assets/icons/instagram-167-svgrepo-com.svg";
import  discordIcon  from "../assets/icons/discord-svgrepo-com.svg";

function Footer(){
    return(
        <>
            <footer className="footer-container">
                <div className="footer">

                    <div className="footer-logo-action">
                        <img src={logo}></img>
                        <div className="footer-external-container">
                            <p>Follow Us On</p>
                            <div className="footer-external-links">
                                <img src={fbIcon} alt="fbIcon" />
                                <img src={igIcon} alt="igIcon" />
                                <img src={discordIcon} alt="discordIcon"/>
                            </div>
                        </div>
                    </div>
                    <ul className="footer-nav">
                        <li>
                            <Link className="link">About Us</Link>
                        </li>
                        <li>
                            <Link className="link">Menu</Link>
                            <dl>
                                <Link className="link">Coffee</Link>
                                <Link className="link">Tea</Link>
                                <Link className="link">Wine</Link>
                                <Link className="link">Specialty</Link>
                            </dl>
                        </li>
                        <li>
                            <Link className="link">Rewards</Link>
                        </li>
                        <li>
                            <Link className="link">Contact Us</Link>
                            <dl>
                                <Link className="link">Get In Touch</Link>
                                <Link className="link">FAQ</Link>
                                <Link className="link">Terms & Conditions</Link>
                                <Link className="link">Privacy Policy</Link>
                            </dl>
                        </li>
                    </ul>
                 </div>
                 <p>&copy; WK Sdn Bhd 2025 (xxx-xxxx). All Right Reserved.</p>
            </footer>
        </>
    );
}

export default Footer;