import React, { Component, useEffect, useState } from 'react';
import {
  Box,
  Text,
} from '@chakra-ui/react';
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
      <Box flex = {1} bg = "white">
        {projects.map((item, index) => (
          <ProjectCard 
            title       = {projects[index]['_source']['title']}
            description = {projects[index]['_source']['description']}
            status      = {projects[index]['_source']['status']}
            link        = {projects[index]['_source']['link']}
          />
        ))}
      </Box>
      <Footer/>
    </Box>
  );
}

export default SearchPage;
