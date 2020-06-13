import React, { Component } from "react";

class Contact extends Component {
  state = {
    data: {
      firstName: "",
      email: "",
      message: "",
    },
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
  render() {
    return (
      <div className="contact">
        <div className="contactInfo">
          <h2>Contact Info</h2>
          <div className="email">
            <i className="fa fa-envelope" />
            brarjazzy36@gmail.com
          </div>
          <div className="number">
            <i className="fa fa-phone" />
            +91 8441912553
          </div>
          <div className="skype">
            <i className="fa fa-skype" />
            live:jaspreetbrar1636
          </div>
        </div>
        <div className="sendMessage">
          <div className="box">
            <h2>Send a Message</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="firstName"
                onChange={this.handleChange}
                placeholder="First name..."
              />
              <input
                type="email"
                name="email"
                onChange={this.handleChange}
                placeholder="E-mail..."
              />
              <input
                type="text"
                name="message"
                rows="3"
                placeholder="Message..."
                onChange={this.handleChange}
              />
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
