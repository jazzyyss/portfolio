import React from "react";
const Form = (props) => {
  return (
    <form onSubmit={this.handleSubmit}>
      {this.renderInput(
        "text",
        "firstName",
        this.handleChange,
        "First name..."
      )}
      {this.renderInput("email", "email", this.handleChange, "E-mail...")}
      {this.renderInput("text", "message", this.handleChange, "Message...")}
      <button type="submit" name="submit">
        Send
      </button>
    </form>
  );
};

export default Form;
