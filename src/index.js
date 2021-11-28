import React, { useState } from 'react';
import axios from 'axios'
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';


let App = () => {
  let [name, setName] = useState('');

  let [questions,setQuestions] = useState();
  let [score,setScore] = useState(0);

   let fetchQuestions= async (category,level)=>
   {
     
     let {data} = await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${level}&type=multiple`);
     setQuestions(data.results);
     
  }
  return (
    <>
     
        <Router>
          <Route exact path="/"  >
            <Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>
          </Route>

          <Route exact path="/quiz">
            <Quiz name={name} questions={questions} score ={score} setScore={setScore} setQuestions={setQuestions}/>
          </Route>

          <Route exact path="/result">
             <Result name={name} score ={score}/>
          </Route>

        </Router>
    </>
  )
}


ReactDom.render(<App />, document.getElementById('root'));





if (module.hot) {
  module.hot.accept();
}