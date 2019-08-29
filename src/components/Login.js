import React from 'react'
import LoginForm from "../containers/common/LoginForm";
import "./common/css/login.css"

class Login extends React.Component {
  render() {
    return (
        <div>
          <div className="container-login">
            <div className="wrap-login">
              <div className="loginForm">
                <LoginForm/>
              </div>
            </div>
          </div>
        </div>

    )
  }
}

export default Login;