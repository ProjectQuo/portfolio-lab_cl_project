
import React from "react";
import NavRegLog from "./NavRegLog";

export const LoginPage = () => {
  return (
    <>
      <NavRegLog />
      <div className="RegisterPage">
        <div className="register_container">
          <h1>Zaloguj się</h1>
          <div className="reg_decor"></div>
          <div className="reg_login_container">
            <label className="reg_log_label">Login</label>
            <input className="reg_log_input"></input>
            <label className="reg_log_label">Hasło</label>
            <input className="reg_log_input"></input>
          </div>
          <div className="reg_button_bar">
            <a href="/" className="reg_register_button">Załóż konto</a>
            <a href="/" className="reg_register_button">Zaloguj się</a>
          </div>
        </div>
      </div>
    </>
  );
};
