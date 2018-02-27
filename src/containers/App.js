import React from 'react';
import {
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = ({data}) => {

  return (
    <div>
      <NavBar />

        <div>
          <Route exact path="/"  render={() => <Home  />} />
          <Route exact path="/actors"  render={(props) => <Actors {...props} movieData={data}/>} />
          <Route exact path="/directors" render={(props) => <Directors {...props} movieData={data}/>}  />
          <Route exact path="/movies" render={(props) => <Movies {...props} movieData={data}/>}  />
        </div>
    </div>
  );
};

export default App
