import React, { useState, useEffect } from 'react';
import "./Play.css"; 

const Game = () => {
    const [difficulty, setDifficulty] = useState(null);
    const [question, setQuestion] = useState({});
    const [answer, setAnswer] = useState("");
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [questionsAsked, setQuestionsAsked] = useState(0);
    const [gameEnded, setGameEnded] = useState(false);
    const [time, setTime] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    
    useEffect(() => {
    if (difficulty !== null && Object.keys(question).length === 0) {
    setQuestion({
    left: Math.floor(Math.random() * 10) + 1,
    right: Math.floor(Math.random() * 10) + 1,
    operator: difficulty,
    });
    }
    }, [difficulty, question]);
    
    useEffect(() => {
        if (gameStarted && !gameEnded) {
            const intervalId = setInterval(() => {
                setTime(time => time + 10);
            }, 10);
            return () => clearInterval(intervalId);
        }
    }, [gameStarted, gameEnded]);
    
    
    const handleChange = (event) => {
        setAnswer(event.target.value);
        let correct = false;
        switch (question.operator) {
          case "addition":
            correct = question.left + question.right === parseInt(event.target.value);
            break;
          case "subtraction":
            correct = question.left - question.right === parseInt(event.target.value);
            break;
          case "multiplication":
            correct = question.left * question.right === parseInt(event.target.value);
            break;
          case "division":
            correct = question.left / question.right === parseInt(event.target.value, 10);
            break;
        }
      
        if (correct) {
          setCorrectAnswers(correctAnswers + 1);
          setQuestionsAsked(questionsAsked + 1);
          if (questionsAsked === 19) {
            setGameEnded(true);
          } else {
            setQuestion({
              left: Math.floor(Math.random() * 10) + 1,
              right: Math.floor(Math.random() * 10) + 1,
              operator: difficulty,
            });
            setAnswer("");
          }
        }
      };
      
      const handleSubmit = (event) => {
        event.preventDefault();
      };
      

    const handlePlayAgain = () => {
    setDifficulty(null);
    setQuestion({});
    setAnswer("");
    setCorrectAnswers(0);
    setQuestionsAsked(0);
    setGameEnded(false);
    setTime(0);
    setGameStarted(false);
    };

    const formattedTime = (time / 1000).toFixed(2);

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
          {difficulty !== null && !gameEnded && !gameStarted && (
            <div>
              <button onClick={() => setGameStarted(true)}>Start Game</button>
            </div>
          )}
          {difficulty !== null && !gameEnded && gameStarted && (
            <div>
              <p>Time remaining: <span id="timer">{(time/1000).toFixed(2)} seconds</span></p>
              <p>
                {question.left} {question.operator === "subtraction" ? "-" : question.operator === "addition" ? "+" : question.operator === "multiplication" ? "*" : "/"} {question.right}
              </p>
              <form onSubmit={handleSubmit}>
                <input type="text" value={answer} onChange={handleChange} />
                <button type="submit">Submit</button>
              </form>
            </div>
          )}
          {gameEnded && (
            <div>
              <p>
                The game has ended. You got {correctAnswers} correct answers out of 20 in {(time/1000).toFixed(2)} seconds.
              </p>
              <button onClick={handlePlayAgain}>Play Again</button>
            </div>
          )}
        </div>
      );

      
      
    };
    
    export default Game;
    