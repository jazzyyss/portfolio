import React, { Component } from "react";
import SubContact from "./common/subContact";
import Input from "./common/input";

class Contact extends Component {
  state = {
    data: {
      firstName: "",
      email: "",
      message: "",
    },
    contactInfo: [
      { iC: "envelope", name: "brarjazzy36@gmail.com" },
      { iC: "phone", name: "+91 8441912553" },
      { iC: "skype", name: "live:jaspreetbrar1636" },
    ],
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.data);
  };
  handleChange = (e) => {
    const data = { ...this.state.data };
    data[e.target.name] = e.target.value;
    this.setState({ data });
  };
  renderInput(type, name, event, placeholder) {
    return (
      <Input
        key={name}
        type={type}
        name={name}
        onChange={event}
        placeholder={placeholder}
      />
    );
  }
  render() {
    return (
      <div className="contact">
        <div className="contactInfo">
          <h2>Contact Info</h2>
          {this.state.contactInfo.map((contact) => (
            <SubContact
              key={contact.name}
              iC={contact.iC}
              name={contact.name}
            />
          ))}
        </div>
        <div className="sendMessage">
          <div className="box">
            <h2>Send a Message</h2>
            <form onSubmit={this.handleSubmit}>
              {this.renderInput(
                "text",
                "firstName",
                this.handleChange,
                "First name..."
              )}
              {this.renderInput(
                "email",
                "email",
                this.handleChange,
                "E-mail..."
              )}
              {this.renderInput(
                "text",
                "message",
                this.handleChange,
                "Message..."
              )}
              <button type="submit" name="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;
