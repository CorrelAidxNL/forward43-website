import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import HomePage from './pages/home';
import SearchPage from './pages/search';
import CallToActionWithIllustration from './pages/about';
import SimpleCard from './pages/login';


function App() {
  return (
    <ChakraProvider theme={theme}>

      <Router>
        <Switch>
          <Route path="/search">
            <SearchPage/>
          </Route>

          <Route path="/about">
            <CallToActionWithIllustration/>
          </Route>

          <Route path="/login">
            <SimpleCard/>
          </Route>

          <Route path="/">
            <HomePage/>
          </Route>
        </Switch>
      </Router>

    </ChakraProvider>
  );
}

export default App;
