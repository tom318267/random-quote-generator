import React from "react";
import "./Quote.css";

const Quote = ({ randomQuote, author }) => {
  return (
    <div
      className="Quote"
      style={{ width: "300px", textAlign: "center", margin: "5rem auto" }}
    >
      <h1 className="quote">{randomQuote}</h1>
      {randomQuote ? <h3 className="author">{` - ${author}`}</h3> : null}
    </div>
  );
};

export default Quote;
