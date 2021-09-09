import './css/code.css';
import { useState } from 'react';
import Noter from './pages/Noter'
import { Context } from './contexts/Context';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [value, setValue] = useState('## Welcome to Noter');
  return (
    <Router>
      <Context.Provider value={{ value, setValue }}>
        <Switch>
          <Route path='/noter' component={Noter} />
        </Switch>
      </Context.Provider>
    </Router>
  );
}

export default App;
