import React from "react";
import NavRegLog from "./NavRegLog";
import { Link } from "react-router-dom";

export class RegisterPage extends React.Component {
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // let isValid = true;
    // if (email.)
    console.log(this.state);
  };

  render () {
  return (
    <>
      <NavRegLog />
      <div className="RegisterPage">
        <form onSubmit={this.handleSubmit} className="register_container">
          <h1>Załóż konto</h1>
          <div className="reg_decor"></div>
          <div className="reg_login_container">
            <label className="reg_log_label">Email</label>
            <input onChange={this.handleChange} name="setEmail" className="reg_log_input"/>
            <label className="reg_log_label">Hasło</label>
            <input onChange={this.handleChange} name="setPassword" className="reg_log_input"/>
            <label className="reg_log_label">Powtórz hasło</label>
            <input onChange={this.handleChange} name="repeatPassword" className="reg_log_input"/>
          </div>
          <div className="reg_button_bar">
            <Link to="/logowanie"  className="reg_register_button">Zaloguj się</Link>
            <button type="submit" className="reg_register_button">Załóż konto</button>
          </div>
        </form>
      </div>
    </>
  );
}
}
