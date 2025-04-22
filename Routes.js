import React from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import Home from './Home';
import About from './About';

const Routes = () => (
  <Router>
    <Stack key="root">
      <Scene key="home" component={Home} title="Home" initial />
      <Scene key="about" component={About} title="About" />
    </Stack>
  </Router>
);

export default Routes;
