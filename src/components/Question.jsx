import React, { useState } from 'react'

let Questions = ({ currQuestion,
    setCurrQuestion,
    questions,
    setQuestions,
    score,
    setScore,
    options,
    correct }) => {

    let [selected, setSelected] = useState();

    let [error, setError] = useState(true);

    let handleSelect=(option)=>{
        if(selected === option && selected === correct){
            return "selected"
        }
        else if(selected === option && selected!== correct){
            return "wrong"
        }
        else if(selected === correct){
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
    return (
        <>
            <h1>Question : {currQuestion + 1}</h1>
            <h2>{questions[currQuestion].question}</h2>
            <h3>{error && 'Please Select the Option'}</h3>
            {
                options && 
                options.map((option)=> <button onClick={()=> handleCheck(option)}
                disabled={selected}
                key={option}
                className={`singleOption ${selected && handleSelect(option)}`}
                >{option}</button>)
            }
        </>
    )

}
export default Questions;