import React, {useState} from "react";
import Login from "./login";
import "./Home.css";

const HomePage = () => {

    const [showLogin, setShowLogin] = useState(false)

    const handleClick = () => {
        setShowLogin(true);

    }

    const close=() => {
        setShowLogin(false);
    }

return(
    <div className="home" onClick={handleClick}>
        <div className="content">
            <h1>Hello Jane</h1>
            <p>
            How are you doing today? Would like to share something with the community<span class="ec ec-hugs"></span></p>
        </div>
        <div className="create-post">
            <h3>Create post</h3>
            
            <input type="text" placeholder="How are you feeling today?" />
            
            
            <button>Post</button>
        </div>
       
            <div className="blogitem">
            <div className="blogheader-container">
                    <img src="/girl.jpg" alt="Profile" className="profile-image" />
                        <div className="headerdetails">
                        <h2 className="blogheader">Theresa Webb</h2>
                        <div className="time">5 mins ago</div>
                        </div>
                    
                </div>
                    
                <div className="blogcontent">
                    <i className="em em-wave wave" role="presentation" aria-label="WAVING HAND SIGN"></i>
                    <p>Amet minim molit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                 <p className="comments">24 comments</p>
            </div>

            <div className="blogitem">
               
                <div className="blogheader-container">
                    <img src="/boy.jpg" alt="boy"  className="profile-image" />
                        <div className="headerdetails">
                        <h2 className="blogheader">Marvin McKinney</h2>
                        <div className="time">8 mins ago . Edited</div>
                        </div>
                    
                </div>
                
                <div className="blogcontent">
                    <i className="em em-disappointed wave" role="presentation" aria-label="DISAPPOINTED FACE"></i>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                 <p className="comments">24 comments</p>
            </div>
            {showLogin && <Login onClose={close} />}
            
    </div>
    


);
};

export default HomePage;