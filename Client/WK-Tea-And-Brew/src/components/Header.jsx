import logo from "../assets/image/logo_wk.png"
import  "../style/Header.css"
import NavButton from "./buttons/NavButton"
import {Link} from "react-router-dom"

function Navddm(params) {

  return(
    <>
      <div className="dd-content">
        {
          params.opt.map(e => {
            return(
              <p>
                <Link to="" className="link">
                  {e}
                </Link>
              </p>
            );
          })
        }
      </div>
    </>
  );
  
}

function Header() {

  return (
    <>
      <header className="header">
          <Link to="/wk-tea-and-brew/">
            <img src={logo}></img>
          </Link>
            
          <nav>
              <ul>
                  <li>
                    <Link className="link" to="/wk-tea-and-brew/about">About</Link>
                  </li>
                  <li>
                    <Link className="link" to="/wk-tea-and-brew/menu">Menu</Link>
                  </li>
                  <li className="dd">
                    <div>
                      <p>More</p>
                    </div>
                    
                    <div className="dd-content">
                      <p>
                        <Link to="" className="link">
                          Find Us
                        </Link>
                      </p>

                      <p>
                        <Link to="" className="link">
                          Rewards
                        </Link>
                      </p>
                    </div>
                  </li>
              </ul>

              
          </nav>
          <NavButton btn_name="Sign Up" url="register"></NavButton>
      </header>
    </>
  )
}
  
export default Header;
  