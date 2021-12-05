import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import Questions from './Question';
import { useHistory } from 'react-router';
import questionMarkImage from '../images/back1.jpg';


function Quiz({ name, questions, score, setScore, setQuestions }) {
    let history = useHistory();
    let [options, setOptions] = useState();
    let [currQuestion, setCurrQuestion] = useState(0);

    useEffect(() => {
        if (!name) {
            history.push('/');
        }
        setOptions(questions && handleShuffle([questions[currQuestion]?.correct_answer, ...questions[currQuestion]?.incorrect_answers]))
    }, [currQuestion, questions, history, name]);

    let handleShuffle = (shufflingOptions) => {
        return shufflingOptions.sort(() => Math.random() - 0.5);
    }
    return (

        <>
            <div className="quiz" style={{
                backgroundImage: `url(${questionMarkImage})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'right',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                width: '100%', minHeight: '100vh'
            }}
            >

                <h1 style={{ textAlign: 'center', color: 'blue', fontFamily: 'sans-serif', fontSize: '4rem',marginBottom:'1rem' }}>Welcome {name}</h1>
                
                    {questions ?
                        <>
                            <div className="quiz-info" style={{ display: 'flex', justifyContent: 'space-around',marginBottom:'1rem' }}>
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
                                correct={questions[currQuestion]?.correct_answer}
                            />
                        </>

                        : (<CircularProgress />)}
            </div>
        </>
    )
}

export default Quiz
