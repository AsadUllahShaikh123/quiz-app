import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

function Result({ name, score }) {
    let history = useHistory();
    useEffect(() => {
        if (!name) {
            history.push('/');
        }
    }, [name, history])
    return (
        <>
            <div className="result" style={{display:'flex',flexDirection:'column',alignItems:'center',marginTop:'10rem',backgroundColor:'darkgray'}}>
                <h2 style={{fontWeight:'bold',color:'blue',fontSize:'2rem'}}>{name}</h2>
                <h1 style={{marginBottom:'2rem',fontWeight:'bold',fontSize:'4rem'}}>Your Score is  {score}</h1>
                <Button variant="contained" onClick={() => history.push('/')}>
                    Goto Home Page
                </Button>
            </div>
        </>
    )
}

export default Result;
