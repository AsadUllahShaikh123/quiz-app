import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';


let App = () => {
  let [name, setName] = useState('');
  return (
    <>
     
        <Router>
          <Route exact path="/"  >
            <Home name={name} setName={setName} />
          </Route>

          <Route exact path="/quiz">
            <Quiz/>
          </Route>

        </Router>
    </>
  )
}


ReactDom.render(<App />, document.getElementById('root'));




if (module.hot) {
  module.hot.accept();
}