import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';



import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import EndScreen from '../EndScreen/EndScreen'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Switch>
          <Route exact path='/' component={Feeling} />
          <Route path='/Understanding' component={Understanding} />
          <Route path='/Support' component={Support} />
          <Route path='/Comments' component={Comments} />
          <Route path='/Review' component={Review} />
          <Route path='/EndScreen' component={EndScreen} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
