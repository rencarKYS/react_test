import React from 'react';
import { Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import './global.css';
import './normalize.css';

function App() {
  return (
    <div>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} />
    </div>    
  );
}

export default App;
