import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Questions from './Question';
import { useHistory } from 'react-router';

function Quiz({ name, questions, score, setScore, setQuestions }) {
    let history = useHistory();
    let [options, setOptions] = useState();
    let [currQuestion, setCurrQuestion] = useState(0);

    useEffect(() => {
        if(!name){
            history.push('/');
        }
        setOptions(questions && handleShuffle([questions[currQuestion]?.correct_answer, ...questions[currQuestion]?.incorrect_answers]))
    }, [currQuestion,questions,history,name]);

    let handleShuffle = (shufflingOptions) => {
        return shufflingOptions.sort(() => Math.random() - 0.5);
    }
    return (

        <>
            <h1>Welcome {name}</h1>
            {questions ?
                <> 
                    <div className="quiz-info" style={{display:'flex',justifyContent:'space-around'}}>
                        <h1>{questions[currQuestion]?.category}</h1>
                        <h1>Score : {score}</h1>
                    </div>
                    <Questions
                    
                     currQuestion={currQuestion}
                     setCurrQuestion={setCurrQuestion}
                     questions={questions}
                     setQuestions={setQuestions}
                     score={score}
                     setScore={setScore}
                     options={options}
                     correct = {questions[currQuestion]?.correct_answer}
                    />
                </>

                : (<CircularProgress />)}
        </>
    )
}

export default Quiz
