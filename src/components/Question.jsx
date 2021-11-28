import React, { useState } from 'react'
import './question.css'
import {useHistory} from 'react-router-dom';
import {Button} from '@mui/material'
let Questions = ({ currQuestion,
    setCurrQuestion,
    questions,
    setQuestions,
    score,
    setScore,
    options,
    correct }) => {
    
    let history = useHistory();
    let [selected, setSelected] = useState();

    let [error, setError] = useState(true);

    let handleSelect=(option)=>{
        if(selected === option && selected === correct){
            return "selected"
        }
        else if(selected === option && selected!== correct){
            return "wrong"
        }
        else if(option === correct){
            return "selected"
        }
    }
    let handleCheck=(option)=>{
        // used setSelected to know that Any option is selected ... 
        setSelected(option);
        if(option === correct) 
           setScore(score+1);
        setError(false);
    }
    let handleNext =()=>{
        if(currQuestion>8){
            history.push('/result');
        }
        else if(selected){
            setCurrQuestion(currQuestion+1);
            setSelected();
        }
        else {
            setError('Please Select any Option !');
        }
    }
    let handleQuit=()=>{
        history.push('/result');
    }
    return (
        <>
            <h1>Question : {currQuestion + 1}</h1>
            <h2>{questions[currQuestion]?.question}</h2>
            <h3>{error && 'Please Select the Option'}</h3>
            <h4>{correct}</h4>
            {
                options && 
                options.map((option)=> <button onClick={()=> handleCheck(option)}
                disabled={selected}
                key={option}
                className={`${selected && handleSelect(option)}`}
                >{option}</button>)
            }
            <br />
            <Button onClick={handleQuit}>Quit</Button>
            <button onClick={handleNext}>Next Question </button>
        </>
    )

}
export default Questions;