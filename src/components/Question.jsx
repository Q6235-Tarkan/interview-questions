import React from "react";
import { arrowdown } from "../helper/icons";
import { arrowup } from "../helper/icons";
import { useState } from "react";

const Question = (props) => {
  const [answer, setAnswer] = useState(false);

  function handleClick() {
    setAnswer((f) => !f);
  }

  return (
    <div className="card_body">
      <div className="cards">
        <h5 className="card_question">
          {props.id}. {props.question}
        </h5>
        <button className="btn" onClick={handleClick}>
          {answer ? arrowup : arrowdown}{" "}
        </button>
      </div>
      <p className="answer">{answer && <p>{props.answer}</p>}</p>
    </div>
  );
};

export default Question;
