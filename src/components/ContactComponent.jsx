import React from "react";

const ContactComponent = () => {
  console.log("ContactComp");

  return (
    <>
      <div className="footer_content">
        <h1 className="footer_header">Skontaktuj się z nami</h1>
        <div className="footer_decor" />
        <div className="footer_form">
          <div className="fot_form_name_email_label">
            <label className="fot_form_label">Wpisz swoje imię</label>
            <label className="fot_form_label">Wpisz swój email</label>
          </div>
          <div className="fot_form_name_email_input">
            <input className="fot_form_input" placeholder="Lorem Ipsum"></input>
            <input className="fot_form_input" placeholder="lorem@ipsum.com"></input>
          </div>
          <div className="fot_form_textarea_label">Tu wpisz swoją wiadomość</div>
            <textarea className="fot_form_textarea_input" placeholder="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"></textarea>
            <button className="fot_form_button" type='submit'>Wyślij</button>
          
        </div>
      </div>
    </>
  );
};

export default ContactComponent;
