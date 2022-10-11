import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Index from './pages/index';
import ReactGA from 'react-ga';
ReactGA.initialize("UA-188055022-1");


// App Function
function App() {
  // Web Title
  document.title = "Tengku Davyan | Portfolio";

  return (
    <>
      <Router>
        <Switch>
          {/* Make Route That Pass URL Parameter For Language */}
          <Route path="/:language" component={Index} />
          <Route path='/' component={Index} />
        </Switch>
      </Router>
      
    </>
  );
}

export default App;
