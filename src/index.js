import React from 'react';
import ReactDom from 'react-dom';

let App=()=>
{
  return(
    <h1>Hello From App</h1>
  )
}

ReactDom.render(<App/>,document.getElementById('root'));