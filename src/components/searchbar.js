import React from "react";
import { 
  InputGroup, 
  InputLeftElement, 
  Center,
  Input,
  VStack,
  HStack,
  Image,
  Button,
  Select,
} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';
import {
  useHistory
} from "react-router-dom";


const SearchBar = (props) => {

  let history                       = useHistory();
  const [searchterm, setSearchterm] = React.useState("")
  const handleChange                = (event) => setSearchterm(event.target.value)
  const [innovation, setInnovation] = React.useState("")
  const [country, setCountry]       = React.useState("")

  function onSearch(searchTerm) {

    if (searchTerm.length > 0) {
      let query = searchTerm.replace(/\s+/g, '+').toLowerCase();
      let url   = `/search?query=${query}`;

      if (country) {
        url += `&country=${country}`;
      }
      if (innovation) {
        url += `&innovation=${innovation}`;
      }
      history.push(url);
    }
  }

  return (
    <Center 
      h  = "400px" 
      ml = {20} 
      mr = {20}
    >

      <VStack spacing = {5}>
        <Image src = "images/forward43.png"/>
        <InputGroup>
          <InputLeftElement
            pointerEvents = "none"
            children      = {<SearchIcon color="gray.500" />}
          />
          <Input 
            w           = {450} 
            placeholder = "Search for innovations"
            value       = {searchterm}
            onChange    = {handleChange}
          />
        </InputGroup>
        <HStack spacing = {4}>
          <Button 
            fontWeight = "normal" 
            size       = "sm" 
            variant    = "outline"
            onClick    = {() => onSearch(searchterm)}
          >
            Search
          </Button>
        </HStack>

        <HStack spacing = {4}>

          <Select 
            variant     = 'filled'
            placeholder = 'Select Country'
            value       = {country}
            onChange    = {(event) => setCountry(event.target.value)}
          >
            <option value='BE'>Belgium</option>
            <option value='DE'>Germany</option>
            <option value='FI'>Finland</option>
            <option value='IT'>Italy</option>
            <option value='SW'>Switzerland</option>
            <option value='NL'>The Netherlands</option>
            <option value='US'>USA</option>
          </Select>

          <Select
            variant     = 'filled'
            placeholder = 'Innovation Type'
            value       = {innovation}
            onChange    = {(event) => setInnovation(event.target.value)}
          >
            <option value='sustainability'>Sustainability</option>
            <option value='green'>Green</option>
            <option value='arts-and-culture'>Arts & Culture</option>
            <option value='other'>Other</option>
          </Select>

        </HStack>

      </VStack>
    </Center>
  );
};

export default SearchBar;
