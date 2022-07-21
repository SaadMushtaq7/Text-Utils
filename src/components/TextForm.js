import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Characters Converted to UpperCase", "success");
  };

  const handleLoClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Characters Converted to LowerCase", "success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied", "success");
  };

  const handleSpace = () => {
    let newtext = text.split(/[  ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Textbox cleared", "success");
  };

  const countOfWords = (sentence) => {
    const arr = sentence.split(" ");
    return arr.filter((word) => word !== "").length;
  };

  const [text, setText] = useState("");

  return (
    <div
      className="container"
      style={{ color: props.mode === "light" ? "#042743" : "white" }}
    >
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label"></label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text ? false : true}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          disabled={text ? false : true}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>
        <button
          disabled={text ? false : true}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text ? false : true}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSpace}
        >
          Remove Extra spaces
        </button>
        <button
          disabled={text ? false : true}
          className="btn btn-danger mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text ? countOfWords(text) : 0} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute/s read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : `Enter something in above text box to preview here`}
        </p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
