import NavButton from "../../../components/buttons/NavButton";
import ActionButton from "../../../components/buttons/ActionButton";
import "../style/login.css";

function Login(){
    
    return(
        <>
            <div className="page-container login-page-container">
                <div className="login-container">
                    <div className="login-form">
                        <h1>
                            Sign In
                        </h1>

                        <div className="form-input-container">
                            <input placeholder="Email" name="Email" id="Email"></input>
                            <input placeholder="Password" name="Password" id="Password"></input>
                            <a>Forgot Password</a>
                        </div>

                        <ActionButton btn_name="Login"></ActionButton>
                        
                    </div>
                    <div className="login-nav-register">
                        <h1>Hello Friends</h1>
                        <q>Welcome to the ultimate drink experience! Let's get started.</q>

                        <p>Not Yet Have An Account ?</p>
                            <NavButton btn_name="Create New Account Here"></NavButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;