import React, { Component, useEffect, useState } from 'react';
import {
  Box,
  Text,
  Heading,
  HStack,
  VStack,
  Grid,
  Link,
} from '@chakra-ui/react';
import { WarningTwoIcon } from '@chakra-ui/icons';
import {
  useLocation
} from "react-router-dom";

import Header from '../components/header';
import Footer from '../components/footer';
import ProjectCard from '../components/project-card';
import { getESResultsForQuery } from '../data/elasticsearch-api/requests/search';


// A custom hook that builds on useLocation to parse the query string for you.
// Taken from: https://reactrouter.com/web/example/query-parameters
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Repeat(props) {
  let items = [];
  for (let i = 0; i < props.numTimes; i++) {
    items.push(props.children(i));
  }
  return <div>{items}</div>;
}


const SearchPage = (props) => {

  let query                     = useQuery();
  const [projects, setProjects] = useState([]);

  let countries = {
    'be': 'Belgium',
    'de': 'Germany',
    'it': 'Italy',
    'sw': 'Switzerland',
    'nl': 'The Netherlands',
    'us': 'USA',
  };

  let country = query.get('country');
  if (!country) {
    country = 'all';
  } else {
    country = countries[country];
  }

  let innovation = query.get('innovation');
  if (!innovation) {
    innovation = 'all';
  }

  useEffect(() => {
    getESResultsForQuery(query.get("query"))
    .then(data => {
      return data;
    })
    .then(data => {
      setProjects(data);
    })
    .catch(err => {
      console.log(err);
      console.log('Error fetching projects')
    });
  }, []);

  // Sticky footer: https://philipwalton.github.io/solved-by-flexbox/demos/sticky-footer/
  return (
    <Box
      display       = "flex"
      minHeight     = "100vh"
      flexDirection = "column"
    >
      <Header/>
      <Grid minH="100vh">
        <HStack w="full" spacing={2} bg="white" align="flex-start">

          <Box flex = {2}>
            <Box w = "full" bg = "white" class = "fixed height element" px = {20} py = {10}>
              <Heading as = "h4" size = "lg" color = "grey">Results for <Link color = '#FF006B'>{query.get("query")}</Link></Heading>
              <Box h = {10} />
              <Box>Sustainability
                <Heading as = "h4" size = "md" color = "grey">Country: <Link color = '#202020'>{country}</Link></Heading>
              </Box>
              <Box py = {5}>
                <Heading as = "h4" size = "md" color = "grey">Innovation Type: <Link color = '#202020'>{innovation}</Link></Heading>
              </Box>
            </Box>
          </Box>

          {
            projects.length > 0 ? <Box flex = {3} bg = "white" align="flex-start">
              {projects.map((item, index) => (
                <ProjectCard 
                  title       = {projects[index]['_source']['title']}
                  description = {projects[index]['_source']['description']}
                  status      = {projects[index]['_source']['status']}
                  link        = {projects[index]['_source']['link']}
                />
              ))}
            </Box> :
            <Box flex = {3} textAlign="center" py = {100} align="center" >
              <WarningTwoIcon boxSize = {'50px'} color = {'orange.300'} />
              <Heading as = "h2" size = "lg" mt = {6} mb = {2}>
                Did not find any projects matching your search
              </Heading>
            </Box>
          }
          <Box flex = {2}></Box>
        </HStack>
      </Grid>
      <Footer/>
    </Box>
  );
}

export default SearchPage;
