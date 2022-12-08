import logo1 from "../logo-images/google.png"
import logo2 from "../logo-images/apple.png"
import logo3 from "../logo-images/Vector.png"
import logo4 from "../logo-images/Vector-1.png"
import bgimg from "../bro.png"

function SignUp(){
    return (
        <div className="form-app">
            <div className="form">
                <h1 className="form-title">Create Account</h1>
                <div className="form-main">
                    <form id="signup-form">
                        <p>Email</p>
                        <input type="text" name="email"/>
                        <p>Username</p>
                        <input type="text" name="email"/>
                        <p>Password</p>
                        <input type="password" name="password"/>
                        <p>Confirm Password</p>
                        <input type="password" name="confirm-password"/><br />
                        <button className="submit-btn">Create Account</button>
                    </form>
                    <div className="form-footer">
                        <div className="form-footer-text">
                            <hr /><p>or login using</p><hr />
                        </div>
                        <div className="login-icons">
                            <img src={logo1} alt="google"/>
                            <img src={logo2} alt="apple" className="apple"/>
                            <img src={logo3} alt="twitter"/>
                            <img src={logo4} alt="facebook"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img alt="bgimage" src={bgimg}/>
            </div>
        </div>
    )
}
export default SignUp;