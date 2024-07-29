import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Search from './pages/Search';
import Playlists from './pages/Playlists';
import Player from './components/Player';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/playlists" component={Playlists} />
      </Switch>
      <Player />
    </div>
  );
};

export default App;
