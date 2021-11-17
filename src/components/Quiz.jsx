import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'

function Quiz({ name, questions, score, setScore, setQuestions }) {

    let [options, setOptions] = useState();
    let [currQuestion, setCurrQuestion] = useState(0);

    useEffect(() => {
        setOptions(questions && handleShuffle([questions[currQuestion]?.correct_answer, ...questions[currQuestion]?.incorrect_answers]))
    }, [questions]);

    let handleShuffle = (shufflingOptions) => {
        return shufflingOptions.sort(() => Math.random() - 0.5);
    }


    return (

        <>
            <h1>Welcome {name}</h1>
            {questions ?
                <> 
                    <div className="quiz-info">
                        <p>{questions[currQuestion].category}</p>
                        <p>{score}</p>
                    </div>
                </>

                : (<CircularProgress />)}
        </>
    )
}

export default Quiz
