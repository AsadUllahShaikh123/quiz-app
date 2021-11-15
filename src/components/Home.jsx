import React from 'react'
import { TextField,MenuItem } from '@mui/material';

let data =[
    {
        category:'Science',
        value:1
    },
    {
        category:'Computer',
        value:2
    },
    {
        category:'Socialogy',
        value:3
    }
]

let Home = () => {
    return (
        <>
            <TextField
                select
                label="Select Category"
                variant="outlined"

                sx={{ width: '500px', marginTop: '10px' }}
            >
            {
                data.map((data)=> <MenuItem value={data.value} key={data.value}>{data.category} </MenuItem> )
            }
                
            </TextField>
        </>
    )
}

export default Home;
