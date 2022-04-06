import React from "react";
import { BsTwitter, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "../style/pages/sign-in.scss";
import "../style/pages/sign-in-up.scss";
function Login({ setShowSignUp }) {
  function activateInput() {
    document
      .getElementById("input-container-phone-login")
      .classList.add("active");
  }

  return (
    <div className="background">
      <div className="sign-in-container">
        <div className="sign-in">
          <div className="twitter-icon">
            <BsTwitter />
          </div>
          <div className="title">Sign in to Twitter</div>
          <div className="google">
            Sign in with Google
            <div className="icon">
              <FcGoogle />
            </div>
          </div>
          <div className="apple">
            <div className="icon">
              <BsApple />
            </div>
            Sign in with Apple
          </div>
          <div className="division">
            <div className="line"></div>
            <span>or</span>
            <div className="line"></div>
          </div>
          <form action="">
            <div
              className="input"
              onClick={activateInput}
              id="input-container-phone-login"
            >
              <div className="placeholder" onClick={activateInput}>
                Phone, email or username
              </div>
              <input type="text" placeholder="" />
            </div>
            <div type="submit" className="btn-primary">
              Next
            </div>
            <div className="btn-secondary">Forgot password?</div>
          </form>
          <div className="sign-up-button-container">
            <span>Don't have an account? </span>
            <span className="accent-blue" onClick={() => setShowSignUp(true)}>
              Sign up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
