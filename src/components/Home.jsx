import React, { useState } from 'react'
import { TextField, MenuItem, Button } from '@mui/material';
import { useHistory } from 'react-router';
import bricks from '../images/cubics.jpg';
import Header from './Header';
import { data } from './data';



let Home = ({ name, setName, fetchQuestions }) => {

    let history = useHistory();
    let [error, setError] = useState(false);

    let [category, setCategory] = useState('');
    let [level, setLevel] = useState('');
    let handleEvent = () => {
        if (!name || !category || !level) {
            setError(true);

        }
        else {
            setError(false);
            fetchQuestions(category, level);
            history.push('/quiz');
        }
    }
    return (
        <>
            <div className="main" style={{
                backgroundImage: `url(${bricks})`,
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                width: '100%', height: '100vh'
            }}
            >
                <Header />
                <div className="category" style={{
                    width: '35%', minHeight: '50vh', marginLeft: 'auto', marginRight: '18%',
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px", padding: '20px'
                }} >
                    {error && <p style={{ textAlign: 'center', fontSize: '2rem' }}>Please Enter All Fields</p>}

                    <TextField label="Enter Your Name Please"
                        style={{ marginBottom: '30px' }}
                        variant="outlined" fullWidth
                        value={name}
                        onChange={(e) => setName(e.target.value)}

                    />

                    <TextField select fullWidth label="Select Category"
                        style={{ marginBottom: '30px' }}
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}  >
                        {data.map((cat) => <MenuItem key={cat.value} value={cat.value}>
                            {cat.category}
                        </MenuItem>)}
                    </TextField>

                    <TextField select fullWidth label="select Level"
                        style={{ marginBottom: '30px' }}
                        value={level}
                        onChange={(e) => setLevel(e.target.value)}>
                        <MenuItem value="easy">
                            Easy
                        </MenuItem>
                        <MenuItem value="medium">
                            Medium
                        </MenuItem>
                        <MenuItem value="hard">
                            Hard
                        </MenuItem>
                    </TextField>

                    <Button fullWidth variant="contained"
                        style={{ marginBottom: '30px' }}
                        onClick={() => handleEvent()}>
                        Start Quiz
                    </Button>

                </div>
            </div>
        </>
    )
}

export default Home;
