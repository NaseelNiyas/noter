import './css/code.css';
import { useState } from 'react';
import Home from './pages/Home'
import Noter from './pages/Noter'
import { Context } from './contexts/Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [value, setValue] = useState('');
  return (
    <Router>
      <Context.Provider value={{ value, setValue }}>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/edit' component={Noter} />
          <Route path='/404'>
            404 😮❗ Not Found!
            <a href="/">GO to home page</a>
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;
