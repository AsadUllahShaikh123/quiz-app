import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter as Router , Route} from 'react-router-dom';
import Home from './components/Home';



let App=()=>{
  return(
     <>
        <Router>
          <Route exact path="/" component={Home}/>
        </Router>
     </>
  )
}


ReactDom.render(<App/>,document.getElementById('root'));




if(module.hot){
  module.hot.accept();
}