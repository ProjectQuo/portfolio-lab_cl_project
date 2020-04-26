import React from "react";
import NavRegLog from "./NavRegLog";
import { Link } from "react-router-dom";

export class LoginPage extends React.Component {
  state = {
    login: "",
    password: "",
    setEmail: '',
    setPassword: '',
    repeatPassword: '',
    email: '',
    message: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <>
        <NavRegLog />
        <div className="RegisterPage">
          <div className="register_container">
            <h1>Zaloguj się</h1>
            <div className="reg_decor"></div>
            <form className="reg_login_container">
              <label className="reg_log_label">Login</label>
              <input
                type="text"
                name="login"
                onChange={this.handleChange}
                className="reg_log_input"
              />
              <label className="reg_log_label">Hasło</label>
              <input
                type="password"
                name="password"
                onChange={this.handleChange}
                className="reg_log_input"
              />
            </form>
            <form className="reg_button_bar" onSubmit={this.handleSubmit}>
              <Link to="/rejestracja" className="reg_register_button">
                Załóż konto
              </Link>
              <button type="submit" className="reg_register_button">
                Zaloguj się
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}
