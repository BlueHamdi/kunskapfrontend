import styles from './Practice.module.css';
import React, { useEffect, useRef, useState } from "react";
import Quiz from '../Quiz/Quiz';
import { useNavigate } from 'react-router-dom';
import './Practice.css'



const Practice = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const code = canvasRef.current;
    const cxt = code.getContext("2d");

    code.width = document.body.clientWidth;
    code.height = document.body.clientHeight;

    const numbers = "0 1 0 1 0 1 0 1 0 1 0 1 0 1 0 1 0";
    const numbersArray =numbers.split("");

    const fontSize = 10;
    const columns = code.width / fontSize;

    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    function draw() {
      cxt.fillStyle = "rgba(0,0,0,0.05)";
      cxt.fillRect(0, 0, code.width, code.height);

      cxt.fillStyle = "#0F0";
      cxt.font = `${fontSize}px arial`;

      for (let i = 0; i < drops.length; i++) {
        const text = numbersArray[Math.floor(Math.random() * numbersArray.length)];
        cxt.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > code.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    }

    setInterval(draw, 50);
  }, []);

 
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/instruction");
  };

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.play();
  }, []);

  return (
    <div className={styles.container}>
       <audio ref={audioRef} src={'/Audio/Sound.mp3'} />
      <canvas ref={canvasRef} id="code" style={{border: "1px solid black"}} />
      <div className={styles.textP}>Välkommen till</div>
      <div className='button'>
      <button className={styles.button} onClick={handleButtonClick}>Practice Mode</button>
      </div>
     
    </div>

  );
  }
    
export default Practice;