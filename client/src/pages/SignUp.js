import React from "react";
import { BsTwitter } from "react-icons/bs";
import "../style/pages/sign-in-up.scss";
import "../style/pages/sign-up.scss";
function SignUp({ setShowSignUp }) {
  function handleClick() {
    setShowSignUp(false);
  }
  return (
    <div className="background">
      <div className="sign-up-container">
        <div className="sign-up">
          <div className="header">
            <div className="go-back" onClick={handleClick}>
              X
            </div>
            <div className="twitter-icon">
              <BsTwitter />
            </div>
          </div>
          <div className="title">Create your account</div>
          <form action="">
            <div className="input">
              <div className="label">Name</div>
              <input type="text" />
            </div>
            <div className="input">
              <div className="label">Phone</div>
              <input type="text" />
            </div>
            <div className="span">
              <span>Use email instead</span>
            </div>
            <div className="birth-date-container">
              <div className="label">Date of birth</div>
              <div className="description">
                This will not be shown publicly. Confirm your own age, even if
                this account is for a business, a pet, or something else.
              </div>
              <div className="input-birth-date-container">
                <div className="select-input month">
                  <span>Month</span>
                  <select name="month" id="select-month">
                    <option value=""></option>
                    <option value="January">January</option>
                    <option value="February">February</option>
                    <option value="March">March</option>
                    <option value="April">April</option>
                    <option value="May">May</option>
                    <option value="June">June</option>
                    <option value="July">July</option>
                    <option value="August">August</option>
                    <option value="September">September</option>
                    <option value="October">October</option>
                    <option value="November">November</option>
                    <option value="December">December</option>
                  </select>
                </div>
                <div className="select-input day">
                  <span>Day</span>
                  <select name="day" id="select-day">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                  </select>
                </div>
                <div className="select-input year">
                  <span>Year</span>
                  <select name="" id="select-year">
                    <option value=""></option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    <option value="2009">2009</option>
                    <option value="2008">2008</option>
                    <option value="2007">2007</option>
                    <option value="2006">2006</option>
                    <option value="2005">2005</option>
                    <option value="2005">2005</option>
                    <option value="2004">2004</option>
                    <option value="2003">2003</option>
                    <option value="2002">2002</option>
                    <option value="2001">2001</option>
                    <option value="2000">2000</option>
                    <option value="1999">1999</option>
                    <option value="1998">1998</option>
                    <option value="1997">1997</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="btn-primary">Next</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
