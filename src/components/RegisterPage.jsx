import React from "react";
import NavRegLog from "./NavRegLog";

export const RegisterPage = () => {
  return (
    <>
      <NavRegLog />
      <div className="RegisterPage">
        <div className="register_container">
          <h1>Załóż konto</h1>
          <div className="reg_decor"></div>
          <div className="reg_login_container">
            <label className="reg_log_label">Email</label>
            <input className="reg_log_input"/>
            <label className="reg_log_label">Hasło</label>
            <input className="reg_log_input"/>
            <label className="reg_log_label">Powtórz hasło</label>
            <input className="reg_log_input"/>
          </div>
          <div className="reg_button_bar">
            <a href="/" className="reg_register_button">Zaloguj się</a>
            <a href="/" className="reg_register_button">Załóż konto</a>
          </div>
        </div>
      </div>
    </>
  );
};
