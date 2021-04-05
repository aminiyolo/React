import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './routes/about';
import Detail from './routes/Detail';
import Home from './routes/home';

function App() {
  return(
    <HashRouter>
      <Navigation />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/movie-detail" component={Detail}/>
    </HashRouter>
  ) 
}

export default App;