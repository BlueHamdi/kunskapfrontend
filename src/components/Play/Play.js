import React, { useState, useEffect } from 'react';
import "./Play.css"; 

const Game = () => {
    const [difficulty, setDifficulty] = useState(null);
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [questionsAsked, setQuestionsAsked] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
  
    useEffect(() => {
      if (difficulty !== null && Object.keys(question).length === 0) {
        setQuestion({
          left: Math.floor(Math.random() * 10) + 1,
          right: Math.floor(Math.random() * 10) + 1,
          operator: difficulty,
        });
      }
    }, [difficulty, question]);
  
    const handleChange = (event) => {
      setAnswer(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      let correct = false;
      switch (question.operator) {
        case "addition":
          correct = question.left + question.right === parseInt(answer);
          break;
        case "subtraction":
          correct = question.left - question.right === parseInt(answer);
          break;
        case "multiplication":
          correct = question.left * question.right === parseInt(answer);
          break;
        case "division":
          correct = question.left / question.right === parseInt(answer);
          break;
      }
      
      if (correct) {
        setCorrectAnswers(correctAnswers + 1);
      }
      setQuestionsAsked(questionsAsked + 1);
      if (questionsAsked === 20) {
        setGameEnded(true);
      } else {
        setQuestion({
          left: Math.floor(Math.random() * 10) + 1,
          right: Math.floor(Math.random() * 10) + 1,
          operator: difficulty,
        });
        setAnswer("");
      }
    };
  
    const handlePlayAgain = () => {
      setDifficulty(null);
      setQuestion({});
      setAnswer("");
      setCorrectAnswers(0);
      setQuestionsAsked(0);
      setGameEnded(false);
    };
  
    return (
      <div>
        {difficulty === null && !gameEnded && (
          <div>
            <h2>Select a Difficulty</h2>
            <button onClick={() => setDifficulty("addition")}>Addition</button>
            <button onClick={() => setDifficulty("subtraction")}>Subtraction</button>
            <button onClick={() => setDifficulty("multiplication")}>Multiplication</button>
            <button onClick={() => setDifficulty("division")}>Division</button>
          </div>
        )}
        {difficulty !== null && !gameEnded && (
          <div>
            <h2>{question.left} {question.operator === "subtraction" ? "-" : question.operator === "addition" ? "+" : question.operator === "multiplication" ? "*" : "/"} {question.right}
           </h2>        
           <form onSubmit={handleSubmit}>
          <input type="text" value={answer} onChange={handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )}
    {gameEnded && (
      <div>
        <p>
          The game has ended. You got {correctAnswers} correct answers out of 20.
        </p>
        <button onClick={() => window.location.reload()}>Play Again</button>
    </div>
  )}
</div>

);
};

export default Game;