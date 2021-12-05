import React, { useState } from 'react'
import './question.css'
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material'
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

    let [error, setError] = useState(false);
    let [hint,setHint] = useState(false);

    let handleSelect = (option) => {
        if (selected === option && selected === correct) {
            return "selected"
        }
        else if (selected === option && selected !== correct) {
            return "wrong"
        }
        else if (option === correct) {
            return "selected"
        }
    }
    let handleCheck = (option) => {
        // used setSelected to know that Any option is selected ... 
        setSelected(option);
        if (option === correct)
            setScore(score + 1);
        setError(false);
    }
    let handleNext = () => {
        if (currQuestion > 8) {
            history.push('/result');
        }
        else if (selected) {
            setCurrQuestion(currQuestion + 1);
            setSelected();
        }
        else {
            setError('Please Select any Option !');
        }
    }
    let handleQuit = () => {
        history.push('/result');
    }
    return (
        <>
            <div className="text" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="questions" style={{ color: 'blue', border: '8px solid black', padding: '1rem', width: '50%' }}>

                    <h1 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>Question : {currQuestion + 1}</h1>
                    <h2 style={{color:'brown'}}>{questions[currQuestion]?.question}</h2>
                    <h1 style={{textAlign:'center'}}>{error && 'Please Select the Option'}</h1>
                    {/* <h4>{correct}</h4> */}
                    <Button onClick={()=> setHint(!hint)}> Hint </Button>
                    {
                        hint?  <h4>{correct}</h4>:''
                    }
                    
                    <div className="buttons" style={{ width: '100%', display: 'grid', padding: '1rem', gridTemplateColumns: '1fr 1fr', gridGap: '1rem' }}>
                        {
                            options &&
                            options.map((option) => <button style={{ width: '100%', marginLeft: '0.5rem', fontSize: '1.5rem',textAlign:'center', fontWeight: 'bold', fontFamily: 'sans-serif',color:'gray' }} onClick={() => handleCheck(option)}
                                disabled={selected}
                                key={option}
                                className={`${selected && handleSelect(option)}`}
                            >{option}</button>)
                        }
                    </div>
                    <br />
                    <div className="resultButtons" style={{display:'flex',justifyContent:'space-between'}}>
                        <Button variant='contained' size='large' onClick={handleQuit}>Quit</Button>
                        <Button variant='contained' size='large' onClick={handleNext}>Next</Button>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Questions;