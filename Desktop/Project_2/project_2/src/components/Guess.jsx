import React, { useState } from "react";

const Guess = ({ handleChange, isCorrect }) => {
  const [userGuess, setUserGuess] = useState("");
    

  const handleSubmit = (event) => {
    event.preventDefault();
    handleChange(userGuess);
    setUserGuess("");
  };

  const inputClassName = (userGuess || isCorrect !== null) ? (isCorrect ? "correct" : "incorrect") : "borderless";
  return (
    <div className="Guess">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Guess the country"
          value={userGuess}
          onChange={(e) => setUserGuess(e.target.value)}
          className={inputClassName}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Guess;
