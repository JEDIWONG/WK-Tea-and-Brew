import ActionButton from "../../../components/buttons/ActionButton";
import NavButton from "../../../components/buttons/NavButton";
import "../style/regsiter.css";

function Register(){

    return(
        <>  
            <div className="page-container register-page-container">
                <div className="register-container">
                    <div className="register-nav-login">
                        <h1>Welcome Back</h1>
                        <q>Login and quench your thirst with your favorite brews</q>
                        <NavButton btn_name="Sign In" url="../login"></NavButton>
                    </div>
                    <div className="register-form">
                        <h1>Sign Up</h1>
                        <div className="form-input-container">
                            <input className="form-input" placeholder="Email" name="email"></input>
                            <input className="form-input" placeholder="Password" name="password"></input>
                            <input className="form-input" placeholder="Confirm Password" name="confirm-password"></input>
                        </div>
                        <div className="form-tac">
                            <input className="form-checkbox" type="checkbox" name="confirm-tac"></input>
                            <p for="confirm-tac">I agree all statements in <a href="">Terms of service</a></p>
                        </div>
                        <ActionButton btn_name="Submit"></ActionButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;