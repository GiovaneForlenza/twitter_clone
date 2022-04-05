import React from "react";
import { BsTwitter, BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import "../style/pages/sign-in.scss";
function Login() {
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
            <div className="input">
              <div className="placeholder">Phone, email or username</div>
              <input type="text" placeholder="" />
            </div>
            <div type="submit" className="btn-primary">
              Next
            </div>
            <div className="btn-secondary">Forgot password?</div>
          </form>
          <div className="sign-up-container">
            <span>Don't have an account? </span>
            <span className="accent-blue">Sign up</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
