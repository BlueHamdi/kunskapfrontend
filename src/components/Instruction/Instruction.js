import './Instruction.css'
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';



const Instruction = () => { 
    const navigate = useNavigate();
    const handleButtonClick = () => {
    navigate('/quiz');
    };

    return (
       <div className="body"> 
         <div className= 'containerI'> 
         <hr className='hr1'/>
          <div className='nav'> 
            <h1 className='topText'> Practice Mode. </h1>
          </div>
          <hr className='hr1'/>
            <p className='text'> 
                 Practice sidan är en del av en hemsida där du kan träna på att lösa matteuppgifter. <br/>
                  Genom att öva på sidan kan du förbättra din förståelse och kunskap inom matematik. <br/>
                  Förvänta dig en interaktiv och lärande upplevelse där du kan utmana dig själv <br/>
            </p>
            <p className='text2'>
            och utveckla dina färdigheter.
            </p>
            <h4 className='text3'>Låt träningen börja!</h4>
            <button onClick={handleButtonClick}>Quiz</button>
        </div>
       </div>
    );
}

export default Instruction;
