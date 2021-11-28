import { Button } from '@mui/material';
import React, { useEffect } from 'react'
import { useHistory } from 'react-router';

function Result({name,score}) {
    let history = useHistory();
    useEffect(()=>{
        if(!name){
            history.push('/');
        }
    },[name,history])
    return (
        <>
        <h1>Result is the {score}</h1>
          <Button variant = "contained" onClick={()=> history.push('/')}>
              Goto HOme Page
          </Button>
        </>
    )
}

export default Result;
