import React from "react";
import "./login.css";
import UsernameIcon from "./username_icon.png";
import lock from "./password.png";

export const Login: React.FunctionComponent = () => {
  return (
    <div>
      <div className="login">
        <form>
          <div className="head">
          <h3>Login</h3>
          </div>

          <input type="text" placeholder="Username" />
          <img src={UsernameIcon} className="usericon" alt="Username" />
          <input type="password" placeholder="password" />
          <img src={lock} className="lock" alt="Username" />
          <div className="me">
            <a href="#">Forget password?</a>
          </div>

          <button>Log in</button>
        </form>
      </div>
    </div>
  );
};
