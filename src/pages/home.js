import React from 'react';
import {
  Box,
  Select,
} from '@chakra-ui/react';

import Header from '../components/header';
import Footer from '../components/footer';
import SearchBar from '../components/searchbar';


const HomePage = (props) => {

  // Sticky footer: https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
  return (
    <Box
      display       = "flex"
      minHeight     = "100vh"
      flexDirection = "column"
    >
      <Header/>
      <Box flex={1}>
        <SearchBar/>
      </Box>
      <Footer/>
    </Box>
  );
}

export default HomePage;
