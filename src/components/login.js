import "./login.css"
import React,{useState} from "react";


const Login = ({onClose}) => {

    const [register,isRegister] = useState(false);


    const toggleform= () => {
        isRegister(!register);
    }


    return (
        <div className="main">
            <div className="box" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={onClose}>&times;</span>
                {register? (
                        <>
                                            <div className="first">
                                                    <p>SIGN UP</p>
                                                    <h4>Create an account to continue</h4>
                                            </div>
                                            <div className="fields">
                                                <label>Email</label>
                                                <input type="text" placeholder="Enter your email" />
                                                <label>Username</label>
                                                <input type="text" placeholder="Choose a perferred username" />
                                                <label>Password</label>
                                                <input type="password" placeholder="Choose a perferred password" />
                                                <button>Continue</button>
                                            </div>
                                            <p className="toggle">
                                                        Already Have an account?{" "} <span className="link" onClick={toggleform}>Login</span>
                                            </p>
                        </>):
                        (
                        <>
                                            <div className="first">
                                                    <p>WELCOME BACK</p>
                                                    <h4>Login into your account</h4>
                                            </div>
                                            
                                            <div className="fields">
                                                <label>Email or Username</label>
                                                <input type="text" placeholder="Enter your email or username" />
                                                <label>Password</label>
                                                <input type="password" placeholder="Enter your password" />
                                                <button>Login Now</button>
                                            </div>
                                                
                                            <p className="toggle">
                                        Not registered yet?{" "} <span className="link" onClick={toggleform}>Register</span>
                                    </p>
                        </>
                        )}

            </div>
        </div>

    );
};

export default Login;