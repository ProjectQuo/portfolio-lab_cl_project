import React from "react";

class ContactComponent extends React.Component {

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
        <div className="footer_content">
          <h1 className="footer_header">Skontaktuj się z nami</h1>
          <div className="footer_decor" />
          <form onSubmit={this.handleSubmit} className="footer_form">
            <div className="fot_form_name_email_label">
              <label className="fot_form_label">Wpisz swoje imię</label>
              <label className="fot_form_label">Wpisz swój email</label>
            </div>
            <div className="fot_form_name_email_input">
              <input
                onChange={this.handleChange}
                name="name"
                className="fot_form_input"
                placeholder="Lorem Ipsum"
              ></input>
              <input
                onChange={this.handleChange}
                name="email"
                className="fot_form_input"
                placeholder="lorem@ipsum.com"
              ></input>
            </div>
            <div className="fot_form_textarea_label">
              Tu wpisz swoją wiadomość
            </div>
            <textarea
            onChange={this.handleChange}
            name="message"
              className="fot_form_textarea_input"
              placeholder="lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
            ></textarea>
            <button type="submit" className="fot_form_button" >
              Wyślij
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default ContactComponent;
